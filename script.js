function generateSmsLink() {
    const phoneNumber = "+17186834051";
    // get referral code from URL parameters if available
    const referralCode = new URLSearchParams(window.location.search).get("ref");
    const code = referralCode ? ` (Referral code: ${referralCode})` : " (Referral code: Website)";
    const defaultMessage = `Please tell me more information about the Sukkah building.${code}`;

    return `sms:${phoneNumber}?body=${encodeURIComponent(defaultMessage)}`;
}

function addSmsLink() {
    const textBtn = document.getElementById("textBtn");
    if (textBtn) {
        textBtn.href = generateSmsLink();
    }
}

function hideAnimationContainer() {
    const animationContainer = document.querySelector('.animation-container');
    if (animationContainer) {
        animationContainer.style.display = 'none';
    }
}

function showImageContainer() {
    const imageContainer = document.querySelector('.image-wrapper');
    if (imageContainer) {
        imageContainer.style.display = 'block';
    }
}
// Add the SMS link when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", addSmsLink);

let isPaused = false;
let currentStep = 1;

// Update step indicator text based on animation timing
setTimeout(() => updateStepText("In no time..."), 1000);
setTimeout(() => updateStepText("Just Give us a call"), 5000);
setTimeout(() => updateStepText("Or Text Us"), 9000);
setTimeout(() => updateStepText("Leave the work to us!"), 14000);
setTimeout(() => updateStepText("A Sukkah for Everyone"), 19000);
setTimeout(() => updateStepText("✨ Your Sukkah is Complete! Ready for Sukkot! ✨"), 24000);
setTimeout(() => {
    hideAnimationContainer();
    showImageContainer();
}, 26000);

function updateStepText(text) {
    const stepText = document.getElementById('stepText');
    stepText.textContent = text;
    stepText.style.color = text.includes('Complete') ? '#D2691E' : '#8B4513';
}