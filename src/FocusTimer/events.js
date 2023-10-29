import state from "./state.js"
import { controls } from "./elements.js"
import * as actions from "./actions.js"
import * as el from "./elements.js"
import { updateDisplay } from "./timer.js"

export function registerControls() {
    controls.addEventListener('click', (event) => {
        const action = event.target.dataset.action
        if (typeof actions[action]() != "function") {
            return
        }

        actions[action]();
    })
}

export function setMinutes() {
    el.minutes.addEventListener("focus", () => {
        el.minutes.textContent = ""
    })

    el.minutes.onkeypress = (event) => /\d/.test(event.key) // EXPRESSÃO REGULAR: ele vai inspecionar elemento por elemento para ver se o conteúdo digitado é um número (pra isso serve o \d(ele verifica se é um número)). se for um número, ele dá como true e aceita. se não for um número, ele dá como false e não aceita

    // blur = quando sair do focus
    el.minutes.addEventListener('blur', (event) => {
        let time = event.currentTarget.textContent // definiu a let time para o conteúdo do texto do alvo atual (numeros)
        time = time > 60 ? 60 : time // são 3 partes. time > 60 ? (como se fosse uma pergunta: time é maior que 60?). se for, time = 60 (? 60), tudo ok. se não(:), continue como o time que a pessoa definiu mesmo (: time)

        state.minutes = time
        state.seconds = 0

        updateDisplay()
        el.minutes.removeAttribute('contenteditable')
    })
}