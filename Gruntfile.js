module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    openui5_preload: {
      component: {
        options: {
          resources: {
            cwd: '',
            prefix: '',
            src: [
              'app/**/*.js',
              'app/**/*.fragment.xml',
              'app/**/*.view.xml',
              'app/**/*.properties'
            ]
          },
          dest: '',
          compress: true
        },
        components: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-openui5');
  grunt.registerTask('default', ['openui5_preload']);
}
