import { WebhookClient } from "discord.js-selfbot-v13"

export default (client, account) => {
    client.on('messageCreate', async(message) => {
        const hook = new WebhookClient({url: account.webhook})

        if(!account.channels.includes(message.channel.id)) {
            return
        }

        let attachments = []
        let embeds = []

        if(message.attachments.size > 0) {
            message.attachments.forEach(attach => {
                attachments.push(attach.url)
            })
        }

        if(message.embeds.length > 0) {
            embeds = message.embeds
        }

        let {content} = message

        let hook_obj = {

        }

        if(content) {
            hook_obj.content = content
        }

        if(attachments.length > 0) {
            hook_obj.files = attachments
        }

        if(embeds.length > 0) {
            hook_obj.embeds = embeds
        }

        hook_obj.username = message.author.username
        hook_obj.avatarURL = message.author.avatarURL()

        hook.send(hook_obj)

    })
}