const section = document.getElementById('vlajky');
const nek = document.getElementsByClassName('navbar-brand dalej');
const images = []
var hyb = "";
fetch("./flags.json")
  .then(res => {
    res.json().then(data => {
      images.push(...data)
      images
        .forEach(image => addImageToSection(image, section))
    })
  })
const addImageToSection = (image, section) => {
  console.log(image);
  let menu = document.getElementById('drop');
  let children = menu.childNodes;
  let nap = document.getElementById('napoveda');
  for (let pocit = 1; pocit < 6; pocit += 2) {
    if (image.name.toLowerCase() === children[pocit].id) {
      nap.innerHTML += image.napoveda + "<br />";
      const img = document.createElement("img")
      img.src = image.url;
      img.draggable = true;
      img.id = image.name;
      img.className = "drag-drop";
      localStorage.setItem(img.id, img.src);
      section.appendChild(img)
    }
    // else {
    //   let nic = 0;
    // }
  }
}

function next(){
  const nek = document.getElementsByClassName('dalej').next;
  console.log(nek);
  nek.style.visibility = "visible";
  nek.style.zIndex = "10";
}

function dragMoveListener(event) {
  var target = event.target

  var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
  var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

  target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

  target.setAttribute('data-x', x)
  target.setAttribute('data-y', y)
}


interact('.drag-drop')
  .draggable({
    listeners: { move: dragMoveListener }
  })
  var pocitadlo = 0;
interact('.dropzone').dropzone({
  accept: '.drag-drop',
  overlap: 1,

  ondragenter: function (event) {
    var dropzoneElement = event.target
    dropzoneElement.style.justifyContent = "start";
  },
  ondragleave: function (event) {
    var dropzoneElement = event.target;
    dropzoneElement.style.justifyContent = "center";
    dropzoneElement.style.backgroundColor = "rgba(212, 197, 197, 0.466)";
    console.log(pocitadlo);
  },
  ondrop: function (event) {
    var draggableElement = event.relatedTarget
    var dropzoneElement = event.target
    if (draggableElement.id.toLowerCase() === event.target.id) {
      dropzoneElement.style.backgroundColor = "rgba(45, 240, 61, 0.62)";
    }
    if (draggableElement.id.toLowerCase() === event.target.id) {
      pocitadlo += 1;
      event.relatedTarget.classList.remove('drag-drop')
    }else{
      pocitadlo += 0;
    }
    if (pocitadlo === 13) {
        next();
    } 
    console.log(pocitadlo)
  }
})




