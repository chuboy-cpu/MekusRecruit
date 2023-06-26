
// TOAST
function toast(){
  const toastTrigger = document.getElementById('liveToastBtn')
  const toastLiveExample = document.getElementById('liveToast')

  if (toastTrigger) {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastTrigger.addEventListener('click', () => {
      toastBootstrap.show()
    })
  }
}

// MODAL
function modal (e){
    modal_pic = document.querySelector('.modal-pic');
    modal_pic.src = document.querySelector(`#img${e.id}`).src;

    modal_role = document.querySelector('.modal-role');
    modal_role.innerHTML = document.querySelector(`#writeup${e.id} h3`).innerHTML;

    modal_details = document.querySelector('.modal-details');
    modal_details.innerHTML = document.querySelector(`#writeup${e.id} p`).innerHTML;
}

// ON SCROLL ANIMATIONS
AOS.init({
    duration: 1000,
    once: true
})

function signup(){
    let email = document.getElementById('email').value
    alert(email);

    var obj ={
        
    }

    obj[email_fname] = "nil";
    obj[email_lname] = "nil";
    obj[email_email] = email;

    alert(obj[email_email])
}
