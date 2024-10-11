
let form = document.querySelector('#form')
let amount_input = document.querySelector('#amount');
let select_first = document.querySelector('#first');
let select_second = document.querySelector('#second');
let result_input = document.querySelector('#result');



runEvent()
function runEvent() {
    form.addEventListener('submit', exChange);
    document.querySelectorAll('select').forEach(item => {
        item.addEventListener('change', exChange)
    })

}

async function exChange(e) {
    e.preventDefault();
    const firstCurrencyValue = select_first.options[select_first.selectedIndex].textContent
    const secondCurrencyValue = select_second.options[select_second.selectedIndex].textContent


    let response = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_fYGqZqyt5aEOR64qKf5up717xTG88Jd40CzEJ8IW&base_currency=${firstCurrencyValue}`)
    let result = await response.json()
    let data = result.data[secondCurrencyValue]

    let exChangeResult = Number(amount_input.value) * data;

   
  
    result_input.value = exChangeResult.toFixed(3);
  
      
    
   



}