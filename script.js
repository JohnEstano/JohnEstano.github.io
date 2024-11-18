

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));


}



function scrollWhileDragging(ev) {
    const scrollMargin = 200;
    const scrollSpeed = 40;


    if ((window.innerHeight - ev.clientY) < scrollMargin) {
        window.scrollBy(0, scrollSpeed);
    }


    if (ev.clientY < scrollMargin) {
        window.scrollBy(0, -scrollSpeed);
    }


    if ((window.innerWidth - ev.clientX) < scrollMargin) {
        window.scrollBy(scrollSpeed, 0);
    }


    if (ev.clientX < scrollMargin) {
        window.scrollBy(-scrollSpeed, 0);
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    const pawn = document.getElementById('pawn');
    const queen = document.getElementById('queen');
    const toggleButton = document.getElementById('darkModeToggle');
    const developerText = document.getElementById('developerText'); 

    if (document.body.classList.contains('dark-mode')) {
        pawn.style.display = 'none';
        queen.style.display = 'block';

        toggleButton.checked = true;
        localStorage.setItem('darkMode', 'enabled');

        developerText.textContent = 'Inspiring Developers'; 
    } else {
        pawn.style.display = 'block';
        queen.style.display = 'none';

        toggleButton.checked = false;
        localStorage.setItem('darkMode', 'disabled');

        developerText.textContent = 'Aspiring Developer.'; 
    }
}

window.onload = function () {
    const toggleButton = document.getElementById('darkModeToggle');
    const developerText = document.getElementById('developerText'); 

    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        document.getElementById('pawn').style.display = 'none';
        document.getElementById('queen').style.display = 'block';
        toggleButton.checked = true;  
        developerText.textContent = 'Inspiring Developers'; 
    } else {
        toggleButton.checked = false;
        developerText.textContent = 'Aspiring Developer.'; 
    }
};
