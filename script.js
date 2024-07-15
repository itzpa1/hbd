



// mute audio 

var muteAudio = document.querySelector(".mute_button");
var Audio = document.querySelector("body audio");

muteAudio.addEventListener('click', function () {
    if (muteAudio.classList.contains("ri-volume-mute-fill")) {
        muteAudio.classList.remove("ri-volume-mute-fill");
        muteAudio.classList.add("ri-volume-up-fill");
        Audio.muted = true;
    } else {
        muteAudio.classList.remove("ri-volume-up-fill");
        muteAudio.classList.add("ri-volume-mute-fill");
        Audio.muted = false;
    }
})


// // share function 

var birthdayArea = document.querySelector(".birthdayCard_Area");
var birthdayShow = document.querySelector(".tap");

birthdayShow.addEventListener('click', function () {
    birthdayArea.style.display = "flex";
    birthdayArea.classList.add("open");
})

// hide birthdayPop up 

var hbd_audio = document.querySelector(".hbd_audio");
var infoPopup = document.querySelector(".info_popup");
var popClose = document.getElementById("pop_close");

hbd_audio.addEventListener('ended', function () {
    birthdayArea.classList.remove("open");
    birthdayArea.classList.add("close");
    infoPopup.style.display = "flex";
    infoPopup.classList.add("open")
})

popClose.addEventListener('click', function () {
    infoPopup.style.display = "none";
})

var musicCount = document.querySelector(".music_count");

function playAudio(obj) {
    var cardId = "#" + obj.id + " audio";
    var cardAudio = document.querySelector(cardId);
    cardAudio.play()
    // musicCount = cardAudio.curre
}



// adding card dynamically


var arrayTest = [
    {
        musicName: "This Gurll",
        imgSrc: `<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20Holding%20Back%20Tears.png" alt="Face Holding Back Tears"/>`,
        bgSrc: "one"
    },
    {
        musicName: "Butterflies",
        imgSrc: `<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Hand%20with%20Index%20Finger%20and%20Thumb%20Crossed.png" alt="Hand with Index Finger and Thumb Crossed"/>`,
        bgSrc: "two"
    },
    {
        musicName: "Ibadatein",
        imgSrc: `<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Woman%20Fairy.png" alt="Woman Fairy"/>`,
        bgSrc: "three"
    },
    {
        musicName: "Ik Kudi",
        imgSrc: `<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20Holding%20Back%20Tears.png" alt="Face Holding Back Tears"/>`,
        bgSrc: "four"
    },
    {
        musicName: "Perfect",
        imgSrc: `<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Woman%20Dancing.png" alt="Woman Dancing"/>`,
        bgSrc: "five"
    },
    {
        musicName: "Suniya Suniya",
        imgSrc: `<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20Holding%20Back%20Tears.png" alt="Face Holding Back Tears"/>`,
        bgSrc: "six"
    },
    {
        musicName: "Shayar",
        imgSrc: `<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20Holding%20Back%20Tears.png" alt="Face Holding Back Tears"/>`,
        bgSrc: "seven"
    },
    {
        musicName: "You're my Sunshine",
        imgSrc: `<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Hand%20with%20Index%20Finger%20and%20Thumb%20Crossed.png" alt="Hand with Index Finger and Thumb Crossed"/>`,
        bgSrc: "eight"
    },
    {
        musicName: "Ud Jaa",
        imgSrc: `<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20Holding%20Back%20Tears.png" alt="Face Holding Back Tears"/>`,
        bgSrc: "nine"
    },
    {
        musicName: "Girl I need You",
        imgSrc: `<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Crossed%20Fingers.png" alt="Crossed Fingers"/>`,
        bgSrc: "ten"
    },
    {
        musicName: "Mere Bina",
        imgSrc: `<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20Holding%20Back%20Tears.png" alt="Face Holding Back Tears"/>`,
        bgSrc: "eleven"
    },
    {
        musicName: "Dildara",
        imgSrc: `<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20Holding%20Back%20Tears.png" alt="Face Holding Back Tears"/>`,
        bgSrc: "one"
    }
]

