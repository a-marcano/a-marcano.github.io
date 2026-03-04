localStorage.setItem("key", JSON.stringify(data));

let data = localStorage.getItem("key");

function processJSON(json) {
    let id = json.id;
    let moves = json.moves;
    console.log(moves);
}

function searchPokemon() {
    let pokemon = document.getElementById("nameId").value;
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon)
        .then(response => response.json())
        .then(data => processJSON(data))
        .then(data => localStorage.setItem("key", JSON.stringify(data)))
        .then(() => {
            let selectElements = document.getElementsByTagName("select");
            for (let i = 0; i < selectElements.length; i++) {
                for (let j = 0; j < data.moves.length; j++) {
                    let option = document.createElement("option");
                    option.textContent = data.moves[j].move.name;
                    selectElements[i].appendChild(option);
                }
            }
        })
        .catch(error => console.error(error));
}