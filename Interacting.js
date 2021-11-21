// Characters
var huffalumps = {
    character : "Huffalumps",
    greet : function() {
        console.log("I dont know who Huffalumps is!")
    }
};
var eeyore = {
    character : "Eeyore",
    greet : function() {
        console.log("Something Depressing :(")
    }
};
var kanga = {
    character : "Kanga",
    greet : function() {
        console.log("Kangaroo stuff.")
    }
};
var robin = {
    character : "Christopher Robin",
    greet : function() {
        console.log("Something boyish :)")
    }
};
var owl = {
    character : "Owl",
    greet : function() {
        console.log("Some wisdom!!")
    }
};
var rabbit = {
    character : "Rabbit",
    greet : function() {
        console.log("Something mean.")
    }
};
var gopher = {
    character : "Gopher",
    greet : function() {
        console.log("Who?")
    }
};
var piglet = {
    character : "Piglet",
    greet : function() {
        console.log("Oh d-d-d-d-dear! I wasn't expecting company!")
    }
};
var pooh = {
    character : "Winnie the Pooh",
    greet : function() {
        console.log("Oh! brother.")
    }
};
var bees = {
    character : "Bees",
    greet : function() {
        console.log("Have you seen a bear?")
    }
};
var tigger = {
    character : "Tigger",
    greet : function() {
        console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!")
    }
};

//huffalumps
huffalumps.west = eeyore;

//eeyore
eeyore.east = huffalumps;
eeyore.south = kanga;

//kanga
kanga.north = eeyore;
kanga.south = robin;

//robin
robin.north = kanga;
robin.west = owl;
robin.east = rabbit;
robin.south = pooh;

//rabbit
rabbit.east = gopher;
rabbit.west = robin;
rabbit.south = bees;

//gopher
gopher.west = rabbit;

//owl
owl.south = piglet;
owl.east = robin;

//piglet
piglet.east = pooh;
piglet.north = owl;

//pooh
pooh.north = robin;
pooh.east = bees;
pooh.west = piglet;
pooh.south = tigger;

//bees
bees.north = rabbit;
bees.west = pooh;

//tigger
tigger.north = pooh;

//Player
var player = { location : pooh }

//Functions
function move(dir){
    if(dir == "north"){
        if(player.location.north == null){
            console.log("You may not go that way!!")
        }
        else {
            player.location = player.location.north;
            console.log("You are now at " + player.location.character + "'s house :)");
            console.log(player.location.greet());
        }
    }
    if(dir == "south"){
        if(player.location.south == null){
            console.log("You may not go that way!!")
        }
        else {
            player.location = player.location.south;
            console.log("You are now at " + player.location.character + "'s house :)");
            console.log(player.location.greet());
        }
    }
    if(dir == "east"){
        if(player.location.east == null){
            console.log("You may not go that way!!")
        }
        else {
            player.location = player.location.east;
            console.log("You are now at " + player.location.character + "'s house :)");
            console.log(player.location.greet());
        }
    }
    if(dir == "west"){
        if(player.location.west == null){
            console.log("You may not go that way!!")
        }
        else {
            player.location = player.location.west;
            console.log("You are now at " + player.location.character + "'s house :)");
            console.log(player.location.greet());
        }
    }
}
