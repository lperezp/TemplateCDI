$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    /* $("#dedo").toggleClass("hover"); */
    });
    
    $("#btn-sign-out").on("mouseover",function(){
        $("#sign-out").toggleClass("hover");
    });

    $('.card button').on('mouseover', function () {
        $(".card #dedoi").toggleClass("hidden");
     });

    $('#tabla_registro').tablesorter(); 
    bsCustomFileInput.init();
        var btn = document.getElementById('btnResetForm');
        var form = document.querySelector('form');
        btn.addEventListener('click', function () {
          form.reset()
        });
        
    
    
});
