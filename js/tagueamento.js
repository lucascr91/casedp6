function entre_em_contato() {
    ga('send', {'hitType': 'event', 'eventCategory': 'menu', 'eventAction': 'entre_em_contato', 'eventLabel': 'link_externo' });
}

function download_pdf() {
    ga('send', {'hitType': 'event', 'eventCategory': 'menu', 'eventAction': 'download_pdf', 'eventLabel': 'download_pdf' });
}

// function image_click(img) {
//     var name = img.alt;
//     ga('send', {'hitType': 'event', 'eventCategory': 'analise', 'eventAction': 'ver_mais', 'eventLabel': name });
// }

function image_click() {
    var src = img.src;
    window.open(src);
}