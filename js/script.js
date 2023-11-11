const player = document.querySelector('.player');
const rock = document.querySelector('.rock');


const jump = ( ) => {
    player.classList.add ('jump');

    setTimeout(() => {

        player.classList.remove ('jump');

    }, 500);
}

const loop = setInterval(() => {

    const rockPosition = rock.offsetLeft;
    const playerPosition = +window.getComputedStyle(player).bottom.replace('px','')

    if (rockPosition <= 60 && rockPosition > 0 && playerPosition < 80) {

        rock.style.animation = 'none';
        rock.style.left = `${rockPosition}px`;

        player.style.animation = 'none';
        player.style.bottom = `${playerPosition}px`;

        player.src = './Imagens/game-over.gif';
        player.style.width = '110px';
        player.style.marginLeft = '10px';

        clearInterval(loop);
    }

}, 10);

document.addEventListener ('keydown', jump);
