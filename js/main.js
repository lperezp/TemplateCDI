$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
    
    $("#btn-sign-out").on("mouseover",function(){
        $("#sign-out").removeClass("hover");
    })

    $("#btn-sign-out").on("mouseout",function(){
        $("#sign-out").addClass("hover");
    })

    $('#tabla_registro').tablesorter(); 
    bsCustomFileInput.init()
        var btn = document.getElementById('btnResetForm')
        var form = document.querySelector('form')
        btn.addEventListener('click', function () {
          form.reset()
        })
});
