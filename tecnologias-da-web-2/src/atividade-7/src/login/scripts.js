function fieldValidade() {
    const user = document.getElementById('user');
    const password = document.getElementById('password');

    let isValidate = true

    if (user.value === '') {
        document.getElementById('userError').textContent = 'O campo usuário é obrigatorio!';
        document.getElementById('user').classList.add('border-red-500');
        isValidate = false;
    } else {
        document.getElementById('userError').textContent = ''
        document.getElementById('user').classList.remove('border-red-500');
    }

    if (password.value === '') {
        document.getElementById('passwordError').textContent = 'O campo usuário é obrigatorio!';
        document.getElementById('password').classList.add('border-red-500');
        isValidate = false;
    } else {
        document.getElementById('passwordError').textContent = '';
        document.getElementById('password').classList.remove('border-red-500');
    }

    if (isValidate) {
        window.location.href = '../dashboard/dashboard.html'
    }
}