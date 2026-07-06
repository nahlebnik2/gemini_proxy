function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*google.com") || 
        shExpMatch(host, "*gstatic.com") || 
        shExpMatch(host, "*https://gemini.google.com") || 
        shExpMatch(host, "*googleapis.com")) {
        return "SOCKS 64.188.95.84:10808; DIRECT";
    }
    return "DIRECT";
}
