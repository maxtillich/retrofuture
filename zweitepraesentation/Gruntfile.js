module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style:'compressed'
        },
        files: {
          'css/main.css' : 'css/main.scss'
        }
      }
    },
    autoprefixer: {
      dist: {
        files: {
          'css/main.css' : 'css/main.css'
        }
      }
    },
    cssmin: {
      minify: {
        src: 'css/main.css',
        dest: 'css/main.min.css'
      }
    },
    uglify: {
      minifyjs: {
        files: {
          'js/main.min.js': ['js/jquery_3.1.0.min.js', 'js/skrollr.min.js', 'js/main.js']
        }
      }
    },
    watch: {
      css: {
        files: ['css/*.scss'],
        tasks: ['sass', 'autoprefixer', 'cssmin']
      },
      js: {
        files: ['js/*.js'],
        tasks: 'uglify'
      }
    }
  });

  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default',['watch']);
}
