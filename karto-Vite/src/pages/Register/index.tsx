import { register as registerController } from '@auth/auth.controller';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@shared/Button';
import { Input } from '@shared/Input';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(3, 'Nome muito curto'),
  slug: z.string().min(3, 'Slug muito curto'),
  primaryColor: z.string().min(6, 'Insira uma cor válida'),
  email: z.string().email('Email inválido'),
  password: z.string().min(8, 'Senha muito curta'),
  confirmPassword: z.string().min(8, 'Senha muito curta'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'A senha não é igual a sua confirmação',
  path: ['confirmPassword']
});

export type RegisterProps = z.infer<typeof schema>;

const Register: React.FC = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterProps>({
    mode: 'onBlur',
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  const onSubmit = (data: RegisterProps) => {
    registerController(data);
  };

  return (
    <main className='w-screen h-screen flex items-center justify-center mt-12 md:mt-0 bg-light'>
      <section className='w-80 flex flex-col items-center justify-center bg-primary p-3 md:p-0 md:w-[500px] md:h-[800px]' >
        <h1 className='text-xl font-bold text-light'>Cadastro</h1>
        <form className='w-[80%] flex flex-col text-light' onSubmit={handleSubmit(onSubmit)}>
          <label>
            <h3>Nome</h3>
            <Input {...register('name')} placeholder='Nome' />
            <div className='h-6'>
              {errors.name && <span className="text-red-500">{errors.name.message?.toString()}</span>}
            </div>
          </label>
          <label>
            <h3>Slug</h3>
            <Input {...register('slug')} placeholder='Slug' />
            <div className='h-6'>
              {errors.slug && <span className="text-red-500">{errors.slug.message?.toString()}</span>}
            </div>
          </label>
          <label>
            <h3>Cor Principal</h3>
            <Input {...register('primaryColor')} placeholder='Cor Principal' />
            <div className='h-6'>
              {errors.primaryColor && <span className="text-red-500">{errors.primaryColor.message?.toString()}</span>}
            </div>
          </label>
          <label>
            <h3>Email</h3>
            <Input {...register('email')} placeholder='email' />
            <div className='h-6'>
              {errors.email && <span className="text-red-500">{errors.email.message?.toString()}</span>}
            </div>
          </label>
          <label>
            <h3>Senha</h3>
            <Input {...register('password')} placeholder='Senha' />
            <div className='h-6'>
              {errors.password && <span className="text-red-500">{errors.password.message?.toString()}</span>}
            </div>
          </label>
          <label>
            <h3>Confirme sua senha</h3>
            <Input {...register('confirmPassword')} placeholder='Confirme sua senha' />
            <div className='h-6'>
              {errors.confirmPassword && <span className="text-red-500">{errors.confirmPassword.message?.toString()}</span>}
            </div>
          </label>
          <div className='mt-4 w-full flex items-center justify-center'>
            <Button>Cadastrar</Button>
          </div>
        </form>
        <div className='text-white mt-4 text-center'>
          <p>Já possui uma conta? <Link to='/entrar' className='text-red-500'>Clique aqui!</Link></p>
          <p>Esqueceu sua senha? <Link to='/esqueceuSuaSenha' className='text-red-500'>Clique aqui!</Link></p>
        </div>
      </section>
    </main>
  );
};

export default Register;