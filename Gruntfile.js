'use strict';

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-openui5');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    openui5_preload: {
      component: {
        options: {
          resources: {
            cwd: 'app',
            prefix: 'sap/ui/app',
            src: [
              '**/*.js',
              '**/*.fragment.xml',
              '**/*.view.xml',
              '**/*.properties'
            ]
          },
          dest: 'app',
          compress: true
        },
        components: true
      }
    },

    connect: {
      server: {
        options: {
          keepalive: true,
          port: 8000
        }
      }
    },

    openui5_connect: {
      server: {
        options: {
          appresources: 'app'
        }
      }
    }
  });

  grunt.registerTask('default', [
    'openui5_preload',
    'openui5_connect'
  ]);
}
