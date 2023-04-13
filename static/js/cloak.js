const cloaks = {
    'google': {
        icon: 'https://www.google.com/s2/favicons?domain=https://google.com&sz=50',
        title: 'Google'
    },
    'canvas': {
        icon: 'https://www.google.com/s2/favicons?domain=https://canvas.instructure.com&sz=50',
        title: 'Dashboard'
    },
    'drive': {
        icon: 'https://www.google.com/s2/favicons?domain=https://drive.google.com&sz=50',
        title: 'My Drive - Google Drive'
    },
    'gmail': {
        icon: 'https://www.google.com/s2/favicons?domain=https://mail.google.com&sz=50',
        title: 'Inbox (1) - school@is.stupid - School is Stupid Mail'
    },
    'default': {
        icon: '/favicon.ico',
        title: 'Polaris'
    }
};

function setCloak(name) {
    if (cloaks[name]) {
        document.title = cloaks[name].title;

        const favicon = document.querySelector('link[type="image/x-icon"]') || document.createElement('link');
        favicon.href = cloaks[name].icon;

        if (document.querySelector('link[type="image/x-icon"]')) {
            favicon.type = 'link[type="image/x-icon"]';
            document.head.appendChild(favicon);
        }

        localStorage.setItem('cloak', name);
    } else {
        alert(`${name} is not a valid cloak`);
    }
}

function resetCloak() {
    localStorage.setItem('cloak', 'default');
    location.reload();
}

const cloakData = localStorage.getItem('cloak');

if (cloakData) {
    setCloak(cloakData);
} else {
    setCloak('default');
    location.reload();
}