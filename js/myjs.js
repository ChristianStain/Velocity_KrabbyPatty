$(document).ready(function() {
    for(i=10; i<300; i++)
    $('#burguer').velocity({width: i, height: i}, 100);
});