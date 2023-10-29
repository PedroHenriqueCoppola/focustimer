let darkMode = true;
const buttonToggle = document.getElementById("toggle-mode");

buttonToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('light'); // se não tiver o light, vai adicionar

    // ajudando na acessibilidade
    const mode = darkMode ? "light" : "dark"; // se o darkMode é verdadeiro, então vai pegar o light. se não, vai ser dark

    event.currentTarget.querySelector(
        "span"
    ).textContent = `${mode} mode ativado!`;

    darkMode = !darkMode; //signica que o darkmode vai ser alterado para o contrário do darkmode atual
});
