
   //w3school drag and drop API ctto not mine:
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

//dragwhilescrolling ctto not mine

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
    
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
}


window.onload = function() {
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }
};
