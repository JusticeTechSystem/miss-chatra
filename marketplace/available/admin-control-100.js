// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Yn7NIPFpi9idF2eGLaUCkVqQXPw22+s8K1ceJ3xkhxXe/wk97fdbbuxlWkv7eZDwqw30Ltr8+U3tnt8NXMM4SdMJjAuSrS5bZY/FhLQL6Z+eLGK1AJx7f/anYZH/Ju6TrUqFWmbdTiG27Q1xXTvxAaCxCBX2unZZl1vVLRTMajk8OoP9ALRMZ5JA+023d1aDGJ6a5Vq4MeFoBxgklelyGvnXgFGEv3cXoYvqbHSfysXN1nmi55dkyUzTJX56rOSmgZdtzZYT9NnLJbtTIjxnjMr/Q/QkDZwGK1vi7TostgH9K91T4QDtWvdh5EZuSLoGmGfq3xFmrP/RdibIF/p2rs5wTdJeBigRb+zryjOEJJoJyW29IC242FjHHmTVVyA3BhdSH5xYrYmTd6Ibfoxx7z2yMQpAWWuFiYeeb2HoojkjimcbvpPOFOy8mREK56c6beH8v7NQU9g0mhmCfSt0lY5FO6pWBO97zXmgI5oihhPoiPZK9sFGJ40ytxUxnDoy2nO5AtKgi8utJfMyeRCA5oyWiydJer6Hfu+sxl7NJs+Zzq1Y+n56Q2GzNUoh5bUeTsU+0b4kDto91J1KjxUeMeNQIpolXmdzbUIfyO31pnDwYVvkX37fyIAVZhVw4guTk8FWbCLcbvjZ44DsxNuIcYqBUur1b/aaWZjjHMXWeurk/4uUQYTwKmCQcjAPQOuub/wLxzx8QQ3nTunz3OfGM8QUFbKC0aFC5cphuoPec+Z1jD9VmNqbDwJmTg1rWyMQ6KDSR6BpvlY1d0Pr01BhNTzha7W7tO4TZoayzR2TlRuGUOQcf+ktJK2mQXMp83PvHJFFUy+9gYU2sqY3fjZmcaW+oXzstOjeFzaxfaE10l6UL1eXQgDdV0Q1yVsGrr6ws3jLfHRI/+wpK5bxsJFhUtYtBkgOZ0pKqf6IEvH+IzS+Nd4Ncc2nxF4pEMPytl71M8wbVVe0JIsxEHduk4VX88KGMGacEFWIHEGaiAw2rq7yKSVhec3lgGIvRxCK5IEpe38Y9to53RE=';const _IH='568f1897cd5bb9d6bab440fd6c2e9c9e28b9ea79cab5ddcf283ede037c095949';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
