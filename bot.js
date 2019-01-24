const Discord = require('discord.js');
const ytdl = require('ytdl-core');


const client = new Discord.Client();

//List of all accepted commands
const commands = ["play", "pause", "resume", "stop", "skip", "last", "add", "repeat"];
//List of all accepted streaming services
const services = ["youtu.be", "youtube", "spotify", "soundcloud"]

//Runs on every message sent
client.on('message', message => {
	if (message.author.id === client.user.id) return; //Bot will not respond to itself
	if (message.content.charAt(0) !== '!') return; //Trigger for commands is '!'

	const command = message.content.split(" ")[0].substring(1);
	message.reply("Your command is: " + command);

	//Command handling
	if (commands.includes(command)) {
		if (command === "play") {
			//Check for voice channel
			const voiceChannel = message.member.voiceChannel;
			if (!voiceChannel) {
				return message.reply('Please join a voice channel before playing music.');
			}



			//Check for valid link from a supported service
			if (message.content.split(" ").length < 2) {
				return message.reply("I'm not a mindreader. Link me something!")
			} else {
				const link = message.content.split(" ")[1];

				if (link.includes(services[0]) || link.includes(services[1])) { //YOUTUBE
					message.reply("You linked a song from Youtube.");

					voiceChannel.join()
						.then(connection => {
							const stream = ytdl(link, { filter: 'audioonly' })
							const dispatcher = connection.playStream(stream);
							}
						);
				} else if (link.includes(services[2])) { //SPOTIFY
					message.reply("You linked a song from Spotify.")
					//TODO Handle Spotify links and play music

				} else if (link.includes(services[3])) { //SOUNDCLOUD
					source = "soundcloud"
					message.reply("You linked a song from Soundcloud.")
					//TODO Handle Soundcloud links and play music

				} else if (source === "") { //NOT SUPPORTED
					return message.reply("I don't support this type of link.");
				}
				//Play music from identified stream
				if (dispatcher != undefined) {
					const dispatcher = connection.playStream(stream)
				} else {
					return message.reply("Oh no! Stream is undefined!")
				}
				
			}
		}

		if (command === "pause") {

		}

		if (command === "stop") {

		}



	} else {
		message.reply(command + " is an invalid command.");
	}

});

client.login('NTM1ODg0OTQyMzU0MTUzNTAw.Dylvlg.mk2uMrrDZjjQSA1jpsVlrlfIr1k');
