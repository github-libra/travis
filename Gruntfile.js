module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-jslint');

    var config = {
        jslint: {
            client: {
                src: [
                    '*.js'
                ],
                exclude: [
                    'Gruntfile.js'
                ]
            }
        }
    }

    grunt.initConfig(config);


    grunt.registerTask('default', ['jslint']);
}
