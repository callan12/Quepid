# Quepid
Very simple Discord Bot for listening to music from many different sources. I used this as an exploration of Node.js and the Discord.js API.

API's used:
Discord.js
Node.js - Hosts the bot
FFMPEG - Handles streaming of audio from multiple different streaming sources
ytdl-core - Youtube streaming

Goal:
I would like to create a discord bot to help me understand that Discord.js API. 
The bot should support at least three streaming services. 
The bot should be able to create and manage a queue of music from various streaming services. 
Users should be able to send the bot commands and visualize the music queue through chat.

TODO:
-Implement streaming integration for Spotify (likely using spotify-web-api-node)
-Implement streaming integration for Soundcloud (using Soundcloud SDK)
-Implement queue control and visualization
-Double check for unchecked errors and provide coherent error catching for users

Maybe TODO:
-Create launcher users to host their own
-Create logo for bot
-Create an auto-play/radio system using lastFM API
