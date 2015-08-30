module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        //pkg: grunt.file.readJSON('package.json'),

        // Using LESS
        //less: {
        //    development: {
        //        options: {
        //            paths: ["public/vendor/bootstrap/less"]
        //        },
        //        files: {
        //            "public/css/less/bootstrap.css": "public/vendor/bootstrap/less/bootstrap.less",
        //            "public/css/less/toastr.css": "public/vendor/toastr/toastr.less",
        //            "public/css/less/site.css": "public/less/*.less"
        //        }
        //    }
        //    //,
        //    //production: {
        //    //    options: {
        //    //        paths: ["public/vendor/bootstrap/less"],
        //    //        plugins: [
        //    //            new require('less-plugin-autoprefix')({browsers: ["last 2 versions"]}),
        //    //            new require('less-plugin-clean-css')({advanced: true})
        //    //        ],
        //    //        modifyVars: {
        //    //            imgPath: '"http://mycdn.com/path/to/images"',
        //    //            bgColor: 'red'
        //    //        }
        //    //    },
        //    //    files: {
        //    //        "public/css/_min/bootstrap.css": "public/vendor/bootstrap/less/bootstrap.less"
        //    //    }
        //    //}
        //},

        //  SASS
        sass: {

            foundation: {                            // Target
                files: {                         // Dictionary of files
                    'public/css/scss/foundation.css': 'public/vendor/foundation/scss/foundation.scss'
                }
            },

            dist: {
                options: {                       // Target options
                    style: 'expanded'
                },
                files: [{
                    expand: true,
                    cwd: 'public/scss',
                    src: ['*.scss'],
                    dest: 'public/css/scss',
                    ext: '.css'
                }]
            }
        },

        // minify css files
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'public/css/vendors.css': ['public/css/less/bootstrap.css','public/css/less/toastr.css', 'public/css/less/site.css']
                }
            }
        },

        // minify node Javascripts
        //uglify: {
        //    options: {
        //        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        //    },
        //    build: {
        //        src: 'src/<%= pkg.name %>.js',
        //            dest: 'build/<%= pkg.name %>.min.js'
        //    }
        //},

        // minify js
        meta:{banner:'/* This is my vendor minified js files. built <%= grunt.template.today() %> */'},
        uglify: {
            dist: {
                src: ['<banner>','public/vendor/jquery/dist/jquery.js'],
                dest: 'public/js/vendors.min.js'
            }
        },
        watch:{
            files:[],
            tasks:[]
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // Default task(s).
    grunt.registerTask('default', ['sass','cssmin','uglify']);


    //grunt.loadNpmTasks('grunt-contrib-uglify');

    //grunt.registerTask('default', ['less', 'cssmin', 'min']);

};