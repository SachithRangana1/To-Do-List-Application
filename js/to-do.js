const textElm = document.querySelector('#text');
const addTaskElm = document.querySelector('#addtask');
const modeElm = document.querySelector('#mode');
const listItemElm = document.querySelector('#entered-itemslst');
const noItemElm = document.querySelector('#noitemlblElm');

modeElm.addEventListener('change', ()=>{
    if (modeElm.checked){
        document.querySelector('html').setAttribute('data-bs-theme', 'dark');
    }else{
        document.querySelector('html').removeAttribute('data-bs-theme');
    }
});

addTaskElm.addEventListener('click', (e)=>{
    e.preventDefault();
   const task = textElm.value.trim();

   if (!task){
       textElm.select();
       textElm.focus();
       return;
   }
   if (listItemElm.contains(noItemElm)){
       noItemElm.remove();
   }

   const taskElm = document.createElement('div');
   const lblElm = document.createElement('label');
   const inputElm = document.createElement('input');
   const iconElm = document.createElement('i');
   const tskName = document.createTextNode(task);

   taskElm.setAttribute('class', "tsk d-flex justify-content-between align-items-center p-2 rounded-3 animate__animated animate__zoomIn");
   taskElm.setAttribute('tabindex', "0");
   inputElm.setAttribute('type', "checkbox");
   inputElm.setAttribute('tabindex', "-1");
   inputElm.setAttribute('class', "me-2");
   iconElm.setAttribute('class', "bi bi-trash-fill me-2");
   lblElm.setAttribute('class', "d-flex align-items-center");

   taskElm.append(lblElm);
   taskElm.append(iconElm);
   lblElm.append(inputElm);
   lblElm.append(tskName);

   listItemElm.append(taskElm);
   textElm.value = " ";
   textElm.focus();

});

listItemElm.addEventListener('click', (e)=>{
    if (e.target.getAttribute("class") === "bi bi-trash-fill me-2"){
        e.target.parentElement.remove();
        textElm.focus();
    }
    if (!listItemElm.children.length){
        listItemElm.append(noItemElm);
    }

});






