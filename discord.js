const Discord = require('discord.js');
const client = new Discord.Client();
const axios = require('axios');
const fs = require('fs');
const path = require('path')
let COMMAND_PREFIX = "."

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  profilesCount();
});

setInterval(function(){ 
profilesCount(); }, 5*60000);

client.on('message', message => {
  if(message.channel.id === "715364103803109456" && message.content) return message.delete();
  if (message.channel.id === "715364103803109456") {
    message.react("👍")
    return message.react("👎");
  }
	if (!message.content.startsWith(COMMAND_PREFIX) || message.author.bot) {
		return;
	}

	const args = message.content.substring(COMMAND_PREFIX.length).split(' ');
	const command = args.shift().toLowerCase();

	switch (command) {
    case "help":{
        message.channel.send(new Discord.RichEmbed()
				.setTitle(":mailbox_with_mail: Help?!")
        .setDescription("Prefix: \`.\` (DOT)`\n\nMake sure to read <#713485906673139833> & <#703690937561251900> before askin any questions\n\nHey! Want some help? Here's all of my commands:")
        .addField('level <USER> <LEVEL>', 'Change your account level! \n(EX: **.level kemo 9999**)')
        .addField('vbucks <USER> <LEVEL>', 'Change your account vbucks amount! \n(EX: **.vbucks kemo 9999**)')
        .addField('DISCLAIMER:', 'Changing someones level or vbucks will result in a ban , just change __**YOURS**__')
        .setColor(0x408BFA));
      break;
    }   
    case "level":{
      if(!args[0]) return message.channel.send("Missing field \`Username\`");
      if(!args[1]) return message.channel.send("Missing field \`Level\`");
      if(isNaN(args[1])) return message.channel.send("Field \`Level\` should be a number");
      if(!(args[1] > 0) || !(args[1] < 2147483647)) return message.channel.send("Field \`level\` should be between 0 & 2147483647\n**Big values can crash your profile!**")
      if(checkUser(args[0])) return message.channel.send("User not found!");
      axios.get(`http://127.0.0.1:3003/api?user=${args[0]}&command=${command}&value=${args[1]}`).then(response =>{
        message.channel.send(new Discord.RichEmbed()
        .setTitle(response.data)
        .setFooter("Make sure to restart your game to apply changes!")
        .setColor(0x408BFA));
      }).catch((error) => {
        message.channel.send(new Discord.RichEmbed()
        .setTitle("Operation failed!")
        .setColor(0xFF0000));
      });
      break;
    }   
    case "vbucks":{
      if(!args[0]) return message.channel.send("Missing field \`Username\`");
      if(!args[1]) return message.channel.send("Missing field \`VBucks\`");
      if(isNaN(args[1])) return message.channel.send("Field \`VBucks\` should be a number");
      if(!(args[1] > -2147483647) || !(args[1] < 2147483647)) return message.channel.send("Field \`vbucks\` should be between -2147483647 & 2147483647\n**Big values can crash your profile!**")
      if(checkUser(args[0])) return message.channel.send("User not found!");
      axios.get(`http://127.0.0.1:3003/api?user=${args[0]}&command=vbx&value=${args[1]}`).then(response =>{
        message.channel.send(new Discord.RichEmbed()
        .setTitle(response.data)
        .setFooter("Make sure to restart your game to apply changes!")
        .setColor(0x408BFA));
      }).catch((error) => {
        message.channel.send(new Discord.RichEmbed()
        .setTitle("Operation failed!")
        .setColor(0xFF0000));
      });
      break;
    }
    default: return false;
  }
});

function profilesCount(){
  let guild = client.guilds.get("703690937074974761");
  let channel = guild.channels.get("715367031943463032")
  const n = fs.readdirSync('./config').length;
  channel.setName(`User profiles :${n}`)
}

function checkUser(username) {
  if (fs.existsSync(path.join(__dirname, '../config/', username))) {
      return true;
  } else return false;
}
client.login('');