let word = "";
let hiddenWord = "";
let guessedLetters = "";
let guessedLettersToPrint = "";
let guessesLeft = 7;
let defaultGuessesLeft = 7;
let won = true;
let lost = true;
let score = 0;

let myArray = ["even", "trip", "unhappy", "floating", "anywhere", "sing", "sum", "vapor", "helpful", "car", "face", "beautiful", "near",
    "would", "greatly", "it", "straw", "battle", "electric", "cookies", "everyone", "rest", "compound", "vowel", "swung", "rock", "matter",
    "fought", "hat", "elephant", "got", "meat", "he", "wise", "easy", "tin", "hospital", "sink", "store", "baseball", "him", "taken", "or",
    "exercise", "refer", "age", "toy", "huge", "search", "go", "lion", "missing", "can", "trail", "herd", "disappear", "page", "oxygen",
    "tone", "fell", "possibly", "special", "note", "board", "completely", "worker", "everywhere", "drink", "belong", "cook", "jet", "last",
    "basic", "ill", "sit", "machinery", "them", "coast", "more", "loose", "village", "according", "doll", "street", "dress", "nature",
    "send", "offer", "bare", "especially", "powder", "property", "putting", "badly", "successful", "definition", "swept", "whale", "roof",
    "love", "onto", "use", "complete", "specific", "factory", "form", "in", "pink", "wrong", "clean", "ask", "her", "rear", "unless",
    "curve", "sink", "location", "said", "amount", "frequently", "differ", "room", "outline", "lesson", "find", "sent", "author", "hair",
    "tape", "whether", "nobody", "percent", "tie", "clothes", "famous", "indicate", "symbol", "massage", "member", "molecular", "roar",
    "magic", "sides", "swung", "along", "similar", "song", "nest", "my", "orbit", "pound", "particularly", "went", "sum", "exist", "route",
    "helpful", "cost", "however", "store", "worth", "strike", "hay", "porch", "farmer", "glad", "fifty", "slightly", "negative", "age",
    "return", "column", "teach", "coming", "life", "wagon", "living", "wide", "more", "happily", "vote", "soap", "into", "explain",
    "clothing", "check", "dance", "canal", "be", "upon", "saddle", "again", "piano", "surrounded", "wrong", "happily", "final", "image",
    "shirt", "know", "story", "occasionally", "lips", "draw", "cast", "sale", "occur", "individual", "bell", "broke", "led", "wrote",
    "heading", "tired", "angry", "stiff", "needle", "wire", "planning", "nearer", "barn", "worth", "page", "seen", "garage", "close",
    "bottle", "never", "aware", "forget", "red", "fully", "full", "exchange", "gun", "pressure", "either", "took", "handsome", "band",
    "held", "threw", "free", "capital", "machine", "fence", "gather", "grow", "cool", "root", "tone", "date", "shine", "simplest", "to",
    "realize", "myself", "ahead", "measure", "flame", "able", "syllable", "middle", "solar", "effort", "chart", "negative", "or",
    "grandfather", "arrange", "tree", "pretty", "lack", "way", "break", "find", "street", "fourth", "also", "behind", "mind", "important",
    "shore", "shot", "favorite", "about", "move", "corner", "select", "government", "forest", "space", "angle", "fierce", "identity",
    "pocket", "more", "nor", "ring", "name", "arrow", "arm", "on", "dog", "baby", "shells", "complex", "clothes", "oldest", "steel",
    "express", "buffalo", "seed", "ice", "wheel", "pay", "folks", "discovery", "carry", "largest", "swung", "heavy", "teach", "harbor",
    "meal", "discussion", "cow", "produce", "necessary", "climate", "clean", "next", "accurate", "something", "whether", "door", "pupil",
    "tent", "rather", "welcome", "unusual", "income", "suppose", "new", "native", "influence", "strange", "brain", "near", "hand", "refer",
    "concerned", "gulf", "nine", "reach", "iron", "grass", "mill", "been", "swam", "amount", "lying", "moon", "was", "construction",
    "anyway", "transportation", "character", "creature", "ten", "like", "made", "consist", "whispered", "thee", "straight", "breath",
    "crop", "closer", "country", "generally", "summer", "history", "instrument", "eye", "attempt", "heart", "including", "sheet", "daily",
    "round", "calm", "slept", "someone", "stone", "waste", "first", "beauty", "additional", "stopped", "sort", "father", "tropical",
    "weight", "bottom", "passage", "circle", "garden", "trace", "count", "increase", "that", "modern", "social", "movie", "born", "plant",
    "entirely", "carbon", "slipped", "fox", "bag", "gentle", "fire", "cream", "far", "shallow", "shade", "are", "map", "old", "making",
    "throw", "gray", "writing", "fought", "spider", "exact", "remove", "fast", "dream", "lead", "dance", "clock", "football", "greater",
    "expression", "telephone", "think", "failed", "three", "atomic", "walk", "terrible", "mud", "bring", "equal", "farther", "managed",
    "golden", "lake", "classroom", "hide", "victory", "halfway", "pipe", "pale", "plates", "found", "neck", "tomorrow", "eventually",
    "noon", "addition", "hang", "seven", "pony", "several", "difficulty", "alike", "warm", "her", "bar", "per", "forgotten", "throat",
    "taught", "political", "so", "after", "ground", "wherever", "lost", "larger", "another", "brought", "adjective", "talk", "wing", "will",
    "needs", "floor", "boat", "straw", "train", "military", "buried", "mirror", "bend", "ranch", "hurry", "trade", "saved", "likely",
    "disappear", "underline", "distant", "main", "fifteen", "horn", "through", "same", "success", "sharp", "jar", "palace", "duty",
    "exciting", "look", "research", "until", "as", "why", "box", "handle", "around", "slave", "independent", "two", "maybe", "swing",
    "thrown", "whenever", "separate", "tail", "small", "certainly", "stomach", "potatoes", "shelf", "president", "finish", "piece", "crack",
    "slowly", "invented", "key", "wolf", "forgot", "leg", "safe", "quickly", "wish", "truck", "rat", "perfect", "its", "parent", "trip",
    "involved", "giving", "shop", "torn", "fell", "former", "offer", "than", "troops", "musical", "create", "coast", "thing", "back", "peace",
    "leave", "visitor", "loose", "slope", "automobile", "direct", "proper", "station", "oxygen", "pet", "electricity", "beyond", "require",
    "dinner", "driving", "dig", "out", "thousand", "water", "suggest", "once", "source", "private", "come", "birth", "joined", "product",
    "nice", "hit", "airplane", "warn", "army", "industrial", "tongue", "claws", "remember", "early", "fear", "kids", "foreign", "afternoon",
    "local", "eleven", "eager", "leaving", "yard", "heat", "almost", "hay", "bit", "tax", "location", "view", "badly", "reader", "gradually",
    "onto", "ants", "yourself", "muscle", "donkey", "available", "sport", "promised", "metal", "onlinetools", "teacher", "jet", "lucky",
    "already", "crew", "month", "hidden", "white", "thread", "needed", "development", "leader", "building", "breathe", "does", "would",
    "steady", "symbol", "cage", "somewhere", "represent", "weigh", "flat", "energy", "log", "yellow", "taken", "excited", "higher", "future",
    "youth", "crowd", "bark", "sink", "therefore", "whom", "anyone", "copy", "settlers", "electric", "kind", "bowl", "send", "screen",
    "accept", "sick", "curve", "control", "vapor", "chance", "girl", "condition", "height", "none", "combination", "adult", "correctly",
    "manufacturing", "children", "mean", "most", "silver", "dark", "alive", "useful", "force", "twenty", "cell", "speak", "lunch", "bee",
    "wear", "winter", "excitement", "vegetable", "prepare", "pair", "report", "current", "sign", "everywhere", "remarkable", "bus", "dirt",
    "event", "fuel", "noun", "rock", "browserling", "hat", "brave", "have", "stranger", "size", "whatever", "type", "nails", "hope", "form",
    "chamber", "gone", "listen", "active", "earn", "sure", "finally", "rise", "forth", "read", "giant", "faster", "enough", "rising", "bean",
    "related", "cabin", "it", "breakfast", "planned", "fifty", "community", "period", "jack", "gave", "monkey", "enter", "meet", "minerals",
    "edge", "time", "shoe", "easy", "language", "consonant", "court", "good", "fog", "gain", "yesterday", "mission", "naturally", "motor",
    "everyone", "caught", "rays", "nation", "add", "pitch", "fighting", "sound", "nodded", "completely", "dead", "police", "seldom", "soon",
    "anything", "pull", "rose", "sheep", "magnet", "skin", "keep", "horse", "wooden", "cold", "detail", "worried", "herself", "population",
    "start", "silly", "production", "yet", "allow", "chapter", "sky", "grain", "cake", "wild", "differ", "labor", "fur", "supply", "laid"]

