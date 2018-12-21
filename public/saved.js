function getSavedArticles(){
    $('#saved').empty()
    $.get('/saved', function(data){
        for (var i = 0; i < data.length; i++) {
            // Display the apropos information on the page
            $("#saved").append("<div> <img src='" + data[i].img + "'>" + "<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p><button data-id="+ data[i]._id +" class=delete> delete </button></div>"
            );
      
          }
    })
}


getSavedArticles()


$(document).on('click', '.delete', function(){
    var id = { _id: $(this).attr('data-id')}
    console.log(id);
    $.post('/delete', id, function(data){
        console.log(data, "this is the data");
        getSavedArticles()
    })
  })