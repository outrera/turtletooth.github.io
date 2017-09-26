$(document).ready(function () {
    $(".youtube-link").click(function (event) {
        $("#youtube_video").attr("src", "https://youtube.com/embed/" + event.target.id + "?controls=1&showinfo=1&rel=0");
    });
});



