const Discord = require('discord.js');
const ytdl = require('ytdl-core');


const client = new Discord.Client();

//Runs on every message sent
client.on('message', message => {
	let member = message.member;
	if (member.id !== client.user.id && message.content.charAt(0) == "!") {
			commandPicker(message);
	} else {
		console.log("Message not accepted...")
		console.log("Member ID: "+member.id)
		console.log("Client ID: "+client.user.id)
		console.log("First char: "+message.content.charAt(0))
	}

});

function commandPicker(message) {
	//handles commands
	const messageSplit = message.content.split(" ");
	const command = messageSplit[0].substring(1);
	message.reply("Your command is: " + command)

	switch (command) {
		case "play":
		player(message, messageSplit[1]);
		break;
		case "stop":
		stopper(message);
		break;
		case "pause":
		pauser(message);
		break;
		case "next":
		nexter(message);
		break;
		case "last":
		laster(message);
		break;
		default:
		message.reply("I don't understand your command.");
	}
}
function servicePicker(link) {
	//Figures out which service the link belongs to
	const lower = link.toLowerCase();

	if (lower.includes("youtube") || lower.includes("youtu.be")) {
		return "youtube"
	} else if (lower.includes("spotify")) {
		return "spotify"
	} else if (lower.includes("soundcloud")) {
		return "soundcloud"
	} else {
		return null
	}
}

function player(message, link) {
	//dispatches the service handlers
	if (message.content.split(" ").length < 2) {
		return message.reply("Give me something to play.")
	} else {
		switch (servicePicker(link)) {
			case "youtube":
			youtubeHandler(message, link);
			break;
			case "spotify":
			spotifyHandler();
			break;
			case "soundcloud":
			soundCloudHandler();
			break;
			default:
			message.reply("I don't support that service.")
		}
	}
}

function stopper(message) {
	message.reply("Stop requested");
}

function pauser(message) {
	message.reply("Pause requested");
}

function nexter(message) {
	message.reply("Next requested");
}

function laster(message) {
	message.reply("Last requested");
}




function youtubeHandler(message, link) {
	voiceChannel = message.member.voiceChannel;
	if (voiceChannel!=null) {
		voiceChannel.join().then(connection => {
			const stream = ytdl(link, { filter: 'audioonly' })
			const dispatcher = connection.playStream(stream);
			});
	} else {
		message.reply("You must be in a voice channel first!")
	}

	function stop() {
		dispatcher.end('user')
	}
}

function spotifyHandler() {

}

function soundCloudHandler() {

}

