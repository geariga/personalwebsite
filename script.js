const fadeElementIn = () => {
    const currentElement = document.getElementById('fadeIn');

    if (currentElement) {
        currentElement.style.opacity = currentElement.style.opacity || '0';

        let intervalID = setInterval(() => {
            let newOpacity = parseFloat(currentElement.style.opacity) + .05;
            currentElement.style.opacity = newOpacity;
    
            if (currentElement.style.opacity == 1) {
                clearInterval(intervalID);
            }
        }, 25);
    }
};

window.onload = () => {
    fadeElementIn();
};