const array = [];
let index = 0;
let insert = false;

function habilityButtons() {
	document.getElementById('btn-insert').disabled = false;
	document.getElementById('btn-edit').disabled = false;
	document.getElementById('btn-delete').disabled = false;
}

function desabilityInput() {
	document.getElementById('name').disabled = true;
	document.getElementById('surname').disabled = true;
	document.getElementById('adress').disabled = true;
	document.getElementById('phone').disabled = true;
}

function habilityInput() {
	document.getElementById('name').disabled = false;
	document.getElementById('surname').disabled = false;
	document.getElementById('adress').disabled = false;
	document.getElementById('phone').disabled = false;
}

function insertButton(){
	insert = true;
	habilityInput()
}

function save(){
	if(insert){
		insertInArray()
		insert = false;
	}else{
		updateInArray()
	}
	cancel()
}

function insertInArray() {
	let peson = {
		name: document.getElementById('name').value,
		surname: document.getElementById('surname').value,
		adress: document.getElementById('adress').value,
		phone: document.getElementById('phone').value
	}
	array.push(peson)
	console.log(array)
	cancel()
}

function removeInArray() {
	array.splice(index, 1);
	console.log(array)
}

function updateInArray() {
	array[index] = {
		name: document.getElementById('name').value,
		surname: document.getElementById('surname').value,
		adress: document.getElementById('adress').value,
		phone: document.getElementById('phone').value
	}
	console.log(array)
	desabilityInput()
}

function cancel(){
	desabilityInput()
	document.getElementById('name').value = '';
	document.getElementById('surname').value = '';
	document.getElementById('adress').value = '';
	document.getElementById('phone').value = '';
}

function edit(){
	habilityInput()
}

function firtsRegisterInArray() {
	habilityButtons()
	desabilityInput()
	if(array.length == 0){
			return
	}
	const user = array[0];
	document.getElementById('name').value = user.name;
	document.getElementById('surname').value = user.surname;
	document.getElementById('adress').value = user.adress;
	document.getElementById('phone').value = user.phone;
	index = 0;
}

function previousRegisterInArray() {
	if(array.length == 0){
		console.log('tamo aqui')
		return
	}
	habilityButtons()
	desabilityInput()
	const user = array[--index];
	document.getElementById('name').value = user.name;
	document.getElementById('surname').value = user.surname;
	document.getElementById('adress').value = user.adress;
	document.getElementById('phone').value = user.phone;
}

function nextRegisterInArray() {
	habilityButtons()
	desabilityInput()
	if(index >= array.length - 1){
		
		return
	}
	const user = array[++index];
	document.getElementById('name').value = user.name;
	document.getElementById('surname').value = user.surname;
	document.getElementById('adress').value = user.adress;
	document.getElementById('phone').value = user.phone;
	console.log(array)
	console.log(index)
}

function finalRegisterInArray() {
	habilityButtons()
	desabilityInput()
	if(index >= array.length - 1){
		return
	}
	const user = array[array.length - 1];
	document.getElementById('name').value = user.name;
	document.getElementById('surname').value = user.surname;
	document.getElementById('adress').value = user.adress;
	document.getElementById('phone').value = user.phone;
	index = array.length - 1;
}
