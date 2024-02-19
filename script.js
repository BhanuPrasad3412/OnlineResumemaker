// Resume Builder Field

function addNewField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter Here")
    newNode.setAttribute("rows",3);

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");


    weOb.insertBefore(newNode,weAddButtonOb);
}
function addNewAqButton(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter Here")
    newNode.setAttribute("rows",3);

    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("academicAddButton");

    aqOb.insertBefore(newNode,aqAddButtonOb)
}


// Generate CV

function generateCV(){
    let nameField=document.getElementById('nameField').value;
    let nameT1=document.getElementById('nameT1');
    nameT1.innerHTML=nameField;

    //direct
    document.getElementById('nameT2').innerHTML=nameField;
    
    //contactField
    document.getElementById('contactT').innerHTML=document.getElementById('contactField').value;

    //EmailField
    document.getElementById('emailT').innerHTML=document.getElementById('emailField').value;

    //Address Field
    document.getElementById('addressT').innerHTML=document.getElementById('addressField').value;

    //Fb Field
    document.getElementById('fbT').innerHTML=document.getElementById('fbField').value;

    //LinkedIn Field
    document.getElementById('linkT').innerHTML=document.getElementById('linkedField').value;

    //GitHub Field
    document.getElementById('gitT').innerHTML=document.getElementById('linkedField').value;

    //Objective Field
    document.getElementById('objectiveT').innerHTML=document.getElementById('objectField').value;



    //work Experiance Field
    let wes =document.getElementsByClassName("weField");

    let str="";
    for(let a of wes)
    {
        str=str + `<li> ${a.value} </li>`;
    }
    document.getElementById('weT').innerHTML=str;


    //Academic Field
    let aqs =document.getElementsByClassName("eqField");

    let str1="";
    for(let b of aqs)
    {
        str1+= `<li> ${b.value} </li>`;
    }
    document.getElementById('aqT').innerHTML=str;



    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';
}

function printCV()
{
    window.print();
}