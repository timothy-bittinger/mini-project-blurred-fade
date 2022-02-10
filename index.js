/*Bringing in query selectors and assigning them to to variables*/
const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

/*A function that counts upwards from 0 to 100.*/
let load= 0;
let int = setInterval(blurring, 30)

function blurring() {
    load++

    if(load > 99) {
        clearInterval(int);
    }
/*Changes the loading percentage from 100 to 0 and the pixel blur of the background from 30px to 0.*/
    loadText.innerHTML = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px`;
}

/*A function that scales inputs into outputs*/
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num -in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}