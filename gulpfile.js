var gulp = require('gulp')
var concat = require('gulp-concat');

var paths = {
    js: [
        "node_modules/jquery/dist/jquery.min.js",
        "node_modules/popper.js/dist/umd/popper.min.js",
        "node_modules/bootstrap-material-design/dist/js/bootstrap-material-design.min.js",
        "node_modules/twitter-bootstrap-wizard/jquery.bootstrap.wizard.min.js",
        "src/assets/material_kit/js/material-kit.min.js",
        "src/assets/material_kit/js/material-bootstrap-wizard.js",
        "node_modules/jquery-validation/dist/jquery.validate.min.js",
        "node_modules/angular/angular.min.js",
        "node_modules/chart.js/dist/Chart.min.js",
        "node_modules/angular-chart.js/dist/angular-chart.min.js",
        "node_modules/angular-input-masks/releases/angular-input-masks-standalone.min.js"

    ],
    css: [
        "src/assets/material_kit/css/material-kit.css",
        "src/assets/material_kit/css/material-bootstrap-wizard.css",
        "node_modules/components-font-awesome/css/font-awesome.css"
    ]
};

//Tarefa para copiar as fonts do font-awesome para pasta src/shared/libs/js
gulp.task('libs-fonts', function () {
    gulp.src('node_modules/components-font-awesome/fonts/**/*')
        .pipe(gulp.dest('src/assets/fonts'));
});


//Tarefa para concatenar as libs js public e salvar arquivo em src/shared/libs/js
gulp.task('libs-js', function () {
    gulp.src(paths.js)
        .pipe(concat('public.libs.js'))
        .pipe(gulp.dest('src/assets/js'));
});

//Tarefa para concatenar as libs css public e salvar arquivo em src/shared/libs/css
gulp.task('libs-css', function () {
    gulp.src(paths.css)
        .pipe(concat('public.libs.css'))
        .pipe(gulp.dest('src/assets/css'))
});

gulp.task("public-libs", [
    "libs-css",
    "libs-js",
    "libs-fonts"]
);

// Tarefa padrão quando executado o comando GULP
gulp.task('default', ["public-libs"]);

