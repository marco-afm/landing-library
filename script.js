const modal = document.getElementById('modal');
const btnFechaModal = document.getElementById('fecha__modal');
const cabecalho = document.getElementById('cabecalho-id');
const principal = document.getElementById('principal-id');
const rodape = document.getElementById('footer-id');

window.onload = function() {
    modal.style.display = 'block';
}

btnFechaModal.onclick = function() {
    modal.style.display = 'none';
    cabecalho.classList.remove('blur');
    principal.classList.remove('blur');
    rodape.classList.remove('blur');
}