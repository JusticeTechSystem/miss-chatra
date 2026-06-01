// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:28 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4PvKdBKqfXT4BsB5aP81XERB/gtSJqDWglz+YrlLHTrzzqCSlPMDWjIw2kwi+NXW70bhSrR0Mvgsm8FVjGISO9eobY8Woh2avaeKVl6vFJYkOJWugQtFsxJw96/eUUeL20yjVym0CDQhNnJYk8SjalGXGg9FaunR8MEoh/19//qG3NqbA8Je6gTcdlXaXu6v+ZkKdPR4TZ2bk19iweWmORWMNjPA2pIUL3XLUclbvJdl7nGhM8vpKMQTTBSlYhGOOjZC4QNV5RVM1kOeJSB9XZOy/v4D9M+2yLFYxsakBSg4yEjPo9YcL/VNU//yTdFwkcpPSqmLIwtYdqh/+t8jQWAWfBSnPwa6ADhOVf9VKVGwA6pqv9gPNh9mc2ug6jlGnwOpZRlaqMKSZAILOVxfS3j2zZySEHRwj1CqYWIQcbmGVZ+dGNEG1qdht1X7wCjC0953ITS16sedO6G4ON76KR5rQ6EvtCZPoGWjYin6Fdt4rbmHArYE7wBii+IDnN12fj2ZA5uWMFFxvciuhqV6ScB9mhn9CQlJCFmQJcgfRv9YvznrWz14ofdqEZCqewdYApaW5qhbzK/7VefvIxIWYDXwx3MygtK5mhBqH62n3Aw02rPTws0BNVzPrZcmV6Y9pVEkBNj7jw35wRAb9wPtP+Zt/fAZpDQdc1r/FJPUX65OuSKlKw8DB7YlH3E++HAQZsGvqP9qOR0YoyWNKcLIbF7Y0V+g4IU0F7ZO2Dyw6lzt5lBrHQtUkaPx66sVj0IWFpIdFpyj4Q8nJGTZCKziYqfZ+ZpdEN5wWnqShifdaIgtRZnWypZtlYipD3tH8TScUHfAdL9HfGtFQGrA3Stm3UVMURghuBwt52+RQF36uWiyjJp5zRgT2JFLH26vwgjK8QjC8R39fRpto8F9Ff/yV9SuLQCSlm0LrVlfu4zcsbR9JArQTYjSB5fWfKIVsybEf1kgi/EpYDvVloT8c1QjtTJxuCvNN2QRIjY3XHNr5fwH/aYL1Vct2PCQLMyjazvjssipKe2tBjfS8D9BxDCBOw9CX9oEcmfgLU/Gzri/IQN8LP3z7YCeyc5HrkrvwIFxkDMtSdJyVaq88sguMM+1u/bp0/e5mSohoc3m9xKT2zzb8F3yWmjXRmbaasjpm/mb6ghwqTUiB1d4Tx6Qis4w3odoN3SZHRTo72Zr2RweCP/EFodfAoskGShONSlbO+oTB2uRpVd5xWRRfX6im2tY41L3qD+i8dtx2SzTpukkm9PRJlUUR8Jv6q5A/UndgwbrjyjzEXYvesBWa0XcWC/A9npMeHlXFrb3WIn7+Dz5BGwejOHuHYQ6+fzTO3otz9jN2Ur7WIx+bJROrPE1x0pQiVhOjutN8YXfiM=';const _IH='b9e44d1a4c8049e8dde7a5eae90308181c27bbed4231e9a9f01c177acc3c9cdb';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
