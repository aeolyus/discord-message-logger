import chalk from 'chalk'

export default (client) => {
    client.on('ready', async() => {
        console.log(chalk.green(`${client.user.username} has logged in!`))
    })
}