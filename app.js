class Data {
    constructor(name, position, status, salary) {
      this.name = name;
      this.position = position;
      this.status = status;
      this.salary = salary;
    }
  }
  
  class UI {
    addDataToList(data) {
      const list = document.getElementById('data-list');
      // Create tr element
      const row = document.createElement('tr');
      // Insert cols
      row.innerHTML = `
        <td>${data.name}</td>
        <td>${data.position}</td>
        <td>${data.status}</td>
        <td>${data.salary}</td>
        <td><a href="#" class="delete"><button>Edit</button><a></td>
      `;
    
      list.appendChild(row);
    }
  
    showAlert(message, className) {
      // Create div
      const div = document.createElement('div');
      // Add classes
      div.className = `alert ${className}`;
      // Add text
      div.appendChild(document.createTextNode(message));
      // Get parent
      const container = document.querySelector('.container');
      // Get form
      const form = document.querySelector('#data-form');
      // Insert alert
      container.insertBefore(div, form);
  
      // Timeout after 3 sec
      setTimeout(function(){
        document.querySelector('.alert').remove();
      }, 3000);
    }
  
    deleteData(target) {
      if(target.className === 'delete') {
        target.parentElement.parentElement.remove();
      }
    }
  
    clearFields() {
      document.getElementById('name').value = '';
      document.getElementById('position').value = '';
      document.getElementById('status').value = '';
      document.getElementById('salary').value = '';
    }
  }
  


  // DOM Load Events
document.addEventListener('DOMContentLoaded', Store.displayBooks);


// Event Listener for add data
document.getElementById('data-form').addEventListener('submit', function(e){
    // Get form values
    const name = document.getElementById('name').value,
          position = document.getElementById('position').value,
          status = document.getElementById('status').value,
          salary = document.getElementById('salary').value,
  
    // Instantiate data
    const data = new Data(name, position, status, salary);
  
    // Instantiate UI
    const ui = new UI();
  
    console.log(ui);
  
    // Validate
    if(name === '' || position === '' || status === '' || salary === '') {
      // Error alert
      ui.showAlert('Please fill in all fields', 'error');
    } else {
      // Add data to list
      ui.addDataToList(data);
  
      
      
    

      // Show success
      ui.showAlert('Employee Data Added!', 'success');
    
      // Clear fields
      ui.clearFields();
    }
  
    e.preventDefault();
  });
  
  // Event Listener for delete
  document.getElementById('data-list').addEventListener('click', function(e){
  
    // Instantiate UI
    const ui = new UI();
  
    // Delete data
    ui.deleteData(e.target);
  
    
  
    // Show message
    ui.showAlert('Employee Data Removed!', 'success');
  
    e.preventDefault();
  });
  