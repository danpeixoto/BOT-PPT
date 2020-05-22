function ppt(message, args) {

	const jogada = {
		0: { 0:"tie", 1:"win", 2:"lose" },
		1: { 0:"lose", 1:"tie", 2:"win" },
		2: { 0:"win", 1:"lose", 2:"tie" },
	};

	const emojis = {
		0:"✊",
		1:"✌️",
		2:"✋",
	};

	const winExpression = ["GANHEIEIEIEIEIE", "Você tem muito que melhorar :stuck_out_tongue_winking_eye:", "Hey hey hey"];
	const loseExpression = ["AHHHHH :frowning:", "Como você joga tão bem ???", "REVANCHE :sob"];
	const tieExpression = ["Mais uma vez!", "ORA ORA", ":grimacing:"];

	const keyTovalue = (value)=> Object.keys(emojis).find(key => emojis[parseInt(key)] === value);

	const jogadaBot = Math.floor(Math.random() * 3);
	const jogadaJogador = keyTovalue(args[0]);

	const resultado = jogada[jogadaJogador][jogadaBot];

	message.channel.send(`Você jogou: ${emojis[jogadaJogador]}\nEu joguei: ${emojis[jogadaBot]}`);
	const numeroExpressao = Math.floor(Math.random() * 3);

	if(resultado === "win") {
		message.reply(`${loseExpression[numeroExpressao]}`);
	}
	else if(resultado === "lose") {
		message.reply(`${winExpression[numeroExpressao]}`);
	}
	else {
		message.reply(`${tieExpression[numeroExpressao]}`);
	}
}


module.exports = ppt;
