$(document).ready(function () {
    // Add a click event listener to the navbar toggle button
    $(".navbar-toggler").on("click", function () {
        // Toggle the collapse element with the ID "navbarSupportedContent"
        $("#navbarSupportedContent").toggleClass("show");
    });

    // Add scroll event listener to change the navbar color
    $(window).on("scroll", function () {
        if ($(this).scrollTop() >= 100) {
            $("#navBar").addClass("noTransparrent");
        } else {
            $("#navBar").removeClass("noTransparrent");
        }
    });

    const targets = [75, 50, 30, 90, 40]; // Set your target numbers
    const animationDuration = 2000; // Animation duration in milliseconds
    const frameRate = 60; // Number of frames per second

    const percentageElements = [
        document.getElementById('percentage1'),
        document.getElementById('percentage2'),
        document.getElementById('percentage3'),
        document.getElementById('percentage4'),
        document.getElementById('percentage5')
    ];
    let currentNumbers = [0, 0, 0, 0, 0];
        let increments = targets.map(target => target / (animationDuration / 1000 * frameRate));

        function updatePercentages() {
            for (let i = 0; i < percentageElements.length; i++) {
                currentNumbers[i] += increments[i];
                if (currentNumbers[i] > targets[i]) {
                    currentNumbers[i] = targets[i];
                }
                percentageElements[i].textContent = currentNumbers[i].toFixed(0) + '%';
            }

            if (currentNumbers.some((value, index) => value < targets[index])) {
                requestAnimationFrame(updatePercentages);
            }
        }

        setTimeout(updatePercentages, 1000 / frameRate); // Start after a 1-second delay








});


