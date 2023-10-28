const getPhones = () => {
    const searchElement = document.getElementById('search-text');
    const searchElementText = searchElement.value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchElementText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhones(data.data))
}
const displayPhones = (datas) => {

    const container = document.getElementById('phones-container');
    container.textContent = '';
    for (const data of datas) {
        const div = document.createElement('div');
        div.classList.add('col');
        console.log(data.image);
        div.innerHTML = `
        <div class="card">
        <img src="${data.image}" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">${data.brand}</h5>
            
            <p class="card-text">${data.phone_name}</p>
        </div>
        </div>`;
        container.appendChild(div);
    }
}