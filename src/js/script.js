async function checkSiteStatus(url) {
    const statusElement = document.getElementById("status");

    try {
        // Faz a requisição ao site
        const response = await fetch(url, { mode: 'no-cors' });
        
        // Se a resposta for bem-sucedida, considera o site "Online"
        statusElement.textContent = "Online";
        statusElement.style.color = "green";
    } catch (error) {
        // Se houver um erro, considera o site "Offline"
        statusElement.textContent = "Offline";
        statusElement.style.color = "red";
    }
}

// URL do site que deseja verificar
const url = "https://emby.herofield.com.br:8920";

// Verifica o status do site ao carregar a página
checkSiteStatus(url);