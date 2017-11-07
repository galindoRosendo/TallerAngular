function validarUsuario(){
  debugger
    var usuario = document.getElementById("txtUsuario").value;
    var contrasenia = document.getElementById("txtContrasenia").value;
    var login = false;
    var usuariosPermitidos = [
      {
        "usuario":"Rosendo_galindo",
        "contrasenia":"123"
      },
      {
      "usuario":"Juan_Perez",
      "contrasenia":"456"
    },
      {
      "usuario":"Luis_Rodriguez",
      "contrasenia":"789"
    }
    ];

    for (var i = 0; i < usuariosPermitidos.length; i++) {
      if (usuariosPermitidos[i].usuario == usuario) {
        if (usuariosPermitidos[i].contrasenia == contrasenia) {
          login = true;
        }
      }
    }

      if (login) {
        document.location.href = 'informacion.html';
      }
      else{
        alert("El usuario no se encuentra en la lista de permitidos.");
      }
    }
