form.addEventListener("submit", function(e) {
    e.preventDefault(); // Impede o reload

    const novaObra = new ObraDeArte (this, describe, Img, alt);

    fetch ('/api/lista', {
        method: "POST",
        headers: {
            "content-Type": "application/json,"
        },
        body: JSON.stringify(novaObra)
    })
    .then(() => {
        window.location.href = "indez.html";
    });
});