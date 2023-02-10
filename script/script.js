const formElem = document.forms[0];
const resultElem = document.querySelector('#result');
const upSortElem = document.querySelector('.sortUp')
const downSortElem = document.querySelector('.sortDown')
let cards = ['a', 'W', 'c', 'z', 'B', ];


formElem.addEventListener('submit', event => {
    event.preventDefault();
    const name = event.target.title.value
    cards.push(name)
    render()

    event.target.reset()
})

function render() {
    resultElem.innerText = '';
    for (let i = 0; i < cards.length; i++) {
        let name = cards[i]
        const card = document.createElement('div');
        const nameElem = document.createElement('p');
        resultElem.append(card);
        card.append(nameElem);
        nameElem.innerText = name
        nameElem.value = ''
    }
}

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
})

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
})

render()