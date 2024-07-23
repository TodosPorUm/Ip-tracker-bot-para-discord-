const Discord = require('discord.js');
const geoip = require('geoip-lite');

const bot = new Discord.Client();

const prefix = '!'; // Prefixo para comandos do bot

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', (msg) => {
    if (msg.author.bot) return; // Ignora mensagens de outros bots

    // Exemplo de comando para verificar IP (apenas para fins educacionais)
    if (msg.content.startsWith(prefix + 'meuip')) {
        const ip = msg.author.lastMessage.ip; // Exemplo de como você poderia obter o IP, mas isso não é recomendado em produção

        if (!ip) {
            return msg.reply('Não consegui encontrar seu IP. Tente novamente mais tarde.');
        }

        const geo = geoip.lookup(ip);

        if (geo) {
            msg.reply(`Seu IP (${ip}) está localizado em ${geo.city}, ${geo.region}, ${geo.country}.`);
        } else {
            msg.reply('Não consegui determinar a localização do seu IP.');
        }
    }
});

// Coloque seu token do bot Discord aqui
const token = 'SEU_TOKEN_AQUI';

bot.login(token);
