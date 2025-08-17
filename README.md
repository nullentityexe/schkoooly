# Schkoooly
Schkoooly is a tampermonkey script that allows you to post schoology updates to a discord webhook of your choice, perfect for school communities that have both discord & schoology. This allows users who have the discord webhook url, to select and send updates from the schoology page to the discord server. Since the script is client side, there's no need for admin permissions or complicated school permissions. Simply download, and click on an update to send!

To use, download Tampermonkey...
Create a new script, and paste ALL the text in script.js into TamperMonkey

The ==Userscript== section is required because it tells tampermonkey the
name of the script etc etc. but also where it can run.
To prevent Tampermonkey from taking up unnecesary resources, and trying to inject on every page, the userscript lets it run only on schoology.

After pasting it and saving it as a script in tampermonkey, all you have to do is paste your discord webhook URL in for DISCORD_WEBHOOK_URL, and boom, you're done.

A post to discord button will get injected onto each update, which when clicked will post to the discord webhook.


Code notes:
 An alert is displayed on the webpage after a post, just for user confirmation.
 if you're planning to post a large number of updates at a time, deleting this line may be useful.

 in the future, the script may break if schoology chooses to change internal ids. updates.querySelectorAll('UPDATE ID OR CLASS') is where to change the id/class if it gets updated in the future. 
 
 As an aside, the querySelector can also be changed to access other schoology formats, such as members, upcoming etc, to post those to discord.
