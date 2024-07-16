
// oculta los textos de las cards al evento click sobre los ico

$(document).ready(function () {

    $('.ico.text-center.mb-3').on('click', function() {
        $(this).closest('.card-body_1').find('.card-text_1').toggle();
    });

    $('.ico.text-center.mt-auto').on('click', function() {
        $(this).closest('.card-body_1').find('.card-text_1').toggle();
    });


});


