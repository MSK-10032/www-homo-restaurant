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
    if (location.pathname == "/") {
        location.href = "/mobile/";
    }
    if (location.pathname.startsWith("/desktop")) {
        location.href = location.href.replace("/desktop", "/mobile");
    }
} else {
    if (location.pathname == "/") {
        location.href = "/desktop/";
    }
    if (location.pathname.startsWith("/mobile")) {
        location.href = location.href.replace("/mobile", "/desktop");
    }
}