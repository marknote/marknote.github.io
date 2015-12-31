function loadArticle(title){
    var url = encodeURI(title );
    if (url=== "undefined"){ return;}
    $.get(url, function(data){
          //alert("Data Loaded: " + data);
          $("div.page-content div.wrapper div.home").html(data);
          $('pre.prettyprint').each(function(i, block) {
                    hljs.highlightBlock(block);
                    });
          $('pre code').each(function(i, block) {
                    hljs.highlightBlock(block);
                    });
          });
}

var QueryString = function () {
    
    var query_string = {};
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        // If first entry with this name
        if (typeof query_string[pair[0]] === "undefined") {
            query_string[pair[0]] = decodeURIComponent(pair[1]);
            // If second entry with this name
        } else if (typeof query_string[pair[0]] === "string") {
            var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
            query_string[pair[0]] = arr;
            // If third or later entry with this name
        } else {
            query_string[pair[0]].push(decodeURIComponent(pair[1]));
        }
    }
    return query_string;
}();

$(document).ready(function() {
                  var page = QueryString.page;
                  //alert(page);
                  loadArticle(page);
});


  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-71889431-1', 'auto');
  ga('send', 'pageview');





