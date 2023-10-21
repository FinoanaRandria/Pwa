const inputField = document.getElementById('input-temp')
const formUnitField = document.getElementById('input-unit')
const toUnitField = document.getElementById('output-unit')
const outputField = document.getElementById('output-temp')
const form = document.getElementById('converter')



function convertTemp(value, formUnit, toUnit) {

    if (formUnit === "c") {
        if (toUnit === 'f') {
            return value * 9 / 5 + 32
        } else if (toUnit === 'k') {
            return value + 273.15;
        }
        return value
    }
    


    if ( formUnit === 'f') {

        if (toUnit === "c") {
          return (value - 32) * 5 /9;
  
          
        }else if (toUnit ===k ){
  
          return (value + 459.67) * 5 /9;
        }
  
       
  
  
      return value
      
  }
  
  
  
  if (formUnit === "k") {
   
       if(toUnit === 'c '){
  
          return value - 273.15
       }else if (toUnit === 'f') {
          return value * 9/3 - 459.67
       }
  
  
       return value
       
  
  
  
  
  }
   
    throw new Error('Invalid unit')

}


form.addEventListener('input', ()=>{

      const inputTemp = parseFloat(inputField.value)
      const formUnit = formUnitField.value
      const toUnit = toUnitField.value


   const outputTemp = convertTemp(inputTemp,formUnit,toUnit)

  outputField.value = (Math.round(outputTemp * 100)/100) + ' ' + toUnit.toUpperCase()
    


})



