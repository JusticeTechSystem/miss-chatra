// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rqfwtD8rK8OhOrA8R8ocGduqJuyLiW+7tdKN1GIDrb3NQQoRgYieZUGCj40lIyvBv7A+AoKlGLwmu/7O7xB6jxm6qmjVMpFXdqmeYTwOiRJclcuIbqq2sLUsBTjYceLF9fpoEwwJE8GDICHbhVTM/27boft20G2eXdCCjTpWALH3WzDWbgHUJa8HxbDVSc5SLT3b4UB97C4hjqROm8dAzNHQq5tvNfeDkWhrg8xqQqmCr96tCWTGOvLaP0xNgR6SB0cUZcLRIBliZJ4xdjDLkh9tyqlLrfJWzsUi00lRbpN4HCYY66hz3Opjj/1wmTfXwGVtZhGmbiy/V2ic246Ao+pB9kjlOeJSkYdmmWp9YAcfR526WbXU60rtpwHui0vc8fCAiqzRTY1uXDDwy4CsvXD/XQkA4LLwq2QR+3w86ybUqqByoLYrNx4nQnsbsYHidYL96bpoAPsrWhO45uLH042O5fCCIQGDsCn8tDCQIzS4fRNrpK5RQjDAJPNrD0H6my8qmlyx4CehrExs/vjIOeBj0nUfipGoXb9cCoDS1h2eU5BSFYYiz2l718A8RQSt+M0CJBsxViaDM4MQYsxRcig5VfCXXFa3CAdBibnztpaiG4HM4ajG574foS83ROG4oDMhR2wCbgZq4Of91mSPINzw0vVkpq7kWHS3rIcmnvO9AO1FBnN6pOzxASIp40esDRInjF3xZvVpgm2Fl2A/V2gQnuoKRs3F2fvEqzT/Skd2jb3S0tdGK3uXLIC7zuo9Y/qn7V02yJ4BMtHAIKNos64b4+9g8D8JEfUmqY3MQawKKzbZkgy6dZVLKrFsLz0QZ5OS/PlUdp6ptsBJug3qV1V0HKffwdj2W9K63ogpXtg6KDe0hulJUBS371tZG6s9OzH2svASSgL4ejDwTCibvt1cnZkmbFOD1C/PiE8acycjUl3Xx9XBvshd/P8v+ovpq0s2bxnIz/giFURAsqisWv7Wm7KE/kPforTFvLbrUg/ZEIOUTMzKTXlvj0EVnk77soLlgAffDkYHl6xTdUHR5lBd7Zr8QyX9ijaOiLU+mz4lnhzE8o6qZkD1hUbF2Dxxxd2ysWTiMOH/eyBQOKFhfxweI9aLrqt7DYzOnnP/UBCeGlGSmJ9o1qapjJAIgPbHJn28DQR2nzMU/yFwNk49drM5ftL4rMnUv8ddBNf91qNIWRSAsvBKCvmjxzVs0iT9FOZoVyVLnuevmykvHr1jbNuzwwdFGDJ1vQ4WABcTjPYdcLni8BkLdGgPv+gu2EZYKGCrx1LMVvmEn/RZcgxS/O2IbMZCkZ9zqvkT8o4nBNHjMzLXK8RnOmJ5ioi5kpBpLDZTNX+loQ8wfLmtV761/a/OhTh2VAAJKFaNlUA+55m5tuA8xTU16RCJJQB7dOGsRDKuBT/rG6+pcw1zcDko7ml0FyYkrz+iTE293Q/VgNF/X4t6QVuZPGCQ/wMAOfEg3oqfQ02pRRn4D4DA+IXQ67tH51PjVL/NI3UHqdgsGCnQwzEiOaXAqa7wRB7YIJECrpJbxDSwjvwVD9cf90VrlZToFTJvY+nZzRFwrew7zJwC91XFblXpfej59lxfdESV4XHa+5bWVWzSfknUlyPPOEvNNyZZ0S5fjgI6pzEqpEJXINQkulnhMAbLYMV+0jfkfH6xIO7wnANTuWmK17flKwKpm5t6WzsC9VbBcmQHp4myMOG+yoh1oaX/sYQa39YKtN/7k5LQUGDNI/2ZwW/1tQcX3nqcLvP5wg==';const _IH='193d412a375072141c970045eddc8ef84c369eece00e0f4bcfc7b6fe53e1eb38';let _src;

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
