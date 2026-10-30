// 1. Model de dades (Interface)
interface Club {
    nom: string;
    golsF: number;
    golsC: number;
    punts: number;
    pj: number;

}

let club : Club
let llistaClubs: Club[] = [
    {
        "nom": "Recreativo de Huelga",
        "pj": 20,
        "golsF": 18,
        "golsC": 35,
        "punts": 21
    },
    {
        "nom": "Borussia Donuts",
        "pj": 22,
        "golsF": 29,
        "golsC": 15,
        "punts": 37
    },
    {
        "nom": "Vodka Juniors",
        "pj": 22,
        "golsF": 27,
        "golsC": 13,
        "punts": 36
    },
    {
        "nom": "Bayern de los Caídos",
        "pj": 22,
        "golsF": 32,
        "golsC": 16,
        "punts": 48
    },
    {
        "nom": "Manchester Piti",
        "pj": 21,
        "golsF": 39,
        "golsC": 12,
        "punts": 53
    },
    {
        "nom": "Aston Birra",
        "pj": 20,
        "golsF": 20,
        "golsC": 11,
        "punts": 30
    },
    {
        "nom": "Bebesiktas",
        "pj": 22,
        "golsF": 40,
        "golsC": 19,
        "punts": 43
    },
    {
        "nom": "Cultural Mayonesa",
        "pj": 21,
        "golsF": 14,
        "golsC": 21,
        "punts": 19
    },
    {
        "nom": "Payo Vallecano",
        "pj": 19,
        "golsF": 21,
        "golsC": 14,
        "punts": 28
    },
    {
        "nom": "Tinder De Milan",
        "pj": 19,
        "golsF": 33,
        "golsC": 16,
        "punts": 42
    },
    {
        "nom": "Birrarreal",
        "pj": 20,
        "golsF": 28,
        "golsC": 16,
        "punts": 40
    },
    {
        "nom": "Nottingham Miedo",
        "pj": 20,
        "golsF": 30,
        "golsC": 19,
        "punts": 33
    }
]


// 2. Funció per llegir el formulari i afegir un nou element a l'array
function afegirElement(): void {
    const inputNom = document.getElementById('iNom') as HTMLInputElement;
    const inputpj = document.getElementById('ipj') as HTMLInputElement;
    const inputGolsF = document.getElementById('iGolsF') as HTMLInputElement;
    const inputGolsC = document.getElementById('iGolsC') as HTMLInputElement;
    const inputPunts = document.getElementById('iPunts') as HTMLInputElement;


    club = {
        nom: inputNom.value,
        pj: parseFloat(inputpj.value),
        golsF: parseFloat(inputGolsF.value),
        golsC: parseFloat(inputGolsC.value),
        punts: parseFloat(inputPunts.value)
    }

    llistaClubs.push(club);

    console.table(llistaClubs);

    if(llistaClubs.length == 16){
        // @ts-ignore
        document.getElementById("btnAfegir").hidden = true;
    }

    llistaClubs.sort((a, b) => b.punts - a.punts);

    console.log(inputNom, inputpj, inputGolsC,inputGolsF, inputPunts);
    // Actualitzar la pantalla
    actualitzarUI();
}


// 5. Funció per dibuixar l'array al DOM
function actualitzarUI(): void {
    const Clubs = document.getElementById('contenidorClubs') as HTMLElement;
    let html: string='';
    for(let i=0; i < llistaClubs.length; i++){
        if(i==0){
        html += '<div class=\"cardEquip primer\">'
        }else if ( i==1 || i==2) {
            html += '<div class=\"cardEquip niTanMal\">'
        }else if ( i==11) {
            html += '<div class=\"cardEquip darrer\">'
        }else {
            html += '<div class=\"cardEquip\">'
        }
        html += '<h2>'+llistaClubs[i].nom+'</h2>'
        html += '<h2>'+llistaClubs[i].pj+'</h2>'
        let gols = llistaClubs[i].golsF - llistaClubs[i].golsC
        html += '<h2>'+gols+'</h2>'
        html += '<h2>'+llistaClubs[i].punts+'</h2>'
        html += '</div>'
    }
    Clubs.innerHTML = html;
}

// 6. Assegurar que el DOM està carregat abans d'assignar esdeveniments
document.addEventListener('DOMContentLoaded', () => {
    const btnAfegir = document.getElementById('btnAfegir');
    btnAfegir?.addEventListener('click', afegirElement);
});

document.addEventListener('DOMContentLoaded', () => {
    const btnOrdenarPj = document.getElementById('btnOrdenarPj');
    btnOrdenarPj?.addEventListener('click', ordenarPj);
});

document.addEventListener('DOMContentLoaded', () => {
    const btnOrdenarGols = document.getElementById('btnOrdenarGols');
    btnOrdenarGols?.addEventListener('click', ordenarGols);
});

document.addEventListener('DOMContentLoaded', () => {
    const btnOrdenarPunts = document.getElementById('btnOrdenarPunts');
    btnOrdenarPunts?.addEventListener('click', ordenarPts);
});


function ordenarPj(){
    llistaClubs.sort((a, b) => b.pj - a.pj);
    actualitzarUI();
}
function ordenarGols(){
    llistaClubs.sort((a, b) => (b.golsF-b.golsC) - (a.golsF- a.golsC));
    actualitzarUI()
}

function ordenarPts(){
    llistaClubs.sort((a, b) => b.punts - a.punts);
    actualitzarUI();
}

actualitzarUI();