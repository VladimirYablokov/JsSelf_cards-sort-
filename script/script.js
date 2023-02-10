const addFormElem = document.forms[0];
const searchFormElem = document.forms[1];
const resultElem = document.querySelector('#result');
const upSortElem = document.querySelector('.sortUp');
const downSortElem = document.querySelector('.sortDown');
let cards = ['2', 'Vladimir', 'Yablokov', '3', 'learn', 'Java', 'script', '1'];

addFormElem.addEventListener('submit', event => {
    event.preventDefault();
    if (addFormElem.title.value === '') {
        alert('введите название')
    } else {
        const name = event.target.title.value;
        cards.push(name);
        render();
        event.target.reset();
    };
});

searchFormElem.addEventListener('submit', event => {
    event.preventDefault();
    if (searchFormElem.search.value === '') {
        alert('введите значение поиска')
    } else {
        cards = cards.filter(elem => elem === searchFormElem.search.value);
        render();
        event.target.reset();
    };
});

upSortElem.addEventListener('click', event => {
    cards.sort((a, b) => {
        if (a.toLowerCase() < b.toLowerCase()) {
            return -1;
        }
        if (a.toLowerCase() > b.toLowerCase()) {
            return 1;
        }
        return 0;
    });
    render();
});

downSortElem.addEventListener('click', event => {
    cards.sort((a, b) => {
        if (a.toLowerCase() > b.toLowerCase()) {
            return -1;
        }
        if (a.toLowerCase() < b.toLowerCase()) {
            return 1;
        }
        return 0;
    });
    render();
});
render();

function render() {
    resultElem.innerText = '';
    for (let i = 0; i < cards.length; i++) {
        let name = cards[i]
        const card = document.createElement('div');
        const nameElem = document.createElement('p');
        resultElem.append(card);
        card.append(nameElem);
        nameElem.innerText = name;
    };
};
