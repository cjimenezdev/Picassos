<?php

if (isset($_POST['correo']) && isset($_POST['mensaje']) && isset($_POST['nombre'])) {
    
    $patron_texto = "/^[a-zA-ZáéíóúÁÉÍÓÚäëïöüÄËÏÖÜàèìòùÀÈÌÒÙ.,\s]+$/";
    
    $correo = $_POST['correo'];
	$mensaje = $_POST['mensaje'];
	$nombre = $_POST['nombre'];
    
    
		$from = $nombre;
		$to = "carlosjimenez1995@outlook.com";
		$subject = "Nuevo mensaje de ". $correo;
		$message = $mensaje;
		$headers = "From:" . $from;
	
	if( preg_match($patron_texto, $_POST['mensaje']) ){
	    
	    if($correo != $to){
	        if (mail($to,$subject,$message, $headers)) {
	            echo 1;
	        }else{
	            echo 0;
	        }
	        
	    }else{
	        echo 'Debe ser un correo diferente';   
	    }
	    
	}else{
	    echo "El nombre sólo puede contener letras y espacios";
	    
	}
		
}else{
    echo 0;
}
