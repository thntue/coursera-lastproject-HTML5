document.addEventListener('DOMContentLoaded', function() {
    console.log("Welcome to my travel webpage!");
    
    const mainHeading = document.querySelector('h1');
    if (mainHeading) {
        mainHeading.addEventListener('click', function() {
            alert("Thank you for visiting my travel project!");
        });
    }
});