function chooseNewWord() {

    var index = Math.floor(Math.random() * myArray.length);

    word = myArray[index];
    hiddenWord = "";
    hiddenWordToPrint = "";
}

function newGame() {

    if (guessesLeft < defaultGuessesLeft && !won && !lost) {
        updateScore(false);
    }

    /*Sets bools false for active*/
    won = false;
    lost = false;

    /*Chooses new word*/
    chooseNewWord();

    /*Creating hidden word lines*/
    for (i = 0; i < word.length; i++) {
        hiddenWord += "_";
    }

    /*Updating game*/
    updateGame();

    /*Resetting variables*/
    guessedLetters = "";
    guessesLeft = defaultGuessesLeft;

    /*Resetting texts*/
    var guessesLeftText = document.getElementById("guessesLeft");
    guessesLeftText.innerHTML = guessesLeft.toString();

    var guessed = document.getElementById("guessedLetters");
    guessed.innerHTML = " ";

    changeWordColor("hidden", "black");
}

/*Boolean, checks if a letter has been guessed already*/
function checkIfLetterGuessed(letter) {

    for (let i = 0; i < guessedLetters.length; i++) {
        if (guessedLetters[i].toUpperCase() === letter.toUpperCase()) {
            return true;
        }
    }

    return false;
}

