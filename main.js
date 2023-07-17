/**
 * * password strength indicator
 */

const pass = document.getElementById('password');
const msg = document.getElementById('message');
const str = document.getElementById('strength');

pass.addEventListener('input', () => {
    if(pass.value.length > 0) {
        msg.style.display = 'block';
    }
    else{
        msg.style.display = 'none';
    }

    if(pass.value.length < 4) {
        str.innerHTML = 'should be at least 4 charecter';
        pass.style.borderColor = '#ff0000';
        msg.style.color = '#ff0000';
    }
    else if(pass.value.length >= 4 && pass.value.length < 6) {
        str.innerHTML = 'is weak';
        pass.style.borderColor = '#ff5925';
        msg.style.color = '#ff5925';
    }
    else if(pass.value.length >= 6 && pass.value.length < 8) {
        str.innerHTML = 'is medium';
        pass.style.borderColor = '#ffff00';
        msg.style.color = '#ffff00';
    }
    else if(pass.value.length >= 8) {
        str.innerHTML = 'is strong';
        pass.style.borderColor = '#26d730';
        msg.style.color = '#26d730';
    }
})