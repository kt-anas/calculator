const billInput = document.getElementById('billTotalInput');
const tipInput = document.getElementById('numberOfPeople');
const numberOfPeopleDiv = document.getElementById('numberOfPeople');
const perPersonTotalDiv = document.getElementById('perPersonTotal');


let numberOfPeople = Number(numberOfPeopleDiv.innerText);


const calculateBill = () => {
    const bill = Number(billInput.value);
   

    const  tip = Number(tipInput.value) / 100
 
    const tipAmount = bill * tip;

    console.log(tip)

    
}
 

  