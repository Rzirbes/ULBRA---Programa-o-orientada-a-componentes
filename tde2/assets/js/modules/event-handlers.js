
import { loadSection } from './load-section.js';

export function setupEventDelegation() {
    document.body.addEventListener('click', function(event) {
        const target = event.target.closest('a[data-section]');
        if (target) {
            event.preventDefault();
            const section = target.getAttribute('data-section');
            loadSection(section);
        }
    });
}