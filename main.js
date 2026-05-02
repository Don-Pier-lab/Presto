let data = [
    { "id":1, "name": "Huawei X5", "category": "Elettronica", "price": "120.12", "type" : "sell" },
    { "id": 2, "name": "Fiat 500", "category": "Motori", "price": "2000.32", "type" : "search" },
    { "id": 3, "name": "Mazza da Baseball", "category": "Sport", "price": "20.15", "type" : "sell" },
    { "id": 4, "name": "Bilocale", "category": "Immobili", "price": "30000.54", "type" : "search" },
    { "id": 5, "name": "Felpa usata", "category": "Abbigliamento", "price": "10.42", "type" : "sell" },
    { "id": 6, "name": "Divani due posti", "category": "Arredamento", "price":"400.64", "type" : "search" },
    { "id": 7, "name": "Pala", "category": "Giardinaggio", "price":"30.45", "type" : "sell" },
    { "id": 8, "name": "Master of Pupo", "category": "Musica", "price": "15.64", "type" : "sell" },
    { "id": 9, "name": "TV Samsung", "category": "Elettronica", "price": "230.42", "type" : "sell" },
    { "id": 10, "name": "Ford Puma", "category": "Motori", "price": "25000.02", "type" : "sell" },
    { "id": 11, "name": "Pallone da calcio", "category": "Sport", "price": "30.12", "type" : "search" },
    { "id": 12, "name": "Trilocale", "category": "Immobili", "price": "55000.54", "type" : "sell" },
    { "id": 13, "name": "Sciarpa scolorita", "category": "Abbigliamento", "price": "5.23", "type" : "sell" },
    { "id": 14, "name": "Lampada", "category": "Arredamento", "price": "70.65", "type" : "sell" },
    { "id": 15, "name": "Concime", "category": "Giardinaggio", "price": "2.45", "type" : "search" },
    { "id": 16, "name": "Basso nuovo", "category": "Musica", "price": "300.62", "type" : "sell" },
    { "id": 17, "name": "Cuffie Sony", "category": "Elettronica", "price": "120.65", "type" : "sell" },
    { "id": 18, "name": "Ducati Monster", "category": "Motori", "price": "12000.13", "type" : "sell" },
    { "id": 19, "name": "Pattini", "category": "Sport", "price": "90.64", "type" : "search" },
    { "id": 21, "name": "Guanti invernali", "category": "Abbigliamento", "price": "22.04", "type" : "sell" },
    { "id": 22, "name": "Scrivania in vetro", "category": "Arredamento", "price": "600.63", "type" : "search" },
    { "id": 23, "name": "Secchio", "category": "Giardinaggio", "price": "30.43", "type" : "search" },
    { "id": 24, "name": "Compilation Pupo", "category": "Musica", "price": "9.93", "type" : "search" },
    { "id": 25, "name": "Auricolari Sennheiser", "category": "Elettronica", "price": "120.93", "type" : "sell" },
    { "id": 26, "name": "Fiat 300", "category": "Motori", "price": "2560.42", "type" : "sell" },
    { "id": 27, "name": "Set mazze da golf", "category": "Sport", "price": "4320.43", "type" : "search" },
    { "id": 28, "name": "Posto augo", "category": "Immobili", "price": "2200.63", "type" : "search" },
    { "id": 29, "name": "Zaino Decathlon", "category": "Abbigliamento", "price": "55.55", "type" : "sell" },
    { "id": 30, "name": "Comodino", "category": "Arredamento", "price": "210.12", "type" : "sell" },
    { "id": 31, "name": "Rastrello", "category": "Giardinaggio", "price": "5.62", "type" : "sell" },
    { "id": 32, "name": "Compilation Nino D'Angelo", "category": "Musica", "price": "1.91", "type" : "sell" },
    { "id": 33, "name": "IPhone X", "category": "Elettronica", "price": "1300.41", "type" : "search" },
    { "id": 34, "name": "Nissan Juke", "category": "Motori", "price": "25420.40", "type" : "sell" },
    { "id": 35, "name": "Guanti da palestra", "category": "Sport", "price": "11.54", "type" : "search" },
    { "id": 37, "name": "Scarpe Nike", "category": "Abbigliamento", "price": "240.33", "type" : "sell" },
    { "id": 38, "name": "Poltrona", "category": "Arredamento", "price": "420.66", "type" : "search" },
    { "id": 39, "name": "Semi", "category": "Giardinaggio", "price": "4.43", "type" : "sell" },
    { "id": 40, "name": "Biglietto Gods Of Metal", "category": "Musica", "price": "150.65", "type" : "search" },
    { "id": 41, "name": "Macbook Pro", "category": "Elettronica", "price": "2340.37", "type" : "search" },
    { "id": 42, "name": "Dacia Duster", "category": "Motori", "price": "13350.73", "type" : "sell" },
    { "id": 43, "name": "Canoa", "category": "Sport", "price": "520.03", "type" : "search" },
    { "id": 44, "name": "Cantina", "category": "Immobili", "price": "20000.12", "type" : "sell" },
    { "id": 45, "name": "Jeans", "category": "Abbigliamento", "price": "55.54", "type" : "sell" },
    { "id": 46, "name": "Lampadario", "category": "Arredamento", "price": "280.54", "type" : "sell" },
    { "id": 47, "name": "Trattore", "category": "Giardinaggio", "price": "12000.09", "type" : "sell" },
    { "id": 48, "name": "Plettro", "category": "Musica", "price": "0.99", "type" : "sell" },
    { "id": 49, "name": "Modem", "category": "Mimmo", "price": "2.99", "type" : "sell" }
];

let adsWrapper = document.querySelector('#adsWrapper');
let categoryWrapper = document.querySelector('#categoryWrapper');
let priceInput = document.querySelector('#priceInput');
let priceValue = document.querySelector('#priceValue');
let wordInput = document.querySelector('#wordInput');

let renderCards = (array) => {
    adsWrapper.innerHTML = ``;
    
    array.forEach(ad => {
        let col = document.createElement('div');
        col.classList.add('col-12', 'col-md-6', 'col-lg-4', 'mb-4');
        
        let typeBadge = ad.type === 'sell' ? 'bg-danger' : 'bg-success';
        let typeText = ad.type === 'sell' ? 'Vendo' : 'Cerco';

        col.innerHTML = `
            <div class="card h-100 shadow-sm border-0 position-relative">
                <span class="position-absolute top-0 end-0 badge ${typeBadge} m-3">${typeText}</span>
                <div class="card-body mt-4">
                    <h5 class="card-title fw-bold text-truncate" title="${ad.name}">${ad.name}</h5>
                    <h6 class="card-subtitle mb-3 text-muted">${ad.category}</h6>
                    <p class="card-text fs-4 fw-bold text-primary mb-0">€ ${parseFloat(ad.price).toFixed(2)}</p>
                </div>
            </div>
        `;
        
        adsWrapper.appendChild(col);
    });
};

let setCategories = () => {
    let categories = data.map(ad => ad.category);
    let uniqueCategories = Array.from(new Set(categories));
    
    uniqueCategories.forEach(category => {
        let div = document.createElement('div');
        div.classList.add('form-check', 'mb-2');
        div.innerHTML = `
            <input class="form-check-input category-radio" type="radio" name="category" id="${category}" value="${category}">
            <label class="form-check-label" for="${category}">
                ${category}
            </label>
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

setCategories();
setPrice();
renderCards(data);

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