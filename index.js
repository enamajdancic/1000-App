
function insert(){
    let text = document.getElementById("text");
    let unos = document.getElementById("unos");
    let p = document.createElement("li");

    let inserted = unos.value;
    
    
    p.textContent = inserted;
    text.appendChild(p);
}


