// js/youtube-video.js

// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace 'VIDEO_ID' with the actual ID of your YouTube video.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-container', {
        height: '315',
        width: '560',
        videoId: 'QbtGv-joDJ8',
    });
}

