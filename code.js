function createTdElements(data){
    let tbody = document.getElementById("tbody");
    let tableRow = document.createElement('tr')
    tbody.appendChild(tableRow);
    for (let i=0; i < data.length;i++){
        let td = document.createElement("td")
        td.textContent = data[i];
        tableRow.appendChild(td);
    }
    tableRow.ondblclick = (e) =>{
       e.target.parentNode.remove();
    }
}
function storeInput(e){
    let inputNodeList = document.querySelectorAll("input");
    let dataAsArray = [];
    for (let i = 0; i<inputNodeList.length;i++){
        if (i == 1){
            let dateArray = inputNodeList[i].value.split('-');
            let year = dateArray.splice(0,1);
            dateArray.push(year);
            let dateStr = dateArray.join("-");
            dataAsArray.push(dateStr);
            inputNodeList[i].value="";
        } else{
            dataAsArray.push(inputNodeList[i].value)
            inputNodeList[i].value ="";
        }
    }
    e.preventDefault();
    createTdElements(dataAsArray);
}
function init(){
    let button = document.querySelector('button');
    button.onclick = event => storeInput(event);
}
window.onload=init;
