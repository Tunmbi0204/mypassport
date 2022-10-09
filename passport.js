function name1(){
    let input = document.getElementById('name');
    let output = document.getElementById('myname');
      output.innerHTML = input.value
      output.value = input.value
}

function email(){
    let input = document.getElementById('email');
    let output = document.getElementById('myemail');
      output.innerHTML = input.value
      output.value = input.value
}

 function nomber() {
    let input = document.getElementById('number');
    let output = document.getElementById('inputnumber');
      output.innerHTML = input.value
   
    let phone = document.getElementById('number').value;
    if(phone.startsWith('070') || phone.startsWith('080')  || phone.startsWith('081') || phone.startsWith('090'))
         if(phone.length == 11){
            valid = "valid"} 
            else{
     valid = "Number Not Valid"}  
     else{
    valid = "Number Not Valid"}

document.getElementById('result').innerHTML = valid;
}