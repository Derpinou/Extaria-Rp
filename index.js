const Discord = require('discord.js') // import de djs
const { Client } = require("discord.js"); 
const config = require('./config.json')// config

//Définition du client
const client = new Client({
    disableEveryone: true, // Désactivation du everyone par le bot
});

client.login(config.token) // Connection du bot
console.log('Bot connecté') // Log pour prouver que le bot est co

//event Ready, le bot est allumé
client.on('ready', () => { 
    client.user.setActivity('Extaria RolePlay', { type: 'WATCHING' }) //Définition du status
    console.log(`${client.user.username} Connecté`) //Donne le nom du Bot Connecté sur le client

})
//Event message
client.on('message', async (message) => {
    if(message.content === `!!service-police`){ 
        let allowedRole = message.guild.roles.get(config.policier); //Cherche le role Policier
        let role = message.guild.roles.get(config.pservice); // Cherche le role Policier en Service
        if (message.member.roles.has(allowedRole.id)) { //Si l'auteur du message a le role Policier, alors on execute le bloc
            if (message.member.roles.has(role.id)) { //Si l'auteur du message a le role Policier en Service
                await message.member.removeRole(role); //On Enleve le role Policier en Service
                message.channel.send(new Discord.RichEmbed() //Envoi de l'embed
                .setColor(config.color)
                //.setThumbnail("https://cdn.discordapp.com/attachments/704079863539171478/704081495953768468/39cdddd11aaf774994590a7bd5552001.png")
                .setImage("https://cdn.discordapp.com/attachments/704079863539171478/704081495953768468/39cdddd11aaf774994590a7bd5552001.png")
                .setDescription(`${message.member.user.tag} - fin de service`)
                .setTimestamp()
                .setFooter(client.user.username)
                )
                const nombre = message.guild.roles.get(config.pservice).members.size; //Récuperation du nombre de membres qui ont le role
                message.guild.channels.get(config.pchannel).setName(`👮🏼 ⌥ Policiers : ${nombre} `); //Changement du nom du Channel Policier
            } else { // Sinon si il n'as pas le role Policier en Service
                await message.member.addRole(role); // On Lui ajoute le role Policier en Service
                message.channel.send(new Discord.RichEmbed() //Envoi de l'embed
                .setColor(config.color)
                //.setThumbnail("https://cdn.discordapp.com/attachments/704079863539171478/704081495953768468/39cdddd11aaf774994590a7bd5552001.png")
                .setImage("https://cdn.discordapp.com/attachments/704079863539171478/704081495953768468/39cdddd11aaf774994590a7bd5552001.png")
                .setDescription(`${message.member.user.tag} - prise de service`)
                .setTimestamp()
                .setFooter(client.user.username)
                )
                const nombre = message.guild.roles.get(config.pservice).members.size; //Récuperation du nombre de membres qui ont le role Policier sen services
                message.guild.channels.get(config.pchannel).setName(`👮🏼 ⌥ Policiers : ${nombre} `); //Changement du nom du Channel Policier
            };
        } else return message.reply('Tu n \'es pas Policier')
    };
    if(message.content === `!!service-taxi`){ 
        let allowedRole = message.guild.roles.get(config.taxi); //Cherche le Role Taxi
        let role = message.guild.roles.get(config.tservice); //Cherche le role Taxi en Service
        if (message.member.roles.has(allowedRole.id)) { // Si l'auteur du message a le Role Taxi
            if (message.member.roles.has(role.id)) { // Si il a Deja le role Taxi en Service
                await message.member.removeRole(role); //On lui enleve le role Taxi en Service
                message.channel.send(new Discord.RichEmbed()//Envoi de l'embed
                .setColor(config.color)
                //.setThumbnail("https://cdn.discordapp.com/attachments/704079863539171478/704081495953768468/39cdddd11aaf774994590a7bd5552001.png")
                .setImage("https://cdn.discordapp.com/attachments/704079863539171478/704086570264690860/download.jpg")
                .setDescription(`${message.member.user.tag} - fin de service`)
                .setTimestamp()
                .setFooter(client.user.username)
                )
                const nombre = message.guild.roles.get(config.tservice).members.size; //Récupere le nombre de nombre de membres ayant le role taxi en service
                message.guild.channels.get(config.tchannel).setName(` ⌥ 🚕 Taxis : ${nombre} `); //Changement du nom Du channel Taxi
            } else { //sinon si il n'as pas le role Taxi en service
                await message.member.addRole(role); //Ajout du role taxi en service
                message.channel.send(new Discord.RichEmbed()// envoi de l'embed
                .setColor(config.color)
                //.setThumbnail("https://cdn.discordapp.com/attachments/704079863539171478/704081495953768468/39cdddd11aaf774994590a7bd5552001.png")
                .setImage("https://cdn.discordapp.com/attachments/704079863539171478/704086570264690860/download.jpg")
                .setDescription(`${message.member.user.tag} - prise de service`)
                .setTimestamp()
                .setFooter(client.user.username)
                )
                const nombre = message.guild.roles.get(config.tservice).members.size; //Récuperation du nombres de membres ayant le role taxi den service
                message.guild.channels.get(config.tchannel).setName(` ⌥ 🚕 Taxis : ${nombre} `); // changement du nom du channel Taxi
            };
        } else return message.reply('Tu n\'es pas Taxi !')
    };
});


