const from = document.getElementById('from')
const to = document.getElementById('to')
const inputField = document.getElementById('input_field')
const calculateBtn = document.getElementById('calculate_btn')

calculateBtn.addEventListener('click', ()=>{
    console.log(from.value)
    console.log(to.value)
    console.log(inputField.value)
})