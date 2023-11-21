const html = document.querySelector("html");
const ButtonFoco = document.querySelector(".app__card-button--foco");
const ButtonShort = document.querySelector(".app__card-button--curto");
const ButtonLong = document.querySelector(".app__card-button--longo");

ButtonFoco.addEventListener("click", () => {
    html.setAttribute("data-contexto", "foco")
})

ButtonShort.addEventListener("click", () => {
    html.setAttribute("data-contexto", "descanso-curto")
})

ButtonLong.addEventListener("click", () => {
    html.setAttribute("data-contexto", "descanso-longo")
})
