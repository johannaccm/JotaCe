const designServices = [
    'Diseño de logotipo',
    'Diseño de Manual de Marca',
    'Asesoría sobre proyectos',
    'Grid de posts para RRSS',
    'Diseño de e-mail'
]

const developServices = [
    'Diseño y desarrollo web',
    'Diseño y desarrollo de interfaces',
    'Páginas en Wordpress',
    'Mantenimiento y asesorías en Wordpress',
    'Diseño y desarrollo de e-mails'
]





// BUTTON DISABLED IF INPUT IS EMPTY
let next = document.getElementById("next");
let nameField = document.getElementById("name");

    function success (){

        if (nameField.value === ""){
            next.disabled = true;
        } else{
            next.disabled = false;
        }
    }

//NEXT STEP PASO 2
let paso1 = document.getElementById("paso1");
let paso2 = document.getElementById("paso2");
let paso3 = document.getElementById("paso3");

    function siguiente (){
        paso1.style.display = "none";
        paso2.style.display = "block";
    }

    function siguiente2 (){
        paso2.style.display = "none";
        paso3.style.display = "block";
    }

// HOVER BEHAVIOR ON OPTIONS
let designOption = document.getElementById("design");
let developOption = document.getElementById("webDevelop");

    let developHover = () => {
        designOption.classList.toggle('disabledOption');
        developOption.classList.toggle('activeOption')
    };

    let designHover = () => {
        designOption.classList.toggle('activeOption');
        developOption.classList.toggle('disabledOption')
    };

    developOption.addEventListener('mouseenter', developHover);
    developOption.addEventListener('mouseleave', developHover);
    designOption.addEventListener('mouseenter', designHover);
    designOption.addEventListener('mouseleave', designHover);

// OPTIONS SELECTED
function designList () {
    let itemDiv = document.getElementById('myItemList');

    
    let ul = document.createElement('ul');
    ul.setAttribute('style', 'padding: 0; margin: 0;');
    ul.setAttribute('id', 'theList');

    for (i = 0; i <= designServices.length - 1; i++) {
        let li = document.createElement('li');     
        li.innerHTML = designServices[i];      
        ul.appendChild(li);    
    }

    itemDiv.appendChild(ul);  
}

function developList () {
    let itemDiv = document.getElementById('myItemList');

    
    let ul = document.createElement('ul');
    ul.setAttribute('style', 'padding: 0; margin: 0;');
    ul.setAttribute('id', 'theList');

    for (i = 0; i <= developServices.length - 1; i++) {
        let li = document.createElement('li');     
        li.innerHTML = developServices[i];      
        ul.appendChild(li);    
    }

    itemDiv.appendChild(ul);  
}
  

designOption.style.cursor = 'pointer';
designOption.onclick = function() {
    siguiente2 ();
    

    let nameValue = document.getElementById("name").value;
    let video = document.getElementById("myVideo")
    video.src = "./images/design.mp4";
    
    paso3.innerHTML += "<h2> ¡Genial " + nameValue + "!</h2>";
    paso3.innerHTML += "<p>Te presento a continuación el detalle del servicio</p>";
    designList ()
   
};

developOption.style.cursor = 'pointer';
developOption.onclick = function() {
    siguiente2 ();
    

    let nameValue = document.getElementById("name").value;
    
    paso3.innerHTML += "<h2> ¡Genial " + nameValue + "!</h2>";
    paso3.innerHTML += "<p>Te presento a continuación el detalle del servicio</p>";
    developList ()
   
};

function reload(){
    location.reload();
}


// CUSTOMIZED POINTER
let circle = document.querySelector(".cr");
let dot = document.querySelector(".dot");
let body = document.querySelector("body");
let btn = document.getElementsByClassName("btn")

body.addEventListener("mousemove", moveCursor)

function moveCursor(e) {
    circle.style.top = e.pageY + "px";
    circle.style.left = e.pageX + "px";
}

window.addEventListener("mousedown", () => {
    circle.classList.add("cursor-click");
})

window.addEventListener("mouseup", () => {
    circle.classList.remove("cursor-click");
})


