// BMI Calculator
function calculateBMI() {
    var weight = document.getElementById('bmi-weight').value;
    var height = document.getElementById('bmi-height').value;
    var resultElement = document.getElementById('bmi-result');
    var loader = document.getElementById('loader');

    // Show loader
    loader.style.display = 'block';

    setTimeout(function () {
        // Check if the input values are valid
        if (!isNaN(weight) && !isNaN(height) && weight > 0 && height > 0) {
            var bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
            var result = "Your BMI is: " + bmi;

            if (bmi < 18.5) {
                result += " (Underweight)";
            } else if (bmi >= 18.5 && bmi < 24.9) {
                result += " (Normal weight)";
            } else if (bmi >= 25 && bmi < 29.9) {
                result += " (Overweight)";
            } else {
                result += " (Obese)";
            }

            resultElement.innerText = result;
        } else {
            resultElement.innerText = "Please enter valid weight and height.";
        }

        // Hide loader after calculation
        loader.style.display = 'none';
    }, 3000); // Adjust the duration as needed
}

// Body Fat Percentage Calculator
function calculateBodyFat() {
    var gender = document.getElementById('body-fat-gender').value;
    var waist = document.getElementById('body-fat-waist').value;
    var hip = document.getElementById('body-fat-hip').value;
    var weight = document.getElementById('body-fat-weight').value;
    var resultElement = document.getElementById('body-fat-result');
    var loader = document.getElementById('loader');

    // Show loader
    loader.style.display = 'block';

    setTimeout(function () {
        // Check if the input values are valid
        if (!isNaN(waist) && !isNaN(hip) && !isNaN(weight) && waist > 0 && hip > 0 && weight > 0) {
            var factor = (gender === 'male') ? 0.29288 : 0.29669;
            var bodyFatPercentage = factor * parseFloat(waist) - factor * parseFloat(hip) + 0.00043 * parseFloat(weight) + 29.58;
            resultElement.innerText = "Your estimated body fat percentage is: " + bodyFatPercentage.toFixed(2) + "%";
        } else {
            resultElement.innerText = "Please fill in all the fields with valid values.";
        }

        // Hide loader after calculation
        loader.style.display = 'none';
    }, 3000); // Adjust the duration as needed
}

// Waist-to-Hip Ratio Calculator
function calculateWHRatio() {
    var weight = document.getElementById('whr-weight').value;
    var height = document.getElementById('whr-height').value;
    var resultElement = document.getElementById('whr-result');
    var loader = document.getElementById('loader');

    // Show loader
    loader.style.display = 'block';

    setTimeout(function () {
        // Check if the input values are valid
        if (!isNaN(weight) && !isNaN(height) && weight > 0 && height > 0) {
            var whRatio = (parseFloat(weight) / parseFloat(height)).toFixed(2);
            var result = "Your Waist-to-Hip Ratio is: " + whRatio;
            resultElement.innerText = result;
        } else {
            resultElement.innerText = "Please enter valid weight and height.";
        }

        // Hide loader after calculation
        loader.style.display = 'none';
    }, 3000); // Adjust the duration as needed
}

// BMR Calculator
function calculateBMR() {
    var weight = document.getElementById('bmr-weight').value;
    var height = document.getElementById('bmr-height').value;
    var resultElement = document.getElementById('bmr-result');
    var loader = document.getElementById('loader');

    // Show loader
    loader.style.display = 'block';

    setTimeout(function () {
        // Check if the input values are valid
        if (!isNaN(weight) && !isNaN(height) && weight > 0 && height > 0) {
            var bmr;

            // Use Harris-Benedict equation
            bmr = (10 * parseFloat(weight)) + (6.25 * parseFloat(height)) - (5 * 25);

            var result = "Your Basal Metabolic Rate (BMR) is: " + bmr.toFixed(2) + " calories per day";
            resultElement.innerText = result;
        } else {
            resultElement.innerText = "Please enter valid weight and height.";
        }

        // Hide loader after calculation
        loader.style.display = 'none';
    }, 3000); // Adjust the duration as needed
}



