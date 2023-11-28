const getPhones = () => {
    const searchElement = document.getElementById('search-text');
    const searchElementText = searchElement.value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchElementText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhones(data.data))
}
const displayPhones = (datas) => {
    // console.log(datas[0].slug);
    const container = document.getElementById('phones-container');
    container.textContent = '';
    for (const data of datas) {
        const div = document.createElement('div');
        div.classList.add('col');
        console.log(data.slug);
        div.innerHTML = `
        <div class="card">
        <img src="${data.image}" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">${data.brand}</h5>
            <p class="card-text">${data.phone_name}</p>
            <button onclick="getDetails('${data.slug}')">Details</button>
        </div>
        </div>`;
        container.appendChild(div);
    }
}

const getDetails = (data) => {
    // console.log(data);
    const url = `https://openapi.programming-hero.com/api/phone/${data}`;
    fetch(url)
        .then(res => res.json())
        .then(data => diplayDetails(data.data))
}
const diplayDetails = (datas) => {
    // console.log(datas);
    const container = document.getElementById('detail-container');
    container.innerText = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <img src="${datas.image}" class="card-img-top w-50 mx-auto my-4" alt="">
        <div class="card-body">
            <h5 class="card-title">${datas.brand}</h5>
            <p class="card-text">Chipset: ${datas.mainFeatures.chipSet}</p>
            <p class="card-text">Display Size:${datas.mainFeatures.displaySize}</p>
            <p class="card-text">Memory: ${datas.mainFeatures.memory}</p>
            <p class="card-text">Storage: ${datas.mainFeatures.storage}</p>
            <p class="card-text">Bluetooth: ${datas.others.Bluetooth}</p>
            <p class="card-text">USB: ${datas.others.USB}</p>
            <p class="card-text">Radio: ${datas.others.Radio}</p>
            <p class="card-text">ReleaseDate: ${datas.releaseDate}</p>
            <a href="https://www.apple.com/iphone/" class="btn btn-primary">Buy</a>
        </div>`;
    container.appendChild(div);
}