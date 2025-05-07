var Notification = (function(){
    var link = document.querySelector("link[rel~='icon']")
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }

    const BELL_ICON = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAWQAAAFkBqp2phgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAErSURBVDiNlZOvS0NRGIaf79zhuXMzqMmmNlk1TBAsRpthIAuzaDOajOKCVRAMcgWTWC2WOcP+Ak2WtUVBcOzeuX2GDbl398fmF895n4f3O3AgY/SOunpcZmVyiWCLPIFbpTeooBhtOh8UeveySXcyKzG4ObcB8gSsTVy1cXRPtoP3VIG2yNO3b8B6SuM2Bb8UbmIi1333IAMGWOXbrYYPogLVcgY8zgy30gVIcapAZCFdIPFHTVJkCHR5BsFiok0bFDG2A0xbo4v1V6TMV7SBseczwADz+PYi0kBf3ENEb2eAQyPHstO7GTUQLf0PBhgxo78w9M8w9hVVC8Dn4Igf3Y3kHWmw5FwDYAjIBc9/K8TcHvvA48RxRWo8xBZJLehxCpyMM1dSo56U+wULvk1zqPChnQAAAABJRU5ErkJggg==';
    const ORIGINAL_TITLE = document.title;
    const ORIGINAL_ICON = link?.href || '';
    let currentNotificationInterval;

    function changeTitle(newTitle){
        document.title = newTitle;
    }

    function changeFavicon(newFavicon){
        var link = document.querySelector("link[rel~='icon']");
        link.href = newFavicon;
    }

    function start(message){
        end();

        let isDefault = true;

        currentNotificationInterval = setInterval(() => {
            if(isDefault){
                changeTitle(message);
                changeFavicon(BELL_ICON);
            }
            else{
                changeTitle(ORIGINAL_TITLE);
                changeFavicon(ORIGINAL_ICON);
            }
            
            isDefault = !isDefault;
        }, 1000);
    }

    function end(){
        clearInterval(currentNotificationInterval);

        changeTitle(ORIGINAL_TITLE);
        changeFavicon(ORIGINAL_ICON);
    }

    return {start, end};
})();