
let reclamos = [];

let altaReclamos = () => {
    event.preventDefault();
    reclamos.push(
        {
            reclamo: document.getElementById('reclamo').value,
            descripcionReclamo: document.getElementById('descripcionReclamo').value,
            prioridad: document.getElementById('prioridad').value,
            estado: document.getElementById('estado').value,
            nombreCliente: document.getElementById('nombre').value,
            apellidoCliente: document.getElementById('apellido').value,
            emailCliente: document.getElementById('emailText').value,
        }
    );  
    localStorage.setItem("reclamos", JSON.stringify(reclamos));
}

