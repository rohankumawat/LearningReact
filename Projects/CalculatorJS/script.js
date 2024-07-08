let input = document.getElementById('input');
let button = document.querySelectorAll('button'); // Select all buttons (its not an ID)

button.forEach(element => {
    element.addEventListener('click', (e) => {
        console.log(e.target.textContent);

        if(e.target.textContent === 'C'){
            input.innerText = '';
        }
        else if(e.target.textContent === '<'){
            input.innerText = input.innerText.slice(0, -1); // Remove the last character
        }
        else{
            input.innerText += e.target.textContent;
        }
    });
});