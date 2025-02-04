// Apresentar a data corrente
window.onload = function() {
    // Exibe a data corrente no elemento com id 'dataCorrente'
    document.getElementById("dataCorrente").innerHTML = new Date().toLocaleDateString();

    // Verificar estado de login
    isLoggedIn = localStorage.getItem("isLoggedIn") === "1";
    if (!isLoggedIn) {
        // Desabilita o envio do formulário se o usuário não estiver logado
        document.getElementById("quizForm").querySelector('input[type="submit"]').disabled = true;
    } else {
        // Habilita o envio do formulário se o usuário estiver logado
        document.getElementById("quizForm").querySelector('input[type="submit"]').disabled = false;
    }
};

// Quiz - Lógica para lidar com o envio do formulário
document.getElementById("quizForm").onsubmit = function(event) {
    // Verifica se o usuário está logado antes de permitir o envio do formulário
    if (!isLoggedIn) {
        event.preventDefault();
        alert("Você precisa estar logado para enviar o quiz.");
        return;
    }

    // Previne o envio padrão do formulário
    event.preventDefault();
    let resposta = "";
    // Coleta a resposta dos botões de rádio selecionados
    const radios = document.querySelectorAll('input[name="genero"]:checked');
    if (radios.length > 0) {
        resposta += "Gênero: " + radios[0].value + "<br>";
    }
    // Coleta a resposta das caixas de seleção selecionadas
    const checkboxes = document.querySelectorAll('input[name="tipo"]:checked');
    checkboxes.forEach((checkbox) => {
        resposta += "Tipo: " + checkbox.value + "<br>";
    });
    // Coleta o feedback do usuário
    const feedback = document.getElementById("feedback").value;
    resposta += "Feedback: " + feedback + "<br>";
    // Exibe a resposta no elemento com id 'resultado'
    document.getElementById("resultado").innerHTML = resposta;
    alert("Formulário enviado com sucesso!");
    // Reseta o formulário após o envio
    document.getElementById("quizForm").reset();
};

// Menu Burger - Lógica para alternar o menu de navegação em dispositivos móveis
const menuBurger = document.querySelector('.menu-burger');
const navLinks = document.querySelector('nav ul');

menuBurger.addEventListener('click', () => {
    // Alterna a classe 'active' para mostrar ou esconder o menu
    navLinks.classList.toggle('active');
});

