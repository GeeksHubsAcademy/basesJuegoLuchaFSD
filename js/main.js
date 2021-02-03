

//clases
class Luchador {

    constructor(nombre,vida,fuerza,defensa,suerte){
        this.nombre = nombre;
        this.vida = vida;
        this.fuerza = fuerza;
        this.defensa = defensa;
        this.suerte= suerte;
        this.handicap = suerte - Math.floor(Math.random() * 5);
    };

    ataque(enemigo){
        enemigo.vida -= (this.fuerza - enemigo.defensa) * (this.suerte - this.handicap);
    };

    ataqueEspecial(enemigo){
        enemigo.vida -= (this.fuerza * 0.5 + this.fuerza) - enemigo.defensa;
    };

    defensa(){

    };
};


//Instancias y variables globales
//nombre,vida,fuerza,defensa,suerte
let player1 = new Luchador("Ryu",200,50,30,7);

let player2 = new Luchador("Ken",200,45,35,6);

let player3 = new Luchador("Blanka",200,60,20,5);

let player4 = new Luchador("Chun",200,40,38,8);

let p1 = "";

let p2 = "";

//traductor
let allplayers = {
    "Ryu": player1,
    "Ken": player2,
    "Blanka": player3,
    "Chun": player4
};

//Funciones 

let inicioGame = () => {

    let vidaInicial = 200;
    
    player1.vida = vidaInicial;
    player2.vida = vidaInicial;

    p1 = "";
    p2 = "";


};

let cambiaPantalla = (faseAhora,faseFutura) => {
    let pantallaActual = document.getElementById(faseAhora);

    let pantallaDestino = document.getElementById(faseFutura);

    //aqui procedemos con el cambio

    pantallaActual.style.display = "none";
    pantallaDestino.style.display = "block";
};

let selectPersonaje = (personaje) => {
    if(p1 == ""){
        p1 = allplayers[personaje];

        document.getElementById(personaje).className = "avatar2";
        document.getElementById(personaje).onclick = "";


    }else{
        p2 = allplayers[personaje];

        document.getElementById(personaje).className = "avatar2";
        document.getElementById(personaje).onclick = "";

        //Enviar el mensaje 

        let mensaje = document.getElementById("mensaje");

        mensaje.innerHTML = `Has escogido al primer personaje que es ${p1.nombre} y al segundo que es ${p2.nombre}`;
        
        //Cargo los personajes en screen2

        let showPlayer1 = document.getElementById("contrincante1");
        let showPlayer2 = document.getElementById("contrincante2");

        showPlayer1.innerHTML = `<div ><img class="estiloContrincante" src="img/${p1.nombre}.jpg"></div>`;
        showPlayer2.innerHTML = `<div ><img class="estiloContrincante" src="img/${p2.nombre}.jpg"></div>`;

        console.log(showPlayer1.innerHTML);

        //Asignaría los luchadores... 

        console.log(p1);
        console.log(p2);

        //Cambiar de pantalla porque ya tenemos a los personajes elegidos

        resolveIn(1000).then(delay => {

            cambiaPantalla("screen1","screen2");
            
        });
    };
};

let atacar = () => {
    //Funcion de ataque;
    let turno = Math.floor(Math.random() * 2);
    let especial = Math.floor(Math.random() * 5);

    if(turno == 0){
        if(especial == 3){
            console.log("ATAQUE ESPECIAL");
            p1.ataqueEspecial(p2);
        }else{

            p1.ataque(p2);
        }
    }else{
        if(especial == 3){
            console.log("ATAQUE ESPECIAL");
            p2.ataqueEspecial(p1);
        }else{
            p2.ataque(p1);

        }
    };

    console.log(p1.nombre + p1.vida);
    console.log(p2.nombre + p2.vida);
    
};

//funcion de delay...

const resolveIn = delay =>
new Promise(res => setTimeout(() => res(delay), delay));

//Declaracion de inicio del juego
console.log("Iniciamos el juego y la vida del player 1 es...." + player1.vida);
console.log("Iniciamos el juego y la vida del player 2 es...." + player2.vida);








// do {

    

// }while(player1.vida > 0 || player2.vida > 0);