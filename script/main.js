//définir les variables : tous les blocs (array) et une variable pour la hauteur max
const sameHeight = document.querySelectorAll(".sameHeight")

resizeSameHeight()
window.addEventListener("resize",
  function () {
    resizeSameHeight()
  })

function resizeSameHeight() {

  let maxHeight = 0
  for (let i = 0; i < sameHeight.length; i++) {
    sameHeight[i].style.height = 'auto'
  }

  if (window.innerWidth > 450) { //pour que les blocs se mettent les uns en dessous des autres sans avoir forcément la même hauteur
    //on détermine la hauteur max
    //parcourir tous les blocs et garder la hauteur la plus grande du texte
    for (let i = 0; i < sameHeight.length; i++) {
      if (sameHeight[i].offsetHeight > maxHeight) {
        maxHeight = sameHeight[i].offsetHeight
      }
    }

    //on parcourt les blocs et on leur applique la hauteur max
    for (let i = 0; i < sameHeight.length; i++) {
      sameHeight[i].style.height = maxHeight + 40 + 'px' //pour afficher la hauteur du type 300px
    }
  }
}