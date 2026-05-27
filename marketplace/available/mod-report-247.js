// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+RSRhs4fjAYrp651ThuurjxBdrf8vDFcbBSNJYhCqsCiQcBEYZA6iID8bidtN0xCfIWKxc2JvEDMDjSB8h+WhQqLYZN7f6vPwZx9EA8R7Xp7Y+GB6vWzfzFTG7bka4eC7NdwHA4YSMBSBpNDfQX4rEmJFxV9AwcBVpv2wvNdL0bAYWGA1WTXzJe0xO55Jwk8lNpC1Roahwplwe1M3Jgg7q4DLaiRvGSXVToZ25+wTicePFd5HXgtBnStVONvr31jPJF3PVomn4GHQVOkUIbZ6kDIjhpa89bkbvn8pktpkFm8Fe+0bhnU5KvJiRBTiLPEvurjwFMqDNaj9TDjrlN47IaIydwWCEmHBsjjT57CljVk4StCE2XpFz7+ZNc1uCVqv5qlQAs6MKbutmmKfMVYHuz5UGyArGwvLybFeZiYEteZ/3qhwVRWXwAxJyTnjO+cuT0TOn43yzfxCax4KGRCjY8HXirkvUKu9NjYWaszXPEeuFAGnAow994Jh76EA6n+zq3Wa1cGksTX4HAEGNGT0zxDTGsNGuFoeML8V7SjPozkSKKrqc6NSHBoEuRDbQfrzMUt7Q1Zsc/HIO93YDnZ2/AgSbxeA3TapQDig+AAyv370hVCBIdA6YooHVL/qqLct+gVbuMzhSDHVR1Q+HT4FmoKzgAm0rneVzeN/uKmVLQeH5Bq+CfW2PHUKzmHlspJjQqQ0SaQFA0TVPl/Q5NFDgDwc+grg8ElZgVAWmoEXKPkCiYQXpBd5/pVN0xShfBOzvC4tHNz5QlzvcmAJwFQqx7VVwnWj8q4t2uZ0gQWgQxmbN8R9pOgYz4qApNCWSvo5e4SlGwwgtsChi4JWuX7RLRuexbgJA3Shmo6VSCqWJDlpI53R1P+d+b3GLtTUDG0dKuGhY0N78vf0UAIYT17qCkU+BJg2C+ohnt0qIZM7rSAj5NiWPZ8qdVnl+ffxCXb6XSwS0iuJioAjbULSUEPF/LPSe/haMyfZ6bBjqeno/dR/VYPDbaoQBxKxe8f5JYyWZ/Jqh1N8ny+XS6pnMwMIAKbMaQWFm8eeJIUIczoD3/3M4HYQqu75O9cgPO+CCnDIDJw0Iqyxeqa4yR59zMn7WSHo36XKCfcRcFmJZSVY/gyQ1Yln65TB8l9XH8XMCmgQmmgzm/pDpjpJLckPJggCMgqy8XIdzLnpFz20ps4qUAtB2Fl5QCdXA7WeDExoYvQN4pBOO2C9IZAdWAGCXJ1hpUFUjgbwn/uatJuLCgMQkr0E/3OUzDMCYA4O3LsIoHXh6bVvCPdl2Ad9cEnj8uhmdmknSDycIRWepuL6s7uNRS/USqAKQ9l8SaB3pCTaaLRnLmSX64ybFTByMVPsibq5Pf8g+zVAlbeOIQht4YHR/q0/x6F2HC31A==';const _IH='444c20a452b1032f674686a9440876e104a064c5ca0e22295530117e51e4adbb';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
