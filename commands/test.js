const fetch = require("node-fetch");
const Discord = require('discord.js');

module.exports = {
    name: 'test',
    description: 'updates ticket status',
    execute (message, args)
    {
        const input_name = args[0];
        const input_val = args[1];

        const oweAmount = (message.channel.name).substring(4);
        const oweAmount2 = (oweAmount - input_val);
        
        if ((message.channel.name).substring(0,4) == "owe-")
        {
            if (oweAmount2 == 0)
            {
                message.channel.setName("robux-paid");
            }
            else {message.channel.setName("owe-" + oweAmount2);}
        }
    }
}