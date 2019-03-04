function ezTabs(ezTabBar, ezTab, ezTabContent) {

    let tab = document.querySelectorAll('.' + ezTab),
        tabBar = document.querySelector('.' + ezTabBar),
        tabContent = document.querySelectorAll('.' + ezTabContent);

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('showEzTab');
            tabContent[i].classList.add('hideEzTab');
        }
    }
    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hideEzTab')) {
            tabContent[b].classList.remove('hideEzTab');
            tabContent[b].classList.add('showEzTab');
        }
    }

    tabBar.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains(ezTab)) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
};


