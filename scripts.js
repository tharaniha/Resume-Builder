function addEducationField()
{
    //console.log("Adding edu field");
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("educationField");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter here");

    let eduOb = document.getElementById("edu");
    let educationButtonOb = document.getElementById("educationButton");

    eduOb.insertBefore(newNode,educationButtonOb);
}


function addSkills1Field()
{
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skills1Field");
    newNode.setAttribute("rows",1);
    newNode.setAttribute("placeholder","Enter here");

    let skills1Ob = document.getElementById("skills1");
    let skills1ButtonOb = document.getElementById("skills1Button");

    skills1Ob.insertBefore(newNode,skills1ButtonOb);
}

function addSkills2Field()
{
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skills2Field");
    newNode.setAttribute("rows",1);
    newNode.setAttribute("placeholder","Enter here");

    let skills2Ob = document.getElementById("skills2");
    let skills2ButtonOb = document.getElementById("skills2Button");

    skills2Ob.insertBefore(newNode,skills2ButtonOb);
}

function addExperienceField()
{
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("experienceField");
    newNode.setAttribute("rows",2);
    newNode.setAttribute("placeholder","Enter here");

    let expOb = document.getElementById("exp");
    let experienceButtonOb = document.getElementById("experienceButton");

    expOb.insertBefore(newNode,experienceButtonOb);
}


function generateCV()
{   
    //hiding form and showing cv after generating
    document.getElementById('cv-form').style.display="none";
    document.getElementById('cv-template').style.display="block";

    let nameField=document.getElementById("nameField").value;
    let name1T=document.getElementById("name1T");
    name1T.innerHTML=nameField;
    name2T.innerHTML=nameField;

    document.getElementById("phoneT").innerHTML=document.getElementById("phoneField").value;
    document.getElementById("emailT").innerHTML=document.getElementById("emailField").value;
    document.getElementById("linkedinT").innerHTML=document.getElementById("linkedinField").value;
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;    
    document.getElementById("profileT").innerHTML=document.getElementById("profileField").value;

    let edus = document.getElementsByClassName("educationField");
    str='';
    for(let e of edus) {
            str = str + `<li> ${e.value} </li>`; 
        }
    document.getElementById("educationT").innerHTML=str;


    let skills11 = document.getElementsByClassName("skills1Field");
    str='';
    for(let e of skills11) {
            str = str + `<li> ${e.value} </li>`; 
        }
    document.getElementById("skills1T").innerHTML=str;


    let skills22 = document.getElementsByClassName("skills2Field");
    str='';
    for(let e of skills22) {
            str = str + `<li> ${e.value} </li>`; 
        }
    document.getElementById("skills2T").innerHTML=str;


    let exps = document.getElementsByClassName("experienceField");
    str='';
    for(let e of exps) {
            str = str + `<li> ${e.value} </li>`; 
        }
    document.getElementById("experienceT").innerHTML=str;



    //setting picture
    let file = document.getElementById("imgField").files[0];

    console.log(file);

    let reader = new FileReader();

    reader.readAsDataURL(file);

    console.log(reader.result);

    reader.onload = function(){
    document.getElementById("imgTemplate").src = reader.result;
    };

    


}


function printCV()
{
    window.print();
}


