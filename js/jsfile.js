// Fonction pour activer le menu de navigation lors du clic sur l'icône du menu
$(document).ready(function() {
    $('.navbar-toggler').click(function() {
      $('nav').toggleClass('active');
    });
  });
  
  // Fonction pour activer le carrousel avec les artistes
  $(document).ready(function() {
    $('.artist-carousel').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });
  
  // Fonction pour activer le carrousel avec les sponsors
  $(document).ready(function() {
    $('.sponsor-carousel').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });
  const form = document.querySelector('form');
  const telInput = document.querySelector('#telephone');
  const regex = /^\d+$/;
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const telValue = telInput.value;
    if (!regex.test(telValue)) {
      alert('Le numéro de téléphone doit contenir uniquement des chiffres.');
    } 
  });
  
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const telephone = document.getElementById('telephone');
const adresse = document.getElementById('adresse');
const evenement = document.getElementById('evenement');
const quantite = document.getElementById('quantite');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (nom.value === '' || prenom.value === '' || telephone.value === '' || adresse.value === '' || evenement.value === '' || quantite.value === '') {
    alert('Veuillez remplir tous les champs');
  } else if (isNaN(quantite.value) || quantite.value <= 0) {
    alert('Veuillez saisir un nombre de billets valide');
  } else {
    const evenementCout = evenement.value.split('-');
    const totalCout = evenementCout[1] * quantite.value;
    alert(`Votre commande a été effectuée avec succès pour ${totalCout} DT`);
  }
});

//function showAlert(message) {
 // const alert = document.createElement('div');
  //alert.className = 'alert alert-danger';
  //alert.appendChild(document.createTextNode(message));
  //const container = document.querySelector('.container');
  //const row = document.querySelector('.row');
  //container.insertBefore(alert, row);
  //setTimeout(function() {
    //document.querySelector('.alert').remove();
  //}, 3000);
//}

