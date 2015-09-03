test('loading bar is visible', function() {
  appLoading.start()
  ok($('.loading-bar').is(':visible'))
})

test('set loading bar color globally', function() {
  appLoading.setColor('#333')
  ok(rgb2hex($('.loading-bar').css('background-color')) == '#333333')
})

test('restart loading with red color', function() {
  appLoading.stop()
  appLoading.start('#FF002F')
  ok(rgb2hex($('.loading-bar').css('background-color')) == '#FF002F')
})

function rgb2hex(orig){
   var rgb = orig.replace(/\s/g,'').match(/^rgba?\((\d+),(\d+),(\d+)/i);
   var hex = (rgb && rgb.length === 4) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : orig;

  return hex.toUpperCase()

}
