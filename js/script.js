/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Chanda Pani","Salt","Lost Control","Natural"];
var images = ["https://content-images.p-cdn.com/images/public/int/7/0/9/4/859729974907_500W_500H.jpg","https://vignette.wikia.nocookie.net/melanie-martinez/images/1/17/Ava_Max_-_Salt-0/revision/latest?cb=20180927213102","https://weraveyou.com/wp-content/uploads/2017/04/Alan_Walker_Ignite.jpg","https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Imagine_Dragons_Natural.png/220px-Imagine_Dragons_Natural.png"];
var artists = ["By:Adam Ferello","By: Ava Max","By: Alan Walker","By: Imagine Dragons"]
var lengths = ["2:41","3:03","3:43","3:10"]
var links = ["https://www.youtube.com/watch?v=noX-670zjfs","https://www.youtube.com/watch?v=eNdUPI1ndC8","https://www.youtube.com/watch?v=-Ed-GNq2EyU","https://www.youtube.com/watch?v=0I647GU3Jsc"]

function displaySongInfo(){
    songs.forEach(function(x) {
        $("#songs").append("<p>" + x + "</p>");
    });
     images.forEach(function(x) {
        $("#images").append("<img src=" + x + ">");
    });
     artists.forEach(function(x) {
        $("#artists").append("<p>" + x + "</p>");
    });
     lengths.forEach(function(x) {
        $("#lengths").append("<p>" + x + "</p>");
    });
     links.forEach(function(x) {
        $("#links").append("<a href=" + x + ">" + "Listen" + "</a>");
    });
}

function emptySongInfo(){
    $("#songs").empty();
    $("#images").empty();
    $("#artists").empty();
    $("#links").empty();
    $("#lengths").empty();


}


function addSongInfo(){
     var song = $("#song").val();
    songs.push(song);
    var image = $("#image").val();
    images.push(image);
    var link = $("#link").val();
    links.push(link);
    var length = $("#length").val();
    lengths.push(length);
    var artist = $("#artist").val();
    artists.push(artist);
}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
