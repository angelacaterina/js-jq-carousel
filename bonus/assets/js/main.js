// Bonus:
// Clicchiamo sui pallini e mostriamo l’immagine corrispondente
// Generiamo i pallini con JS
$(function() {
  $('i.fa-circle').click(function () {
    // pulsanti funzionano
    $( this ).addClass('active');
    $( this ).siblings().removeClass('active');

  });
});
