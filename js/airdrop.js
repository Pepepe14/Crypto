document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const nombre = document.getElementById("nombre").value;
    const id = document.getElementById("id").value;
    const wallet = document.getElementById("wallet").value;
  
    const datos = {
      nombre: nombre,
      id: id,
      wallet: wallet,
    };
  
    fetch("http://localhost:5000/api/guardarDatos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    })
      .then((response) => {
        if (response.ok) {
          document.getElementById("mensaje").style.display = "block";
        }
      })
      .catch((error) => {
        console.error("Error al guardar los datos:", error);
      });
  });