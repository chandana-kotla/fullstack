function addMoney(){
    var totalBudget=parseInt(document.getElementById("totalBudget").innerHTML);
    var currentbudget=parseInt(document.getElementById("currentBalance").innerHTML);
    var money=parseInt(document.getElementById("money").innerHTML);
    if(money==" " ||isNaN(money)){
        alert("please enter a valid number");
    }else{
        totalBudget+=money;
        currentbudget+=money;
        document.getElementById("totalBudget").innerHTML=totalBudget;
        document.getElementById("currentBalance").innerHTML=currentbudget;
     }
}
function addExpense(){
    var currentbudget=parseInt(document.getElementById("currentBalance").innerHTML);
    var expensename=document.getElementById("expenseName").value;
    var expenseAmount=parseInt(document.getElementById("expenseAmount").value);
    if(expensename.length ==" "){
        alert("please enter an expense name");
    }else if(expenseAmount==" " || isNaN(expenseAmount)){
        alert("please enter a valid amount");
    }else if(expenseAmount<=currentbudget){
        currentbudget-=expenseAmount;
        document.getElementById("currentBalance").innerHTML=currentbudget;
        var para=document.createElement('p');
        para.innerHTML=`Expense name: ${expensename} <br> Expense Amount: ${expenseAmount}`;
        document.getElementById("addedExpenses").appendChild(para);
    }else{
        alert("sorry your expense is higher than the current budget");
    }
}