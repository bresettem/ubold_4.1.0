// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require('jquery')
require("bootstrap")
require('simplebar')
require('waypoints/lib/noframework.waypoints')
require('feather-icons/dist/feather')

import '../stylesheets/application';
import '../../../vendor/css/icons.css'

document.addEventListener("turbolinks:load", function () {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
        $('[data-toggle="popover"]').popover()
    })
})

import * as feather from 'feather-icons';
document.addEventListener("DOMContentLoaded", function (event) {
    require('../../../vendor/js/app')
    require('../../../vendor/js/vendor')
    // Waves Effect
    const Waves = require("node-waves");
    Waves.init();

    // Feather Icons
    feather.replace()
});

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
const images = require.context('../../assets/images', true)
const imagePath = (name) => images(name, true)