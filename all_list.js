var books = $('a[href^="showbook.php"]');
$.each(books, function(index){
  var m = this.href.match(/showbook.php\?h=(\w+)&d=(\w+)&f=(.+)$/);
  var optimizeUrl = "bookoptimize.php?hash=" + m[1] + "&d=" + m[2] + "&filename=" + m[3];
  var optimizeLink = $('<a href="' + optimizeUrl + '" style="font-size: 16px; margin: 4px;">Optimize</a>');
  $(this).parent().append(optimizeLink);
});
