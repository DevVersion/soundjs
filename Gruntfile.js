module.exports = function (grunt) {

    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-clean");

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

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

    grunt.registerTask("default", ["clean", "copy", "uglify"]);

};