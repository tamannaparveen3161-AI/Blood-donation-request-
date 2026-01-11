const form = document.getElementById("donationForm");
const tableBody = document.querySelector("#requestTable tbody");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const blood = document.getElementById("blood").value;
    const city = document.getElementById("city").value.trim();
    const phone = document.getElementById("phone").value.trim();

    // Simple validation
    if(!name || !blood || !city || !phone){
        alert("Please fill all fields!");
        return;
    }

    if(!/^\d{10}$/.test(phone)){
        alert("Enter valid 10-digit phone number");
        return;
    }

    // Create new table row
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${blood}</td>
        <td>${city}</td>
        <td>${phone}</td>
    `;

    tableBody.appendChild(row);

    // Reset form
    form.reset();
});
