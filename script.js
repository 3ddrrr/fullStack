function agregarConsejo() {
    const lista = document.getElementById("listaConsejos");
    const nuevo = document.createElement("li");
    nuevo.textContent = "Usa IA para aprender, no para hacer trampa.";
    lista.appendChild(nuevo);
}
function mostrarCaso(detalleId) {
    const detalles = document.querySelectorAll(".detalle");
    detalles.forEach(d => d.style.display = "none");
    document.getElementById(detalleId).style.display = "block";
}


function guardarReflexion(event) {
    event.preventDefault();
    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !correo || !mensaje) {
        alert("Todos los campos son obligatorios.");
        return;
    }
    let reflexiones = JSON.parse(localStorage.getItem("reflexiones")) || [];
    reflexiones.push({ nombre, correo, mensaje });
    localStorage.setItem("reflexiones", JSON.stringify(reflexiones));
    mostrarReflexiones();
    document.getElementById("formReflexion").reset();
    alert("Reflexión guardada con éxito.");
}





function mostrarReflexiones() {
    let lista = document.getElementById("listaReflexiones");
    if (!lista) return;

    lista.innerHTML = "";
    let reflexiones = JSON.parse(localStorage.getItem("reflexiones")) || [];
    reflexiones.forEach(r => {
        let div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `<strong>${r.nombre}</strong> (${r.correo}): <p>${r.mensaje}</p>`;
        lista.appendChild(div);
    });
}





function borrarReflexiones() {
    localStorage.removeItem("reflexiones");
    mostrarReflexiones();
}
