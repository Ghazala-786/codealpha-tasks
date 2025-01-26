function calculateAge() {
    const dob = document.getElementById('dob').value;
    if (!dob) {
        document.getElementById('result').innerHTML = '<span>Please select a valid date of birth!</span>';
        return;
    }

    const dobDate = new Date(dob);
    const today = new Date();

    let ageYears = today.getFullYear() - dobDate.getFullYear();
    let ageMonths = today.getMonth() - dobDate.getMonth();
    let ageDays = today.getDate() - dobDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    const result = document.getElementById('result');
    result.innerHTML = `You are <span>${ageYears}</span> years, <span>${ageMonths}</span> months, and <span>${ageDays}</span> days old.`;
    result.classList.add('fade-in');
}
