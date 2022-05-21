const config = {
    version : '2.0.0',
    ip: "",
    server: "https://stock.quattropy.com",
    urlServer: "https://stock.quattropy.com/s1/public/api/stock/",
    company: "Quattro S.A.",
    versionScript: "2345"
}
$.ajaxSetup({
    headers: { 
        'version': 1,
        'token': 'Bearer '+localStorage.login,
        'Game': -1
    },
    beforeSend: function( xhr,a,e,f ) {
        
    }
});