let adsWrapper = document.querySelector('#adsWrapper');
let categoryWrapper = document.querySelector('#categoryWrapper');
let priceInput = document.querySelector('#priceInput');
let priceValue = document.querySelector('#priceValue');
let wordInput = document.querySelector('#wordInput');

let data = [];

let renderCards = (array) => {
    adsWrapper.innerHTML = ``;

    if (array.length === 0) {
        adsWrapper.innerHTML = `
            <div class="empty-state">
                <strong>Nessun annuncio trovato</strong>
                Modifica i filtri per vedere altri risultati.
            </div>
        `;
        return;
    }

    array.forEach(ad => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <span class="card-badge">${ad.category}</span>
            <h3 class="card-title" title="${ad.name}">${ad.name}</h3>
            <p class="card-price">€ ${parseFloat(ad.price).toFixed(2)}</p>
        `;
        adsWrapper.appendChild(card);
    });
};

let setCategories = () => {
    let categories = data.map(ad => ad.category);
    let uniqueCategories = Array.from(new Set(categories));

    uniqueCategories.forEach(category => {
        let div = document.createElement('div');
        div.classList.add('category-item');
        div.innerHTML = `
            <input class="category-radio" type="radio" name="category" id="${category}" value="${category}">
            <label for="${category}">${category}</label>
        `;
        categoryWrapper.appendChild(div);
    });
};

let setPrice = () => {
    let prices = data.map(ad => parseFloat(ad.price));
    let maxPrice = Math.ceil(Math.max(...prices));

    priceInput.max = maxPrice;
    priceInput.value = maxPrice;
    priceValue.innerHTML = maxPrice;
};

let filterByCategory = (array) => {
    let checked = document.querySelector('.category-radio:checked');
    if (checked && checked.value !== 'All') {
        return array.filter(ad => ad.category === checked.value);
    }
    return array;
};

let filterByPrice = (array) => {
    return array.filter(ad => parseFloat(ad.price) <= parseFloat(priceInput.value));
};

let filterByWord = (array) => {
    return array.filter(ad => ad.name.toLowerCase().includes(wordInput.value.toLowerCase()));
};

let globalFilter = () => {
    let filteredByCategory = filterByCategory(data);
    let filteredByPrice = filterByPrice(filteredByCategory);
    let finalFiltered = filterByWord(filteredByPrice);

    renderCards(finalFiltered);
};

categoryWrapper.addEventListener('change', () => {
    globalFilter();
});

priceInput.addEventListener('input', () => {
    priceValue.innerHTML = priceInput.value;
    globalFilter();
});

wordInput.addEventListener('input', () => {
    globalFilter();
});

fetch('./annunci2.json')
    .then(response => response.json())
    .then(json => {
        data = json;
        setCategories();
        setPrice();
        renderCards(data);
    });
