function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*gemini.google.com") || 
        shExpMatch(host, "*deepl.com")) {
        return "PROXY 167.99.144.185:3128; PROXY 45.32.1.83:9000; PROXY 138.68.3.159:3128; DIRECT";
    }
    return "DIRECT";
}
