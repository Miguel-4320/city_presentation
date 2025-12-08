document.addEventListener("DOMContentLoaded", function () {

  // ========== Go to Top Button ==========
  var mybutton = document.getElementById("myBtn");

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Assign the function to the button
  if (mybutton) {
    mybutton.onclick = topFunction;
  }

  // ========== Form Review Validation ==========
  
  // Function to validate email
  function esEmailValido(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  // Function to validate that there is at least one word (minimum 3 characters without spaces)
  function tieneAlMenosUnaPalabra(texto) {
    const palabras = texto.trim().split(/\s+/);
    return palabras.length > 0 && palabras[0].length >= 1;
  }

  // Review form validation
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

      // Only show visual error on email
      setValidationError(emailInput, !esEmailOk);

      // Enable/disable the submit button (if it exists)
      if (submitBtn) submitBtn.disabled = !(esNombreOk && esEmailOk && esReviewOk);
    };

    formResena.addEventListener('input', validateFormResena);

    formResena.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!submitBtn.disabled) {
        alert("Review sent successfully (simulation).");
        formResena.reset();
        validateFormResena(); // Re-validate to disable the button
      }
    });

    // Initial validation
    validateFormResena();
  }
});
    
