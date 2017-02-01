function loadArticle(title){
    var url = encodeURI(title );
    if (url=== "undefined"){
        url = "MarkNotes.html";
    }
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
          ga('set', 'page', url);
		  ga('send', 'pageview');
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
                  if(window.location.pathname.indexOf("index.html")>=0 || window.location.pathname === "/"){
                  loadArticle(page);
                  }
                  });



