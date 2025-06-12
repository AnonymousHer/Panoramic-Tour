const config = {
    default: {
        firstScene: "bahce",
        autoLoad: true,
        autoRotate: -2,
        compass: true,
        northOffset: 0,
        showFullscreenCtrl: false,
        showControls: true,
        mouseZoom: true,
        touchZoom: true,
        showZoomCtrl: true,
        showFullscreenCtrl: false,
        showControls: true,
        hfov: 100,
        minHfov: 50,
        maxHfov: 120,
        multiResMinHfov: 50,
        multiResMaxHfov: 120,
        multiResBasePath: "panoramas/",
        multiResFallbackPath: "panoramas/fallback/",
        multiResExtension: "jpg",
        multiResTileSize: 512,
        multiResMaxLevel: 3
    },
    scenes: {
        bahce: {
            title: "Okul Bahçesi",
            hfov: 100,
            pitch: 0,
            yaw: 0,
            type: "equirectangular",
            panorama: "panoramas/bahce.jpg",
            hotSpots: [
                {
                    pitch: -2,
                    yaw: 118,
                    type: "scene",
                    text: "Anaokulu Girişi",
                    sceneId: "giris"
                }
            ]
        },
        giris: {
            title: "Anaokulu Girişi",
            hfov: 100,
            pitch: 0,
            yaw: 0,
            type: "equirectangular",
            panorama: "panoramas/giris.jpg",
            hotSpots: [
                {
                    pitch: -2,
                    yaw: 118,
                    type: "scene",
                    text: "Yemekhane",
                    sceneId: "yemekhane1"
                }
            ]
        },
        // Diğer sahneler benzer şekilde eklenecek
    }
}; 