function loadArticle(title){
    //var url = encodeURI(title + ".html");
    //var url = title + ".html";
    var url = encodeURI(title );
    
    $("div.page-content div.wrapper div.home").load(url);
    
    
}

function loadCategories(category){
    
}

/*var art = {"fileName":"MarkNote"};
loadArticle(art);*/