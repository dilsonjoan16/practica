<?php
 $nombre = $_POST["nombre"];
 $apellido = $_POST["apellido"];
 $usuario = $_POST["usuario"];
 $password = $_POST["contraseña"];
 $email = $_POST["correo"];
 $telefono = $_POST["telefono"];
 $codigo = $_POST["codigo"];
 $localidad = $_POST["localidad"];
 $direccion = $_POST["direccion"];
 $tipod = $_POST["documento"];
 $sexo = $_POST["sexo"];
 $cedula = $_POST["cedula"];
 $bdate = $_POST["nacimiento"];

if (!empty($nombre) || !empty($apellido) || !empty($usuario) || !empty($password) || !empty($email) || !empty($telefono) || !empty($codigo) || !empty($localidad) || !empty($direccion) || !empty($sexo) || !empty($tipod) || !empty($cedula) || !empty($bdate)) {
    $host = "localhost";
    $dbusername = "root";
    $dbpassword = "";
    $dbname = "bicentconsejo";

    $conn=new mysqli($host,$dbusername,$dbpassword,$dbname);
    if (mysqli_connect_error()) {
        die('connect error('.mysqli_connect_errno().')'.mysqli_connect_error());
    }
    else {
        $SELECT="SELECT usuarios from usuario where usuarios = ? limit 1";
        $INSERT="INSERT INTO registro(nombre,usuario,password,apellido,email,telefono,codigo,localidad,direccion,sexo,tipod,cedula,bdate)values(?,?,?,?,?,?,?,?,?,?,?,?,?)";

        $stmt=$conn-> prepare($SELECT);
        $stmt ->bind_param('i',$telefono);
        $stmt ->execute();
        $stmt ->bind_result($usuario);
        $rnum=$stmt->num_rows();
        if($rnum==0){
            $stmt->close();
            $stmt=$conn-> prepare($INSERT);
            $stmt->bind_param("sssssiissssii",$nombre,$usuario,$password,$apellido,$email,$telefono,$codigo,$localidad,$direccion,$sexo,$tipod,$cedula,$bdate);
            $stmt->execute();
            echo "REGISTRO COMPLETADO";
        }
        else {
            echo "El usuario ingresado ya se encuentra en uso. <br>";
            echo "Para poder continuar le recomendamos ingresar otro. <br>";
        }
        $stmt->close();
        $conn->close();
    }
}
else {
    echo "Todos los datos son obligatorios";
    die();
}














?>