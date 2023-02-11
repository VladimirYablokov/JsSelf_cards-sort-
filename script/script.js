const addFormElem = document.forms[0];
const searchFormElem = document.forms[1];
const resultElem = document.querySelector('#result');
const upSortElem = document.querySelector('.sortUp');
const downSortElem = document.querySelector('.sortDown');
let cards = [
    {
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
        resultElem.append(card);
        card.append(nameElem);
        nameElem.innerText = `${elem.title} (${elem.status})`;
    };
};

addFormElem.addEventListener('submit', event => {
    event.preventDefault();
        const title = event.target.title.value;
        const status = event.target.status.value;
        if(title !== '' && status !== ''){
            cards.push({title, status});
        }else{
            alert('одно из полей пустое!')
        }
        event.target.title.value = '';
        event.target.status.value = ''
        render(cards);
});

searchFormElem.addEventListener('submit', event => {
    event.preventDefault();
    if (searchFormElem.search.value === '') {
        alert('введите значение поиска')
    } else {
        const value = event.target.search.value
        const lst = cards.filter(elem => elem.title.startsWith(value))
        event.target.search.value = ''
        render(lst);
    };
});

// upSortElem.addEventListener('click', event => {
//     cards.sort((a, b) => {
//         if (a.toLowerCase() < b.toLowerCase()) {
//             return -1;
//         }
//         if (a.toLowerCase() > b.toLowerCase()) {
//             return 1;
//         }
//         return 0;
//     });
//     render();
// });

// downSortElem.addEventListener('click', event => {
//     cards.sort((a, b) => {
//         if (a.toLowerCase() > b.toLowerCase()) {
//             return -1;
//         }
//         if (a.toLowerCase() < b.toLowerCase()) {
//             return 1;
//         }
//         return 0;
//     });
//     render();
// });
render(cards);

