function navigateTo(page) {
    const mainContent = document.getElementById('main-content');
    
    fetch(page)
      .then(response => response.text())
      .then(html => {
        mainContent.innerHTML = html;
        
        if (page.includes('formulario.html')) {
          const contactForm = document.getElementById('contactForm');
          const contactTableBody = document.querySelector('#contactTable tbody');
          
          loadStoredContacts(contactTableBody);

          contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;

            const contact = {
              name: name,
              email: email,
              phone: phone
            };
  
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
              <td>${contact.name}</td>
              <td>${contact.email}</td>
              <td>${contact.phone}</td>
            `;
  
            contactTableBody.appendChild(newRow);
  
            storeContact(contact);
  
            contactForm.reset();
          });
        }
      })
      .catch(error => {
        mainContent.innerHTML = `<p>Ocorreu um erro ao carregar a página.</p>`;
        console.error('Erro ao carregar o conteúdo:', error);
      });
}


function storeContact(contact) {
    
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(contacts));
}

// Função para carregar os contatos armazenados no localStorage e exibir na tabela
function loadStoredContacts(tableBody) {
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];

    contacts.forEach(contact => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
          <td>${contact.name}</td>
          <td>${contact.email}</td>
          <td>${contact.phone}</td>
        `;
        tableBody.appendChild(newRow);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    navigateTo('./components/home.html');
});
