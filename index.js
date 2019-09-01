const Discord = require("discord.js");
const mongoose = require("mongoose");
const embedDB = require("./DBScheme/embedForm.js");
const moment = require('moment');
mongoose.connect('mongodb://localhost/Item');

const client = new Discord.Client();
const token = 'TOKEN';

console.log("Loading...");

client.on('ready', () => {
    console.log(`Bot logged in as ${client.user.tag}! Created By: Mr.Bean#0885`);
    console.log('Product Embed Maker V2.1.0');
});

let itemName = "n/a";
let listAt = "n/a";
let itemLink = "https://cdn.discordapp.com/attachments/532375388328951819/533453634969796608/money_mafia_logo.png";
let itemPrice = "n/a";
let img = "https://cdn.discordapp.com/attachments/532375388328951819/533453634969796608/money_mafia_logo.png";
let note = "n/a";
let channelID = "YOUR CHANNEL ID (WHERE YOU WANT TO SEND EMBED)";

const helpCMD = "!help";
client.on('message', function(message) {
    if(message.content.indexOf(helpCMD)==0){ 
        if(message.channel.type == "dm" && message.author.id === "174644531948421120" || message.author.id === "224935297211695104"){
            const embed = new Discord.RichEmbed()
            .setTitle("Commands and Guide")
            .setAuthor("MoneyMafia Embed | Help")
            .setColor('0xea4545')
            .setDescription("This bot is for admins of Money Mafia, It creates custom embeds of products and uploads them to a data base! Check below to see a list of commands/functions.")
            .setFooter("MoneyMafia Embed | By: Mr.Bean#0885", "https://cdn.discordapp.com/attachments/532375388328951819/533453634969796608/money_mafia_logo.png")
            .setTimestamp()
            .addField("!itemlink <Link>", "The item link", true)
            .addField("!price <Retail Price>", 'Retail Price for item', true)
            .addField("!listat <Recommend>", 'Recommend listing price', true)
            .addField("!itemname <Text Name>", "The name of the item.", true)
            .addField("!img <Image Link>", 'Sets the Image', true)
            .addField("!note <Your Notes>", "Any Extra invo that you want people to know");
            message.channel.send({embed});
        }
        else {
            message.author.send("You either have insufficient permissions or this is not a DM");
        }
    }
});

//Create Embed
const itemNameCMD = "!itemname";
client.on('message', function(message) {
    if(message.content.indexOf(itemNameCMD)==0){
        if(message.channel.type == "dm" && message.author.id === "174644531948421120" || message.author.id === "224935297211695104"){
            itemName = message.content.substring(message.content.indexOf(" ") + 1, message.content.length);
            message.reply("Item name saved as " + itemName);
        }
        else {
            message.author.send("You either have insufficient permissions or this is not a DM");
        }
    }
});

const imgCMD = "!img";
client.on('message', function(message) {
    if(message.content.indexOf(imgCMD)==0){
        if(message.channel.type == "dm" && message.author.id === "174644531948421120" || message.author.id === "224935297211695104"){
            img = message.content.substring(message.content.indexOf(" ") + 1, message.content.length);
            message.reply("Immage has been saved");
        }
        else {
            message.author.send("You either have insufficient permissions or this is not a DM");
        }
    }
});

const itemLinkCMD = "!itemlink";
client.on('message', function(message) {
    if(message.content.indexOf(itemLinkCMD)==0){ 
        if(message.channel.type == "dm" && message.author.id === "174644531948421120" || message.author.id === "224935297211695104"){
            itemLink = message.content.substring(message.content.indexOf(" ") + 1, message.content.length);
            message.reply("Item link has ben saved!");
        }
        else {
            message.author.send("You either have insufficient permissions or this is not a DM");
        }
    }
});

const itemPriceCMD = "!price";
client.on('message', function(message) {
    if(message.content.indexOf(itemPriceCMD)==0){
        if(message.channel.type == "dm" && message.author.id === "174644531948421120" || message.author.id === "224935297211695104"){
            itemPrice = message.content.substring(message.content.indexOf(" ") + 1, message.content.length);
            message.reply("Item price saved as " + itemPrice);
        }
        else {
            message.author.send("You either have insufficient permissions or this is not a DM");
        }
    }
});

const listAtCMD = "!listat";
client.on('message', function(message) {
    if(message.content.indexOf(listAtCMD)==0){
        if(message.channel.type == "dm" && message.author.id === "174644531948421120" || message.author.id === "224935297211695104"){
            listAt = message.content.substring(message.content.indexOf(" ") + 1, message.content.length);
            message.reply("List at saved as " + listAt); 
        }
        else {
            message.author.send("You either have insufficient permissions or this is not a DM");
        }
    }
});

