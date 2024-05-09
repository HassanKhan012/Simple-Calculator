function calculator(f) {
    document.getElementById('ans').value += f;
}

function answerFunc() {
    let a = document.getElementById('ans');
    a.value = eval(a.value);
}

// function clr() {
//     let a = document.getElementById('ans').value;
//     document.getElementById('ans').value = a.slice(0, -1);
// }

function clrAll() {
    document.getElementById('ans').value = '';
}