/*Adds letter to guessed letters*/
function addLetter(letter) {
    guessedLetters += letter;
}

/*Used to set text to green/red for winning*/
function changeWordColor(textTag, color) {
    var text = document.getElementById(textTag);
    text.style.color = color;
}

/*Called from main function to guess a letter*/
function guessLetter(guess, letter) {

    /*Checks if game is still active*/
    if (!lost && !won) {
        if (!checkIfLetterGuessed(letter)) {

            var counter = 0;
            /*Checking if letters in hidden word*/
            for (let i = 0; i < word.length; i++) {

                if (word[i].toUpperCase() === letter.toUpperCase()) {

                    hiddenWord = replaceLetter(hiddenWord, i, letter);
                    counter += 1;
                }
            }

            if (counter <= 0) {
                /*Decreases guesses left*/
                guessesLeft -= 1;
            }

            /*Adds letter to used letters*/
            addLetter(letter);

            /*Updating texts*/
            updateGame();

            /*If the game is won*/
            if (checkIfWon()) {
                win();
            }

            /*If the game is lost*/
            else if (guessesLeft <= 0) {
                lose();
            }
        }
    }
}

/*Checks if the game has been won*/
function checkIfWon() {
    for (let i = 0; i < word.length; i++) {
        if (word[i].toUpperCase() != hiddenWord[i].toUpperCase()) {
            return false;
        }
    }
    return true;
}

/*Takes a word and returns the word with new letter added*/
function replaceLetter(wordToReplace, index, newLetter) {

    /*Checking index constraints are valid*/
    if (index > wordToReplace.length || index < 0) {
        return wordToReplace;
    }

    // Return word with character replaced
    return wordToReplace.substring(0, index) + newLetter + wordToReplace.substring(index + 1);
}

function updateScore(win) {
    if (win) {
        score += 1;
    }

    else {
        score -= 1;
    }

    var scoreText = document.getElementById("score");
    scoreText.innerHTML = "Score: " + score.toString();
}

function lose() {
    lost = true;
    changeWordColor("hidden", "red");
    fillInWord();
    updateScore(false);
}

function win() {
    won = true;
    changeWordColor("hidden", "green");
    fillInWord();
    updateScore(true);
}

function fillInWord() {
    hiddenWord = word;
    createHiddenWordToPrint();
}

/*Creates the hidden word with spaces*/
function createHiddenWordToPrint() {

    /*Secret Word*/
    var secretWord = document.getElementById("hidden");

    /*Creates the word string*/
    hiddenWordToPrint = "";
    for (i = 0; i < word.length - 1; i++) {

        hiddenWordToPrint += hiddenWord[i].toUpperCase() + " ";
    }
    hiddenWordToPrint += hiddenWord[hiddenWord.length - 1].toUpperCase();

    /*Updates secret word text*/
    secretWord.innerHTML = hiddenWordToPrint;
}

function sortAlphabets(str) {
    return [...str].sort((a, b) => a.localeCompare(b)).join("");
}

function updateGame() {

    /*Creating hidden word lines*/
    createHiddenWordToPrint();

    /*Updates guessed letters text*/
    guessedLetters = sortAlphabets(guessedLetters);
    var guessed = document.getElementById("guessedLetters");
    if (guessedLetters.length > 0) {
        guessedLettersToPrint = guessedLetters[0];
        for (let i = 1; i < guessedLetters.length; i++) {
            guessedLettersToPrint += " " + guessedLetters[i];
        }
    }
    guessed.innerHTML = guessedLettersToPrint;

    /*Updates guessed left text*/
    var guessesLeftText = document.getElementById("guessesLeft");
    guessesLeftText.innerHTML = guessesLeft.toString();
}

function openHome() {

}