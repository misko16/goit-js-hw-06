const counterValue = document.getElementById('value');
const decrementBtm = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
let value = 0;
//--------//
decrementBtm.addEventListener('click', () => {
 value -= 1;
 counterValue.textContent = value;
});
incrementBtn.addEventListener('click', () => {
    value += 1;
    counterValue.textContent = value;
})
