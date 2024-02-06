//Oppgave 1
/*
for (let i = 1; i < 51; i++) {
    console.log(i)
}
*/

//Oppgave 2
/*
for (let i = 0; i < 51; i = i + 2) {
    console.log(i);
}
*/

//Oppgave 3
/*
for (let i = 0; i < 101; i++) {
    if (i%3 == 0 && i%5 == 0) {
        console.log(i);
    }
}
*/

//Oppgave 4
/*
for (let i = 0; i < 101; i++) {
    if (i%3 == 0 || i%5 == 0) {
        console.log(i);
    }
}
*/

//Oppgave 6

function tegnrektangel(bredde, høyde) {
    for (let i = 0; i < høyde; i++) {
        let rad = '';

        for (let j = 0; j < bredde; j++) {
            if (i === 0 || i === høyde - 1 || j === 0 || j === bredde - 1) {
                rad += '*';
            } else {
                rad += '&nbsp;&nbsp;';
            }
        }

        document.write(rad + '<br>');
    }
}

let bredde = parseInt(prompt('Hvor bredt er rektangellet?'));
let høyde = parseInt(prompt('Hvor høy er rektangellet?'));
tegnrektangel(bredde, høyde)
