const servicios = [
    {
        tipo : "Diseño",
        detalle : "Elaboración de logotipo",
        precio : "CLP $60.000",
        entrega : "5 días hábiles",
        comentario : "El cliente debe entregar nombre de la empresa"
    },
    {
        tipo : "Desarrollo",
        detalle : "Elaboración de página web",
        precio : "CLP $1.000.000",
        entrega : "Según complejidad",
        comentario : "El cliente debe entregar pagar un 50% para empezar."
    },
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

let video = document.getElementById("myVideo")

// let next = document.getElementById("next");

designOption.style.cursor = 'pointer';

designOption.onclick = function() {
    let nameValue = document.getElementById("name").value;
    ul = document.createElement('ul');
    let list = document.getElementById("myList");

    video.src = "./images/design.mp4";
    siguiente2 ();
    paso3.innerHTML += "<h2> ¡Genial " + nameValue + "!</h2>"
    paso3.innerHTML += "<p>Te presento a continuación el detalle del servicio</p>"
    console.log(tipo)
    

   
};




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


