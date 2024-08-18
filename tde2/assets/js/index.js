import { loadTemplate } from './modules/load-templates.js';
import { setupEventDelegation } from './modules/event-handlers.js';
import { loadSection } from './modules/load-section.js';

document.addEventListener("DOMContentLoaded", async function () {
    await loadTemplate('./components/header.html', 'header');
    await loadTemplate('./components/temperature.html', '#temperatura-container');
    await loadTemplate('./components/highlights.html', '#highlights-container');
    await loadTemplate('./components/footer.html', 'footer');

    // Inicializa a seção inicial
    loadSection('home');

    // Configura a delegação de eventos
    setupEventDelegation();
});
