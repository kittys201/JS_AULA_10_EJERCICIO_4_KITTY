let Alumnos_registradas = []
let Calificacion_maxima = 0;
let Mejores_alumnos = ""

function registrar_Calificacion (){
    
    //Registro Nombre
    let input_Nombre = document.querySelector ('#Nombre');
    let Lista_de_participantes = document.querySelector ('#Lista_de_participantes');

    let Nuevo_Nombre = input_Nombre.value;
    input_Nombre.value = ''; //para  reset del valor del dato
    //Registro de Origen
    let input_origen = document.querySelector ('#Origen');
    

    let Nuevo_Origen = input_origen.value;
    input_origen.value = ''; //reset de valor

    //registrando notas
    let input_Calificacion = document.querySelector ('#Calificacion');
    
    let Nueva_Calificacion = input_Calificacion.value;
    input_Calificacion.value = ''; //reset de valor


    let Alumnos_en_Lista = document.createElement ('li');
    Alumnos_en_Lista.textContent = `${Nuevo_Nombre} de ${Nuevo_Origen} con ${Nueva_Calificacion} numero de Calificacion`;
    Lista_de_participantes.appendChild (Alumnos_en_Lista);
    event.preventDefault();
    
    function registrar_Calificacion () {
    let Alumno = {}
    Alumno.Nombre = Nuevo_Nombre;
    Alumno.Origen = Nuevo_Origen;
    let Calificacion = Nueva_Calificacion;
    Alumno.Calificacion = Number (Calificacion)
    return Alumno
    }
    Alumnos_registradas.push (registrar_Calificacion ())

    
    //Se crea un grupo con Alumnos con calificaciones altas:

    for (let i=0; i<Alumnos_registradas.length;i++){ //se determina el alumno con califiacion maxima
        if(Alumnos_registradas[i].Calificacion>Calificacion_maxima){
        Calificacion_maxima=Alumnos_registradas[i].Calificacion
        }
    }

    let Super_alumnos = []; //lista posible de array con grandes almunos

    for (let i=0; i<Alumnos_registradas.length;i++){ 
        if(Alumnos_registradas[i].Calificacion===Calificacion_maxima){
            Super_alumnos.push (Alumnos_registradas[i].Nombre)
        }
    }

//Se imprime la o las Alumnos con calificaciones mas grandes
    let Mejores_alumnos = ""

    if(Super_alumnos.length===1){
        console.log (`El alumno con mayor calificacion es  ${Super_alumnos[0]} con ${Calificacion_maxima} feicitaciones`) //Só um time
    }
    else{
        for (let i=0; i<Super_alumnos.length-1;i++){
        Mejores_alumnos = Mejores_alumnos + `${Super_alumnos[i]}, ` //se imprime uno o mas Alumnos con arcanos
        }
    }
    
        //Estilizado de resultado final
        if ((Super_alumnos.length>1)){
        Mejores_alumnos = Mejores_alumnos.slice(0, -2) + ` y  ${Super_alumnos[Super_alumnos.length-1]}` 
        //se retira el ultimo espaciamiento
        console.log (`Los almunos con mejores calificaciones son: `+Mejores_alumnos+ ` con ${Calificacion_maxima} felicitaciones`)
        }
   
    var Mensagens = document.querySelector ('#info')
    document.querySelector ('#info').textContent = ""

    //Persona(s) con mayor(es)

    if (Super_alumnos.length===1){ 
        var Mensagem3 = document.createElement ('p') 
        Mensagem3.textContent = `   El mejor alumno es   ${Super_alumnos[0]} con ${Calificacion_maxima} puntos de Calificacion   `
        Mensagens.appendChild (Mensagem3) 
    }
    else{
        var Mensagem4 = document.createElement ('p')
        Mensagem4.textContent = ` Alumnos con  calificaciones mas altas son : `+Mejores_alumnos+ ` con ${Calificacion_maxima} puntos de Calificacion-`
        Mensagens.appendChild (Mensagem4) 
    }

}

document.querySelector('#Boton_agregar_Calificacion').addEventListener('submit' /*accion*/, registrar_Calificacion)