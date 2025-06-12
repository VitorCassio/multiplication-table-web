function tabuada() 
{
    var conteudo  = "";
for (var y = 0; y < 11; y++) {
    var numero = document.getElementById('numero').value;
    var resultado ;
    resultado = numero * y ;
    conteudo += numero + " X " + y  + " = " + resultado + "<br>" ;
}
document.getElementById ("display").innerHTML = conteudo ;
}