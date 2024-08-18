
export async function loadSection(section) {
    try {
        const contentElement = document.getElementById('content');
        const response = await fetch(`./components/${section}.html`);
        const data = await response.text();
        contentElement.innerHTML = data;
        console.log(`Seção ${section} carregada com sucesso.`);
    } catch (error) {
        console.error(`Erro ao carregar a seção ${section}:`, error);
    }
}