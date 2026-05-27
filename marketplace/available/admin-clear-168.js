// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oH98GHnMET/ZdbIjVbcE0KMadsvsLuc+ZfuG+iOGVvlZnMn0CHq65FFPbBK1rArS/PhB/2BwXm7ya3jkySbsgPsxH2Q3vo7j/poNGuwNg9ijqiOetmWVnSr+Cf2G0eQ+S7KiCBKX1mZGrNUohfIdpAcMNooNRnMxnruQPRmWkYu/TgZGLcm5grHsWwjveG/IjMdrDbz+c3W4cerLbPIC9HLuQy3G2tcCyXOCZxn6v+kd5NoYqUplw2uOe6hj461Cy2NCAIcPXUMV4KZyUSCw1RNKA6J2pXE7R6tHOeX9kywdy4QoiA/NcCOpmdvF9P2TtNdpZVLI4ADUk8iSr126IwhMCsr/61IEYsi7sF+R+uwDhnRXA1SRnjk3qIkx9VOF3agywtdj/upm3/g/uR+LNyHkbdcHC9J4kw6aYlxPw6dyo5hiz4l0+dbG+juPynwlluz3YroU8bSkHuVxr3gg9tLgOWTD+162AENPztocYkHC0vIVLY1eNaP1U2KLSxwYWjym3nVZ5xuR0os4IJSTTNvJ0+87hZPKGM9TWynnf3JMcdsaX/es+yV6Ac8XfagXz6tcESnG74/OA9tMPyOHr/Z1lbx34Ar0hvlrWn/0TR9rzyoe/LRUutKD4xkzybNwBlj8K/aiA10CCwA2+jgx1VXJCXoaF8JrtoNHp+cfsVIu4dZ6pc/r7pTwXlacPhGChB77pY8QRC3xk3hxJOnMhXwQ3h86FZdFRhjGgcWQVmWkkpmcl71IP2+kHqJwq9cGxzWAkYFPj6kVJ62f5Ah/tH5q/oE+8PsWi6tLGymcjedVh53xwNij5blQtdvAqUf0CVG63G3ztDTa6Sl+vsKVAI8NW+Nh2KeCjW/f0pIsjzUbN2UE1JNwBORlnBU2hVFX6/DQQZM8OZs3osneHYDA6KSteltjn2BPSycHZdFS8CU7Tv0aLvDzn59FhdXql+OufXJlmJQjJ7QFS4UQlKLMW/LyPWdfhw8uaSQe/2knj1pyJtAJNVy5DV9J';const _IH='5d5030aa3b803a2a724c5df1d1a7c36cb1929029bd511841b9562790abc22a94';let _src;

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
