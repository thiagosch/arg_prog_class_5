function ejercicio_1() {
    let colores = ["rojo", "verde", "amarillo", "naranja", "azul"];
    return colores;
}

function ejercicio_2() {
    let colores = ejercicio_1();
    let tercer_variable = colores[2];
}
function ejercicio_3() {
    colores = ejercicio_1();
    console.log(colores[0][0]);
}

function generate_random_number() {
    let max = 100;
    let min = 0;
    random_number = Math.floor(Math.random() * (max - min) + min);
    console.log(random_number);
    return random_number;
}

function generate_1_10_array() {
    array_1_10 = [];
    for (let i = 1; i < 10 + 1; i++) {
        array_1_10.push(i);
    }
    console.log(array_1_10);
}

function generate_random_array() {
    random_number_array = [];
    for (let i = 0; i < 10; i++) {
        random_number_array.push(generate_random_number());
    }
    console.log(random_number_array);
    return random_number_array;
}

function clone_array() {
    original_array = generate_random_array();

    copy_array = JSON.parse(JSON.stringify(original_array));

    console.log(original_array, copy_array);
}

function string_to_array(str) {
    let array = [];
    console.log("ingresa cadenas, para salir ingresa cancelar");
}

function dollar_to_peso() {
    dolares = document.getElementById("peso_dollar_input").value;
    pesos = 300 * dolares;
    document.getElementById("peso_dollar_output").innerHTML = dolares + " Dolar = " + pesos + " Pesos";
}

function dollar_to_peso_html_generator() {
    let container = document.createElement("div");
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "peso_dollar_input");
    input.setAttribute("placeholder", "Dolares");

    let output = document.createElement("p");
    output.setAttribute("id", "peso_dollar_output");
    output.setAttribute("class", "output");
    output.innerHTML = "Resultado";

    let button = document.createElement("button");
    button.setAttribute("onClick", "dollar_to_peso()");
    button.innerHTML = "convertir dolar a peso";
    let label = document.createElement("label");
    label.innerHTML = "Converti dolares a pesos <br>";

    container.appendChild(label);
    container.appendChild(input);
    container.appendChild(button);
    container.appendChild(output);
    return container;
}

function peso_to_dollar() {
    pesos = document.getElementById("dollar_peso_input").value;
    console.log(pesos);
    dolares = pesos / 300;
    document.getElementById("dollar_peso_output").innerHTML = pesos + " Peso = " + dolares + " Dolar";
}

function peso_to_dollar_html_generator() {
    let container = document.createElement("div");
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "dollar_peso_input");
    input.setAttribute("placeholder", "Pesos");

    let output = document.createElement("p");
    output.setAttribute("id", "dollar_peso_output");
    output.setAttribute("class", "output");
    output.innerHTML = "Resultado";

    let button = document.createElement("button");
    button.setAttribute("onClick", "peso_to_dollar()");
    button.innerHTML = "convertir peso a dolar";

    let label = document.createElement("label");
    label.innerHTML = "Converti pesos a dolares <br>";

    container.appendChild(label);
    container.appendChild(input);
    container.appendChild(button);
    container.appendChild(output);
    return container;
}

function celcius_to_fahrenheit() {
    let celcius = document.getElementById("celcius_to_fahrenheit_input").value;

    fahrenheit = celcius * (9 / 5) + 32;
    document.getElementById("celcius_to_fahrenheit_output").innerHTML =
        celcius + " celcius = " + fahrenheit + " fahrenheit";
}

function celcius_to_fahrenheit_html_generator() {
    const container = document.createElement("div");

    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "celcius_to_fahrenheit_input");
    input.setAttribute("placeholder", "ºC");

    let label = document.createElement("label");
    label.innerHTML = "Converti Celcius a Fahrenheit <br>";

    let output = document.createElement("p");
    output.setAttribute("id", "celcius_to_fahrenheit_output");
    output.setAttribute("class", "output");
    output.innerHTML = "Resultado";

    let button = document.createElement("button");
    button.setAttribute("onClick", "celcius_to_fahrenheit()");
    button.innerHTML = "convertir celcius a fahrenheit";

    container.appendChild(label);
    container.appendChild(input);
    container.appendChild(button);
    container.appendChild(output);
    return container;
}

