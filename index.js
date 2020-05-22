const Discord = require("discord.js");
const { token } = require("./config.json");

const ppt = require("./ppt");

const client = new Discord.Client();

client.once("ready", ()=>{
	console.log("Olá meu criador");
});

client.on("message", (message)=>{
	if(message.author.bot) return;

	const args = message.content.split(/ +/g).slice(1);

	if(message.content.startsWith("!ppt") && args.length) {
		ppt(message, args);
	}
});

client.login(token);
