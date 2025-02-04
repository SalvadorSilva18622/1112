// Sign In
document.getElementById("signinForm").onsubmit = function(event) {
    event.preventDefault();
    const newUsername = document.getElementById("newUsername").value;
    const newPassword = document.getElementById("newPassword").value;

    // Simulação de processo de criação de conta
    if (newUsername && newPassword) {
        alert("Conta criada com sucesso! Agora pode fazer login.");
        document.getElementById("signinForm").reset();
        // Redireciona para a página de login
        window.location.href = "login.html";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
};
