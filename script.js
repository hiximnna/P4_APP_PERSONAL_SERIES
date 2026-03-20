function cambiarPantalla(id) {
    let actual = document.querySelector(".screen.active");
    let siguiente = document.getElementById(id);

    actual.classList.remove("active");
    actual.classList.add("exit");

    setTimeout(() => {
        actual.classList.remove("exit");
        siguiente.classList.add("active");
    }, 300);
}
