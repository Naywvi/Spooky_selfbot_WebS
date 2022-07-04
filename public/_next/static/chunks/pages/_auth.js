window.onload = () => {
    const fragment = new URLSearchParams(window.location.hash.slice(1));
    const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];
                                                    
    if (!accessToken) {
    window.location.replace('/')
    }                                
    fetch('https://discord.com/api/users/@me', {
        headers: {
            authorization: `${tokenType} ${accessToken}`,
        },
    })

    .then(result => result.json())
    .then(response => {
        console.log(response);
   
        const { username, discriminator, avatar, id} = response;

  document.getElementById("nameDs").innerText = `${username}#${discriminator}`;
        console.log(`https://cdn.discordapp.com/avatars/${id}/${avatar}.jpg`)
        document.getElementById("avatar_discord").src = `https://cdn.discordapp.com/avatars/${id}/${avatar}.jpg`;

    })

    };
