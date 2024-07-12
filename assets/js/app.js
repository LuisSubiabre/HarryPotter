const elementContainer = document.querySelector('.box-area');

async function potterAPI() {
    try {
        const res = await fetch('https://potterapi-fedeperin.vercel.app/es/books');
        const data = await res.json();
        return data;
    } catch (e) {
        alert(e);
    }
}

async function render() {
    const data = await potterAPI();
    let template = '';
    data.forEach((element) => {
        template += `
         
                        
                <div class="box">
                    <img src="${element.cover}" alt="">
                    <div class="overlay">
                        <h3>${element.title}</h3>
                        <p>${element.description}</p>
                    </div>
                </div>
          
    `
    });
    elementContainer.innerHTML = template
}

render();