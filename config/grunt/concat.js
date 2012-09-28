module.exports = {

    "site/Application.bundled.js": {
        "dest": "<%= meta.dirs.main.dest %>/site/Application.bundled.js",
        "src": [
            "<%= meta.dirs.vendor.dest %>/jetfuel.vendor.jquery/jquery.js",
            "<%= meta.dirs.vendor.dest %>/jetfuel.vendor.espresso/espresso.js",
            "<%= meta.dirs.vendor.dest %>/jetfuel.vendor.modernizr/modernizr.js",
            "<%= meta.dirs.vendor.dest %>/jetfuel.vendor.documentcloud.underscore/underscore.js",
            "<%= meta.dirs.vendor.dest %>/jetfuel.vendor.documentcloud.backbone/backbone.js",
            "<%= meta.dirs.main.dest %>/site/Application.js"
        ]
    }

};