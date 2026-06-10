function animateText(sentence) {
    const textContainer = document.getElementById("speakers-text");
    
    textContainer.innerHTML = "";

    const letters = sentence.split("");

    letters.forEach((letter, index) => {
        const span = document.createElement("span");

        if (letter === " ") {
            span.innerHTML = "&nbsp;"; 
        } else {
            span.innerText = letter;
        }

        span.classList.add("animated-letter");

        span.style.animationDelay = `${index * 0.1}s`;

        textContainer.appendChild(span);
    });
}

const scenes = [
    {
        name: "",
        image: "assets/pictures/rotate.png",
        audio: "", 
        text: ""
    },
    {
        name: "#1 Wierd",
        image: "assets/pictures/venti.png",
        audio: "assets/voices/venti_voice.mp3",
        text: "Ehe! Happy Birthday! You know, you have a wonderfully weird aura about you... it makes writing ballads about you so much more fun! Care for a drink to celebrate?"
    },
    {
        name: "#2 Ghost Summoner",
        image: "assets/pictures/hutao.png",
        audio: "assets/voices/hutao_voice.mp3",
        text: "Oya? Another year older! Since you're such a natural ghost summoner, I was thinking of giving you a discount at the parlor... kidding! Have a spooky-good birthday!"
    },
    {
        name: "#3 The stealthy cat",
        image: "assets/pictures/lynette.png",
        audio: "assets/voices/lynette_voice.mp3",
        text: "Happy Birthday....parsing celebration protocols. You know, you are remarkably quiet and stealthy when you want to be... like a cat trailing its target.I appreciate that about you.So congradulations for being the sealthiest thief"
    },
    {
        name: "#4 Cute",
        image: "assets/pictures/nahida.png",
        audio: "assets/voices/nahida_voice.mp3",
        text: "Happy birthday. I've been watching you through the Akasha, and your kindness is truly like a cute little sprout blossoming in the forest. May your dreams be sweet today."
    },
    {
        name: "#5 Kind and Pure hearted",
        image: "assets/pictures/chaska.png",
        audio: "assets/voices/chaska_voice.mp3",
        text: "Happy birthday! You know, it takes true strength to remain so kind and pure-hearted in a world full of conflict. I've always admired that about you. If you ever want to take a break and soar above it all to celebrate, I'll have a Qucusaur waiting for you"
    },
    {
        name: "#6 Relaxing",
        image: "assets/pictures/kazuha.png",
        audio: "assets/voices/kazuha_voice.mp3",
        text: "The wind whispers that today is your special day. Your presence is as relaxing as a gentle breeze through autumn leaves. May we share many more peaceful moments."
    },
    {
        name: "#7 Handsome",
        image: "assets/pictures/flins.png",
        audio: "assets/voices/flins_voice.mp3",
        text: "Happy Birthday. I must admit, your handsome sense of style always catches the eye. Enjoy your day—you've certainly earned it."
    },
    {
        name: "#8 The star",
        image: "assets/pictures/furina.png",
        audio: "assets/voices/furina_voice.mp3",
        text: "Behold! Today, even the Hydro Archon must step aside, for you are the true star of the stage! Happy Birthday! Let the performance of your life begin!"
    },
    {
        name: "#9 Strong",
        image: "assets/pictures/raiden.png",
        audio: "assets/voices/raiden_voice.mp3",
        text: "Birthdays are fleeting, yet the sheer strength you show in your journey is a step closer to Eternity. Keep forging ahead. Happy Birthday"
    },
    {
        name: "#10 Still Unknown",
        image: "assets/pictures/yelan.png",
        audio: "assets/voices/yalan_voice.mp3",
        text: "Happy Birthday. You're quite the enigma, you know? So much about you is still unknown... but I'm looking forward to uncovering your secrets, one by one"
    },
    {
        name: "#11 The Devil",
        image: "assets/pictures/arlecchino.png",
        audio: "assets/voices/arlecchino_voice.mp3",
        text: "A birthday. How sentimental. Some might call you a devil in disguise... but I respect someone who isn't afraid to play with fire. Enjoy the day, coz you are the true devil"
    },
    {
        name: "#12 Beautiful",
        image: "assets/pictures/navia.png",
        audio: "assets/voices/navia_voice.mp3",
        text: "Happy Birthday! A beautiful milestone like this deserves a grand celebration! Let's toast with some tea and macarons, partner!"
    },
    {
        name: "#13 The best Sibling",
        image: "assets/pictures/siblings.png",
        audio: "assets/voices/siblings_voice.mp3",
        text: "And finally... happy birthday from the best sibling you could ask for. Teyvat is massive, but I'm just glad we found each other in it. Thank you for always being there"
    }
];

let currentIndex = 0;
let currentAudio = null;

function updateScene() {
    const currentScene = scenes[currentIndex];

    document.getElementById("scene-bg").src = currentScene.image;

    const speakerElement = document.getElementById("thing about u") || document.getElementById("speaker-name");
    if (speakerElement) {
        speakerElement.innerText = currentScene.name;
    }

    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; 
    }

    if (currentScene.audio !== "") {
        currentAudio = new Audio(currentScene.audio);
        currentAudio.play().catch(error => {
            console.log("Autoplay prevented by browser security rules:", error);
        });
    }

    animateText(currentScene.text);
}

const nextButton = document.querySelector("button");

nextButton.addEventListener("click", () => {
    currentIndex++;

    if (currentIndex < scenes.length) {
        updateScene(); 
    } else {
        document.getElementById("game-container").innerHTML = `
            <div style="color: #e3bc7c; text-align: center; padding-top: 40vh; font-size: 2rem; font-weight: bold;">
                🎉 May all your wishes come true! Happy Birthday! 🎉
            </div>
        `;
    }
});

updateScene();