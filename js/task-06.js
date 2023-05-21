const input = document.querySelector(`#validation-input`);
input.addEventListener('blur', function(){
    const lengthInput = input.value.length;
    const lengthRequired = parseInt(input.getAttribute('data-length'));

    if(lengthInput === lengthRequired){
     input.classList.remove('invalid');
     input.classList.add('valid');
    }else{
      input.classList.remove(`valid`);
      input.classList.add(`invalid`);
    }
});