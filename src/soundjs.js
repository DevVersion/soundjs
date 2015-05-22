(function() {

    this.SoundJS = function() {

        var $dom = document.createElement("audio"), $element = $($dom);

        $element.css("display", "none");
        $element.attr("autoplay", "autoplay");

        this.play = function(path, repeat) {
            if (path !== null) $element.attr("src", path);
            $dom.loop = (repeat !== null && repeat ? true : false);
            $dom.play();
        };

        this.stop = function() {
            $dom.pause();
        };
    };

}());