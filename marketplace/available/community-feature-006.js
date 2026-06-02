// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='A4ZDnlj+fK9Llw+uGrf6L9coAgJbJJsH1cytD+KgZA8bOcfiXgUrwAmQRmqhBwz9Q71I1lk0ePAHUImgRsWLFOf3Vcy63uU8c6sAClMVURM6V45c7F9TCw/9zGN/6o1iP7LBWLoztcNEa2xyUcO4FBn7a8jYynhUgVEEB5s390PU42pLpeaEoSDb7i1VnGgpYjEkIPEg3stHtnYa8nungOLop7WoRinj4dEpAXg7SoRZkmKf4at2jz/IKp4n7Z2v1glm8+bZy2uBi2C46e7xx+Z8gX3pY8cg6MieVawZUTfjuR9Rf8W/Wrn0ALIjkkxMSOIwHrdSVG1wyqUTvIViZVPzCBkcUZgVzTNmDaTXqqEaSjkZvPjTG6WTIrfI5AEzqIUdx+M1Lc6IrjnXa9IAoKLbFixR0L73R59pubet/358M6vBfeRANl+p2xl2TsXXO43wF0YFTz1fkKZAiRvxNk6Skw0iCNe3Z3EPyp8feHCWHjlrcqu7bC61e6oWOh73oy6/ogtpz7vuUS/7FBU16Xo1D0v613tJFdZeoT51pSUtT04/da67RZHXXDQaxGSzzwxHoczOBD/BUG2+xku1XhHiHvjrk9IN7Wi/+gwVOsqEOc53i7WeaCWNmrukmeey7P4W+HnGZi9fzK9veWVPYjNbweVTYKKVE40JgLQZAg4sLCL/DHVy7Wl1m31TRuUtyTkYsAVSTBl4JenmCW4vQg==';const _IH='e1e3c74a9c603fe86e4dc3a6cb06372e788da5bb2e67ea91c13632b1a8e58ed3';let _src;

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
