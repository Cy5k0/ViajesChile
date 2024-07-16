
// oculta los textos de las cards al evento click sobre los ico

$(document).ready(function () {

    $('.ico.text-center.mb-3').on('click', function() {
        $(this).closest('.card-body_1').find('.card-text_1').toggle();
    });

    $('.ico.text-center.mt-auto').on('click', function() {
        $(this).closest('.card-body_1').find('.card-text_1').toggle();
    });


});

//tooltips (en menu navbar)

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


// disable enable boton enviar

const form = document.getElementById('contactForm');
    const submitButton = form.querySelector('button[type="submit"]');

    form.addEventListener('input', () => {
        const nombre = document.getElementById('nombre').value;
        const asunto = document.getElementById('asunto').value;
        const mensaje = document.getElementById('mensaje').value;

        if (nombre && asunto && mensaje) {
            submitButton.removeAttribute('disabled');
        } else {
            submitButton.setAttribute('disabled', 'true');
        }
    });


// Muestra mensaje enviado
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        alert('Mensaje enviado exitosamente');
        
    });