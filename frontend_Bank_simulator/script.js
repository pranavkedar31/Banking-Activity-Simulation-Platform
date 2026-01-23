const BASE_URL = "http://localhost:8080";

// Show selected section
function showSection(id){
    document.querySelectorAll(".section").forEach(sec => sec.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

// Create Account
function createAccount(){
    const data = {
        name: document.getElementById("c-name").value,
        email: document.getElementById("c-email").value,
        balance: document.getElementById("c-balance").value
    };

    fetch(BASE_URL + "/accounts/create", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
        const resBox = document.getElementById("create-result");
        resBox.innerText = "✅ Account Created! Account No: " + result.accountNumber;
        resBox.className = "result success";
        resBox.scrollIntoView({behavior: 'smooth'});
    })
    .catch(err => {
        const resBox = document.getElementById("create-result");
        resBox.innerText = "❌ Error creating account!";
        resBox.className = "result error";
    });
}

// Deposit
function deposite(){
    const data = {
        accNo: document.getElementById("d-acc").value,
        amount: document.getElementById("d-amount").value
    };

    fetch(BASE_URL + "/transactions/deposite", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data)
    })
    .then(res => res.text())
    .then(msg => {
        const resBox = document.getElementById("deposite-result");
        resBox.innerText = msg;
        resBox.className = "result success";
        resBox.scrollIntoView({behavior:'smooth'});
    });
}

// Withdraw
function withdraw(){
    const data = {
        accNo: document.getElementById("w-acc").value,
        amount: document.getElementById("w-amount").value
    };

    fetch(BASE_URL + "/transactions/withdraw", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data)
    })
    .then(res => res.text())
    .then(msg => {
        const resBox = document.getElementById("withdraw-result");
        resBox.innerText = msg;
        resBox.className = "result success";
        resBox.scrollIntoView({behavior:'smooth'});
    });
}

// Transfer
function transfer(){
    const data = {
        fromAcc: document.getElementById("t-from").value,
        toAcc: document.getElementById("t-to").value,
        amount: document.getElementById("t-amount").value
    };

    fetch(BASE_URL + "/transactions/transfer", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data)
    })
    .then(res => res.text())
    .then(msg => {
        const resBox = document.getElementById("transfer-result");
        resBox.innerText = msg;
        resBox.className = "result success";
        resBox.scrollIntoView({behavior:'smooth'});
    });
}

// View Account
function viewAccount(){
    const acc = document.getElementById("v-acc").value;

    fetch(BASE_URL + "/accounts/" + acc)
    .then(res => res.json())
    .then(data => {
        const resBox = document.getElementById("view-result");
        resBox.innerText = JSON.stringify(data, null, 2);
        resBox.className = "result success";
        resBox.scrollIntoView({behavior:'smooth'});
    });
}

// List Accounts
function listAccount(){
    fetch(BASE_URL + "/accounts/all")
    .then(res => res.json())
    .then(data => {
        const resBox = document.getElementById("list-result");
        resBox.innerText = JSON.stringify(data, null, 2);
        resBox.className = "result success";
        resBox.scrollIntoView({behavior:'smooth'});
    });
}

// Auto-show create section
window.onload = () => showSection('create');
