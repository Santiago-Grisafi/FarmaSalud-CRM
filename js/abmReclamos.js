$(document).ready(function () {
    $('.btn-borrar').on('click', function (event) {
        event.preventDefault();
        var $tr = $(this).closest('tr');
        bootbox.confirm('Quiere borrar el reclamo?', function (result) {
            if (result == true) { $tr.remove(); }
        })
    })



    $('.btn-ver-inline').on('click', function (event) {
        event.preventDefault();
        var $soyElTr = $(this).closest('tr');
        var $proximoTr = $soyElTr.next();
        //$proximoTr.show();
        //$proximoTr.css('display', 'inline');
        $proximoTr.toggle('slow');

    });

    $('.btn-ver-modal').on('click', function (event) {
        event.preventDefault();
        var miModal = new bootstrap.Modal('#modalDatos');
        miModal.show();
    });

    $('.btn-ver-modal-alta').on('click', function (event) {
        event.preventDefault();
        let modal = new bootstrap.Modal('#altaModalDatos');
        modal.show();
    })
})