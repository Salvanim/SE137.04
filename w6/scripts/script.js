
var trayButton = document.querySelector('aside button:first-child')

trayButton.addEventListener('click', toggle)

function toggle(e)
{
    var tray = document.querySelector('.tray')
    tray.classList.toggle('hide')
}

var buttons = Array.from(document.querySelectorAll('nav button'))

for(let i = 0; i<buttons.length; i++){
    buttons[i].addEventListener('click', buttonClick)
}

function buttonClick(e)
{
    for(let i = 0; i<buttons.length; i++){
        buttons[i].style.backgroundColor='#161616';
        buttons[i].style.color='#ffffff'
    }
    e.target.style.backgroundColor='#c2c2c2';
    e.target.style.color='#000000'

    var breadCrumbs = document.querySelector('div #breadcrumbs');
    breadCrumbs.innerHTML = `<a href="#">${e.target.innerText}</a>`;
}