window.addEventListener("load", function(){
    document.getElementById("loader").classList.remove("loader2");

    setTimeout(function() {
        document.getElementById("loader").classList.add("loader2");

        setTimeout(function() {
            document.getElementById("loader").classList.add("loader2");
        }, 1000);
    }, 2000);
});


let elementos = document.querySelectorAll('.cont_a');

elementos.forEach(function(elemento) {
    let textoOriginal = elemento.querySelector('.text').textContent;

    elemento.addEventListener('mouseover', function() {
        let texto = elemento.querySelector('.text');
        texto.textContent = 'Visitar Sitio';
        texto.classList.add('negrita');
    });

    elemento.addEventListener('mouseout', function() {
        let texto = elemento.querySelector('.text');
        texto.textContent = textoOriginal;
        texto.classList.remove('negrita');
    });
});