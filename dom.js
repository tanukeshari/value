function show(){
    var paswd=document.getElementById('paswd');
    if(paswd.type === "password" ){
       paswd.type= "text";
       paswd.style.marginTop="20px";

    }
    else{
       paswd.type="Password";
       
    }
}