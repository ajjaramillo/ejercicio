const modal = document.getElementById ('add-modal');
const button = document.querySelector('header button');
const transparecia = document.getElementById('backdrop');
const cancelAgregar = modal.querySelector('.btn--passive');
const entradasUsuario = modal.querySelectorAll('input');
const confirmarAgregar = modal.querySelector('.btn--success');
let numeroId1 = 0;

function activarModal (){
transparecia.classList.toggle('visible');
modal.classList.toggle('visible');
};

function cancelarBtn (){
    activarModal();
}

function agregarestudiante () {
    let estudiante = entradasUsuario[0];
    let examen = entradasUsuario[1];
    let calificacion = entradasUsuario[2];
    const expresionregular = /cas*a/;
    let comparativo = expresionregular.test(estudiante.value);
    if(comparativo){
        activarModal ();
        alert('Formulario enviado');
        pintarEstudiante(examen.value ,estudiante.value ,calificacion.value);
    }
    else {
        alert("error");
    }

    // if(estudiante.value.trim() === ''){
    //     alert('El estudiante no puede ser vacio')
    // }
    // else if (!isNaN( estudiante.value.trim())){
    //     alert('Estudiante no puede contener numero')
    // }

    // else if(examen.value.trim() === ''){
    //     alert('Examen no puede estar vacio')
    // }
    //    else if (!isNaN( examen.value.trim())){
    //        alert('Examen no puede ser un numero')
    //    }
    // else if( parseInt(calificacion.value.trim()) < 1 || parseInt(calificacion.value.trim()) > 5){
    //     alert('calificacion no valida')
    // }
    // else if(isNaN(parseInt(calificacion.value.trim()))){
    //         alert('El campo calificacion debe ser un numero de 1 a 5')
    //     }  
    // else {
    //     activarModal ();
    //     alert('Formulario enviado');
    //     pintarEstudiante(examen.value ,estudiante.value ,calificacion.value);
    // }      
}

function eliminarEstudiante (id) {
    let node = document.getElementById(id);
    node.remove(); 

}

function pintarEstudiante (imageUrl,title,calificacion)
{
    const pintar = document.getElementById('alumnos-list');
    const trae = document.createElement('li');
        trae.className = 'movie-element';
        trae.innerHTML = ` <div class="student-element__image"><img src="${imageUrl}" alt="${title}"></div> <div class="student-element__info"> <h2>${title}</h2><p>Calificación ${calificacion}/5</p> </div> `;
        pintar.appendChild(trae);
        numeroId1 = ''+(numeroId1++);
        trae.id = numeroId1;
        trae.onclick = () => eliminarEstudiante(numeroId1);
}



transparecia.onclick  = () => activarModal ();
button.onclick = () => activarModal();
cancelAgregar.onclick = () => cancelarBtn();
confirmarAgregar.onclick = () => agregarestudiante ();


