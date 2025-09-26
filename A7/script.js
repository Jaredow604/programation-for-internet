function recibe() {
  const miFormulario = document.forms['forma01'];
  const campos = miFormulario.elements;
  let datosCompletos = 'Resumen de tu información:\n\n';
  for (let i = 0; i < campos.length; i++) {
    const campo = campos[i];
    if (
      (campo.type === 'text' ||
        campo.type === 'email' ||
        campo.type === 'password' ||
        campo.tagName.toLowerCase() === 'textarea' ||
        campo.type === 'number' ||
        campo.type === 'date') &&
      campo.value.trim() === ''
    ) {
      alert('El campo "' + campo.name + '" no puede estar vacío.');
      return; 
    }
  }
  for (let i = 0; i < campos.length; i++) {
    const campo = campos[i];
    let nombreCampo = campo.name;
    let valorCampo = '';
    if (campo.type === 'submit' || !campo.name) {
      continue;
    }
    if (campo.type === 'radio') {
      if (campo.checked) {
        valorCampo = campo.value === 'M' ? 'Masculino' : 'Femenino';
        datosCompletos += nombreCampo + ': ' + valorCampo + '\n';
      }
      continue;
    }
    if (campo.type === 'checkbox') {
      valorCampo = campo.checked ? 'Sí' : 'No';
      datosCompletos += nombreCampo + ': ' + valorCampo + '\n';
      continue;
    }
    if (campo.type === 'select-one') {
      const indiceSeleccionado = campo.selectedIndex;
      valorCampo = campo.options[indiceSeleccionado].text;
      datosCompletos += nombreCampo + ': ' + valorCampo + '\n';
      continue;
    }
    valorCampo = campo.value;
    datosCompletos += nombreCampo + ': ' + valorCampo + '\n';
  }
  alert(datosCompletos);
}
