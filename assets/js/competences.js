        document.querySelectorAll('#competences li').forEach(item => {
            const level = item.getAttribute('data-level');
            item.style.setProperty('--level', level + '%');
        });