// MENU DE LINKS
function toggleMenu() {
    var menu = document.getElementById('menu');
    var overlay = document.getElementById('overlay');
    menu.classList.toggle('open');
    overlay.classList.toggle('show');
}

// COMO AJUDAR
function toggleParagraph(paraId) {
    var para = document.getElementById(paraId);
    var arrow = para.previousElementSibling.querySelector('.arrow');

    if (para.style.display === "none" || para.style.display === "") {
        para.style.display = "block";
        arrow.innerHTML = "▲";
    } else {
        para.style.display = "none";
        arrow.innerHTML = "▼";
    }
}

// CHATBOT

window.watsonAssistantChatOptions = {
    integrationID: "5d63d7c9-8ca8-4087-8c59-0a0f181605aa", // The ID of this integration.
    region: "au-syd", // The region your integration is hosted in.
    serviceInstanceID: "18d70c0a-e82c-4461-af29-50e5ba73a926", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
};
setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
});
