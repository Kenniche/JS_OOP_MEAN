var huffalumps = { character : "Huffalumps" };
var eeyore = { character : "Eeyore" };
var kanga = { character : "Kanga" };
var robin = { character : "Christopher Robin" };
var owl = { character : "Owl" };
var rabbit = { character : "Rabbit" };
var gopher = { character : "Gopher" };
var piglet = { character : "Piglet" };
var pooh = { character : "Winnie the Pooh" };
var bees = { character : "Bees" };
var tigger = { character : "Tigger" };

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

var player = { location : tigger }

function move(dir){
    if(dir == "north"){
        if(player.location.north == null){
            console.log("You may not go that way!!")
        }
        else {
            player.location = player.location.north;
            console.log("You are now at " + player.location.character + "'s house :)");
        }
    }
    if(dir == "south"){
        if(player.location.south == null){
            console.log("You may not go that way!!")
        }
        else {
            player.location = player.location.south;
            console.log("You are now at " + player.location.character + "'s house :)");
        }
    }
    if(dir == "east"){
        if(player.location.east == null){
            console.log("You may not go that way!!")
        }
        else {
            player.location = player.location.east;
            console.log("You are now at " + player.location.character + "'s house :)");
        }
    }
    if(dir == "west"){
        if(player.location.west == null){
            console.log("You may not go that way!!")
        }
        else {
            player.location = player.location.west;
            console.log("You are now at " + player.location.character + "'s house :)");
        }
    }
}