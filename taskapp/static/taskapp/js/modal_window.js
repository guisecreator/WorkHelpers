
function openModal() {
  
    var modal = document.createElement('div');
    var modalContent = document.createElement('div');
    var modalClose = document.createElement('span');
    var modalText = document.createElement('p');
  
  
    modal.classList.add('modal');
    modalContent.classList.add('modal-content');
    modalClose.classList.add('modal-close');
    modalText.classList.add('modal-text');
  
    
    modalClose.textContent = '×';
    modalText.textContent = 'Это модальное окно!';
  
    
    modal.appendChild(modalContent);
    modalContent.appendChild(modalClose);
    modalContent.appendChild(modalText);
    document.body.appendChild(modal);
  
    
    modalClose.addEventListener('click', closeModal);
  }
  
  
  function closeModal() {
    var modal = document.querySelector('.modal');
    document.body.removeChild(modal);
  }