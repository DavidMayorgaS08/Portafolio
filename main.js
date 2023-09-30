window.addEventListener("load", function(){
    document.getElementById("loader").classList.remove("loader2");

    setTimeout(function() {
        document.getElementById("loader").classList.add("loader2");

        setTimeout(function() {
            document.getElementById("loader").classList.add("loader2");
        }, 1000);
    }, 2000);
});