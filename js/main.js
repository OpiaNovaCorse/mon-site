 Initialisation de i18next pour la gestion des traductions
i18next.init({
    lng 'fr',  Langue par défaut
    resources {
        fr { translation fetch('localesfrtranslation.json').then(res = res.json()) },
        en { translation fetch('localesentranslation.json').then(res = res.json()) },
        co { translation fetch('localescotranslation.json').then(res = res.json()) },
        it { translation fetch('localesittranslation.json').then(res = res.json()) },
        zh { translation fetch('localeszhtranslation.json').then(res = res.json()) },
        de { translation fetch('localesdetranslation.json').then(res = res.json()) }
    }
}, function(err, t) {
    if (err) return console.error(err);
    updateContent();
});

 Mise à jour du contenu traduit
function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(element = {
        const key = element.getAttribute('data-i18n');
        element.innerHTML = i18next.t(key);
    });

    document.querySelectorAll('[data-i18n][placeholder]').forEach(element = {
        const key = element.getAttribute('data-i18n');
        element.placeholder = i18next.t(key);
    });
}

 Changement de langue
document.getElementById('language-selector').addEventListener('change', (e) = {
    i18next.changeLanguage(e.target.value, () = {
        updateContent();
    });
});