document.addEventListener('dblclick', function (event) {
    event.preventDefault();
}, { passive: false });

function createDocument() {
    const mainElement = document.createElement('main');
    document.body.appendChild(mainElement);

    const mainTitle = document.createElement('h1');
    mainTitle.textContent = 'Il Contatore';
    mainElement.appendChild(mainTitle);

    const description = document.createElement('h5');
    description.innerHTML = 'Incrementa o decrementa il contatore cliccando sui pulsanti "+" e "-".<br>Quando vuoi ricominciare il conteggio, clicca sul pulsante "Ricomincia"!';
    mainElement.appendChild(description);

    const standardCounterContainer = document.createElement('div');
    standardCounterContainer.classList.add('counterContainer', 'counterStandard','active');
    mainElement.appendChild(standardCounterContainer);

    const displayStandardCounter = document.createElement('div');
    displayStandardCounter.classList.add('counterDisplay');
    standardCounterContainer.appendChild(displayStandardCounter);

    const countingStandard = document.createElement('p');
    countingStandard.classList.add('counting');
    displayStandardCounter.appendChild(countingStandard);

    const buttonsStandard = document.createElement('div');
    buttonsStandard.classList.add('counterButtons');
    standardCounterContainer.appendChild(buttonsStandard);

    const decrementStandard = document.createElement('button');
    decrementStandard.classList.add('decrement');
    decrementStandard.textContent = '-';
    buttonsStandard.appendChild(decrementStandard);

    const incrementStandard = document.createElement('button');
    incrementStandard.classList.add('increment');
    incrementStandard.textContent = '+';
    buttonsStandard.appendChild(incrementStandard);

    const otherButtonsStandard = document.createElement('div');
    otherButtonsStandard.classList.add('otherButtonsContainer');
    standardCounterContainer.appendChild(otherButtonsStandard);

    const resetStandard = document.createElement('button');
    resetStandard.classList.add('otherButton', 'standardReset');
    resetStandard.textContent = 'Ricomincia';
    otherButtonsStandard.appendChild(resetStandard);

    const changeToRandom = document.createElement('button');
    changeToRandom.classList.add('otherButton');
    changeToRandom.textContent = 'Vuoi partire da un numero casuale?';
    otherButtonsStandard.appendChild(changeToRandom);

    const randomCounterContainer = document.createElement('div');
    randomCounterContainer.classList.add('counterContainer', 'counterRandom');
    mainElement.appendChild(randomCounterContainer);

    const displayRandomContainer = document.createElement('div');
    displayRandomContainer.classList.add('counterDisplay');
    randomCounterContainer.appendChild(displayRandomContainer);

    const countingRandom = document.createElement('p');
    countingRandom.classList.add('counting');
    displayRandomContainer.appendChild(countingRandom);

    const buttonsRandom = document.createElement('div');
    buttonsRandom.classList.add('counterButtons');
    randomCounterContainer.appendChild(buttonsRandom);

    const decrementRandom = document.createElement('button');
    decrementRandom.classList.add('decrement');
    decrementRandom.textContent = '-';
    buttonsRandom.appendChild(decrementRandom);

    const incrementRandom = document.createElement('button');
    incrementRandom.classList.add('increment');
    incrementRandom.textContent = '+';
    buttonsRandom.appendChild(incrementRandom);

    const otherButtonsRandom = document.createElement('div');
    otherButtonsRandom.classList.add('otherButtonsContainer');
    randomCounterContainer.appendChild(otherButtonsRandom);

    const resetRandom = document.createElement('button');
    resetRandom.classList.add('otherButton', 'randomReset');
    resetRandom.textContent = 'Ricomincia';
    otherButtonsRandom.appendChild(resetRandom);

    const changeToStandard = document.createElement('button');
    changeToStandard.classList.add('otherButton');
    changeToStandard.textContent = 'Vuoi partire da 0?';
    otherButtonsRandom.appendChild(changeToStandard);

    return {
        mainElement,
        standardCounterContainer,
        countingStandard,
        decrementStandard,
        incrementStandard,
        resetStandard,
        changeToRandom,
        randomCounterContainer,
        countingRandom,
        decrementRandom,
        incrementRandom,
        resetRandom,
        changeToStandard
    }
}
const documentElements = createDocument();

class Counter {
    constructor(counterContainer, startingValue, counterDisplay, decrementButton, incrementButton, resetButton) {
        this.counterContainer = counterContainer;
        this.startingValue = startingValue;
        this.currentValue = startingValue;
        this.counterDisplay = counterDisplay;
        this.decrementButton = decrementButton;
        this.incrementButton = incrementButton;
        this.resetButton = resetButton;

        this.counterSetup();
        this.numberDecrement();
        this.numberIncrement();
        this.resetCounter();
    }
    counterSetup() {
        this.counterDisplay.textContent = `Il numero attuale è ${this.currentValue}`;
    };

    numberDecrement() {
        this.decrementButton.addEventListener('click', () => {
            --this.currentValue;
            this.counterDisplay.textContent = `Il numero attuale è ${this.currentValue}`;
        })
    };

    numberIncrement() {
        this.incrementButton.addEventListener('click', () => {
            ++this.currentValue;
            this.counterDisplay.textContent = `Il numero attuale è ${this.currentValue}`;
        })
    };

    resetCounter() {
        this.resetButton.addEventListener('click', () => {
            if(this.resetButton.classList.contains('standardReset')) {
                this.currentValue = this.startingValue;
                this.counterDisplay.textContent = `Il numero attuale è ${this.currentValue}`;
            } else if(this.resetButton.classList.contains('randomReset')) {
                let newRandomValue = Math.floor(Math.random() * 100) + 1;
                this.currentValue = newRandomValue;
                this.counterDisplay.textContent = `Il numero attuale è ${this.currentValue}`;
            }
        })
    }
}

const standardCounter = new Counter(documentElements.standardCounterContainer, 0, documentElements.countingStandard, documentElements.decrementStandard, documentElements.incrementStandard, documentElements.resetStandard);

const randomCounter = new Counter(documentElements.randomCounterContainer, Math.floor(Math.random() * 100) + 1, documentElements.countingRandom, documentElements.decrementRandom, documentElements.incrementRandom, documentElements.resetRandom);