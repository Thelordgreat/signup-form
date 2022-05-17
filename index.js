let navbar = document.querySelector('.navbar');

document.querySelector('#toggle').onclick = () =>{
    navbar.classList.toggle('active');
}


const password =document.getElementById('password');

const toggle2 = doument.getElementById('toggle2');

function showHide(){
    if (password.type === 'password'){
        password.setAttribute('type', 'text');
        toggle2.classList.add('hide')
    }

    else {
        password.setAttribute('type', 'password');
        toggle2.classList.remove('hide')
    }
}
