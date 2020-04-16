//get all posts
$(document).ready(function(){
$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts'), function(posts){
    console.log(posts)
    ltt div = $("#posts");
    div.text(posts);
    $('body ').append(div);
    div.text(JSON.stringify(posts));
});

//get post with id of 10
$('#post10').click())=>{
    var p = $('<p></p>');
    p.text(JSON.stringify(posts));
    $('body').append(p);

}
//button 3

$('button3').on('click', function(){
    $get(https, {id:12}, function(posts)
    posts.forEach(post=>{
        let p = $('<p></p>');
        p.text(postText);
        $('div1')

        // need to finish this one!!!
    })
})


//BUTTON 5

$(".#create-post").click()=>{
    let title = "hello";
    let body = 'world';
    $.post('posts url'{, title:postTitle, body: postBody})
    .done(data=>
        console.log(data);
        $('#posts').text('Id:' + data.id)
    )
}


