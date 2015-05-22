# SoundJS
Control the audio output your JS client :heart:

### Download
- Download the source and use the ```dist``` folder.
- https://github.com/PaulGap/soundjs/releases

### Installation
- You can choose between the minified and normal js file.
- Just include the library with the following code.
- ```<script src="../dist/soundjs.js" type="text/javascript"></script>``` or
- ```<script src="../dist/soundjs.min.js" type="text/javascript"></script>```

### Usage
```
var soundjs = new SoundJS();

// Set Sound Path
soundjs.setPath("sound.mp3");

// Set Volume
soundjs.setVolume(1);

// Add a Callback
soundjs.setCallback(function() {
  alert("The Sound ended!");
});

// Play the Sound
soundjs.play();
```