// window.onload = function () {
//     arrayTest.forEach(function (item, index) {
//         $(".cards").eq(index).append(
//             `<div id="${item.bgSrc}" class="card relative w-[120px] h-[150px] rounded-lg shrink-0" onclick="playAudio(this)">
//                 <div class="card-inner">
//                     <div class="card-front relative flex justify-center items-end bg-white" >
//                         <div class="center_box relative w-[70%] h-[55%] mb-6 rounded-md flex justify-center items-center z-10">
//                             ${item.imgSrc}
//                         </div>
//                     </div>
//                     <div class="card-back relative flex justify-center items-end" >
//                         <img class="bg_img h-full w-full absolute object-cover" src="media/img/${item.bgSrc}.jpg" alt="">
//                         <div class="center_box relative w-[80%] h-auto mb-2 rounded-md flex flex-col justify-center items-end z-10">
//                             <!-- <h1 class="music_count text-2xl font-semibold mr-1">00</h1> -->
//                             <h1 class="music_name text-sm font-semibold w-full text-left pl-1">${item.musicName}</h1>
//                             <audio class="hidden" src="media/audio/${item.musicName}.mp3" type="audio/mp3"></audio>
//                         </div>
//                     </div>
//                 </div>
//             </div>`
//         )
//     })
// }

// const Content = `<div id="${card_ID}" class="card relative w-[120px] h-[150px] rounded-lg shrink-0" onclick="playAudio(this)">
//                 <div class="card-inner">
//                     <div class="card-front relative flex justify-center items-end bg-white" >
//                         <div class="center_box relative w-[70%] h-[55%] mb-6 rounded-md flex justify-center items-center z-10">
//                             ${img_src}
//                         </div>
//                     </div>
//                     <div class="card-back relative flex justify-center items-end" >
//                         <img class="h-full w-full absolute object-cover" src="media/img/${bg_src}.png" alt="">
//                         <div class="center_box relative w-[80%] h-auto mb-2 rounded-md flex flex-col justify-center items-end z-10">
//                             <!-- <h1 class="music_count text-2xl font-semibold mr-1">00</h1> -->
//                             <h1 class="music_name text-sm font-semibold w-full text-left pl-1">${music_name}</h1>
//                             <audio class="hidden" src="media/audio/${music_src}.mp3" type="audio/mp3"></audio>
//                         </div>
//                     </div>
//                 </div>
//             </div>`;

window.onload = function(){
    // cards.appendChild
    for (let i = 0; i < 12; i++) {
        arrayTest.forEach(function (item, index) {
            console.log(index)
            $(".cards").eq(index).append(
                `<div id="${item.bgSrc}" class="card relative w-[120px] h-[150px] rounded-lg shrink-0" onclick="playAudio(this)">
                    <div class="card-inner">
                        <div class="card-front relative flex justify-center items-end bg-white" >
                            <div class="center_box relative w-[70%] h-[55%] mb-6 rounded-md flex justify-center items-center z-10">
                                ${item.imgSrc}
                            </div>
                        </div>
                        <div class="card-back relative flex justify-center items-end" >
                            <img class="bg_img h-full w-full absolute object-cover" src="media/img/${item.bgSrc}.jpg" alt="">
                            <div class="center_box relative w-[80%] h-auto mb-2 rounded-md flex flex-col justify-center items-end z-10">
                                <!-- <h1 class="music_count text-2xl font-semibold mr-1">00</h1> -->
                                <h1 class="music_name text-sm font-semibold w-full text-left pl-1">${item.musicName}</h1>
                                <audio class="hidden" src="media/audio/${item.musicName}.mp3" type="audio/mp3"></audio>
                            </div>
                        </div>
                    </div>
                </div>`
            )
        })
    }
}