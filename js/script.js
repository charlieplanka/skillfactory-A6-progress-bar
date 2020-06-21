let progress = 0;
const onePercentBtn = document.querySelector('.btn-1-percent');
const threePercentBtn = document.querySelector('.btn-3-percent');
const sevenPercentBtn = document.querySelector('.btn-7-percent');

onePercentBtn.addEventListener('click', function() {
    increaseProgressBar(1);
});

threePercentBtn.addEventListener('click', function () {
    increaseProgressBar(3);
});

sevenPercentBtn.addEventListener('click', function () {
    increaseProgressBar(7);
});

function increaseProgressBar(percent) {
    progress += percent;
    updateProgressBar(progress);
    if (progress >= 100) {
        disableButtons();
    }
};

function updateProgressBar(progress) {
    const progressBar = document.querySelector('.progress-bar');
    progressBar.setAttribute('style', `width: ${progress}%`);
    progressBar.setAttribute('aria-valuenow', `${progress}%`);
    if (progress >= 100) {
        progressBar.innerHTML = '100%';
        return;
    }
    progressBar.innerHTML = `${progress}%`;
};

function disableButtons() {
    const buttons = document.querySelectorAll('.btn');
    for (let button of buttons) {
        button.setAttribute('disabled', true);
    } 
};