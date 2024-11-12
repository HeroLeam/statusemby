async function checkSiteStatus(url) {
    const statusElement = document.getElementById("status");

    try {
        // Faz a requisição ao site
        await fetch(url, { mode: 'no-cors' });

        // Se a resposta for bem-sucedida, adiciona a classe "online" e define o texto
        statusElement.textContent = "Servidor Online";
        statusElement.classList.add("online");
        statusElement.classList.remove("offline");
    } catch (error) {
        // Se houver um erro, adiciona a classe "offline" e define o texto
        statusElement.textContent = "Servidor Offline";
        statusElement.classList.add("offline");
        statusElement.classList.remove("online");
    }
}

function checkIPv6Support() {
    var ipv6TestUrl = "https://ipv6.google.com/";
    const statusElement = document.getElementById("status");

    fetch(ipv6TestUrl, { mode: 'no-cors' })
        .then(function (response) {
            // Exibe o status e verifica o site apenas se IPv6 estiver ativo
            statusElement.style.display = "block";
            checkSiteStatus("https://emby.herofield.com.br:8920");
            // Não chama showMessageTrue para evitar a mensagem de IPv6 ativo
        })
        .catch(function (error) {
            // Exibe mensagem de erro se o IPv6 não estiver ativo
            showMessageFalse("Você não tem IPv6 ativo.\nEntre em contato com seu provedor para estar fazendo a ativação do protocolo IPv6.");
        });
}

function showMessageTrue(message) {
    var messageElement = document.createElement("p");
    messageElement.textContent = message;
    messageElement.classList.add('ipv6True');
    
    var headerElement = document.querySelector('.paragrafo');
    headerElement.parentNode.insertBefore(messageElement, headerElement.nextSibling);
}

function showMessageFalse(message) {
    var messageElement = document.createElement("p");
    messageElement.textContent = message;
    messageElement.classList.add('ipv6False');
    
    var headerElement = document.querySelector('.paragrafo');
    headerElement.parentNode.insertBefore(messageElement, headerElement.nextSibling);
}

window.onload = checkIPv6Support;
