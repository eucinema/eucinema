function openForm() {
    document.getElementById("login").style.display = "block";
  }
  
function closeForm() {
    document.getElementById("login").style.display = "none";
}

function login() {
    let email = document.getElementById("email").value; 
    let psw = document.getElementById("psw").value; 
    console.log(email, psw);
}