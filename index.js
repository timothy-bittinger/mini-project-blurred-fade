/*Query Selectors assigned to variables*/
const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
const circle = document.querySelector('.loading-circle')

let load= 0;

let int = setInterval(countUp, 30)

/*Function to count from 0 to 100 and the elements it affects*/
function countUp() {
    load++

    if(load > 99) {
        clearInterval(int);
    }
    /*Changes percentage of loading number and reduces opacity*/
    loadText.innerHTML = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);

    /*Reduces background blur*/
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px`;

    /*Roates the loading circle and reduces it opacity*/
    circle.style.transform = `rotate(${scale(load, 0, 100, 2160, 0)}deg)`;
    circle.style.opacity = scale(load, 0, 100, 1, 0);
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num -in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}