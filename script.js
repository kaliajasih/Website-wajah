function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    const loginSection = document.getElementById('login-section');
    const imageSection = document.getElementById('image-section');
    const errorMsg = document.getElementById('error-msg');

    // Password yang benar (Hardcoded untuk contoh sederhana)
    // Dalam praktik nyata, validasi harus dilakukan di server (Backend)
    const correctPassword = "mukasaya"; 

    if (input === correctPassword) {
        // Jika benar, sembunyikan login, tampilkan gambar
        loginSection.classList.add('hidden');
        imageSection.classList.remove('hidden');
    } else {
        // Jika salah
        errorMsg.textContent = "Kata sandi salah!";
        
        // Animasi getar sederhana
        const container = document.querySelector('.container');
        container.style.transform = "translateX(5px)";
        setTimeout(() => {
            container.style.transform = "translateX(-5px)";
            setTimeout(() => {
                container.style.transform = "translateX(0)";
            }, 100);
        }, 100);
    }
}

// Fitur tekan Enter untuk submit
document.getElementById('passwordInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkPassword();
    }
});
