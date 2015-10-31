var words = ["psychosomatic", "einstein", "sphering", "unlunated", "hopefully", "unjogging", "manipulate", "backwinded",
"defeminise", "unfeeding", "pressing", "phlegyas", "delaware", "ordines", "unhanging", "unrealise", "euthanasic", "burgess", 
"retroussage", "almighty", "oriole", "headfirst", "nebulizer", "costrel", "abdicate", "lucent", "tildy", "hacker", "combings",
"pipe", "consanguinity", "thermograph", "shoveller", "folkloristic", "immunize", "sovietised", "unmaternal", "plectognathic", 
"alban", "chorus", "random", "purple", "orange", "green", "blue", "yellow", "lavender", "thyme", "time", "endemical", "bayless", 
"scapolite", "unocular", "brig", "arbalester", "limiest", "repentantly", "tinselled", "project", "nonslanderous", "acidic", "firsthand",
"codinghouse", "unpoisoned", "subparietal", "keep", "going", "were", "almost", "there", "their", "they", "caution", "hazard", "warning",
"careful", "donut", "misplace", "those", "commas", "protosemitic", "polyphemus", "kronos", "odyssey", "honestly", "orbital", "gravity",
"pull", "words", "galore", "extensive", "amounts", "pertaining", "two", "vocabulary", "literature", "mighty", "unforgiving", "hangman", 
"turquoise", "massive", "values", "array", "string", "integer", "good", "luck", "omer", "somer", "chase", "rich", "valeri" ]

function getRandom(array){
    return array[Math.floor(Math.random() * array.length)]
};
var  sWord = ""
var wordSpace = $('div').closest('#selectedWord')
var lives = 9
var wordLetters = []
var correctLetters = 0
var availLetters = []
var availableSpace = $('div').closest('.available')
var incorrectLetters = []

$(document).ready(function(){
    $(window).keypress(function(press) {
        if (press.keyCode === 0 || press.keyCode === 32 || lives === 0) {
            $('#word').remove()
            sWord = getRandom(words)
            wordLetters = sWord.split('')
            availLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
            "t", "u", "v", "w", "x", "y", "z"]
            incorrectLetters = []

            $('#available').remove()
            $('#incorrect').remove()

            $('<ul/>', {
                class: 'list-inline letters',
                id: 'available'}).appendTo('.available');

            $('<ul/>', {
                class: 'list-inline letters',
                id: 'incorrect'
            }).appendTo('.incorrect')

            availLetters.forEach(function(input){
                $('<li/>', {
                    id: input,
                    text: input
                }).appendTo('#available')
            });

            $('<ul/>', {
                id: 'word',
                class: 'list-inline col-xs-12 answer'}).appendTo(wordSpace);

            wordLetters.forEach(function(input){
                $('<li/>', {class: input, 
                            text: '_'}).appendTo('#word');
            });

            lives = 9
            correctLetters = 0
        } else if (press.keyCode >= 97 && press.keyCode <= 122) {
            var pressedLetter = String.fromCharCode(press.keyCode)
            console.log (pressedLetter)
            remover = $('#'+ pressedLetter)
            remover.remove()
            availLetters.splice(remover)
            console.log(availLetters)

                wordLetters.forEach(function(input){
                    if (input === pressedLetter){
                        ($('.' + input)).text(input)
                        console.log ($('.' + input))
                        correctLetters++
                        console.log(correctLetters)
                    } else if (wordLetters.indexOf(pressedLetter) === -1 && incorrectLetters.indexOf(pressedLetter) === -1){
                        incorrectLetters.push(pressedLetter)
                        console.log(incorrectLetters)
                        lives -= 1
                        console.log(lives)
                        $('<li/>', {
                            text: pressedLetter
                        }).appendTo('#incorrect')
                    }

                });
                if (wordLetters.length === correctLetters) {
                    //You Win!
                };

        };
    });
    console.log(sWord)
});