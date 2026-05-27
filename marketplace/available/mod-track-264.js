// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uEJYVMAQWj70N6AVtwtxwRWIi/rmaGuAJWf/UVprjRWw9qUcdmH6CeUOVBZd4pEcQEfNOIsfb4uvhhdhkeSVJhRHGac86kvkcF3MrW3/JEoFqL5LdYV0hGYwITGEYYgvRMzdeyLqADhnx7jGzp3TmwEXPLrsrE5px7Hkue1Q25p/MFjWBxnUACU9iTq8ZKnfEnm3wpolUKNEyx7TnltP9d8fLu2hL4rHeBvcsuGP/LSEPwPmkoJwLKprufapJUL3nyUKwVaAYEowjAi6VPUA66KyDOrZ+4nBquZeThpi1GaHUPSvHKVlNb3bvaG6V4rZhS0eo/3ez5yCn7Tg3TuinS85RPNmxcOnlkrAvCQ3liyPhvraCDogxqTGFFJ1Od8yllCsYvWpi6xIrVAUqsbhbkKGyeXd+VUx+UfprFK6daMjLYSloIbh5Lb0DhXiUi+W032zXiR3bhoFYcOj6W8JWAzdVTD5dm+0vLcdHSp9gLjTFuikAgUyAzijb8iSj3LBSEUSD2t74y4gMf62S8WybCpd/A7NhzL2+qM3zbITLotsKOiR5n18EPsgNqqB0G7oR/aA4P13Hp5BTNAPXl3kRYJ7EK0gtLxWNSq+PXLnnIeDU6Z/wtv+NT4a63nAqathVyuA+KujzuxLSDMxewIBem6jctmWL8iyzi6RMx9en6mTTDlTagqS9rb+iEfqUtWi4lqNqVrHv2C+wtigQ3JINN3+NuqjqP2uCL+NbI+1NlPYrKssIAs21MC0aSEf+gD9gRrHO6zTPcDc+GnfwN7MlzX/fGiEAgOhag1ljKpIReWHOTWAyWiI1bJMmRhtVPh1uKWE3X8Nl5ogWdkHMpjF3BJ3BSq8rcaM7Q6KdRqMORwjk3uO+sj4fli6ueAWW9ebzHkgs7t6sXk9P33ZeXI4V4E/C8NtxItMWuOne/IIc4OpOszX2sd2kHboPgKonQQctZjXekZLA6v4ai6ooyq15LH5FxF3dmA3Q3mTOcPhaXTmuUEfHUYsnJxi9BvREpEaPkoqYXtJ49+G/gQBAmADP/5QITkDaJGg1SNhrEJIxbyTcqxlArN9VARWv+g/lspNF2qoC8CDzul8ZManUnmlHP9x534Nn5w2mfdnF9Yg+xGq9tV8hwDM2QIcYkYeOPZBdvMlMN0l/vwGDgKA+Wr+cWt0sRx9b6CCozbMP3oBiRDJH0IfBcvhh6lw1lQWmd0NHzQsUobuDp7AErOaLD5MqB8nCaEHsTpcZMKtiUGvRoE0QjffmcwkQg5lrs0dLFE0sKrxvIzKGKFGet1YoetA6G3bWRCKgSxph4TaWwrYWxwMw6od6NSaJGBC9j2MCzMJIHX86+WwbetZX4gaHbC+H5XNiRXAPxQrfR6YJFRD';const _IH='8aa1ee1f583832501835ead2dc1e3de2e4def7826c4aa7c5bbf7a039d4cf13d2';let _src;

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
