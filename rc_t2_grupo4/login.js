// Estado de login
let isLoggedIn = false;

// Login
document.getElementById("loginForm").onsubmit = function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("loginPassword").value;

    // Verificação de login simples
    if (username === "user" && password === "password") {
        isLoggedIn = true;
        alert("Login bem sucedido!");
        document.getElementById("loginForm").reset();
        // Redireciona para a página com o formulário
        window.location.href = "index2.html";
        // Salva o estado de login no localStorage
        localStorage.setItem("isLoggedIn", "1");
    } else {
        alert("Username ou password incorretos!");
    }
};
