do (window = window) ->
  'use strict'

  $ = window.jQuery
  moment = window.moment

  renderMoment = ->
    $('.moment').text(moment().format('YYYY-MM-DD HH:mm:ss'))
    setTimeout renderMoment, 1000

  renderMoment()
