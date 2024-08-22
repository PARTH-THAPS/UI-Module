module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            target: {
                files: {
                    'dest/js/main.min.js': ['Public/jsScript.js']
                }
            }
        },
cssmin:{
    target:{
        files:[{
            expand: true,
            cwd: 'src/views',
            src: ['*.css', '!*.min.css'],
            dest: 'dest/css',
            ext: '.min.css'
        }]
    }
}

    });

    // Load the plugin that provides the "uglify" task
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');


    // Default task(s)
    grunt.registerTask('default', ['uglify','cssmin']);

};