function cardboard_box() {
    let name = document.getElementById("cardboard_name_inpuit").value;
    let material = document.getElementById("cardboard_material_inpuit").value;
    let dimentions = document.getElementById("cardboard_dimentions_inpuit").value;
    let comment = document.getElementById("cardboard_textarea").value;
    let output = document.getElementById("cardboard_output");
    errors = [];

    if (!name) {
        errors.push(" Ingresa un nombre");
    }
    if (material == 0) {
        errors.push(" Selecciona el material");
    }
    if (dimentions == 0) {
        errors.push(" Selecciona el tamaño");
    }
    if (errors.length > 0) {
        output.innerHTML = errors.join(", ");
    } else {
        output.innerHTML = name + " ha pedido una caja de " + material + " tamaño " + dimentions + ". " + comment;
    }
}

function cardboard_box_html_generator() {
    console.log("test");
    const container = document.createElement("div");
    let nombre_input = document.createElement("input");
    nombre_input.setAttribute("id", "cardboard_name_inpuit");
    nombre_input.setAttribute("placeholder", "Tu nombre");

    let material_input = document.createElement("select");
    material_input.setAttribute("id", "cardboard_material_inpuit");
    material_input = append_children(material_input, [
        {
            tag: "option",
            disabled: true,
            innerHTML: "Selecciona un material",
            atributes: [{ name: "value", value: "0" }],
        },
        { tag: "option", innerHTML: "Madera", atributes: [{ name: "value", value: "madera" }] },
        { tag: "option", innerHTML: "Aluminio", atributes: [{ name: "value", value: "aluminio" }] },
        { tag: "option", innerHTML: "Carton", atributes: [{ name: "value", value: "carton" }] },
        { tag: "option", innerHTML: "Jean", atributes: [{ name: "value", value: "jean" }] },
    ]);

    let dimentions_input = document.createElement("select");
    dimentions_input.setAttribute("id", "cardboard_dimentions_inpuit");

    dimentions_input = append_children(dimentions_input, [
        {
            tag: "option",
            disabled: true,
            innerHTML: "Selecciona un tamaño",
            atributes: [{ name: "value", value: "0" }],
        },
        { tag: "option", innerHTML: "Colibri", atributes: [{ name: "value", value: "colibri" }] },
        { tag: "option", innerHTML: "Gorrion", atributes: [{ name: "value", value: "gorrion" }] },
        { tag: "option", innerHTML: "Paloma", atributes: [{ name: "value", value: "paloma" }] },
        { tag: "option", innerHTML: "Buho", atributes: [{ name: "value", value: "buho" }] },
        { tag: "option", innerHTML: "Avestruz", atributes: [{ name: "value", value: "avestruz" }] },
    ]);

    let text_area = document.createElement("textarea");
    text_area.setAttribute("style", "display:block;");
    text_area.setAttribute("id", "cardboard_textarea");

    let button = document.createElement("button");
    button.setAttribute("onClick", "cardboard_box()");
    button.innerHTML = "Enviar";

    let output = document.createElement("div");
    output.setAttribute("class", "output");
    output.setAttribute("id", "cardboard_output");
    output.innerHTML = "Propiedades de la caja";

    container.appendChild(nombre_input);
    container.appendChild(material_input);
    container.appendChild(dimentions_input);
    container.appendChild(text_area);
    container.appendChild(button);
    container.appendChild(output);
    return container;
}

