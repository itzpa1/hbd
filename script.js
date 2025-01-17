

var birthdayArea = document.querySelector(".birthdayCard_Area");
var birthdayShow = document.querySelector(".tap");
var birthdayAudio = document.querySelector(".hbd_audio");

birthdayShow.addEventListener('click', function () {
    birthdayArea.style.display = "flex";
    birthdayArea.classList.add("open");
    birthdayAudio.play();
})

// hide birthdayPop up 

var hbd_audio = document.querySelector(".hbd_audio");
var infoPopup = document.querySelector(".info_popup");
var popClose = document.getElementById("pop_close");
const cardsContainer = document.querySelector(".cards");

hbd_audio.addEventListener('ended', function () {
    birthdayShow.style.display = "none";
    birthdayArea.classList.remove("open");
    birthdayArea.classList.add("close");
    infoPopup.style.display = "flex";
    infoPopup.classList.add("open")
    cardsContainer.style.display = "flex"
})

popClose.addEventListener('click', function () {
    infoPopup.style.display = "none";
})

function playAudio(obj) {
    var cardId = "#" + obj.id + " audio";
    var cardAudio = document.querySelector(cardId);
    cardAudio.play()
}



// adding card dynamically


var cardData = [
    {
        musicName: "This Gurll",
        imgSrc: `<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Smiling%20Face%20with%20Hearts.png" alt="Smiling Face with Hearts"  />`,
        bgSrc: "one"
    },
    {
        musicName: "Butterflies",
        imgSrc: `<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Butterfly.png" alt="Butterfly"/>`,
        bgSrc: "five"
    },
    {
        musicName: "Ibadatein",
        imgSrc: `<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Woman%20Fairy.png" alt="Woman Fairy"/>`,
        bgSrc: "three"
    },
    {
        musicName: "Ik Kudi",
        imgSrc: `<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Woman%20Facepalming.png" alt="Woman Facepalming" />`,
        bgSrc: "eleven"
    },
    {
        musicName: "Perfect",
        imgSrc: `<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Dove.png" alt="Dove" />`,
        bgSrc: "nine"
    },
    {
        musicName: "Suniya Suniya",
        imgSrc: `<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Woman%20Gesturing%20OK.png" alt="Woman Gesturing OK"  />`,
        bgSrc: "six"
    },
    {
        musicName: "Shayar",
        imgSrc: `<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Love%20Letter.png" alt="Love Letter" />`,
        bgSrc: "seven"
    },
    {
        musicName: "You're my Sunshine",
        imgSrc: `<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Crystal%20Ball.png" alt="Crystal Ball"/>`,
        bgSrc: "two"
    },
    {
        musicName: "Ud Jaa",
        imgSrc: `<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Woman%20Dancing.png" alt="Woman Dancing" width="25" height="25" />`,
        bgSrc: "seven"
    },
    {
        musicName: "Girl I need You",
        imgSrc: `<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Hand%20with%20Index%20Finger%20and%20Thumb%20Crossed.png" alt="Hand with Index Finger and Thumb Crossed"/>`,
        bgSrc: "four"
    },
    {
        musicName: "Mere Bina",
        imgSrc: `<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Pinched%20Fingers.png" alt="Pinched Fingers" />`,
        bgSrc: "eight"
    },
    {
        musicName: "Dildara",
        imgSrc: `<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Heart%20Hands.png" alt="Heart Hands" />`,
        bgSrc: "one"
    }
]


const cardsMethods = () => {
    cardData.map((item) => {
        const Content = `<div id="${item.bgSrc}" class="card relative w-[120px] h-[150px] rounded-lg shrink-0" onclick="playAudio(this)">
                <div class="card-inner">
                    <div class="card-front relative flex justify-center items-end bg-white" >
                        <div class="center_box relative w-[70%] h-[55%] mb-6 rounded-md flex justify-center items-center z-10">
                            ${item.imgSrc}
                        </div>
                    </div>
                    <div class="card-back relative flex justify-center items-end" >
                        <img class="h-full w-full absolute object-cover" src="media/img/${item.bgSrc}.jpg" alt="">
                        <div class="center_box relative w-[80%] h-auto mb-2 rounded-md flex flex-col justify-center items-end z-10">
                            <!-- <h1 class="music_count text-2xl font-semibold mr-1">00</h1> -->
                            <h1 class="music_name text-sm font-semibold w-full text-left pl-1">${item.musicName}</h1>
                            <audio class="hidden" src="media/audio/${item.musicName}.mp3" type="audio/mp3"></audio>
                        </div>
                    </div>
                </div>
            </div>`;

        cardsContainer.innerHTML += Content;
    })
}

cardsMethods()

document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for (var i = 0, len = audios.length; i < len;i++){
        if(audios[i] != e.target){
            audios[i].pause();
        }
    }
}, true);

// mute audio 

document.addEventListener('playing', function(e){
    var audio_ = document.getElementsByTagName('audio');
    for (var i = 0, len = audio_.length; i < len; i++){
        if(audio_[i].played){
            audio_[i].muted = false;
        }
    }
})

// mute audio 

var muteAudio = document.querySelector(".mute_button");
var Audio = document.querySelector("body audio");

muteAudio.addEventListener('click', function () {
    if (muteAudio.classList.contains("ri-volume-mute-fill")) {
        document.addEventListener('playing', function(e){
            var audio_ = document.getElementsByTagName('audio');
            for (var i = 0, len = audio_.length; i < len; i++){
                if(audio_[i].played){
                    audio_[i].muted = true;
                }
            }
        })
        muteAudio.classList.remove("ri-volume-mute-fill");
        muteAudio.classList.add("ri-volume-up-fill");
        // Audio.muted = true;
    } else {
        muteAudio.classList.remove("ri-volume-up-fill");
        muteAudio.classList.add("ri-volume-mute-fill");
        Audio.muted = false;
    }
})