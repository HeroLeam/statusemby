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

// URL do site que deseja verificar
const url = "https://emby.herofield.com.br:8920";

// Verifica o status do site ao carregar a página
checkSiteStatus(url);

function checkIPv6Support() {
    var ipv6TestUrl = "https://ipv6.google.com/";

    fetch(ipv6TestUrl, { mode: 'no-cors' })
        .then(function (response) {
            // Se o suporte a IPv6 existir, mostra o iframe e oculta o aviso
            document.getElementById("ipv6-content").style.display = "block"; // Exibe o iframe
            showMessageTrue("Você tem suporte IPv6!");
        })
        .catch(function (error) {
            // Caso contrário, oculta o iframe e exibe o aviso
            document.getElementById("ipv6-content").style.display = "none"; // Oculta o iframe
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
