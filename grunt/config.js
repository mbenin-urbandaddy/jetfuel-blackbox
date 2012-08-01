// All filepaths are relative to the grunt.js directory, recursively, unless absolute
module.exports = {

    // Use package.json project config
    pkg: '<json:package.json>',

    // Meta config
    meta: {

      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.organization %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */',

      build: {
          name: '<%= pkg.name %>-<%= pkg.version %>'
      },

      // Directory config
      dirs: {
        test: 'test',
        src: 'src',
        lib: 'lib',
        dest: 'dist',
        docs: 'docs',
        modules: 'node_modules',
        deploy: 'webapp/js',
        sass: {
          src: 'sass/src',
          dest: 'sass/dist',
          resources: 'sass/resources',
          deploy: 'webapp/css'
        }
      }
    },

    // grunt clean (grunt clean:all)
    clean: {
      // grunt clean:dist
      dist: {
        src: ['<%= meta.dirs.dest %>', '<%= meta.dirs.dest %>/**/*']
      },
      // grunt clean:docs
      docs: {
        src: ['<%= meta.dirs.docs %>', '<%= meta.dirs.docs %>/**/*']
      },
      // grunt clean:sass
      sass: {
          src: ['<%= meta.dirs.sass.dest %>', '<%= meta.dirs.sass.dest %>/**/*']
      },
      // grunt clean:lib
      lib: {
        src: ['<%= meta.dirs.lib %>', '<%= meta.dirs.lib %>/**/*']
      }
    },

    // grunt copy (grunt copy:all)
    copy: {
      // grunt copy:dist
      dist: {
        src: ['<%= meta.dirs.src %>/**/*.js'],
        dest: '<%= meta.dirs.dest %>'
      },
      // grunt copy:jquery
      jquery: {
        src: ['<%= meta.dirs.modules %>/jquery/tmp/*.js'],
        dest: '<%= meta.dirs.lib %>'
      },
      // grunt copy:espresso
      espresso: {
        src: ['<%= meta.dirs.modules %>/espresso-js/*.js'],
        dest: '<%= meta.dirs.lib %>'
      },
      // grunt copy:qunit
      qunit: {
        src: ['<%= meta.dirs.modules %>/qunit/support/qunit/qunit/*'],
        dest: '<%= meta.dirs.lib %>'
      }
    },

    // grunt godcat (grunt godcat:all)
    godcat: {
      // grunt godcat:dist
      dist: {
        src: ['<%= meta.dirs.dest %>/**'],
        dest: '<%= meta.dirs.dest %>',
        filters: ['*.js'],
        extension: '.js',
        separator: ';'
      }
    },

    // grunt godmin (grunt godmin:all)
    godmin: {
      // grunt godmin:dist
      dist: {
        //banner: '<banner:meta.banner>',
        src: ['<%= meta.dirs.dest %>/**/*.js'],
        dest: '<%= meta.dirs.dest %>',
        extension: '.min.js',
        replace: '.js',
        verbose: true
      }
    },

    // grunt deploy (grunt deploy:all)
    deploy: {
        // grunt deploy:dist
        dist: {
            src: ['<%= meta.dirs.dest %>/*', '<%= meta.dirs.lib %>/*'],
            dest: '<%= meta.dirs.deploy %>',
            rsync: {
                args: '-rlpgoDc --exclude=.svn'
            }
        },
        // grunt deploy:sass
        sass: {
            src: ['<%= meta.dirs.sass.dest %>/*', '<%= meta.dirs.sass.resources %>/*'],
            dest: '<%= meta.dirs.sass.deploy %>',
            rsync: {
                args: '-rlpgoDc --exclude=.svn'
            }
        }
    },

    // grunt concat (grunt concat:all)
    concat: '<json:src/concat.json>',

    // grunt compass (grunt compass:all)
    compass: {
      // grunt compass:dist
      dist: {
        src: '<%= meta.dirs.sass.src %>',
        dest: '<%= meta.dirs.sass.dest %>',
        images: 'sass/resources/images',
        config: 'sass/config.rb',
        outputstyle: 'compressed',
        linecomments: true,
        forcecompile: true
      }
    },

    // grunt docs (grunt jsdoc:all)
    jsdoc: {
      // grunt jsdoc:dist
      dist: {
        src: '<%= meta.dirs.src %>',
        dest: '<%= meta.dirs.docs %>',
        exclude: 'jquery',
        recurse: 100,
        all: true,
        private: true
      }
    },

    // grunt qunit
    qunit: {
      files: ['<%= meta.dirs.test %>/**/*.html']
    },

    // grunt watch
    watch: {  
      dist: {
        files: ['<%= meta.dirs.src %>/**/*.js'],
        tasks: 'dev:dist'
      },  
      sass: {
        files: ['<%= meta.dirs.sass.src %>/**/*.sass'],
        tasks: 'dev:sass'
      }
    },

    // grunt lint
    lint: {
      files: ['grunt.js', '<%= meta.dirs.src %>/**/*.js', '<%= meta.dirs.test %>/**/*.js']
    }

};