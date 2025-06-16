function isMobileDevice() {
    const ua = navigator.userAgent.toLowerCase();
    const mobileKeywords = [
        'android',
        'iphone',
        'ipod',
        'ipad',
        'blackberry',
        'windows phone',
        'mobile',
        'webos',
        'opera mini'
    ];
    const isSmallScreen = window.innerWidth < 768;
    return mobileKeywords.some(keyword => ua.includes(keyword)) || isSmallScreen;
}

if (isMobileDevice()) {
    if (!location.pathname.startsWith("/mobile")) {
        location.href = "/mobile/";
    }
} else {
    if (!location.pathname.startsWith("/desktop")) {
        location.href = "/desktop/";
    }
}