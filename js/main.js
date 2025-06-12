let viewer = null;
let isAutoRotating = false;

document.addEventListener('DOMContentLoaded', function() {
    // Pannellum viewer'ı başlat
    viewer = pannellum.viewer('panorama', {
        ...config.default,
        scenes: config.scenes
    });

    // Sahne değiştirme olayını dinle
    document.getElementById('scene-select').addEventListener('change', function(e) {
        viewer.loadScene(e.target.value);
    });

    // Tam ekran butonu
    document.getElementById('fullscreen-btn').addEventListener('click', function() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    });

    // Otomatik döndürme butonu
    document.getElementById('autoplay-btn').addEventListener('click', function() {
        isAutoRotating = !isAutoRotating;
        viewer.setAutoRotate(isAutoRotating ? -2 : 0);
        this.classList.toggle('active');
    });

    // Sahne değişikliğini dinle
    viewer.on('scenechange', function() {
        const currentScene = viewer.getScene();
        document.getElementById('scene-select').value = currentScene;
    });

    // Tam ekran değişikliğini dinle
    document.addEventListener('fullscreenchange', function() {
        const fullscreenBtn = document.getElementById('fullscreen-btn');
        if (document.fullscreenElement) {
            fullscreenBtn.innerHTML = '<i class="fas fa-compress"></i>';
        } else {
            fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
        }
    });
});

// Mobil cihazlar için dokunmatik kontrolleri optimize et
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
}

// Pencere boyutu değiştiğinde viewer'ı yeniden boyutlandır
window.addEventListener('resize', function() {
    if (viewer) {
        viewer.resize();
    }
}); 