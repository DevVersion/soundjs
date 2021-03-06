(function() {

    this.SoundJS = function() {

        var $dom = document.createElement("audio"), $element = $($dom);

        $element.css("display", "none");
        $element.attr("autoplay", "autoplay");

        this.setPath = function(path) {
            $element.attr("src", path);
        };

        this.getPath = function() {
            return $element.attr("src");
        };

        this.setVolume = function(volume) {
            $dom.volume = volume;
        };

        this.getVolume = function() {
            return $dom.volume;
        };

        this.setRepeat = function(repeat) {
            $dom.loop = repeat;
        };

        this.isRepeated = function() {
            return $dom.loop;
        };

        this.setCallback = function(func) {
            $element.bind("ended", function() {
                func();
            });
        };

        this.play = function() {
            $dom.play();
        };

        this.pause = function() {
            $dom.pause();
        };
    };

}());