
$('#bookModal').on('show.bs.modal', function (event) {

    $.get('../frontend/form.html', form => { //await
        let modal = document.getElementById('bookModal')
        let body = modal.querySelector('.modal-body')
        body.innerHTML = form
    })

})