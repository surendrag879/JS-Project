

function task() {
    let txt_value = document.querySelector('#task_text').value;
    console.log(txt_value);

    let pending = document.querySelector('.pen');
    let rejected = document.querySelector('.rej');
    let completed = document.querySelector('.com');


    if (txt_value == 0) {
        alert('task not found');
    }
    else {
        pending.textContent = txt_value;
    }

}
