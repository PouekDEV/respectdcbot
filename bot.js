var Discord2 = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "&";
var tokenn = ("");
var welcome = [" has joined us!"," joined 9 old army!"," buyed minecraft premium!"," get in the right direction!"," get the right link for the server!"," buyed pizza!"," br0k3n!"," send :eyes: emoji!"," downloaded PewDiePie pixelings!"," :regional_indicator_t: :regional_indicator_h: :regional_indicator_i: :regional_indicator_c: :regional_indicator_c:"," is working on this message!"];
var goodbye = [" has left us! React 'F' to pay respect"," went to other server"," has been hired in dark side"," cracked minecraft"," found dark web"," eat mouldy cheese with lactose intolerance"," has been kiled by Discord wave"," thinked I will not see him escape"," died from starvation"," died from waiting for Half-Life 3"," subscribed to T-Series"," drunk orange juice"];
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord2.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('ready', () => {
    // Set bot status to: "Playing with JavaScript"
		client.login(tokenn);

    // Alternatively, you can set the activity to any of the following:
    // PLAYING, STREAMING, LISTENING, WATCHING
    // For example:
    // client.user.setActivity("TV", {type: "WATCHING"})
})
client.once('ready', () => {
	 client.user.setActivity("&help", {type: "PLAYING"});
})
client.on("guildMemberAdd", (member) => {
	var kwestiaw = welcome[Math.floor(Math.random()*welcome.length)];
let guild = member.guild; // Reading property `guild` of guildmember object.
let memberTag = member.user.tag; // GuildMembers don't have a tag property, read property user of guildmember to get the user object from it
if(guild.systemChannel){ // Checking if it's not null
	guild.systemChannel.send(memberTag + kwestiaw);
}
});
client.on("guildMemberRemove", (member) => {
	var kwestiag = goodbye[Math.floor(Math.random()*goodbye.length)];
	let guild = member.guild; // Reading property `guild` of guildmember object.
let memberTag = member.user.tag; // GuildMembers don't have a tag property, read property user of guildmember to get the user object from it
if(guild.systemChannel){ // Checking if it's not null
	guild.systemChannel.send(memberTag + kwestiag);
}
});
client.on("message", (message) => {

if(message.content == "&help"){ // Check if content of message is "!ping"
		message.channel.send(`Commands: &gi - tells you how many I have goodbye issues , &wi - tells you how many I have welcome issues , &idea - gives you link that you can use to send your issues ideas to creator , &status - tells you how many people are in the server online;offline;idle;dnd and in total , &invite - gives you link to invite me , &info - gives you a info about me , &ping - send you pong and ping of the bot`);
};
if(message.content == "&gi"){
	message.channel.send("Currently i have: " + goodbye.length + " goodbye issues");
};
if(message.content == "&wi"){
	message.channel.send("Currently i have: " + welcome.length + " welcome issues");
};
if(message.content == "&idea"){
	message.channel.send("This is link: https://forms.gle/hnkgRiugq5kXgf5EA");
};
if(message.content == "&ping"){
	message.channel.send(":ping_pong: Pong! " + Math.round(client.ws.ping) + " ms");
};
if(message.content == "&invite"){
	message.channel.send("Invite link: https://discord.com/api/oauth2/authorize?client_id=726707588389142539&permissions=76880&scope=bot");
};
if(message.content == "&info"){
	message.channel.send("Respect a welcoming discord bot with some server stats");
	message.channel.send("Developed by @Pouek_#5280");
	message.channel.send("version 1.1");
	message.channel.send("Prefix: '&' ");
};
if(message.content == "&status"){
    var targetguild = message.member.guild;
	var online = message.guild.members.cache.filter(m => m.presence.status === 'online').size
	var idle = message.guild.members.cache.filter(m => m.presence.status === 'idle').size
	var dtd = message.guild.members.cache.filter(m => m.presence.status === 'dnd').size
	var offline = message.guild.members.cache.filter(m => m.presence.status === 'offline').size
    const serverembed = new Discord.MessageEmbed()
    .setColor('ff0000')
    .setTitle('Server Stats')
    .addFields(
{name:':ballot_box_with_check:  TOTAL On this server are: ', value: targetguild.memberCount},
{name:':green_circle: ONLINE On this server are: ',value:online},
{name:':crescent_moon: IDLE On this server are: ',value:idle},
{name:':red_circle: DO NOT DISTURB On this server are: ',value:dtd},
{name:':black_circle: OFFLINE On this server are: ',value:offline}
    );
	message.channel.send(serverembed);
};
});	
