let form = document.getElementById("formulario");
let boton = document.getElementById("btnEnviar");

  ["nombre", "email", "mensaje"].forEach(function(id) {
    let campo = document.getElementById(id);
    if (campo) {
      campo.addEventListener("input", function () {
        boton.classList.remove("bg-red-600", "hover:bg-red-700");
        boton.classList.add("bg-green-600", "hover:bg-green-700");
      });
    }
  });
  
 const menuBtn = document.getElementById('menu-btn');
 const menu = document.getElementById('menu');
if (menuBtn && menu) {
  menuBtn.onclick = function () {
    menu.classList.toggle('hidden');
  };
  menu.querySelectorAll('a').forEach(function (link) {
    link.onclick = function () {
      menu.classList.add('hidden');
    };
  });
}
  
  if (form && boton) {
    form.addEventListener("submit", function (e) {
      let nombre = document.getElementById("nombre").value.trim();
      let email = document.getElementById("email").value.trim();
      let mensaje = document.getElementById("mensaje").value.trim();
      let errores = [];

      if (nombre.length < 3) {
        errores.push("El nombre es muy corto");
      }
      if (!email.includes("@") || !email.includes(".")) {
        errores.push("El email no es válido");
      }
      if (mensaje.length < 10) {
        errores.push("El mensaje es muy corto");
      }

      if (errores.length > 0) {
        e.preventDefault();
        boton.classList.remove("bg-green-600", "hover:bg-green-700");
        boton.classList.add("bg-red-600", "hover:bg-red-700");
        alert("¡ERROR! Revisá estos campos:\n" + errores.join("\n"));
      } else {
        e.preventDefault();
        boton.classList.remove("bg-red-600", "hover:bg-red-700");
        boton.classList.add("bg-green-600", "hover:bg-green-700");
        alert("¡Mensaje enviado! (Simulacion)");
        form.reset();
      }
    });
  }
