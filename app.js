// Funzione per il menu hamburger
const menuButton = document.getElementById('th');
const menuNav = document.getElementById('nj');

menuButton.addEventListener('click', () => {
    menuNav.classList.toggle('active');
});
document.addEventListener('click', (event) => {
    if (!menuNav.contains(event.target) && !menuButton.contains(event.target)) {
        menuNav.classList.remove('active');
    }
});
function copyToClipboard(elementId) {
    const copyText = document.getElementById(elementId);
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    // Visualizza un messaggio di conferma (facoltativo)
    Swal.fire({
        icon: "success",
        title: "Copied",
        text: "Ref Link Copied!",
        showConfirmButton: false,
        timer: 1500
    });
}
function getreflink() {
    var refaddress = document.getElementById("refaddress").value;
    if (refaddress.length == 42) {
        document.getElementById("airdropcell").style.display = "block";
        document.getElementById("airinput").value = "https://cr7dao.com/?ref=" + refaddress;
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Enter a valid BEP20 Address!'
        })
        return;
    }
}
function buystt() {
    var buyinput = document.getElementById("buyinput").value;
    if (buyinput <= 0 || buyinput > 10) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Min 0.01 Max 10 $BNB!'
        })
        return;
    }
    Swal.fire({
        title: 'Are you sure?',
        text: "Confirm to buy!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirm!'
    }).then((result) => {
        if (result.isConfirmed) {
            connect();
        }
    })
}
function getAirdrop() {

    Swal.fire({
        title: 'Are you sure?',
        text: "Confirm to claim airdrop!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Confirm!'
    }).then((result) => {
        if (result.isConfirmed) {
            getair();
        }
    })
}
function revealOnScroll() {
    const revealElements = document.querySelectorAll('.reveal-from-top, .reveal-from-bottom, .reveal-from-left, .reveal-from-right');
    
    revealElements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('active');
            
        }
    });
}
  
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
