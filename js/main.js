//  get  calculate and  save button id
const calculates = document.getElementById('calculate');
const saveBtn = document.getElementById('saveBtn');

// get income value
function elementsId(id){
    const elementId = document.getElementById(id);
    
    const newId = parseFloat(elementId.value);
    return newId;
}
// calculating total expenss and balance down here
function totalAmount(){
    const food = elementsId('food');
    const rent = elementsId('rent');
    const clothes = elementsId('clothes');
    const income = elementsId('income');

    totalText = food+rent+clothes;
    totalExpenss = parseInt(totalText)
    return totalExpenss;
}
// checking balance 
function balanceRemainin(){
    const totalExpenss = totalAmount()
    const income = elementsId("income")
    const balance = income - totalExpenss
    const newBalance = parseFloat(balance)
    return newBalance;
}

// click handler for expenses and balance 
calculates.addEventListener("click",function(){
    // get function balance and total expenses
    const balance = balanceRemainin()
    const totalExpenses =totalAmount()
    const balanceAmount = document.getElementById('balanceAmount');
    const expenss = document.getElementById('totalExpenses');

    // get reuse function variable 
    const food = elementsId('food');
    const rent = elementsId('rent');
    const clothes = elementsId('clothes');
    const income = elementsId('income');

    // if else condition 

    if((food>=0 && rent>=0 && clothes>=0) && typeof balance ==="number" && balance>0  ){
        expenss.innerText =totalExpenses;
        balanceAmount.innerText =balance;
        balanceAmount.style.color='#000000';
        expenss.style.color='#000000';
    }
    else if( balance>=income || balance<=0){
        balanceAmount.style.color='red';
        balanceAmount.innerText = "please increse income";
        expenss.style.color='#000000';
        expenss.innerText =totalExpenses;
    }
    else{
         balanceAmount.innerText = "please check amount ";
         expenss.innerText = "please check amount";
         balanceAmount.style.color='red';
         expenss.style.color='red';
    }
})

// saving fron income and remaingin Balance 
function Save(){
    // get income and balance function
    const income = elementsId("income");
    const balance = balanceRemainin()

    // get element id
    const saveInputText = elementsId("saveInput");
    const savinAmount = document.getElementById('savingAmount');
    const remainingBalance  = document.getElementById('remainingBalance');

    // saving  and remainging balance method below
    const savingPercentvalue =   (saveInputText / 100) * income ;
    const savingPercent = parseInt(savingPercentvalue)
    const lastBalanceText = balance - savingPercent;
    const lastBalance = parseInt(lastBalanceText);

    // if else condition 
 
    if(0>saveInputText || 100<saveInputText){
        savinAmount.style.color='red';
        savinAmount.innerText = `you cant save ${saveInputText} %` ;
    }

    else if(lastBalance<0){
        savinAmount.style.color='red';
        remainingBalance.style.color='red';
        savinAmount.innerText = `you cant save ${saveInputText} %` ;
        remainingBalance.innerText = "please insert vaild amount" ;
    }
    else {
        savinAmount.innerText = savingPercent;
        remainingBalance.innerText = lastBalance;
        remainingBalance.style.color='#000000';
        savinAmount.style.color='#000000';
    }
   
}