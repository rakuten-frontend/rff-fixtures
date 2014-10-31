(function (window) {

    'use strict';

    var $ = window.jQuery;
    var Modernizr = window.Modernizr;
    var moment = window.moment;

    function renderMoment() {
        $('.moment').text(moment().format('YYYY-MM-DD HH:mm:ss'));
        setTimeout(renderMoment, 1000);
    }

    renderMoment();

    if (Modernizr.localstorage) {
        $('.localstorage-support').text('Your browser supports localStorage!');
    }
    if (Modernizr.history) {
        $('.history-support').text('Your browser supports History API!');
    }
    if (Modernizr.touch) {
        $('.touch-support').text('Your browser supports Touch Events!');
    }

}(window));
