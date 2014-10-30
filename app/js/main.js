(function (window) {

    'use strict';

    var $ = window.jQuery;
    var moment = window.moment;

    function renderMoment() {
        $('.moment').text(moment().format('YYYY-MM-DD HH:mm:ss'));
        setTimeout(renderMoment, 1000);
    }

    renderMoment();

}(window));
