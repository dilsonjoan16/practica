jQuery(document).on('submit','#logueo',function(event) {
    event.preventDefault();

    jQuery.ajax({
        url: 'logueo.php',
        type: 'POST',
        datatype: 'json',
        data: $(this).serialize(),
        beforeSend: function(){
            $('.enviar').val('Validando...');
        }
    })
    .done(function(respuesta){
        console.log(respuesta);
        if (!respuesta.error) {
            location.href = 'practica 1.html';
            /*if (respuesta.tipo == 'Admin') {
                location.href = 'boletin.html';
            } else if(respuesta.tipo == 'Usuario'){
                location.href = 'practica 1.html';
            }*/
        } else {
            $('.error').slideDown('slow');
            setTimeout(function(){
                $('.error').slideUp('slow');
            },3000);
            $('.enviar').val('Iniciar Sesion');
        }
    })
    .fail(function(resp){
        console.log(resp.responseText);
    })
    .always(function(){
        console.log("complete");
    });
});