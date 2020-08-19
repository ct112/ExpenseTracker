let data = {expense:0,
            date:"",
            location:"",
            description:""
};

window.onload=init;
function inputData(){
    let inputNodeList = document.querySelectorAll("input");
    let button = document.getElementById("submit");
    let form = document.querySelector('form');

    form.addEventListener('submit',event=> {
        data.expense = document.form1.expense.value;
        data.date = document.form1.date.value;
        data.location = document.form1.location.value;
        data.description = document.form1.description.value;
        event.preventDefault();
    })

}
function init(){
    inputData();
}

