// // JSON data for the song info. This could be loaded from an external file.  

// var songData = [
//     {
//         name: "Decak u vodi",
//         artist: "90 Naz",
//         producer: "Mikac",
//         year: "2021"
//     },
//     {
//         name: "Sajfer (ft. Mili)",
//         artist: "Daki, Mili, Zakila",
//         producer: "Mikac",
//         year: "2020"
//     }
// ];

// // Get the audio element and set its source to the first song in the JSON data.  

// var audioPlayer = document.getElementById('audioPlayer');

// audioPlayer.src = songData[0].name + ".mp3"; // Assumes mp3 file is in same directory as HTML page. You can also use a full URL here if needed.

// // Get the elements that will display the song info and set them to the first song in the JSON data.  

// document.getElementById('songName').innerHTML = songData[0].name;

// document.getElementById('artistName').innerHTML = songData[0].artist;

// document.getElementById('producerName').innerHTML = songData[0].producer;

// document.getElementById('year').innerHTML = songData[0].year;

// // Function to play a song when the play button is clicked    

// function playSong() {

//     audioPlayer.play();

// }

// // Function to pause a song when the pause button is clicked    

// function pauseSong() {

//     audioPlayer.pause();

// }

// // Function to stop a song when the stop button is clicked     

// function stopSong() {
//     // Stops playback and resets time to 0     	audioPlayer.pause();      audioPlayer.currentTime = 0;      
// }

var audio = {
    init: function () {
        var $that = this;
        $(function () {
            $that.components.media();
        });
    },
    components: {
        media: function (target) {
            var media = $('audio.fc-media', (target !== undefined) ? target : 'body');
            if (media.length) {
                media.mediaelementplayer({
                    audioHeight: 40,
                    features: ['playpause', 'current', 'duration', 'progress', 'volume', 'tracks', 'fullscreen'],
                    alwaysShowControls: true,
                    timeAndDurationSeparator: '<span></span>',
                    iPadUseNativeControls: true,
                    iPhoneUseNativeControls: true,
                    AndroidUseNativeControls: true
                });
            }
        },

    },
};
audio.init();