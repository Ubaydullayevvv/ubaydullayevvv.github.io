function autocompleteStates(inputField) {
    let currentFocus;
    const zipCodeService = {
        async fetchStates() {
            try {
                const response = await fetch('https://api.zippopotam.us/us/00210');
                const data = await response.json();
                console.log(data);
                return Object.keys(data);
            } catch (error) {
                console.error('Error fetching states:', error);
                return [];
            }
        },
        async fetchZipCodes(state) {
            try {
                const response = await fetch(`https://api.zippopotam.us/us/${state}`);
                const data = await response.json();
                return data['places'];
            } catch (error) {
                console.error('Error fetching zip codes:', error);
                return [];
            }
        }
    };

    inputField.addEventListener('input', function (e) {
        const inputValue = this.value;
        closeAllLists();
        if (!inputValue) {
            return false;
        }
        currentFocus = -1;

        const statesContainer = document.createElement('div');
        statesContainer.setAttribute('id', this.id + 'autocomplete-list');
        statesContainer.setAttribute('class', 'autocomplete-items');

        this.parentNode.appendChild(statesContainer);

        zipCodeService.fetchStates()
            .then(states => {
                const matchingStates = states.filter(state => state.toLowerCase().startsWith(inputValue.toLowerCase()));
                matchingStates.forEach(state => {
                    const stateItem = document.createElement('div');
                    stateItem.innerHTML = `<strong>${state.substr(0, inputValue.length)}</strong>${state.substr(inputValue.length)}`;
                    stateItem.innerHTML += `<input type="hidden" value="${state}">`;
                    stateItem.addEventListener('click', function (e) {
                        inputField.value = this.getElementsByTagName('input')[0].value;
                        closeAllLists();
                    });
                    statesContainer.appendChild(stateItem);
                });
            })
            .catch(error => {
                console.error('Error fetching states:', error);
            });
    });

    inputField.addEventListener('keydown', function (e) {
        let statesContainer = document.getElementById(this.id + 'autocomplete-list');
        if (statesContainer) {
            statesContainer = statesContainer.getElementsByTagName('div');
        }
        if (e.keyCode === 40) { // arrow DOWN key
            currentFocus++;
            addActive(statesContainer);
        } else if (e.keyCode === 38) { // arrow UP key
            currentFocus--;
            addActive(statesContainer);
        } else if (e.keyCode === 13) { // ENTER key
            e.preventDefault();
            if (currentFocus > -1) {
                if (statesContainer) {
                    statesContainer[currentFocus].click();
                }
            }
        }
    });

    function addActive(statesContainer) {
        if (!statesContainer) {
            return false;
        }
        removeActive(statesContainer);
        if (currentFocus >= statesContainer.length) {
            currentFocus = 0;
        }
        if (currentFocus < 0) {
            currentFocus = (statesContainer.length - 1);
        }
        statesContainer[currentFocus].classList.add('autocomplete-active');
    }

    function removeActive(statesContainer) {
        for (let i = 0; i < statesContainer.length; i++) {
            statesContainer[i].classList.remove('autocomplete-active');
        }
    }

    function closeAllLists(element) {
        const statesContainer = document.getElementsByClassName('autocomplete-items');
        for (let i = 0; i < statesContainer.length; i++) {
            if (element !== statesContainer[i] && element !== inputField) {
                statesContainer[i].parentNode.removeChild(statesContainer[i]);
            }
        }
    }

    document.addEventListener('click', function (e) {
        closeAllLists(e.target);
    });
}

const fromStateInput = document.getElementById('from-state');
const toStateInput = document.getElementById('to-state');

autocompleteStates(fromStateInput);
autocompleteStates(toStateInput);
