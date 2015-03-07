module.exports = function(grunt){

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), 


		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
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
		watch: {
			// scripts: {
			// 	files: ['source/js/*.js'],
			// 	tasks: ['concat', 'uglify'],
			// 	options: {
			// 		livereload: true,
			// 		spawn: false
			// 	}
			// },
			css: {
				files: ['public/css/**/*.scss'],
				tasks: ['sass','autoprefixer'],
			}
		}		
    });


	// Plugins
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass', 'watch', 'autoprefixer']);

};