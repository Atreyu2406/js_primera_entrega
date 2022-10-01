let nombre;
let pass;
let passBoo = false;
let magia;
let donacion;
let donacionBoo = false;
let free = false;
let menu;
let acumulador = 0;

// menu = (prompt ("Quieres inicar el sistema de registro? (si/no)."));
alert ("Bienvenidos al Primer Encuentro de Seres Mágicos de CoderHouse.");
alert ("INFORMACIÓN A TENER EN CUENTA.\n\nEs exclusivo para Seres Mágicos de CoderHouse.\nProhibido el ingreso con varitas y/o objetos mágicos.\nSe recibirán Donaciones que tendrán fines benéficos.\nHabrá una Barra de Pociones Alcohólicas.");
alert ("INFORMACIÓN CONFIDENCIAL - Consignas de la entrega.\n\nLos docentes tendrán trato VIP (requiere de contraseña, tres intentos).\nEl primero o la primera en donar $5000 o más tendrá Barra Libre de Pociones Alcohólicas.\nEl dinero recaudado se dividirá en tres porcentajes diferentes (50%, 30% y 20%).");
while (menu != "no") {
    while (passBoo == false) {
    nombre = prompt ("Cuál es su nombre? (A modo informativo).\nEn caso de ser docente de CoderHouse escribir `tutor` o `tutora`.");
        if (!isNaN(nombre)) {
            alert ("ERROR!\nPuede ingresar solo STRINGS (Término que aprendí en CoderHouse).");
        } else if (nombre == "tutor" || nombre == "tutora" || nombre == "Tutor" || nombre == "Tutora") {
            for (let i=1; i<4; i++) {
                pass = prompt ("Ingrese la CONTRASEÑA.\nNOTA: para verificar si es TUTOR o TUTORA debe escribir `Monti es mi mejor alumno` en camelCase (tres intentos).");
                    if (pass == "montiEsMiMejorAlumno") {
                    alert ("CONTRASEÑA CORRECTA!\n Tiene acceso a nuestro Sector Vip!\n Qué lo disfrute!");
                    passBoo = true;
                    break;
                    } else {
                    alert ("CONTRASEÑA INCORRECTA! \nQuedan " + (3 - i) + " intentos.");
                    }  
            }
        } else {
            break;
        }
    }
    magia = prompt ("Cúal de los 4 elementos controla para hacer magia? \n1. Aire \n2. Agua \n3. Fuego \n4. Tierra");
        while (magia == 0 || magia > 4 || isNaN(magia)) {
            switch (magia) {
                case "1":
                    break;
                case "2":
                    break;
                case "3":
                    break;
                case "4":
                    break;
                default:
                    alert ("Nro inválido. Empezamos a dudar de sus poderes.");
                    magia = prompt ("Cúal de los 4 elementos controla para hacer magia? \n1. Aire \n2. Agua \n3. Fuego \n4. Tierra");
            }
        }
    donacionBoo = false;
    while (donacionBoo == false) {
    donacion = parseInt (prompt ("Cuánto dinero quieres donar?\nEn caso de no querer donar ingrese 0 (cero)."));
        if (isNaN(donacion)) { 
            alert ("ERROR!\nEn caso de no querer donar ingresar 0 (cero).");
        } else {
            acumulador += donacion;
            if (donacion >= 5000 && free == false) {
                alert ("Fuiste el primero o la primera en donar más de $5000!!\n\nTenés acceso libre a la Barra de Pociones Alcohólicas! \nLa poción más pedida es `Profesora Laura`. \nNOTA: No nos hacemos responsables de sus efectos secundarios.");
                free = true;
                donacionBoo = true;
            } else if (donacion == 0) {
                alert ("Ud. es una RATA!\n\nNOTA: no tenemos nada en contra de las ratas. De hecho somos amigos/as de varias de ellas.");
                donacionBoo = true;
            } else {
                alert ("Gracias por su donación!");
                donacionBoo = true;
            } 
        }     
    }                                                                                            
    menu = prompt ("Desea realizar una nueva carga? (si/no).");
        while (passBoo == false) {
            if (!isNaN(menu)) {
                alert ("Ingresar solamente `si` o `no`.");
                menu = prompt ("Desea realizar una nueva carga? (si/no).");
            } else if (menu != "no") {
                passBoo = false;
                break;
            } else {
                alert ("Cargando datos...");
                break;
            }
        }
} 

const porcentaje = (num1, num2) => num1 * num2;
alert ("Finalizado el evento vamos a informarles el TOTAL de dinero donado y sus respectivos PORCENTAJES.")
alert ("EL dinero TOTAL donado es de: $" + acumulador);
alert ("El 50% es de: $" + porcentaje(acumulador, 0.5) + "\n\nEste dinero será destinado al Centro Docente para Magos y Brujas jubilados/as de CoderHouse.");
alert ("El 30% es de: $" + porcentaje(acumulador, 0.3) + "\n\nEste dinero será destinado a CoderHouse para mejorar el funcionamiento de su plataforma (broma ja!).");
alert ("El 20% es de: $" + porcentaje(acumulador, 0.2) + "\n\nEste dinero será destinado a la compra de Insumos para Pociones.");
alert ("GRACIAS por participar de nuestro primer encuentro para Seres Mágicos de CoderHouse.")