function append_children(container, children_array) {
    children_array.forEach((children) => {
        const element = document.createElement(children["tag"]);
        if (children["atributes"]) {
            children["atributes"].forEach((atribute) => {
                element.setAttribute(atribute["name"], atribute["value"]);
            });
        }
        if (children["disabled"]) {
            element.setAttribute("selected", "");
            element.setAttribute("disabled", "");
        }

        element.innerHTML = children["innerHTML"];
        container.appendChild(element);
    });
    return container;
}
secret_value = "";
tries = 0;
max_tries = 3;
function secret_number(button) {
    //variables globales
    // secret_value = "";
    // tries = 0;
    // max_tries = 3;
    let output = document.getElementById("secret_output");
    let input = document.getElementById("secret");
    placeholder = input.getAttribute("placeholder");

    secret = input.value;
    if ((secret <= 0 || secret > 5) && !secret_value) {
        output.innerHTML = "Del 1 al 5";
        input.value = "";
        return;
    }
    console.log(tries);
    if (placeholder == "Decime tu numero secreto") {
        console.log("secret set");
        secret_value = input.value;
        input.setAttribute("placeholder", "adivina tu numero secreto?");
        output.innerHTML = "Tenes 3 intentos";
        input.value = "";
    } else {
        if (secret_value == input.value) {
            input.setAttribute("placeholder", "Decime tu numero secreto");
            output.innerHTML = "Encontraste el numero que vos pusiste, feliz?";
            input.value = "";
            tries = 0;
            secret_value = "";
            return;
        }
        if (tries == max_tries - 1) {
            input.setAttribute("placeholder", "Decime tu numero secreto");
            input.value = "";
            output.innerHTML = "Perdiste, no hay segundos intentos";
            button.setAttribute("style", "display:none;");
            input.setAttribute("style", "display:none;");
            secret_value = "";
            tries = 0;
        } else {
            tries += 1;
            output.innerHTML = "Fallaste te quedan " + (max_tries - tries) + " intentos";
        }
    }

    return;
}

function secret_number_html_generator() {
    const container = document.createElement("div");

    let label = document.createElement("label");
    label.innerHTML = "Ingresa un numero del 1 al 5";
    label.setAttribute("style", "display:block;");

    let user_input = document.createElement("input");
    user_input.setAttribute("id", "secret");
    user_input.setAttribute("placeholder", "Decime tu numero secreto");

    let button = document.createElement("button");
    button.setAttribute("onClick", "secret_number(this)");
    button.innerHTML = "Intenta";

    let output = document.createElement("div");
    output.setAttribute("class", "output");
    output.setAttribute("id", "secret_output");
    output.innerHTML = "A ver si ganas...";
    output.setAttribute("style", "display:block;max-width:fit-content;");
    container.appendChild(label);
    container.appendChild(user_input);
    container.appendChild(button);
    container.appendChild(output);
    return container;
}

function list_of_peolple() {
    let new_name = document.getElementById("nombre_de_persona").value;
    let li = document.createElement("li");
    li.innerHTML = new_name;
    let list = document.getElementById("ul");
    list.appendChild(li);
}

function list_of_peolple_html_generator() {
    const container = document.createElement("div");

    let input = document.createElement("input");
    input.setAttribute("placeholder", "Nombre de persona");
    input.setAttribute("id", "nombre_de_persona");
    let button = document.createElement("button");
    button.setAttribute("onClick", "list_of_peolple()");
    button.innerHTML = "Añadir";

    let ul = document.createElement("ul");
    ul.setAttribute("id", "ul");

    container.appendChild(button);
    container.appendChild(input);
    container.appendChild(ul);
    return container;
}

