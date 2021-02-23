
function send(){

    let name = document.getElementById('nombre');
    let email = document.getElementById('email');

    let checkQuotation = document.getElementById('cotizacion');
    let checkClaims = document.getElementById('reclamos');
    let checkComment = document.getElementById('comentario');
    let checkOther = document.getElementById('otros');
    let comentarios = document.getElementById('comentarios');

    if(name.value != '' && email.value != ''){
        swal("Message sended", "We will contact you soon", "success");
        // swal("Good job!", "You clicked the button!", "success").then((value) => {
        //     swal(`The returned value is: ${value}`);
        //   });
    }
    
 
}