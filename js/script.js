document.addEventListener("DOMContentLoaded", function () {

  // Función para validar email
  function esEmailValido(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // Función para validar que hay al menos una palabra (mínimo 3 caracteres sin espacios)
  function tieneAlMenosUnaPalabra(texto) {
    const palabras = texto.trim().split(/\s+/);
    return palabras.length > 0 && palabras[0].length >= 1;
  }

  // Validación del formulario de reseñas
  const formResena = document.getElementById("review-form");
  if (formResena) {
    // IDs in Contact information.html
    const nombreInput = document.getElementById("name-entity");
    const emailInput = document.getElementById("email-entity");
    const reviewInput = document.getElementById("review-entity");
    const submitBtn = document.getElementById("btn-send-review");

    const setValidationError = (input, hasError) => {
      input.classList.toggle("has-error", hasError);
    };

    const validateFormResena = () => {
      const esNombreOk = nombreInput && tieneAlMenosUnaPalabra(nombreInput.value);
      const esEmailOk = emailInput && esEmailValido(emailInput.value);
      const esReviewOk = reviewInput && tieneAlMenosUnaPalabra(reviewInput.value);

      // Solo mostrar error visual en el email
      setValidationError(emailInput, !esEmailOk);

      // Habilitar/deshabilitar el botón de envío (si existe)
      if (submitBtn) submitBtn.disabled = !(esNombreOk && esEmailOk && esReviewOk);
    };

    formResena.addEventListener('input', validateFormResena);

    formResena.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!submitBtn.disabled) {
        alert("Reseña enviada correctamente (simulación).");
        formResena.reset();
        validateFormResena(); // Re-validar para deshabilitar el botón
      }
    });

    // Validación inicial
    validateFormResena();
  }
});
    
