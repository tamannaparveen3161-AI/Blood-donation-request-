function addRequest() {
  const bloodGroup = document.getElementById("bloodGroup").value;
  const contact = document.getElementById("contact").value;
  const requestList = document.getElementById("requestList");

  if (bloodGroup === "" || contact === "") {
    alert("Please fill all details");
    return;
  }

  const card = document.createElement("div");
  card.className = "request-card";
  card.innerHTML = `
    <strong>Blood Group:</strong> ${bloodGroup} <br>
    <strong>Contact:</strong> ${contact}
  `;

  requestList.appendChild(card);

  document.getElementById("bloodGroup").value = "";
  document.getElementById("contact").value = "";
}
