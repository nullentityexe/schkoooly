


// ==UserScript==
// @name         Schooly, Schoology to Discord announcements
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Sends Schoology updates to a Discord channel using a bot.
// @match        https://app.schoology.com/*
// @grant        none
// @icon         https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxPhAt0fyjQQ29x606v_Xt-5QPchBgT8-Xug&s
// ==/UserScript==


(function(){
    'use strict';

    
    const webhookurl = DISCORD_WEBHOOK_URL;


    async function sendMsgToDiscord(msg){
        await fetch(webhookurl, {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({content: msg})
        })


    console.log(`posted ${msg} to discord`)
}

function checkForUpdates(){
    //console.log('checking for updates')
    document.querySelectorAll('span.update-body.s-rte').forEach(update => {

        if(update.parentElement.querySelector(".discord-post-btn")) return

        const btn = document.createElement("button");
        btn.innerText = 'Post to Discord'
        btn.className = 'discord-post-btn'
        btn.style.marginTop = "5px";
        btn.style.padding = "3px 6px";
        btn.style.margin = '3px'
        btn.style.fontSize = "12px";
        btn.style.backgroundColor = "#7289da";
        btn.style.color = "#fff";
        btn.style.border = "none";
        btn.style.borderRadius = "3px";
        btn.style.cursor = "pointer";
        btn.addEventListener("click", () => {
            const text = update.innerText.trim();
        if(text){
            sendMsgToDiscord(text)
            alert('Posted to Discord!')
        }
        })
        update.parentElement.appendChild(btn)

    })
}

    setInterval(checkForUpdates,2000)
})();