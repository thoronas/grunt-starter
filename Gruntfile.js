module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), 


		sass: {
			dist: {
				// options: {
				// 	style: 'compressed'
				// },
				files: {
					'public/css/style.css': 'public/css/style.scss',
				}
			}
		}, 
		autoprefixer: { 
			single_file: {
				src: 'public/css/style.css',
				dest: 'public/css/style.css'
			}
        },
		csscomb: {
			style: {
				files: {
					'public/css/style.css': ['public/css/style.css']
				}
			}
		},

		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
				target: {
				files: {
					'public/css/style.css': ['public/css/style.css']
				}
			}
		},


		concat: {
			options: {
				separator: ';',
			},
				dist: {
				src: [
					'source/js/script1.js',
					'source/js/script2.js',
				],
				dest: 'source/js/main-script.js',
			},
		},
		uglify: {
			my_target: {
				files: {
					'source/js/main-script.js': ['source/js/main-script.js']
				}
			}
		},


		watch: {
			scripts: {
				files: ['source/js/*.js'],
				tasks: ['concat', 'uglify'],
				options: {
					livereload: true,
					spawn: false
				}
			},
			css: {
				files: ['public/css/**/*.scss'],
				tasks: ['sass', 'csscomb', 'autoprefixer','cssmin','notify'],
			}
		},
		notify: {
			watch: {
				options: {
					title: 'Complie Complete',  // optional 
					message: 'SASS finished running', //required 
				}
			}
		}
    });


	// Plugins
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-csscomb');
	grunt.loadNpmTasks('grunt-notify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['sass', 'watch', 'csscomb', 'autoprefixer','cssmin','notify','concat','uglify']);

};