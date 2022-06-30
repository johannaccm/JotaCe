

let questionBox = document.getElementById("question");
let btnVolver = document.getElementById("btnVolver");
let answer = document.getElementById("answer");

function bye(){
    questionBox.style.display = "none"
    btnVolver.style.display = "block"
    answer.style.display = "block"
}

function locura () {
    let name = document.getElementById("name").value;
    let select = document.getElementById('userSelection');
    let porcentaje = document.getElementById('porcentaje');
    let optionValue = select.options[select.selectedIndex].value;
   
    
    if (name == ""){
        alert('Campo nombre no puede estar vacio');
        return;
    }

    else{
        console.log('Hola! Si llegaste aquí te mando un saludo')
    
        switch(optionValue){
        case '1':
            answer.innerHTML = '<h2> Hola ' + name + ' tu porcenaje es: <h2><h1 class="permanent">50%</h1><p>Eres un humano como todos.</p>' ;
        break;

        case '2':
            answer.innerHTML = '<h2> Hola ' + name + ' tu porcenaje es: <h2><h1 class="permanent">20%</h1><p>Todos somos seres vivos.</p>'
        break;

        case '3':
            answer.innerHTML = '<h2> Hola ' + name + ' tu porcenaje es: <h2><h1 class="permanent">100%</h1><p>Dominarás al mundo.</p>'
        break;

        case '4':
            answer.innerHTML = '<h2> Hola ' + name + ' tu porcenaje es: <h2><h1 class="permanent">200%</h1><p>Es cierto, no me importa.</p>'
        break;

    }

    
    bye()
    }
    
}

function hello(){
    location.reload();
}

