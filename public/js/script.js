let theme = localStorage.getItem('theme');

if (theme == null) {
    setTheme('black');
} else {
    setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');

for (let i = 0; themeDots.length > i; ++i) {
    themeDots[i].addEventListener('click', function() {
        let mode = this.dataset.mode;
        setTheme(mode);
    });
}

function setTheme(mode) {
    if (mode === 'black') {
        document.getElementById('theme-style').href = 'css/default.css';
    }

    if (mode === 'blue') {
        document.getElementById('theme-style').href = 'css/blue.css';
    }

    if (mode === 'green') {
        document.getElementById('theme-style').href = 'css/green.css';
    }

    if (mode === 'light') {
        document.getElementById('theme-style').href = 'css/light.css';
    }

    localStorage.setItem('theme', mode);
}

let i = 0;
let textH1 = document.querySelector('h1').innerText;
let speed = 70;
document.querySelector('h1').innerText = '';

function typeH1() {
    if (i < textH1.length) {
        document.querySelector('h1').innerHTML += textH1.charAt(i);
        i++;
        setTimeout(typeH1, speed);
    }
}

typeH1();
