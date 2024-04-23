let entries = []; // array for cry entries

// enter dates
function addEntries() {
    const tearDateInput = document.getElementById("newEntry")

    const cryDate = {
        id: Date.now(),
        cryDate: tearDateInput.value
    }

    entries.push(cryDate);
    renderDates();

    tearDateInput.value = " ";
}

// display dates
function renderDates() {
    const allEntries = document.getElementById("allEntries");
    allEntries.innerHTML = "";

    entries.forEach(cried => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${cried.cryDate}</strong>  <button onclick="editDate(${cried.id})">Edit</button> <button onclick="deleteDate(${cried.id})">Delete</button>`;
        allEntries.appendChild(li);
    })
}

// edit current entries
function editDate(id) {
    const cry = entries.find(cry => cry.id === id);
    if (!cry) return; 

    const newDate = prompt("Enter new cry date: ", cry.cryDate);
    if (newDate !== null) {
        cry.cryDate = newDate;
        renderDates();
    }
}

//delete existing entries
function deleteDate(id) {
    entries = entries.filter(cried => cried.id !== id);
    renderDates();
}

renderDates();
