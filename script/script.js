const addFormElem = document.forms[0];
const searchFormElem = document.forms[1];

const resultElem = document.querySelector('#result');

const upAlphabetSortElem = document.querySelector('.sortAlphabetUp');
const downAlphabetSortElem = document.querySelector('.sortAlphabetDown');

const upStatusSortElem = document.querySelector('.sortStatusUp');
const downStatusSortElem = document.querySelector('.sortStatusDown');

let cards = [{
        title: 'Vova',
        status: '1'
    },
    {
        title: 'Yablokov',
        status: '2'
    },
    {
        title: 'learn',
        status: '3'
    },
    {
        title: 'Java',
        status: '4'
    },
    {
        title: 'script',
        status: '5'
    }
];

function render(list) {
    resultElem.innerText = '';
    for (let elem of list) {
        const card = document.createElement('div');
        const nameElem = document.createElement('p');
        const statusElem = document.createElement('p')
        resultElem.append(card);
        card.append(nameElem, statusElem);
        nameElem.innerText = `${elem.title}`;
        statusElem.innerText = `Status: ${elem.status}`
    };
};
render(cards);

addFormElem.addEventListener('submit', event => {
    event.preventDefault();
    const title = event.target.title.value;
    const status = event.target.status.value;
    if (title !== '' && status !== '') {
        cards.push({
            title,
            status
        });
    } else {
        alert('одно из полей пустое!')
    }
    event.target.title.value = '';
    event.target.status.value = ''
    render(cards);
});

searchFormElem.addEventListener('submit', event => {
    event.preventDefault();
    if (searchFormElem.search.value === '') {
        alert('введите значение поиска');
    } else {
        const value = event.target.search.value;
        const lst = cards.filter(elem => elem.title.startsWith(value));
        event.target.search.value = '';
        render(lst);
    };
});
upAlphabetSortElem.addEventListener('click', event => {
    cards.sort((value1, value2) => value1.title.localeCompare(value2.title))
    render(cards);
});
downAlphabetSortElem.addEventListener('click', event => {
    cards.sort((value1, value2) => value2.title.localeCompare(value1.title))
    render(cards);
});
upStatusSortElem.addEventListener('click', event => {
    cards.sort((value1, value2) => value1.status.localeCompare(value2.status))
    render(cards);
});
downStatusSortElem.addEventListener('click', event => {
    cards.sort((value1, value2) => value2.status.localeCompare(value1.status))
    render(cards);
});