const noteCMD = "!note";
client.on('message', function(message) {
    if(message.content.indexOf(noteCMD)==0){
        if(message.channel.type == "dm" && message.author.id === "174644531948421120" || message.author.id === "224935297211695104"){
            note = message.content.substring(message.content.indexOf(" ") + 1, message.content.length);
            message.reply("List at saved as " + note); 
        }
        else {
            message.author.send("You either have insufficient permissions or this is not a DM");
        }
    }
});

const viewEMBCMD = "!view";
client.on('message', function(message) {
    if(message.content.indexOf(viewEMBCMD)==0){
        if(message.channel.type == "dm" && message.author.id === "174644531948421120" || message.author.id === "224935297211695104"){

            const embed = new Discord.RichEmbed()
            .setTitle(itemName)
            .setAuthor("Money Mafia | TEST VIEW")
            .setColor('0xea4545')
            .setDescription(note)
            .setFooter("MoneyMafia Embed | By: Mr.Bean#0885", "https://cdn.discordapp.com/attachments/532375388328951819/533453634969796608/money_mafia_logo.png")
            .setTimestamp()
            .setThumbnail(img)
            .addField("List At", listAt, true)
            .addField("Retail Price", itemPrice, true)
            .addField("Buy", `[Buy Now](${itemLink})`);
            message.channel.send({embed});
            
        }
        else {
            message.author.send("You either have insufficient permissions or this is not a DM");
        }
    }
});

const testMBCMD = "!test";
client.on('message', function(message) {
    if(message.content.indexOf(testMBCMD)==0){
        if(message.channel.type == "dm" && message.author.id === "174644531948421120" || message.author.id === "224935297211695104"){

            itemName = "Boys' Colorblock Swim Trunk - Blue";
            listAt = "$20.00";
            itemLink = "https://www.target.com/p/boys-colorblock-swim-trunk-blue/-/A-54561096?preselect=54420964#lnk=sametab";
            itemPrice = "$12.99";
            img = "https://target.scene7.com/is/image/Target/GUEST_61eb68ce-5ff6-43c2-9a80-004e005a7719?wid=488&hei=488&fmt=webp";
            note = "Swimsuits for the beach and the water to go in";
            
        }
        else {
            message.author.send("You either have insufficient permissions or this is not a DM");
        }
    }
});


const serverSendCMD = "!send";
client.on('message', function(message) {
    if(message.content.indexOf(serverSendCMD)==0){
        confirm = message.content.substring(message.content.indexOf(" ") + 1, message.content.length);
        confirm = confirm.toLowerCase();
        if(confirm == "yes" || confirm == "y") {
            message.author.send("Attempting to send to Server...");
            if(message.channel.type == "dm" && message.author.id === "174644531948421120" || message.author.id === "224935297211695104"){
                const embed = new Discord.RichEmbed()
                .setTitle(itemName)
                .setAuthor("MoneyMafia")
                .setColor('0xea4545')
                .setDescription(note)
                .setFooter("MoneyMafia Embed | By: Mr.Bean#0885", "https://cdn.discordapp.com/attachments/532375388328951819/533453634969796608/money_mafia_logo.png")
                .setTimestamp()
                .setThumbnail(img)
                .addField("List At", listAt, true)
                .addField("Retail Price", itemPrice, true)
                .addField("Buy", `[Buy Now](${itemLink})`);
                client.channels.get(channelID).send({embed});
                message.author.send("Success embed has been sent!");

                const Item = new embedDB({
                    _id: mongoose.Types.ObjectId(),
                    username: message.author.username,
                    item: itemLink,
                    itemInfo: note,
                    itemImage: img,
                    itemName: itemName,
                    itemRetail: itemPrice,
                    itemResell: listAt,
                    time: message.createdAt
                });
                console.log(`[${moment().format('hh:mm:ss.SSS')}]${message.author.username} sent an embed sucessfully!`);
                console.log(`[${moment().format('hh:mm:ss.SSS')}]The item name is ${itemName}`);
                console.log(`[${moment().format('hh:mm:ss.SSS')}]-----------------------------------------------------------`);
                Item.save();
                //console.log();
            }
            else {
                message.author.send("You either have insufficient permissions or this is not a DM");
            }
        }
        else {
            message.author.send("Do !send Y or !send Yes to send the embed!")
        }
    }
});



client.login(token); 