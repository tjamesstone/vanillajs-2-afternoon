let characters = []
let list = document.querySelector('ul')
let search = document.querySelector('input')
function filterText (){
    let filtered = characters.value
    }

console.dir(list)
fetch('https://swapi.co/api/people')
.then(response => response.json())
    .then(response => {
      characters.push(...response.results);
      render();
    })

function render() { const html = characters.map(val => `
${val.name}
`).join('') }

