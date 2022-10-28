let formDOM = document.querySelector("#submit-form")
formDOM.addEventListener("submit", submitForm)

let listDOM = document.querySelector('#list-to-do')
listDOM.addEventListener("click", checkedBox)

let toastDOM = document.querySelector("#empty-box")
let toast = new bootstrap.Toast(toastDOM)

let toastSuccessDOM = document.querySelector("#success")
let toastSuccess = new bootstrap.Toast(toastSuccessDOM)

let inputDOM = document.querySelector("#listInput")

let close = document.getElementsByClassName("close")
close.addEventListener("click", closeEvent)

function closeEvent(event) {
    event.preventDefault()

    event.target.style.display="none"
    
}



function checkedBox(event) {
    event.preventDefault()

    let selectTarget = event.target.classList

    if (event.target.id != "button") {

        selectTarget.contains("bg-info", "text-decoration-line-through", "bi-check-lg") ? selectTarget.remove("bg-info", "text-decoration-line-through", "bi-check-lg") : selectTarget.add("bg-info", "text-decoration-line-through", "bi-check-lg")

    } else {
        for (let i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                var div = this.parentElement;
                div.style.display = "none";
            }
        }
    }

}



function submitForm(event) {
    event.preventDefault()
    inputDOM.value.replace(/^\s+/, '').replace(/\s+$/, '')
    if ((inputDOM.value == " " > 0)) {
        toast.show()
    } else {
        let liDOM = document.createElement("li")
        liDOM.innerHTML = `${inputDOM.value} <span class="close" id="button">X</span>`
        liDOM.classList.add("list-group-item")
        listDOM.append(liDOM)
    }

}