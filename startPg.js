const btnAccept = document.querySelector('.accept');
btnAccept.addEventListener('click', e => {
    window.location.href="challengeAccepted.html";
})


const btnRun = document.querySelector('.run');
btnRun.addEventListener('click', e => {
    window.location.href="challengeDenied.html";
})

