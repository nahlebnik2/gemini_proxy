function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*google.com") || 
        shExpMatch(host, "*gstatic.com") || 
        shExpMatch(host, "*googleapis.com")) {
        return "SOCKS5 64.188.95.84:10808; DIRECT";
    }
    return "DIRECT";
}
