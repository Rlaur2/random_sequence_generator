const generate = (() => {
    /* the three elements on the page that can be interacted with */
    const firstInput = document.querySelector('#quantity');
    const secondInput = document.querySelector('#picked');
    const button = document.querySelector('button');
    
    
    const generation = () => {
        if (firstInput.className.includes('error') && firstInput.value > 0) {
            firstInput.classList.toggle('error');
        } if (secondInput.className.includes('error') && secondInput.value > 0) {
            secondInput.classList.toggle('error');
        } if (firstInput.value === 0) {
            firstInput.classList.toggle('error');
        } if (secondInput.value === 0) {
            secondInput.classList.toggle('error');
        } if (firstInput.className.includes('error') || secondInput.className.includes('error')) {
            alert('The values cannot be less than or equal to 0 or greater than 999');
            firstInput.value = '';
            secondInput.value = '';
            return;
        } /* this bit of code is not working. For some reason it's acting
        as if the values are 3 digits long and it adds 0s to fill them in.
        For example, 3 > 25 since its actually checking 3(00) > 25(0).
        The lesson on form validation might provide insight, if not definitely
        look this up.
        if (secondInput.value > firstInput.value) {
            alert('The amount to be randomly picked cannot be greater than the total amount of numbers');
            firstInput.value = '';
            secondInput.value = '';
            return;
        }
        console.log(secondInput.value > firstInput.value);
        console.log(firstInput.value,secondInput.value); */
        const output = document.querySelector('.output');
        let ps = document.querySelectorAll('p');
        for (p of ps) {
            output.removeChild(p);
        };
        let numbersToChoose = [];
        for (i = 1; i <= firstInput.value; i++) {
            numbersToChoose.push(i);
        };
        for (i = 0; i < secondInput.value; i++) {
            let rng = Math.floor(Math.random()*(numbersToChoose.length))
            let picked = numbersToChoose[rng];
            numbersToChoose.splice(rng,1);
            let p = document.createElement('p');
            p.textContent = picked;
            output.appendChild(p);
        }
        console.log(numbersToChoose);
    }
    
    button.addEventListener('click',generation);
    
    
    /* Read up on the javascript form validation lesson since this is not working
    const noLeading0 = function() {
        console.log(this.value.length);
        console.log(this.value);
       if (this.value.length === 0 && this.value === 0) {
           console.log('yes');
           this.value = '';
       }
    }
    firstInput.addEventListener('input', noLeading0);
    secondInput.addEventListener('input', noLeading0);
    */
})();