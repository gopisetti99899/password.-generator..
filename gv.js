
const generatePasswordBtn = document.getElementById('generatePasswordBtn');
const generatedPassword = document.getElementById('generatedPassword');
const savePasswordsBtn = document.getElementById('savePasswordsBtn');
const passwordsTextarea = document.getElementById('passwords');
const passwordBox = document.getElementById("generatedPassword");
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}
generatePasswordBtn.addEventListener('click', () => {
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }

    generatedPassword.value = password;
});
savePasswordsBtn.addEventListener('click', () => {
    const savedPasswords = passwordsTextarea.value;
    localStorage.setItem('savedPasswords', savedPasswords);
    alert('Passwords saved successfully!');
});

window.addEventListener('load', () => {
    const savedPasswords = localStorage.getItem('savedPasswords');
    if (savedPasswords) {
        passwordsTextarea.value = savedPasswords;
    }
});