function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*google.com") || 
        shExpMatch(host, "*gstatic.com") || 
        shExpMatch(host, "*gemini.google.com") || 
        shExpMatch(host, "*googleusercontent.com") ||
        shExpMatch(host, "*googleusercontent.com") ||
        shExpMatch(host, "*ggpht.com")) {
        return "SOCKS 64.188.95.84:10808; DIRECT";
    }
    return "DIRECT";
}
