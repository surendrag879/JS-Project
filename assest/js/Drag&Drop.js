

function task() {
    let txt_value = document.querySelector('#task_text').value;
    console.log(txt_value);

    let pending = document.querySelector('.taskbox progress-task-list');
    let rejected = document.querySelector('.rej');
    let completed = document.querySelector('.com');


    if (txt_value == 0) {
        alert('Plz enter task');
    }
    else {
        pending.textContent = txt_value;
    }

}