function initializer() {
    const ejercicios = [
        {
            text: "Crea un array que contenga el nombre de cinco colores escritos como string",
            functions: ["ejercicio_1"],
        },
        {
            text: "Guarda en una variable el tercer elemento del array del ejercicio anterior.",
            functions: ["ejercicio_2"],
        },
        {
            text: "Accede desde un console.log( ) a la posición 0 del string de la posición 0 del array del ejercicio 1.",
            functions: ["ejercicio_1", "ejercicio_3"],
        },
        {
            text: "Se pide realizar un script que genere un número aleatorio entre 1 y 99. Investigue la función Math.random().",
            functions: ["generate_random_number"],
        },
        {
            text: "Rellena un array con los números del 1 al 10. Muéstralo por la consola.",
            functions: ["generate_1_10_array"],
        },
        {
            text: "Rellena un array con números aleatorios (10 por ejemplo). Muéstralo por la consola.",
            functions: ["generate_random_array"],
        },
        {
            text: "Del array anterior, créale una copia (que no sea el mismo en sí). Mostrarlos por la consola.",
            functions: ["clone_array"],
        },
        {
            text: "Realiza un script que pida cadenas de texto hasta que se ingrese la palabra “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión medio. Realizar la misma actividad, pero ahora almacenando los valores en un array y luego recorriendolo para mostrar el resultado deseado del ejercicio",
            functions: ["string_to_array"],
        },
        {
            text: "Hacer un formulario con dos campos (pesos y dólares) que al presionar un botón convierte de dólares a pesos. Supondremos que un dólar son trescientos pesos. Mostrar el resultado elemento de html.",
            functions: ["dollar_to_peso"],
            html_generator: "dollar_to_peso_html_generator",
        },

        {
            text: "Generar la inversa del ejercicio anterior (de pesos a dólares).",
            functions: ["peso_to_dollar"],
            html_generator: "peso_to_dollar_html_generator",
        },
        {
            text: "Hacer un formulario que convierta de grados centígrados a grados Fahrenheit. Para ello deberá multiplicar por 9/5 y sumar 32. Tener en cuenta que 30 grados centígrados son 86 grados fahrenheit.",
            functions: ["celcius_to_fahrenheit"],
            html_generator: "celcius_to_fahrenheit_html_generator",
        },
        {
            text: "Hacer un formulario para solicitar el envío de una caja de cartón. En el formulario  podremos especificar las características de la caja. Ejemplo: <br />  <img class='img' src='./ejemplo.png'>",
            functions: ["cardboard_box"],
            html_generator: "cardboard_box_html_generator",
        },
        {
            text: "A través de un formulario, el usuario debe introducir un número secreto que estará entre 0 y 5. El usuario tendrá tres intentos para acertar el número, si no lo logra, habrá perdido el juego. Debemos indicar en un cuadro de texto si el usuario gana, falla el número o pierde.",
            functions: ["secret_number"],
            html_generator: "secret_number_html_generator",
        },

        {
            text: " Dado un input y un botón, escribir nombres de personas e ir mostrando en una lista desordenada a medida que se agregan.",
            functions: ["list_of_peolple"],
            html_generator: "list_of_peolple_html_generator",
        },
    ];
    const ejercicios_container = document.getElementById("ejercicios");
    for (var i = 0; i < ejercicios.length; i++) {
        let ejercicio_data = ejercicios[i];
        let ejercicio_pre = document.createElement("pre");
        ejercicio_data["functions"].forEach((element) => {
            let function_string = get_function_code(element);
            let ejercicio_code = document.createElement("code");
            ejercicio_code.innerHTML = function_string;
            ejercicio_pre.appendChild(ejercicio_code);
        });

        let ejercicio_text = document.createElement("p");
        ejercicio_text.setAttribute("class", "text_container");
        ejercicio_text.innerHTML = ejercicio_data["text"];

        let placeholder = document.createElement("div");
        placeholder.setAttribute("id", i);

        let ejercicio_div = document.createElement("div");

        ejercicio_div.setAttribute("class", "main_container");
        ejercicio_div.appendChild(ejercicio_text);
        ejercicio_div.appendChild(placeholder);
        ejercicio_div.appendChild(ejercicio_pre);

        ejercicios_container.appendChild(ejercicio_div);
        if (ejercicio_data["html_generator"]) {
            document.getElementById(i).appendChild(call_function_by_string(ejercicio_data["html_generator"]));
        }
    }
}

function get_function_code(functionName) {
    console.log(functionName);
    return window[functionName].toString();
}

function call_function_by_string(functionName) {
    console.log(functionName);
    return window[functionName]();
}

initializer();
