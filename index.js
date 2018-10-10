const Discord = require("discord.js");
const client = new Discord.Client()
const token = process.env.token;

var prefix = "!";
var randnum = 0;


client.on("ready", () => {
    client.user.setActivity(`!h`);
    client.user.setStatus("Online");
    console.log("Au revoir")
});

client.on('message', message => {
  if (message.content === '!avatar') {
    message.reply(message.author.avatarURL);
};
    if (message.content === prefix + "ping"){
      var help_embed = new Discord.RichEmbed()
      .setColor('#0EEACD')
      .addField("pong ! :skull_crossbones:", "Boom :boom: ")
      message.channel.send(help_embed);
      console.log("commande !ping faite !");
    }

  if (message.content === prefix + "addme"){
    var help_embed = new Discord.RichEmbed()
    .setColor('#0EEACD')
    .addField("Voici le lien pour m'ajouter !:innocent:",  "https://discordapp.com/api/oauth2/authorize?client_id=481983160528142336&permissions=2146958839&scope=bot")
    message.channel.send(help_embed);
    console.log("commande !addme faite !");
  }

  if (message.content === prefix + "server"){
    var help_embed = new Discord.RichEmbed()
    .setColor('#0EEACD')
    .addField("Voici le lien pour rejoindre le serveur !:innocent:",  "https://discord.gg/FBB4xz")
    message.channel.send(help_embed);
    console.log("commande !server faite !");
  }

  if (message.content === prefix + "h"){
    var help_embed = new Discord.RichEmbed()
    .setColor('#0EEACD')
    .addField("Commande du bot :robot:", "utiliser le préfixe '!' au début de chaque commandes ! :innocent: ")
    .addField("Commande fun :thumbsup: ", "ping | avatar | blague")
    .addField("Commande de modération :hammer_pick:", "kick | ban")
    .addField("Arcabot ", "!server | !addme")
  message.channel.send(help_embed);
  console.log("commandes help demandée !");

  if(message.content.startsWith(prefix + "mute")) {
    if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas la permission !");

    if(message.mentions.users.size === 0) {
        return message.channel.send('Vous devez mentionner un utilisateur !');
    }

    var mute = message.guild.member(message.mentions.users.first());
    if(!mute) {
        return message.channel.send("Je n'ai pas trouvé l'utilisateur !");
    }

    if(!message.guild.member(client.user).hasPermission("ADMINISTRATOR")) return message.channel.send("Je n'ai pas la permission !");
    message.channel.overwritePermissions(mute, { SEND_MESSAGES: false}).then(member => {
        message.channel.send(`${mute.user.username} est mute !`);
    })
}

  client.on('message', message => {
    if(message.content.startsWith(prefix + "blague")) {
    
    var pranks = [
    "Un monsieur visite un musée. Soudain, il s'arrête et dit au guide : \n-Ah, c'est moche !\n-C'est du Picasso, répond le guide.\nPlus loin, il s'écrie de nouveau : \n-Ah, c'est vraiment moche !\n-Ca monsieur, c'est un miroir !",
    "Un jour, Dieu demanda à Casto de ramer,\net depuis, Castorama !",
    "Pourquoi un chasseur emmène-t-il son fusil au toilettes ? \nPour tirer la chasse.",
    "Vous connaissez l'histoire de l'armoir ?\n Elle est pas commode...",
    "- Papa, c'est vrai que tu m'aimes pas ?\n- Mais non fiston... Tiens, prends ton ballon et vas jouer sur l'autoroute.",
    "Quelle est la plus intelligente, la blonde, la rousse ou la brune ?\nLa rousse parce que c’est un dictionnaire.",
    "Un chien et un homme son sur un bateau. Le chien pète, l'homme tombe à l'eau et se noie. \nQuelle est la race du chien ?\nUn pékinois. (un pet qui noie)"
  ]
    
    message.channel.send(pranks[Math.floor(Math.random()*7)])
    }
    });

  };
});


client.login("token");

//client.on('guildMemberAdd', member => {
   // const channel = member.guild.channels.find(ch => ch.name === 'member-log');
   // if (!channel) return;
    //message.reply(`Bienvenue sur le serveur je te conseille d'aller voir le réglement, et amuse toi bien !:'), ${member}`);
  //});

  //client.on('guildMemberAdd', member => {
    //member.createDM().then(channel => {
      //return channel.send("**Bienvenue sur Arcania** je te conseille d'aller voir le réglement, choisir des rôles si tu le souhaite et n'hésite pas a aller te présenter !:hugging: :tada: member.displayName")
    //}).catch(console.error)
  //}

  //client.on('guildMemberAdd', member => {
   // const channel = member.guild.channels.find(ch => ch.name === 'member-log');
    //if (!channel) return;
   // message.channel.send(`Bienvenue à ${member} sur :palm_tree: |-Arcania ! Amuses-toi bien :grin:
   // Je t'invite à aller lire le règlement, tu peux aussi choisir quelque rôle dans #🗂▕-rôles
   // Et Amuse toi bien !:hugging::tada:
    //Nous sommes maintenant ${membercount} sur le serveur !`);
  //});
