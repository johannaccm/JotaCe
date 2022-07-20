const services = [
    {
        'idCategory' : 1,
        'category' : 'Diseño Gráfico',
        'iconCategory' : '<i class="bi bi-brush"></i>',
        'subCategories' : [
            {   'idSubcategory': '1-1' ,
                'nameSubcategory' : 'Publicidad',
                'menuSubcategory' : [
                    {
                        'menuTitle' : 'Volante / Flyer',
                        'description' : 'Frente y dorso. No incluye costo de fotografías',
                        'price' : 40000,
                        'currency' : 'CLP'
                    },
                    {
                        'menuTitle' : 'Folleto',
                        'description' : 'Frente y dorso. No incluye costo de fotografías',
                        'price' : 35000,
                        'currency' : 'CLP'
                    },
                    {
                        'menuTitle' : 'Brochure por hoja',
                        'description' : 'Folleto de alta complejidad. No incluye costo de fotografías',
                        'price' : 35000,
                        'currency' : 'CLP'
                    },
                    {
                        'menuTitle' : 'Aviso publicitario',
                        'description' : '1 página o doble página sin redacción',
                        'price' : 35000,
                        'currency' : 'CLP'
                    }
                ],
            },
            {
                'idSubcategory': '1-2' ,
                'nameSubcategory' : 'Redes Sociales',
                'menuSubcategory' : [
                    {
                        'menuTitle' : 'Creación de perfil',
                        'description' : 'Creación de perfil en Facebook/Instagram/LinkedIn',
                        'price' : 40000,
                        'currency' : 'CLP'
                    },
                    {
                        'menuTitle' : 'Social Media Plan: Básico',
                        'description' : '1 mes, 8 imágenes, sin Comunity Manager',
                        'price' : 40000,
                        'currency' : 'CLP'
                    },
                    {
                        'menuTitle' : 'Social Media Plan: Medio',
                        'description' : '1 mes, 14 imágenes, sin Comunity Manager',
                        'price' : 40000,
                        'currency' : 'CLP'
                    },
                    {
                        'menuTitle' : 'Social Media Plan: Avanzado',
                        'description' : '1 mes, 25 imágenes, sin Comunity Manager',
                        'price' : 40000,
                        'currency' : 'CLP'
                    },
                    ],
            },
            {
                'idSubcategory':'1-3' ,
                'nameSubcategory' : 'Identidad',
                'menuSubcategory' : [
                    {
                        'menuTitle' : 'Nueva Identidad Corporativa',
                        'description' : 'Nuevo logotipo, isotipo o isologotipo + Manual de Uso y hasta 5 aplicaciones',
                        'price' : 150000,
                        'currency' : 'CLP'
                    },
                    {
                        'menuTitle' : 'Nuevo Logotipo/Isotipo',
                        'description' : 'No incluye manual de Uso ni aplicaciones',
                        'price' : 70000,
                        'currency' : 'CLP'
                    },
                    {
                        'menuTitle' : 'Manual de normas/uso',
                        'description' : 'Para una marca existente',
                        'price' : 70000,
                        'currency' : 'CLP'
                    },
                    ],
            },
        ],
    },
    {
        'idCategory' : 2,
        'category' : 'Desarrollo y Programación',
        'iconCategory' : '<i class="bi bi-code-slash"></i>',
        'subCategories' : [
            {
                'idSubcategory': '2-1',
                'nameSubcategory' : 'Diseño y Desarrollo Web',
                'menuSubcategory' : [
                    {
                        'menuTitle' : 'Diseño Landing Page',
                        'description' : 'Diseño y maquetación de página única o landing page',
                        'price' : 150000,
                        'currency' : 'CLP'
                    },
                    {
                        'menuTitle' : 'Desarrollo Front-End Landing Page',
                        'description' : 'Desarrollo de página única o landing page',
                        'price' : 200000,
                        'currency' : 'CLP'
                    },
                ],
            },
        ],
    },
]



// CREA Y MUESTRA CATEGORIAS
const contenedor = document.getElementById('containerBoxes');
let content = '';

function getUserName (target){
    content = "";
    content += `
    <div class="row boxWrap username">
                    <h1>¡Hola! Mi nombre es Johanna y soy creador de</h1>
                    <h1> Contenido Digital </h1>           
                    <h2>y tú ¿Quién eres?</h2>
        <input type="text" id="username" placeholder="Tu nombre" >
    <button type="button"  class="btn" id="next" onclick="nextValidator()"> 
        Siguiente
    </button>
    </div>
    
    `;
    
    target.innerHTML = content;   

}

