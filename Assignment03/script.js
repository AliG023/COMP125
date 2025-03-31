document.addEventListener('DOMContentLoaded', function () {
  const educationContainer = document.getElementById('education-container');
  const addEducationButton = document.getElementById('add-education');
  const previousWorkYes = document.getElementById('previous-work-yes');
  const convictedYes = document.getElementById('convicted-yes');
  const explanationContainer1 = document.getElementById('explanation-container-1');
  const explanationContainer2 = document.getElementById('explanation-container-2');
  const form = document.querySelector('form');
  const clearButton = document.getElementById('clear');
  const maxEducationFields = 4;
  
  function toggleExplanationField() {
    if (previousWorkYes.checked) {
      explanationContainer1.style.display = 'block';
      document.getElementById('explain-1').required = true;
    } else {
      explanationContainer1.style.display = 'none';
      document.getElementById('explain-1').required = false;
    }
    if (convictedYes.checked){
      explanationContainer2.style.display = 'block';
      document.getElementById('explain-2').required = true;
    } else {
      explanationContainer2.style.display = 'none';
      document.getElementById('explain-2').required = false;
    }
  }

  previousWorkYes.addEventListener('change', toggleExplanationField);
  document.getElementById('previous-work-no').addEventListener('change', toggleExplanationField);
  convictedYes.addEventListener('change', toggleExplanationField);
  document.getElementById('convicted-no').addEventListener('change', toggleExplanationField);

  addEducationButton.addEventListener('click', function () {
    const currentEducationFields = educationContainer.querySelectorAll('.education-field').length;
    if (currentEducationFields >= maxEducationFields) {
      alert('You can add a maximum of 4 education fields.');
      return;
    }
    const newEducationField = document.createElement('div');
    newEducationField.classList.add('education-field');
    newEducationField.innerHTML = `
      <label for="education"><strong>Education:</strong></label>
      <select name="education" required>
        <option value="none">None</option>
        <option value="1">High School</option>
        <option value="2">College</option>
        <option value="3">University (Degree)</option>
        <option value="4">University (Masters)</option>
      </select>
      <label for="school">School:</label>
      <input type="text" name="school" required />
      <label for="major">Major:</label>
      <input type="text" name="major" required />
      <label for="graduation">Graduation Date:</label>
      <input type="date" name="graduation" required />
    `;
    educationContainer.appendChild(newEducationField);
  });

  form.addEventListener('submit', function (event) {
    if (!checkRequiredFields()) {
      event.preventDefault();
      alert('Please fill in all required fields.');
    } else {
      alert('Application Accepted');
    }
  });

  function checkRequiredFields() {
    const requiredFields = document.querySelectorAll('input[required], select[required]');
    for (let field of requiredFields) {
      if (!field.value) {
        return false;
      }
    }
    return true;
  }

  clearButton.addEventListener('click', function () {
    alert('Form Cleared. Please Complete Form To Apply.');
    clearEducationFields();
  });

  function clearEducationFields() {
    const educationFields = educationContainer.querySelectorAll('.education-field');
    educationFields.forEach((field, index) => {
      if (index > 0) {
        field.remove();
      }
    });
  }
});