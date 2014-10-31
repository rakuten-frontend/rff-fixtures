do (window = window) ->
  'use strict'

  $ = window.jQuery
  Modernizr = window.Modernizr
  moment = window.moment

  renderMoment = ->
    $('.moment').text(moment().format('YYYY-MM-DD HH:mm:ss'))
    setTimeout renderMoment, 1000

  renderMoment()

  $('.localstorage-support')
    .text 'Your browser supports localStorage!' if Modernizr.localstorage
  $('.history-support')
    .text 'Your browser supports History API!' if Modernizr.history
  $('.touch-support')
    .text 'Your browser supports Touch Events!' if Modernizr.touch

