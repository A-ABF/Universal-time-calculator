function calculateTime() {
    // Get the input values
    let min1 = parseInt(document.getElementById('min1').value) || 0;
    let min5 = parseInt(document.getElementById('min5').value) || 0;
    let min15 = parseInt(document.getElementById('min15').value) || 0;
    let min30 = parseInt(document.getElementById('min30').value) || 0;
    let hour1 = parseInt(document.getElementById('hour1').value) || 0;
    let hour3 = parseInt(document.getElementById('hour3').value) || 0;
    let hour8 = parseInt(document.getElementById('hour8').value) || 0;

    // Convert all inputs into minutes
    let totalMinutes = (min1 * 1) + (min5 * 5) + (min15 * 15) + (min30 * 30) + (hour1 * 60) + (hour3 * 180) + (hour8 * 480);

    // Convert minutes into hours and days
    let totalHours = totalMinutes / 60;
    let totalDays = totalHours / 24;

    // Display the result
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Total time: ${totalHours.toFixed(2)} hours or ${totalDays.toFixed(2)} days`;
}
