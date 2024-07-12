const elementContainer = document.querySelector('.box-area');

async function potterAPI() {
    try {
        const res = await fetch('https://potterapi-fedeperin.vercel.app/es/characters');
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
                    <img src="${element.image}" alt="">
                    <div class="overlay">
                        <h3>${element.fullName}</h3>
                        <p>Casa: ${element.hogwartsHouse}</p>
                        <p>Fecha Nacimiento: ${element.birthdate}</p>
                    </div>
                </div>
    `;
    count++;
    });
    elementContainer.innerHTML = template
}

render();