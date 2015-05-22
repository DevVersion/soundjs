module.exports = function (grunt) {

    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-jshint");

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        jshint: {
            scripts: ["Gruntfile.js", "src/**/*.js"]
        },

        copy: {
            scripts: {
                expand: true,
                dest: "dist/",
                cwd: "src/",
                src: "**/*.js"
            }
        },

        uglify: {
            options: {
                sourceMap: true,
                mangle: false
            },
            scripts: {
                files: [{
                    expand: true,
                    src: ["**/*.js", "!**/*.min.js"],
                    cwd: "dist/",
                    dest: "dist/",
                    ext: ".min.js"
                }]
            }
        },

        watch: {
            scripts: {
                files: ["src/**/*.js"],
                tasks: ["default"],
                options: {
                    spawn: false
                }
            }
        },

        clean: {
            dist: ["dist/"]
        }
    });

    grunt.registerTask("default", ["jshint", "clean", "copy", "uglify"]);

};