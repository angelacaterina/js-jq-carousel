// Descrizione:
// Creare uno slider di immagini
// Potete usare le immagini che desiderate.
// Per facilitarvi la vita usate immagini delle stesse dimensioni :)

// Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
// Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
// Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider

$(function() {
  //mando in avanti le immagini
  $('.fa-angle-right').click(function () {
    nextImages();
  });

  //mando indietro le immagini
  $('.fa-angle-left').click(function () {
    prevImages();
  });
});

function nextImages(){
  var imageActive = $('img.active');
  var imageFirst = $('img.first');
  var iconActive = $('i.fa-circle.active');
  var iconFirst = $('i.fa-circle.first');

  imageActive.removeClass('active');
  iconActive.removeClass('active');

  if (imageActive.hasClass('last')) {
    imageFirst.addClass('active');
    iconFirst.addClass('active');
  } else {
    imageActive.next('img').addClass('active');
    iconActive.next('i').addClass('active');
  }
}

function prevImages(){
  var imageActive = $('img.active');
  var imageLast = $('img.last');
  var iconActive = $('i.fa-circle.active');
  var iconLast = $('i.fa-circle.last');

  imageActive.removeClass('active');
  iconActive.removeClass('active');

  if (imageActive.hasClass('first')) {
    imageLast.addClass('active');
    iconLast.addClass('active');
  } else {
    imageActive.prev('img').addClass('active');
    iconActive.prev('i').addClass('active');
  }
}

// In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera
