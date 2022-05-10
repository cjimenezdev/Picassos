function enviarCorreo(){
	$(".alerta_correo").css('display', 'none');
	$(".alerta_mensaje").css('display', 'none');
	$('.alerta_enviado').css('display','none');
	$('.alerta_error').css('display','none');
	
	var correo = $("#correo").val();
	var mensaje = $("#mensaje").val();
	var nombre = $("#nombre").val();
	var valido = 1;
	var validacion_correo = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
	
	
	if(!validacion_correo.test(correo)){
		$(".alerta_correo").css('display', 'block');
		valido = 0;
	}
	if(mensaje.length <= 5 ){
		$(".alerta_mensaje").css('display', 'block');
		valido = 0;
	}

	if (valido == 1) {
		var datos = 'correo=' + correo + '&mensaje=' + mensaje + '&nombre=' + nombre ;
        $.ajax({
			type: "POST",
			url: "contacto.php",
			data: datos,
			success: function(res) {
				if (parseInt(res) == 1) {
				    let formulario = document.getElementById('formulario');
                    formulario.reset();
                    
				    $('.alerta_enviado').css('display','block');
				}else{
					$('.alerta_error').css('display','block');
				}
			},
			error: function(res) {
				$('.alerta_error').css('display','block');
			}
		});
	}
}