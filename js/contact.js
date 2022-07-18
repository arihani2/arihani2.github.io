var form = document.querySelector("#contact-form");
console.log(form);
form.addEventListener("submit", formSubmit);

function backupFormSubmit(status) {
    if (status != 200) {
        // some twilio stuff here
    }
}

//Possbily put the twilio stuff in here baby
function redirect(status) {
    if (status == 200) {
        window.location.href = '../src/good.html';
    } else {
        window.location.href = '../src/bad.html';
    }
}

function doNothing() {
    return false
}

function formSubmit(e) {
    e.preventDefault();
    let result;

    const formData = new FormData();
    formData.append(
        'name',
        document.querySelector('input[name="name"]').value
    )
    formData.append(
        'email',
        document.querySelector('input[name="email"]').value
    )
    formData.append(
        'message',
        document.querySelector('textarea[name="message"]').value
    )

    const promise = fetch("https://getform.io/f/3045e508-4b71-4830-b348-9b20e1c9c8b8", {
            method: "POST",
            body: formData,
    })
    .then(response => redirect(response.status))
}