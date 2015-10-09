   module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-karma');

    var jsSrc = ['src/**/*.js'];
    var jsDist = 'build/js/built.js';
    var testFiles = ['test/**/*.js', 'test/*.js'];
    var allFiles = ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js', 'src/*.js', 'test/*.js'];

    // Configuration de Grunt
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      connect: {
        server: {
          port: 8000
        }
      },
      jshint: {
        files: allFiles,
      },
      less: {
        development: {
          files: {
            "build/style/style.css": "src/style/style.less"
          }
        }
      },
      concat: {
        options: {
          separator: ';',
        },
        compile: { // On renomme vu qu'on n'a pas de mode dev/dist. Dist étant une autre tâche : uglify
          src: jsSrc, // Vu qu'on doit l'utiliser deux fois, autant en faire une variable.
          dest: jsDist // Il existe des hacks plus intéressants mais ce n'est pas le sujet du post.
        }
      },
      uglify: {
        options: {
          separator: ';',
        },
        compile: {
          src: jsSrc,
          dest: jsDist
        }
      },
      watch: {
        scripts: {
          files: allFiles,
          tasks: ['jshint','concat','uglify']
        },
        tests: {
          files: testFiles,
          tasks: ['karma']
        },
        css: {
          files: 'src/**/*.less',
          tasks: ['less']
        }
      },
      karma: {
        unit: {
            configFile: 'karma.conf.js',
            singleRun: true
        }
      }
    });

    grunt.registerTask('default', ['jshint','concat','uglify', 'karma', 'less', 'connect', 'watch']);
  };