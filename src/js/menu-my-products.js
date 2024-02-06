const lessonsListButtonMenu = document.querySelector('.header-menu-for-lessons');
const lessonsButtonMenu = document.querySelector('.lessons-button-menu');
const teachersListButtonMenu = document.querySelector('.header-menu-for-teachers');
const teachersButtonMenu = document.querySelector('.teachers-button-menu');


lessonsButtonMenu.addEventListener('click', () => addListenerButton(lessonsButtonMenu, lessonsListButtonMenu));
teachersButtonMenu.addEventListener('click', () => addListenerButton(teachersButtonMenu, teachersListButtonMenu));


function addListenerButton(button, buttonList) {
    buttonList.classList.add('button-menu-focus');
    document.addEventListener('click', (event) => workButtonMenu(event, button, buttonList));
};

function workButtonMenu(event, button, listButtonMenu) {
    if(!button.contains(event.target)&&!listButtonMenu.contains(event.target)){
        listButtonMenu.classList.remove('button-menu-focus')
    } else if(listButtonMenu.contains(event.target)){
        setTimeout(() => {
            listButtonMenu.classList.remove('button-menu-focus')
        }, 100)
    }
};


