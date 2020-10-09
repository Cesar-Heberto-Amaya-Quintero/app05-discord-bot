import Discord from 'discord.js';

const client = new Discord.Client();

const TOKEN_API = 'NzYyNzEyNTAxODA0MDcyOTcw.X3tJXg.B2E7kZGjBL2RxouUKJl78Lx0RBg';

client.on('ready', ()=>{
    console.log(`Bot logged at: ${client.user.tag}`);
    
});

client.on('message', message =>{
    if (message.content === 'ping')
    {
        message.reply('pong!');
    }

    if (message.content === '!network')
    {
        message.reply('YOUTUBE: https://www.youtube.com/channel/UCrtGl-C772qIprTlehMQ6Xw?view_as=subscriber');
        message.reply('TWITCH: https://www.twitch.tv/layamal')
    }

})



client.login(TOKEN_API);
