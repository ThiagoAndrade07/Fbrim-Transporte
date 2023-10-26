const btnHeader = document.querySelector('.menu-burger');

btnHeader.addEventListener('click', abreHeader);

let headerOn = document.querySelector('.menu-mobile');

function abreHeader() {

    if (headerOn.hasAttribute("id")) {
        headerOn.removeAttribute("id", "display-block");
    }else {
        headerOn.setAttribute("id", "display-block");
    }

  }

const btnHeaderFechar = document.querySelector('.btn-fechar');

btnHeaderFechar.addEventListener('click', abreHeader);
