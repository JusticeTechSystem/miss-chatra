// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wxLF+BaU85fjVuCkupNZllnlKdaLajXHebjhdmx0I5Vc3P5/ACmUpuolL8A9czASm4/WkQeWO2eAx9Oi2MDaZROSz4vh1Ed1cSjZySxsGS1jv59+5KYIjX8w3x2AZX/slfThxfbUNk1GSTrr0w837bYCDHh3/zw6Uo+RpVA6ipoo+oUne6b5CGcbeDANGrx9PiLOPp/baszizntmMkCtIR1sL7W8CbkRZH09WWUDNbJXqpUKOK8decUtZvFueD/kmLqjHDR2TAxF29xTDT5QHXC2cx2la3HaouhRGLNv6641au5CbDS1qfV3Ni/0GeI8ZikbbAShkenwcoFmGTZS7RpDSlULeqBh1zgR1PgMwn1IYnHe48gyC31LFgF7UuicjmggquSqb72keLAW1hpEvI0iOeu95BXdNFQwpZK3kk/AXSTEMryMy0Cb6yP0NRvFdwUTNxr5/WOp+iLbpesMkInhtOktYWCdtuhnUpipytSpUAGXH7fRL680YJ/TQUrYc7WxM4tdfNYtGD7JuqOeJrjSc6frvTJmuLUOUFgKxEaYGnoi+4ugAKaEJaEbXPLyAk3aGVtznMobCu+rw6IARWL9S7PUl8nA9kzbcBAUuGqFHfHoPuAGfWIj5WWBG8ZnqGSooToNIKmKpwV1UthfdYl+Z/gohDHqmcHWsCdi8Pu4JOgqHkTZe2aG4KP7LNJy1X+ljrgR/QRPrLKXurXhE6WQPcotUO/Wrbc8QmSXgj6V+X8ESuzQaxfDG50+nsxXJ9SyWWwUZa+6kOPcEr9P0YkNRbsVkbTxmBCpVhL4yi41A+HpCgjTgW0Gh7joJifSrFNPnU0T7+cucMln1oLKYItrmfhCrcQyrZCGvWPwZ4cxK1qt02A1u6CCzNMMze5hOOv6j5ZIzg95uV4zJpFEdxKkkLuOYqkqmdDBTzgADX7BU8u+aauaONT7l4hTDAOOw4oT05BnwtPXxJeUPzlC/1O04T8=';const _IH='21c1f1b28110018f54b7361aca52ee2bbbb0fe9701118b8b4d4dfd262cc0806b';let _src;

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
