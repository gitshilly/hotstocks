/*
 * @Author: gitshilly
 * @Date:   2017-10-31 10:24:27
 * @Version:   1.0
 * @Last Modified by:   gitshilly
 * @Last Modified time: 2017-12-07 10:54:56
 */
//包装函数
module.exports = function(grunt) {
    grunt.initConfig({
        //任务配置，所有插件的配置信息
        pkg: grunt.file.readJSON('package.json'),
        //清除目录
        clean: {
            all: ['dist/html/**', 'dist/*.*'],
            image: 'dist/html/images',
            css: 'dist/html/css',
            html: 'dist/html/**/*'
        },
        copy: {
            src: {
                files: [
                    { expand: true, cwd: 'src', src: ['*.html'], dest: 'dist/html' }
                ]
            }
            ,
            image: {
                files: [
                    { expand: true, cwd: 'src', src: ['images/*.{png,jpg,jpeg,gif}'], dest: 'dist/html' }
                ]
            }
        },
        // concat:{
        // 	options:{
        // 		separator:';',
        // 		stripBanners:true,
        // 	},
        // 	js:{
        // 		src:[
        // 		"src/js/EMCommon.js",
        // 		"src/js/common.js",
        // 		"src/js/index.js"
        // 		],
        // 		dest:"build/js/default.js"
        // 	},
        // 	css:{
        // 		src:[
        // 			"src/css/*.css"
        // 		],
        // 		dest:'dist/html/css/default.css'
        // 	}
        // },
        //uglify 插件的配置信息 压缩
        uglify: {
            options: {
                stripBanners: true,
                banner: '/*! <%=pkg.name%>-<%=pkg.version%>.js <%=grunt.template.today("yyyy-mm-dd")%> */\n'
            },
            target: {
                src: ['src/js/collections.js'],
                dest: 'dist/html/js/collections.min.js'
            },
            target1: {
                src: ['src/js/detail.js'],
                dest: 'dist/html/js/detail.min.js'
            },
            target2: {
                src: ['src/js/flexible.js'],
                dest: 'dist/html/js/flexible.js'
            },
            target3: {
                src: ['src/js/zepto.js'],
                dest: 'dist/html/js/zepto.min.js'
            },
            target4: {
                src: ['src/js/flexible_css.js'],
                dest: 'dist/html/js/flexible_css.js'
            },
            target5: {
                src: ['src/js/jquery.autocomplete.js'],
                dest: 'dist/html/js/jquery.autocomplete.js'
            },
            target6: {
                src: ['src/js/personal.js'],
                dest: 'dist/html/js/personal.min.js'
            },
            target7: {
                src: ['src/js/personal_detail.js'],
                dest: 'dist/html/js/personal_detail.min.js'
            },
            target8: {
                src: ['src/js/product.js'],
                dest: 'dist/html/js/product.min.js'
            },
            target9: {
                src: ['src/js/searchresult.js'],
                dest: 'dist/html/js/searchresult.min.js'
            },
            target10: {
                src: ['src/js/product.js'],
                dest: 'dist/html/js/product.min.js'
            },
            target11: {
                src: ['src/js/swipeleft.js'],
                dest: 'dist/html/js/swipeleft.min.js'
            },
            target12: {
                src: ['src/js/stock.js'],
                dest: 'dist/html/js/stock.js'
            },
            target13: {
                src: ['src/js/clue.js'],
                dest: 'dist/html/js/clue.js'
            },
            target14: {
                src: ['src/js/cluedetails.js'],
                dest: 'dist/html/js/cluedetails.js'
            }
            //  batch: {
            //    expand : true,            //将占位符*展开 即使用占位符匹配文件名
            //    //cwd:'src/html			//在src/js目录下
            //    src: ['js/*.js','!js/*.min.js'],       //压缩src目录及所有子目录下的js文件
            //    dest: 'dist/html',             //压缩文件存放到dist目录下的同名目录
            // //   ext: '.min.js',           //压缩文件的后缀名
            // }
        },
        // 压缩CSS
        // cssmin: {
        //     prod: {
        //         options: {
        //             report: 'gzip'
        //         },
        //         files: [{
        //             expand: true,
        //             cwd: 'dist/html',
        //             src: ['css/*.css'],
        //             dest: 'dist/html'
        //         }]
        //     }
        // },
        // 压缩 css 合并
        cssmin: {
            options: {
                keepSpecialComments: 0
            },
            compress: {
                files: {
                    'dist/html/css/common.css': [
                        "src/css/common.css",
                        "src/css/normalize.css"
                    ]
                }
            }
        },
        // 压缩图片
        imagemin: {
            prod: {
                options: {
                    optimizationLevel: 7,
                    pngquant: true
                },
                files: [
                    { expand: true, cwd: 'dist/html', src: ['images/*.{png,jpg,jpeg,gif,webp,svg}'], dest: 'dist/html' }
                ]
            }
        },
        //处理html中css、js 引入合并问题
        usemin: {
            html: 'dist/html/*.html'
        },
       // js 语法错误
        jshint: {
            opitions: {
                jshintrc: '.jshintrc'
            },
            build: ['Gruntfile.js', 'src/js/*.js']
        }
        //,
        //压缩HTML
        // htmlmin: {
        //     options: {
        //         removeComments: true,
        //         removeCommentsFromCDATA: true,
        //         collapseWhitespace: true,
        //         collapseBooleanAttributes: true,
        //         removeAttributeQuotes: true,
        //         removeRedundantAttributes: true,
        //         useShortDoctype: true,
        //         removeEmptyAttributes: true,
        //         removeOptionalTags: true
        //     },
        //     html: {
        //         files: [
        //             { expand: true, cwd: 'dist/html', src: ['*.html'], dest: 'dist/html' }
        //         ]
        //     }
        // }
        //css 语法错误
        // csslint:{
        // 	opitions:{
        // 		jshintrc:'.csslintrc'
        // 	},
        // 	build:['src/css/*.css']
        // },
        // //watch 插件的配置信息
        // watch:{
        // 	build:{
        // 		files:['src/scripts/*.js','src/css/*.css'],
        // 		tasks:['concat','jshint','uglify','csslint','cssmin'],
        // 		options:{spawn:false}
        // 	}
        // }
    });

    
    //grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-usemin');
    //grunt.loadNpmTasks('grunt-contrib-csslint');
    //注册任务 告诉grunt当我们在终端中输入grunt时需要做些什么
    grunt.registerTask('default', ['clean','copy','uglify', 'cssmin', 'jshint','imagemin','usemin']); //,'watch','csslint'
};