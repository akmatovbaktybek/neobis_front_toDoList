const tasks = [
   {
      id: '1138465078061',
      completed: false,
      text: 'Посмотреть новый урок по JavaScript',
   },
   {
      id: '1138465078571',
      completed: false,
      text: 'Доделать todo',
   },
];

const taskList = document.querySelector('.todo__task-list');
const todoForm = document.querySelector('.todo__form');
const todoInput = document.querySelector('.todo__input');
const todoEditButton = document.querySelector('.edit-button');
const todoTaskInputText = document.querySelector('.todo__description-text');

const createTaskItem = () => {
   let newTaskItem = document.createElement('li');
   newTaskItem.className = 'todo__list-item';

   let taskItemMainContent = document.createElement('div');
   taskItemMainContent.className = 'todo__item-content';

   let todoTaskDescription = document.createElement('div');
   todoTaskDescription.className = 'todo__task-description';

   let todoTaskCategoryRadio = document.createElement('div');
   todoTaskCategoryRadio.className = 'todo__description-category';

   let todoTaskInputText = document.createElement('input');
   todoTaskInputText.className = 'todo__description-text';
   todoTaskInputText.type = 'text';
   todoTaskInputText.disabled = true;
   todoTaskInputText.value = todoInput.value;
   // todoTaskInputText.id = 'description-input';

   let todoTaskButtonsContainer = document.createElement('div');
   todoTaskButtonsContainer.className = 'todo__task-buttons';

   let todoTaskEditButton = document.createElement('button');
   todoTaskEditButton.className = 'todo__task-button edit-button'
   todoTaskEditButton.textContent = 'Edit';

   let todoTaskDeleteButton = document.createElement('button');
   todoTaskDeleteButton.className = 'todo__task-button delete-button'
   todoTaskDeleteButton.textContent = 'Delete';

   taskItemMainContent.append(todoTaskDescription, todoTaskButtonsContainer);
   todoTaskDescription.append(todoTaskCategoryRadio, todoTaskInputText);
   todoTaskButtonsContainer.append(todoTaskEditButton, todoTaskDeleteButton);

   newTaskItem.append(taskItemMainContent);
   todoInput.value = '';

   taskList.append(newTaskItem);

   return newTaskItem;
};

todoForm.onsubmit = function (event) {
   event.preventDefault();
   createTaskItem();
};

todoEditButton.onclick = function (event) {
   event.preventDefault();
   todoTaskInputText.disabled = false;
}