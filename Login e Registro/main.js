document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.sign-up form');
    const nameInput = form.querySelector('input[placeholder="Nome"]');
    const phoneInput = form.querySelector('input[placeholder="Telefone"]');
    const emailInput = form.querySelector('input[placeholder="E-mail"]');
    const passwordInput = form.querySelector('input[placeholder="Senha"]');
    const submitButton = form.querySelector('button');

    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');

    // Função de hashing
    async function digestMessage(message) {
        const msgUint8 = new TextEncoder().encode(message); 
        const hashBuffer = await window.crypto.subtle.digest("SHA-512", msgUint8); 
        const hashArray = Array.from(new Uint8Array(hashBuffer));
        const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
        return hashHex;
    }

    // Função de cadastro
    async function cadastro() {
        const password = document.getElementById("password").value;
        const confPassword = document.getElementById("confpswd").value;
        const email = document.getElementById("email").value;
        const username = document.getElementById("username").value;
        const telefone = document.getElementById("tel").value;
        var a = document.getElementById('h1d');
        
        if (password === confPassword) {
            const hash = await digestMessage(password); 
            localStorage.setItem("senhaHash", hash);
            localStorage.setItem("telefone", telefone);
            localStorage.setItem("userEmail", email);
            localStorage.setItem("nome", username);
            a.innerHTML = ("<p>Seu cadastro foi concluído!</p>");
        } else {
            a.innerHTML = ("<p>As senhas não são iguais!</p>");
        }
    }

    // Função de login
    function login() {
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;
        const storedEmail = localStorage.getItem("userEmail");
        const storedHash = localStorage.getItem("senhaHash");

        if (email === storedEmail) {
            digestMessage(password).then(hash => {
                if (hash === storedHash) {
                    document.getElementById('loginMsg').innerHTML = "<p>Login bem-sucedido!</p>";
                } else {
                    document.getElementById('loginMsg').innerHTML = "<p>Senha incorreta!</p>";
                }
            });
        } else {
            document.getElementById('loginMsg').innerHTML = "<p>Email não encontrado!</p>";
        }
    }

    // Função para abrir o popup de login
    function inpLogin() {
        document.getElementById('loginPopup').style.display = 'block';
        document.getElementById('popup').style.display = 'none';
    }

    // Função para fechar o popup de login
    function fecharLogin() {
        document.getElementById('loginPopup').style.display = 'none';
    }

    // Função de cadastro
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const userData = {
            name: nameInput.value,
            phone: phoneInput.value,
            email: emailInput.value,
            password: passwordInput.value
        };

        localStorage.setItem('user', JSON.stringify(userData));

        alert('Conta criada com sucesso!');

        form.reset();
    });

    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });
    
    // Event listeners para o login e cadastro
    const loginForm = document.getElementById("loginForm");
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        login();
    });

    const registerForm = document.getElementById("registerForm");
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();
        cadastro();
    });
});