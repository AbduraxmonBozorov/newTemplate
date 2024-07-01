let form = document.querySelector("form");
let ism = document.querySelector("#ism");
let fam = document.querySelector("#fam");
let yosh = document.querySelector("#yosh");
let wrapper = document.querySelector(".wrapper");

function validate() {
    if (ism.value.length < 3) {
        alert("Ism xato");
        ism.style.outlineColor = "red";
        ism.focus();
    }

    if (fam.value.length < 3) {
        alert("Familiya xato");
        fam.style.outlineColor = "red";
        fam.focus();
    }

    return true;
}

function getUsers() {
    let users = [];
    if (JSON.parse(localStorage.getItem("users"))) {
        users = JSON.parse(localStorage.getItem("users"));
    }
    return users;
}

function createCard(user) {
    return `
        <div class="card col-4 " id="${Date.now()}">
                <h2>${user.ism}</h2>
                <h2>${user.fam}</h2>
                <p>${user.yosh}</p>
                <div class="mb-3">
                    <button data-id="${Date.now()}" class="btn btn-danger">Delete</button>
                </div>
            </div>
    `
}


form.addEventListener("submit", (event) => {
    event.preventDefault();
    let user = {
        ism: ism.value,
        fam: fam.value,
        yosh: yosh.value,
        id: Date.now()
    }

    console.log(user);
    let isValid = validate();
    if (!isValid) {
        return;
    }

    let users = getUsers();
    console.log(users);
    users.push(user);
    console.log(users);
    localStorage.setItem('users', JSON.stringify(users));
    window.location.reload();
   

    form.reset();
})

document.addEventListener('DOMContentLoaded', (e)=>{
    e.preventDefault();
    let users=getUsers();
    
    users.forEach(element => {
        let card=createCard(element);
        wrapper.innerHTML+=card;
    });
})
