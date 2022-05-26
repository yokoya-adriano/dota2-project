async function dataHeroes() {
    try {
        const dataResponse = await fetch('https://api.opendota.com/api/heroes')
        const dataJSON = await dataResponse.json()

        console.log(dataJSON)

        const listHeroes = document.querySelector('.list__heroes')
        
        for(let i = 0; i < dataJSON.length; i++) {
            let newHero = document.createElement('li')
            newHero.classList.add('list__hero')
            newHero.innerHTML = `
                <span class="list__hero-name">${dataJSON[i].localized_name}</span><br>
                <span class="list__hero-atack">${dataJSON[i].attack_type}</span>
                <ul>
                    <li>${dataJSON[i].roles[0]}</li>
                    <li>${dataJSON[i].roles[1]}</li>
                    <li>${dataJSON[i].roles[2]}</li>
                </ul>
                <br>
            `

            listHeroes.appendChild(newHero)
        }
        


    } catch (error) {
        console.log('Erro no fetch')
    }
}

dataHeroes()


