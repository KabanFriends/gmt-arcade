let player;

function start(name) {
    let swfobject = {};
    
    swfobject.embedSWF = function(url, cont) {
        let ruffle = window.RufflePlayer.newest();
        
        player = Object.assign(document.getElementById(cont).appendChild(ruffle.createPlayer()));

        player.config = {
            letterbox: "on",
            autoplay: "on",
            unmuteOverlay: "hidden",
        };

        player.load({ url: url });
    }

    swfobject.embedSWF(`/gmt-arcade/swf/${name}.swf`, 'ruffle');
}