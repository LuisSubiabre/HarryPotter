const elementContainer = document.querySelector('.box-area');

async function potterAPI() {
    try {
        const res = await fetch('https://potterapi-fedeperin.vercel.app/es/houses');
        const data = await res.json();
        return data;
    } catch (e) {
        alert(e);
    }
}

async function render() {
    const data = await potterAPI();
    let template = '';
    let count = 0;
    data.forEach((element) => {
        template += `
                <div class="box">
                    <img src="./assets/imgs/${count}.png" alt="">
                    <div class="overlay">
                        <h3>${element.house}</h3>
                        <p>Fundador: ${element.founder}</p>
                        <p>Animal: ${element.animal} ${element.emoji}</p>
                    </div>
                </div>
    `;
    count++;
    });
    elementContainer.innerHTML = template
}

render();