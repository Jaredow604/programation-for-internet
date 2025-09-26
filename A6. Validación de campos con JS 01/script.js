function validarFormulario() {
    const correo = document.getElementById('correo').value;
    const pass = document.getElementById('pass').value;
    const rol = document.getElementById('rol').value;
    if (correo === '' || pass === '' || rol === '0') {
        alert('Faltan campos por llenar');
    } else {
        alert('Campos llenos');
    }
}
