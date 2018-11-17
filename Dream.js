const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("510860891496120323")
setInterval(function() {
channel.send(`youtube`);
}, 25)
})
 
 
client.login('NTEwMzkzNTA4NDE1MTQzOTQ2.DsihDA.7RljtLo3A0SqEhrLQlDL_zfR5ec');