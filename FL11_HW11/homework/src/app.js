let rootNode = document.getElementById('root').addEventListener('click', checkItem);
let addBtn = document.querySelector('.btn-add').addEventListener('click', addEl);
let inputTask = document.getElementById('new-task');
let taskList = document.getElementById('list-task');
let message = document.querySelector('.mess');
function createNewEl(task) {
	let checkbox = document.createElement('button');
	let list = document.createElement('li');
	let input = document.createElement('input');
	let editBtn = document.createElement('button');
	let deleteBtn = document.createElement('button');
	let label = document.createElement('label');
	list.className = 'list-item';
	list.setAttribute('draggable', 'true');
	checkbox.className = 'btn checkbox';
	checkbox.innerHTML = '<i class="material-icons">check_box_outline_blank</i>';
	label.innerHTML = task;
	input.type = 'text';
	editBtn.className = 'btn edit';
	editBtn.innerHTML = '<i class="material-icons">edit</i>';
	deleteBtn.className = 'btn delete';
	deleteBtn.innerHTML = '<i class="material-icons">delete</i>';
	list.appendChild(checkbox);
	list.appendChild(label);
	list.appendChild(input);
	list.appendChild(editBtn);
	list.appendChild(deleteBtn);
	list.addEventListener('dragstart', dragStart);
	list.addEventListener('dragover', dragOver);
	list.addEventListener('drop', dragDrop);
	list.addEventListener('dragend', dragEnd);
	return list;
}
function addEl() {
	if(inputTask.value) {
		let list = createNewEl(inputTask.value);
		taskList.appendChild(list);
		bindTaskEvents(list);
		inputTask.value = '';
	}
}
function editEl() {
	let list = this.parentNode;
	let editBtn = this;
	let label = list.querySelector('label');
	let input = list.querySelector('input[type="text"]');
	let containsClass = list.classList.contains('edit-mode');
	if (containsClass) {
	label.innerHTML = input.value;
	editBtn.className = 'btn edit';
	editBtn.innerHTML = '<i class="material-icons">edit</i>';
	} else {
		input.value = label.innerText;
		editBtn.className = 'btn save';
		editBtn.innerHTML = '<i class="material-icons">save</i>';
	}
	list.classList.toggle('edit-mode');
}
function endEl() {
	let list = this.parentNode;
	let checkbox = list.querySelector('button.checkbox');
	let editButton = list.querySelector('button.edit');
	let label = list.querySelector('label');
	checkbox.className = 'btn checkbox';
	checkbox.innerHTML = '<i class="material-icons">check_box</i>';
	label.className = 'strikethrough'; 
	editButton.disabled = true;
} 
function deleteEl() {
	let list = this.parentNode;
	let ul = list.parentNode;
	ul.removeChild(list);
}
function checkItem() {
	let list = taskList.childNodes;
	const maxNumOfListItems = 10;
	if (list.length === maxNumOfListItems) {
		inputTask.disabled = true;
		message.innerHTML = 'The list is full';
	} else {
		inputTask.disabled = false;
		message.innerHTML = '';
	}
}
function bindTaskEvents(list) {
	let checkbox = list.querySelector('button.checkbox');
	let editBtn = list.querySelector('button.edit');
	let deleteBtn = list.querySelector('button.delete');
	checkbox.onclick = endEl;
	editBtn.onclick = editEl;
	deleteBtn.onclick = deleteEl;
}
let dragSrcEl = null;
function dragStart(e) {
	e.dataTransfer.effectAllowed = 'move';
	e.dataTransfer.setData('text/html', this.innerHTML);
	dragSrcEl = this;
	this.style.opacity = '0.4'; 
}
function dragOver(e) {
	if (e.preventDefault) {
		e.preventDefault(); 
	}
	e.dataTransfer.dropEffect = 'move';
	return false;
}
function dragDrop(e) {
	if (e.stopPropagation) {
		e.stopPropagation();
	}
	if (dragSrcEl !== this) {
		dragSrcEl.innerHTML = this.innerHTML;
		this.innerHTML = e.dataTransfer.getData('text/html');
	}
	return false;
}
function dragEnd() {
	this.style.opacity = '1';
}