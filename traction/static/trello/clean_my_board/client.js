function isConfigured(t) {
    return false;
}

function cleanMyBoard(t) {
    //TODO
    if (isConfigured(t)) {
        // t.get() list configuration
        // clean any lists marked for cleaning
    } else {
        showSettings(t)
    }
}

function showAuthIframe(t) {
    return t.popup({
        //TODO
    })
}

function showSettings(t) {
    return t.getRestAPI().isAuthorized()
        .then(function (isAuthorized) {
            if (isAuthorized) {
                return t.popup({
                    title: 'CleanMyBoard Settings',
                    url: './settings.html',
                    height: 184
                });
            } else {


            }
        })
}

TrelloPowerUp.initialize(
    {
    'board-buttons': function (t) {
        return t.getRestAPI().isAuthorized().then(function (isAuthorized) {
            if (isAuthorized) {
                return [
                    {
                        text: "Clean My Board",
                        callback: cleanMyBoard
                    }
                ]
            } else {
                return [
                    {
                        text: "CleanMyBoard Trello Auth",
                        callback: showAuthIframe
                    }
                ]
            }

        });
    },
    'show-settings': showSettings,
    },
    {
        appKey: '',
    }
);