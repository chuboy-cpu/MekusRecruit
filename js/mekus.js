function modal (e){
    modal_pic = document.querySelector('.modal-pic');
    modal_pic.src = document.querySelector(`#img${e.id}`).src;

    modal_role = document.querySelector('.modal-role');
    modal_role.innerHTML = document.querySelector(`#writeup${e.id} h3`).innerHTML;

    modal_details = document.querySelector('.modal-details');
    modal_details.innerHTML = document.querySelector(`#writeup${e.id} p`).innerHTML;
}