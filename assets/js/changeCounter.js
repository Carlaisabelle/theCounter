documentElements.changeToRandom.addEventListener('click', () => {
    if(documentElements.standardCounterContainer.classList.contains('active')) {
        documentElements.standardCounterContainer.classList.remove('active');
        documentElements.randomCounterContainer.classList.add('active');
    }
})

documentElements.changeToStandard.addEventListener('click', () => {
    if(documentElements.randomCounterContainer.classList.contains('active')) {
        documentElements.randomCounterContainer.classList.remove('active');
        documentElements.standardCounterContainer.classList.add('active');
    }
})