
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    displayResult(name, email, phone);

    document.getElementById('userForm').reset();
    document.getElementById('userContainer').style.display = 'none'; // Hide the user form
    document.getElementById('resultContainer').style.display = 'block'; // Show the result page
});

document.getElementById('editForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('editName').value;
    const email = document.getElementById('editEmail').value;
    const phone = document.getElementById('editPhone').value;

    displayResult(name, email, phone);

    document.getElementById('editContainer').style.display = 'none'; // Hide the edit form
    document.getElementById('resultContainer').style.display = 'block'; // Show the result page
});

document.getElementById('editButton').addEventListener('click', function() {
    const name = document.getElementById('resultName').textContent.replace('Name: ', '');
    const email = document.getElementById('resultEmail').textContent.replace('Email: ', '');
    const phone = document.getElementById('resultPhone').textContent.replace('Phone: ', '');

    document.getElementById('editName').value = name;
    document.getElementById('editEmail').value = email;
    document.getElementById('editPhone').value = phone;

    document.getElementById('resultContainer').style.display = 'none'; // Hide the result page
    document.getElementById('editContainer').style.display = 'block'; // Show the edit form
});

function displayResult(name, email, phone) {
    document.getElementById('resultName').textContent = `Name: ${name}`;
    document.getElementById('resultEmail').textContent = `Email: ${email}`;
    document.getElementById('resultPhone').textContent = `Phone: ${phone}`;
}
