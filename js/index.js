const getPhones = () => {
    const searchElement = document.getElementById('search-text');
    const searchElementText = searchElement.value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchElementText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
}