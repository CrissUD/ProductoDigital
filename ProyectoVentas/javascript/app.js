function validar(){
    var f=true;
    for (var i=0; i<3; i++)
        if (!document.getElementById("input"+i).value)
            f=false;
    if (f)
        document.form.action = "exito.html"; 
    else 
        document.form.action="falla.html"; 
}