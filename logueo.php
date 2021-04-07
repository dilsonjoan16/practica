<?php
require('conexion.php');
sleep(2);
$usu=$_POST['usuario'];
$pass=$_POST['contraseña'];
$usuarios=$mysqli->query("SELECT usuario FROM usuarios WHERE usuario='$usu' AND password='$pass'");
if ($usuarios->num_rows>0):
  $datos= $usuarios->fetch_assoc();
    echo json_encode(array('error'=>false,'usuario'=>$usu['usuario']));
else:
    echo json_encode(array('error'=>true));
endif;
$mysqli->close();
 ?>