// BUTTON INPUT VALIDATOR
function nextValidator(){
    let next = document.getElementById("next");
    let userName = document.getElementById('username').value;

    if (userName === ""){
        swal("Error", "Por favor ingrese su nombre", "error");
    } else{
        renderCategories (services, contenedor)
    }
        
    localStorage.setItem('UserName', userName);
};

const renderCategories = (servicesArray, target) => {

    target.innerHTML="";
    target.innerHTML+= `<button id="back" class="btnBack" onclick="getUserName(contenedor)"><i class="bi bi-arrow-counterclockwise"></i> Volver</button>`;
    target.innerHTML += `<h1>Selecciona el área de tu interés</h1>`;

    servicesArray.forEach ( showCategories );

    function showCategories (items) {
        content = `
        <div class="col-6 boxWrap">
            
            <div class="box col-6" >
                ${items.iconCategory}    
                <h2>${items.category}</h2>
                <button class="btn btnSelect" id= ${items.idCategory} >Mostrar más</button>
            </div>
            
        </div>
        `

        target.innerHTML += content;
    };

    
    const buttons = document.querySelectorAll('.btnSelect');
    buttons.forEach(button => button.addEventListener('click', renderSubcategories));
}



// CREA Y MUESTRA SUB-CATEGORIAS 
const renderSubcategories = (event) => {

    const id = parseInt(event.target.id);
    const category = services.find(category => category.idCategory === id);
    const subCategory = category.subCategories;
    const menu = category.menuSubcategory;
    
    content = "";
    content += `<button id="back" class="btnBack" onclick=" renderCategories(services,contenedor)"><i class="bi bi-arrow-counterclockwise"></i> Volver</button>`;
    content += `<h1> Servicios de ${category.category}</h1>`;

    const subCategories = (Array, target) => {

        Array.map(items => {
            content += `
                <div class="col-6 boxWrap">
                    <div class="box  col-6">   
                    <h3>${items.nameSubcategory}</h3>
                    <button class="btn btnMenu" id=${items.idSubcategory} >Mostrar más</button>
                    </div>
                </div>`;            
        });
    
        target.innerHTML = content
    };
    subCategories (subCategory,contenedor);
    

    const buttons = document.querySelectorAll('.btnMenu');
    buttons.forEach(button => button.addEventListener('click', renderMenu));

    // CREA Y MUESTRA LISTADO DE OPCIONES DE SUB-CATEGORIAS 
    function renderMenu (event){
        const id = event.target.id;
        let arraySearch = subCategory.find(category => category.idSubcategory === id);
        let menuList = arraySearch.menuSubcategory;

        contenedor.innerHTML = "";
        contenedor.innerHTML += `<button id="back" class="btnBack" onclick="renderCategories(services,contenedor)"><i class="bi bi-arrow-counterclockwise"></i> Volver</button>`;
        contenedor.innerHTML += `<h1>${arraySearch.nameSubcategory}</h1>`;
        menuList.forEach(showList);

        function showList(items){
            content = `

            <div class="col-4 boxWrap">
                    <div class="box  col-6">   
                    <h3>${items.menuTitle}</h3>
                    <p>${items.description}}</p>
                    <p>Precio: ${items.price} ${items.currency} </p>
                    <button class="btn btnSelected" id="${items.menuTitle} myBtn" type="button" data-toggle="modal" data-target="#staticBackdrop">¡Lo quiero!</button>
                    </div>
                </div>            
            `;
            contenedor.innerHTML += content;

            let btnMenu= document.querySelectorAll('.btnSelected')
            btnMenu.forEach(button => button.addEventListener('click', storeInfo));
            
        };
     

        function storeInfo (event){
            const id = event.target.id;
            let arrayStorage = menuList.find(list => list.menuTitle === id);
            
            let JSONitem = JSON.stringify(arrayStorage);
            localStorage.setItem('Articulo', JSONitem);

            let nombre = localStorage.getItem('UserName');
        
            contenedor.innerHTML = "";
            content = "";
            
            content += `
            <div class="row boxWrap last-step">
            <h1> Hola ${nombre} </h1>
            <p>Gracias por tu interés, para poder comunicarme contigo ingresa a continuación tu correo
            electrónico<p>
            <input type="text" id="mail" placeholder="e-mail" >
            <button onclick="reload()" class="btn"> Enviar y volver al inicio </button>
            </div>            
            `

        

            contenedor.innerHTML = content;

        }
        

           
    }


};

function reload(){
    location.reload();
}


const volverCategorias = () => {
    content = "";
    contenedor.innerHTML= content;
    renderCategories(services, contenedor);
};


getUserName(contenedor);


