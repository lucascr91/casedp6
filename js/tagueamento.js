const entre_em_contato = () => {
    ga('send', {'hitType': 'event', 'eventCategory': 'menu', 'eventAction': 'entre_em_contato', 'eventLabel': 'link_externo' });
}

const download_pdf = () => {
    ga('send', {'hitType': 'event', 'eventCategory': 'menu', 'eventAction': 'download_pdf', 'eventLabel': 'download_pdf' });
}

const latim_button = (obj) => {
    let name = $(obj).data('name');
    ga('send', {'hitType': 'event', 'eventCategory': 'analise', 'eventAction': 'ver_mais', 'eventLabel': name});
}

const form_fill = (obj) => {
    let name = obj.id;
    ga('send', {'hitType': 'event', 'eventCategory': 'contato', 'eventAction': name, 'eventLabel': "preencheu"});
}

const envia_form  = () => {
    ga('send', {'hitType': 'event', 'eventCategory': 'contato', 'eventAction': 'enviado', 'eventLabel': "enviado"});
}