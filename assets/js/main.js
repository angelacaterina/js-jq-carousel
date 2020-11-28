// Descrizione:
// Creare uno slider di immagini
// Potete usare le immagini che desiderate.
// Per facilitarvi la vita usate immagini delle stesse dimensioni :)

// 1. Lo slider prevederà due frecce (icone) che permettono di scorrere tra le immagini dello slider
// Utiliziamo una classe first e last  per capire quali sono la prima e ultima immagine dello slider
// Utilizziamo una classe active per aiutarci a capire quale è l’immagine attuale da visualizzare nello slider
// 2. In oltre per scorrere le immagini permettere anche l’uso delle frecce sinistra e destra della tastiera

$(function() {
  //mando in avanti le immagini (Icone)
  $('.fa-angle-right').click(function () {
    nextImages();
  });

  //mando indietro le immagini (Icone)
  $('.fa-angle-left').click(function () {
    prevImages();
  });

  //mando avanti e indietro le immagini (tasti)
  // L'evento onkeydown si verifica quando l'utente preme un tasto
  onkeydown = function(e) {
    switch (e.keyCode) {
      case 37: //arrow left
        prevImages();
        break;
      case 39: //arrow right
        nextImages();
        break;
    }
  };

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
