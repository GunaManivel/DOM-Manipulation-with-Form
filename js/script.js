document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(this);
  const data = {};
  formData.forEach((value, key) => {
    if (data[key]) {
      if (Array.isArray(data[key])) {
        data[key].push(value);
      } else {
        data[key] = [data[key], value];
      }
    } else {
      data[key] = value;
    }
  });
  const foodChecked = formData.getAll("food");
  if (foodChecked.length < 2) {
    alert("Please choose at least 2 food options.");
    return;
  }
  const tableBody = document.querySelector("#data-table tbody");
  const newRow = tableBody.insertRow();
  Object.values(data).forEach((value) => {
    const cell = newRow.insertCell();
    if (Array.isArray(value)) {
      cell.textContent = value.join(", ");
    } else {
      cell.textContent = value;
    }
  });
  this.reset();
});
