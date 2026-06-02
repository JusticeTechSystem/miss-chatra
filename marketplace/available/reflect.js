// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cA6xtVHW4xpj+pQjDV7pSZ84StQolNspDJTApzfYY54RIdVWYxkCNidSM+pfv09KXyNy6g/1b5zIYZvovn7CPWyA0pj07ClQCco97Ekt6nqWhWBq/w8WCj/HX7AwPeyz09Slmlk6e0HYNo0q7AaSPoePlRdWppRfvGEBxK8SfxlKK3vhECz+3V3w0iPyVInP4p/lGK45vJt54kQ7CLXQ1F/jC4H83jXFD4c2TE9EZmkq562I2u+FWpykkt3WtdPGZt0U5N2iuB7642xpZruiJr9RbxuD3YObz1ixWiA7cC4aZAfpKCQlvZ2ElV2/38GEOcy8+Lgpi1ERy1y3w79iJY/lIQrtGJNO3w2Yo84ZrZ6lN4sEWzNxVdtBm8ICXoF367tnucYmiZZvcGoIPA6L/skb95NZfT44jGyQ7QHMhDKNZY1n7mP/r/hOeZfPOJ32u1QtgSMzc/oY3cx1fQghrkofBr4ITEgHIe5WHmaOxD5KrrmOTLOrYmjysGvcazFRUCfUon+iUNYDBZ4razbZb6nu12XIDrmanQWwXxYLFFt+8tS5JcgcTOHRaZuLm7IbNxkkVBYPLDXtJyNYYHOPvO6B0XkVZOVnU0rlouIapao7+pN6VAt4t+aA+XykJixzadOwhK5m/S8VUpJLIQ24RJ0iZfigWRLQRvKnl+Oj6GCxH90bGwFSjTuIl8xNyjbzH7y7fgfnw/19EG8JOwP1d5VhU2DCUQUf0YDszpVi81sTFJlbAVVe0rsFQsBWcvOQ885vRdG7g5dtJdF7f+EYQvKPOJ+iYnHWUrYPpe1ZSx2165YZYdBGNq8wGKNxry8AdBb4EDivMg3R1aE5dVFeTTIZp9d/nHvmriDHb3PK07mJ6gsIeGX/X3f9IFG7w0nuFXb4QerN9GFa94REol7nNH36Sp9FoAlLyEE01eTyHaT+X2SRlVsG5E/HcLu0j4YFTDvbL+rC5XtBr8WR4EOt0Us3jJ+umZ/t64d9mtKgKTP8H8wWvdMKMCbvwTCOwenN+CEh97oDw7+fXemEMYZIiiQSvzwm3ffyaKbLubf8NhhA0vPTOXFob2aLpH7/hD/VaYqxYTZz3Kp719d3J/ViPoySBvWNrah4KmJBeJE1/z8ava50Ou8xvmiWGTiwwx8WkzAWovL48zd7cKcZDnOVdvpMLfMUHdRU8Jmlm7cAVRpeb4GhXU8oMIvdnG/3BiY8v9V5';const _IH='fa976bc44fcb66902aad1f447ca1999d84578d49b810bebe2145ee63b022ffb6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
