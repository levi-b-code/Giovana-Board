const gi = document.querySelector('.gi');
const shark = document.querySelector('.shark');

const jump = () => {
    gi.classList.add('jump');

    setTimeout(() => {

        gi.classList.remove('jump');
    }, 800);
}

const loop = setInterval(() => {
    const pipePosition = shark.offsetLeft;
    const giPosition = +window.getComputedStyle(gi).bottom.replace('px', "");

    console.log(giPosition);
    /*
    if (pipePosition <= 100 && pipePosition > 0 && giPosition< 60) {

        shark.style.animation = 'none';
        shark.style.left = `${pipePosition}px`;

        gi.style.animation = 'none';
        gi.style.bottom = `${giPosition}px`;

        gi.src = 'img/Giovana_imagens/game-over.png';
        gi.style.width = '250px';
        gi.style.marginLeft = '50px';

        clearInterval(loop);
    } */

}, 10)


document.addEventListener('keydown', jump);
