function RealizarSuma(){
    const numero1= parseFloat(document.getElementById("numero1").value);
    const numero2= parseFloat(document.getElementById("numero2").value);
    if(isNaN(numero1) || isNaN(numero2)){
        alert("Por favor ingresa numero valido");
        return;
    }
    const suma= numero1+numero2;
    document.getElementById("resultado").innerText=`La suma es: ${suma}`;
}
const menu =document.getElementById('menu');
const menuData=[
    {"menu":"Inicio","src": "index.html"},
    {"menu":"Operaciones","src": "operaciones.html"},
    {"menu":"CSS","src": "fotos.html"},
    {"menu":"UCACUE","src": "https://www.ucacue.edu.ec/"}
];
menuData.forEach(item => {
    const listItem=document.createElement('li');
    const link=document.createElement('a');
    link.href=item.src;
    link.textContent=item.menu;
    listItem.appendChild(link);
    menu.appendChild(listItem);
});