const form = document.getElementById('registrationForm');
const memberCount = document.getElementById('memberCount');
const membersDiv = document.getElementById('membersDiv');

memberCount.addEventListener('change', () => {
  const count = parseInt(memberCount.value);
  membersDiv.innerHTML = '';
  for(let i = 1; i <= count; i++) {
    membersDiv.innerHTML += `<label>Member ${i}:</label>
    <input type="text" name="members[]" required><br><br>`;
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Registration submitted! ✅');
  form.reset();
  membersDiv.innerHTML = `<label>Member 1:</label>
  <input type="text" name="members[]" required><br><br>`;
});