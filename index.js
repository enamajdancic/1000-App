


function insert(){

    
    let text = document.getElementById("text");
    let unos = document.getElementById("unos");
    let p = document.createElement("li");

    let inserted = unos.value;

    
    p.textContent = inserted;
    
    text.appendChild(p);

    most= text.style.color ="red";
    medium= text.style.color ="yellow";
    least= text.style.color ="green"; 

    let most = document.getElementById("most");
    let medium = document.getElementById("medium");
    let least = document.getElementById("least");
    let importance = document.getElementByid("importance");


}
