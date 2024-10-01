
dealingCards();

function dealingCards() {
   
    //GENERATING CARD VALUES

    //generating 5 random numbers between 1 and 13 and assigning them to variables
    var numberCard1 = Math.floor((Math.random() * 13) + 1);
    var numberCard2 = Math.floor((Math.random() * 13) + 1);
    var numberCard3 = Math.floor((Math.random() * 13) + 1);
    var numberCard4 = Math.floor((Math.random() * 13) + 1);
    var numberCard5 = Math.floor((Math.random() * 13) + 1);

    //assigning appear values (string) to the numbers generated
    var appearCard1 = numberCard1.toString();
    var appearCard2 = numberCard2.toString();
    var appearCard3 = numberCard3.toString();
    var appearCard4 = numberCard4.toString();
    var appearCard5 = numberCard5.toString();

    //correcting appearance, as a deck of cars (A, T, J, Q, K)
    if (appearCard1 == "1") {
        appearCard1 = "A";
    } else if (appearCard1 == "10") {
        appearCard1 = "T";
    } else if (appearCard1 == "11") {
        appearCard1 = "J";
    } else if (appearCard1 == "12") {
        appearCard1 = "Q";
    } else if (appearCard1 == "13") {
        appearCard1 = "K"
    }
    if (appearCard2 == "1") {
        appearCard2 = "A";
    } else if (appearCard2 == "10") {
        appearCard2 = "T";
    } else if (appearCard2 == "11") {
        appearCard2 = "J";
    } else if (appearCard2 == "12") {
        appearCard2 = "Q";
    } else if (appearCard2 == "13") {
        appearCard2 = "K"
    }
    if (appearCard3 == "1") {
        appearCard3 = "A";
    } else if (appearCard3 == "10") {
        appearCard3 = "T";
    } else if (appearCard3 == "11") {
        appearCard3 = "J";
    } else if (appearCard3 == "12") {
        appearCard3 = "Q";
    } else if (appearCard3 == "13") {
        appearCard3 = "K"
    }
    if (appearCard4 == "1") {
        appearCard4 = "A";
    } else if (appearCard4 == "10") {
        appearCard4 = "T";
    } else if (appearCard4 == "11") {
        appearCard4 = "J";
    } else if (appearCard4 == "12") {
        appearCard4 = "Q";
    } else if (appearCard4 == "13") {
        appearCard4 = "K"
    }
    if (appearCard5 == "1") {
        appearCard5 = "A";
    } else if (appearCard5 == "10") {
        appearCard5 = "T";
    } else if (appearCard5 == "11") {
        appearCard5 = "J";
    } else if (appearCard5 == "12") {
        appearCard5 = "Q";
    } else if (appearCard5 == "13") {
        appearCard5 = "K"
    }

    //GENERATING CARD SIGNS

    //generating 5 random signs to the cards

    var signCard1 = Math.floor((Math.random() * 4) + 1);
    var signCard2 = Math.floor((Math.random() * 4) + 1);
    var signCard3 = Math.floor((Math.random() * 4) + 1);
    var signCard4 = Math.floor((Math.random() * 4) + 1);
    var signCard5 = Math.floor((Math.random() * 4) + 1);

    //assigning appear values (string) to the sign numbers generated
    var appearSignCard1 = signCard1.toString();
    var appearSignCard2 = signCard2.toString();
    var appearSignCard3 = signCard3.toString();
    var appearSignCard4 = signCard4.toString();
    var appearSignCard5 = signCard5.toString();

    //assigning colors to signs
    var textSign1;
    var textSign2;
    var textSign3;
    var textSign4;
    var textSign5;

    //assiging specific letters to appearing signs
    if (appearSignCard1 == "1") {
        appearSignCard1 = "Hearts";
        textSign1 = '<span style="color:red">';
    } else if (appearSignCard1 == "2") {
        appearSignCard1 = "Spades";
        textSign1 = '<span style="color:blue">'
    } else if (appearSignCard1 == "3") {
        appearSignCard1 = "Diamonds";
        textSign1 = '<span style="color:orange">';
    } else if (appearSignCard1 == "4") {
        appearSignCard1 = "Clubs";
        textSign1 = '<span style="color:green">';
    } 
    if (appearSignCard2 == "1") {
        appearSignCard2 = "Hearts";
        textSign2 = '<span style="color:red">';
    } else if (appearSignCard2 == "2") {
        appearSignCard2 = "Spades";
        textSign2 = '<span style="color:blue">'
    } else if (appearSignCard2 == "3") {
        appearSignCard2 = "Diamonds";
        textSign2 = '<span style="color:orange">';
    } else if (appearSignCard2 == "4") {
        appearSignCard2 = "Clubs";
        textSign2 = '<span style="color:green">';
    } 
    if (appearSignCard3 == "1") {
        appearSignCard3 = "Hearts";
        textSign3 = '<span style="color:red">';
    } else if (appearSignCard3 == "2") {
        appearSignCard3 = "Spades";
        textSign3 = '<span style="color:blue">'
    } else if (appearSignCard3 == "3") {
        appearSignCard3 = "Diamonds";
        textSign3 = '<span style="color:orange">';
    } else if (appearSignCard3 == "4") {
        appearSignCard3 = "Clubs";
        textSign3 = '<span style="color:green">';
    } 
    if (appearSignCard4 == "1") {
        appearSignCard4 = "Hearts";
        textSign4 = '<span style="color:red">';
    } else if (appearSignCard4 == "2") {
        appearSignCard4 = "Spades";
        textSign4 = '<span style="color:blue">'
    } else if (appearSignCard4 == "3") {
        appearSignCard4 = "Diamonds";
        textSign4 = '<span style="color:orange">';
    } else if (appearSignCard4 == "4") {
        appearSignCard4 = "Clubs";
        textSign4 = '<span style="color:green">';
    } 
    if (appearSignCard5 == "1") {
        appearSignCard5 = "Hearts";
        textSign5 = '<span style="color:red">';
    } else if (appearSignCard5 == "2") {
        appearSignCard5 = "Spades";
        textSign5 = '<span style="color:blue">'
    } else if (appearSignCard5 == "3") {
        appearSignCard5 = "Diamonds";
        textSign5 = '<span style="color:orange">';
    } else if (appearSignCard5 == "4") {
        appearSignCard5 = "Clubs";
        textSign5 = '<span style="color:green">';
    } 

    //PUTTING TOGETHER CARD VALUE AND CARD SIGN

    //assigning concatenated values
    finalCard1 = appearCard1 + " " + appearSignCard1
    finalCard2 = appearCard2 + " " + appearSignCard2
    finalCard3 = appearCard3 + " " + appearSignCard3
    finalCard4 = appearCard4 + " " + appearSignCard4
    finalCard5 = appearCard5 + " " + appearSignCard5

    //SHOWING IN SCREEN

    //getting HTML elements and inputing text
    var showingCard1 = document.getElementById('card1');
    showingCard1.innerHTML = textSign1 + finalCard1 + "</span>"
    var showingCard2 = document.getElementById('card2');
    showingCard2.innerHTML = textSign2 + finalCard2 + "</span>";
    var showingCard3 = document.getElementById('card3');
    showingCard3.innerHTML = textSign3 + finalCard3 + "</span>";
    var showingCard4 = document.getElementById('card4');
    showingCard4.innerHTML = textSign4 + finalCard4 + "</span>";
    var showingCard5 = document.getElementById('card5');
    showingCard5.innerHTML = textSign5 + finalCard5 + "</span>";

    // checking if there's repeated cards
    if (finalCard1 == finalCard2 || finalCard1 == finalCard3 || finalCard1 == finalCard4 || finalCard1 == finalCard5 || finalCard2 == finalCard3 || finalCard2 == finalCard4 || finalCard2 == finalCard5 || finalCard3 == finalCard4 || finalCard3 == finalCard5 || finalCard4 == finalCard5) {
        console.log("igual")
        var finalCard1 = " ";
        var finalCard2 = " ";
        var finalCard3 = " ";
        var finalCard4 = " ";
        var finalCard5 = " ";
        console.log (finalCard1, finalCard2, finalCard3, finalCard4, finalCard5);
        return dealingCards();
    }
}

//GIVING VALUES TO CARDS
var logicalCard1







