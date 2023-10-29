import state from './state.js'
import * as el from './elements.js'
import { reset } from './actions.js'
import { kitchenTimer } from './sounds.js'

export function countDown() {

    clearTimeout(state.countdownId)

    if (!state.isRunning) {
        return
    }

    let minutes = Number(el.minutes.textContent)
    let seconds = Number(el.seconds.textContent)

    seconds--

    if (seconds < 0) {
        seconds = 59
        minutes--
    }

    if (minutes < 0) {
        reset()
        kitchenTimer.play()
        return
        // se o minutes for dar menor que zero, chama a reset() (que termina a aplicação) e retorna a função
    }

    updateDisplay(minutes, seconds)
    state.countdownId = setTimeout(() => countDown(), 1000) // significa que ele vai executar a função countDown e depois de 1000ms(1segundo) ele vai executar de novo
}

export function updateDisplay(minutes, seconds) {
    minutes = minutes ?? state.minutes; // ele vai igualar minutes a minutes. se o valor que for passado pros minutos for nulo (a pessoa clicar e só der enter), ele vai puxar a configuração inicial do state.minutes
    seconds = seconds ?? state.seconds;

    el.minutes.textContent = String(minutes).padStart(2, "0"); //transforma o minutes em uma string e usa o padStart para semepre ter "2" caracteres, e quando não tiver nada ou estiver faltando um caracter, adiciona "0"
    el.seconds.textContent = String(seconds).padStart(2, "0");
}