document.addEventListener('DOMContentLoaded', () => {
    // 1. กำหนดลิงก์ปลายทาง
    const nextUrl = "https://www.google.com"; 

    const loginBtn = document.getElementById('login-btn');
    const loginScene = document.getElementById('login-scene');
    const loadingScene = document.getElementById('loading-scene');
    const progressFill = document.getElementById('progress-fill');
    const percentText = document.getElementById('percent-text');

    function startLogin() {
        if (loginScene.classList.contains('active')) {
            // เปลี่ยนฉาก
            loginScene.classList.remove('active');
            loadingScene.classList.add('active');

            let width = 0;
            const interval = setInterval(() => {
                if (width >= 100) {
                    clearInterval(interval);
                    // เมื่อโหลดเสร็จให้ไปที่ลิงก์
                    setTimeout(() => {
                        window.location.href = nextUrl;
                    }, 500);
                } else {
                    width++;
                    progressFill.style.width = width + '%';
                    percentText.innerText = width + '%';
                }
            }, 30); // ความเร็วในการโหลด
        }
    }

    // คลิกปุ่ม
    loginBtn.addEventListener('click', startLogin);

    // กดปุ่ม Enter
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            startLogin();
        }
    });
});
