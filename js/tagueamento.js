const entre_em_contato = () => {
    ga('send', {'hitType': 'event', 'eventCategory': 'menu', 'eventAction': 'entre_em_contato', 'eventLabel': 'link_externo' });
}

const download_pdf = () => {
    ga('send', {'hitType': 'event', 'eventCategory': 'menu', 'eventAction': 'download_pdf', 'eventLabel': 'download_pdf' });
}

const latim_button = (obj) => {
    let name = obj.alt;
    ga('send', {'hitType': 'event', 'eventCategory': 'analise', 'eventAction': 'ver_mais', 'eventLabel': name});
}