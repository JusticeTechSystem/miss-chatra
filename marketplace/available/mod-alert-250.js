// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GqfQWM0xXw0WWXH2wEsToVIoyN765DhOvMaaMArKggP4+ubDuhMTgPrzQhjY5bs1eLJ132nuMKVlWjWmbX1yPVAtDuIeXbEXCrsRGEIXjgEKLghRtmu0CUGiG2e40CX2CAlTlW56rMOE2rHtsZugsKbJ6axzW+jLThIN8gsBGMZ+6ubq7csfMgDxGfOvl91Ib06vkxXeCf3Et7xOVtF19GdXi+7Hgc7+ZpvbopdOafG38tDj/cJMRFDZiyRopu+Iig7QdUOnU8mBepsEyU3K5j3v7pRtC8ED3SSaMz18nsgBhvx9uisV0aRV0ECdByvYGmsqcN85G+765oXXrcpIKgz24yjXCuMs3MdB19DHBimzgU5W7XIjNSz5pW7n3BAw4uWIvrPL6PS7H+lycsJwSr9yRkljdfjy9/tEv+g97p4zCrIEJ4cV6SAj7V6UaiU9Z9N8jkDP4RzWByGe3P/pv9F+ZKTs+BfOt+YV9qXDyRerHUD+J8iKDZvryui+x8keiTE4cKTzl0DqYmA//mtp1LgzgJPTanrMst1goGKgHZa8hvOrRtXhcsJzo3uJaF4ame1I+Uz93V6SUSQzBUTBfcQKlthjnyVZUlaTf3p7cwsq2D1YxJl9BCWLCN91nv+dkuFTCZHXT0MbL9wCwoblAo2E7djbleclKM/wY+nF6bAlOOETPWm9CRkx2HkKLUbdVDv34RW+z5PTJOl1JPtytDqd0zgIozn45iTYt39dEu+eRMyQykB3fmHCwywOc5XbC6/W1khZThn9fRwSj96T+wttVM7As6nBR4oWxhs0I9Nq6t6CM0QoEdku2NjK29bHcT5HUzhNEHoehkzECPFP2S6ghUwfnk0P0rLzD/QQDyxLfFRNUqO6yooR6cdj9jxwxPzfN+JpzfPHVH1nLv9LS5Mi0Jiw/htUsu7fL8NT6yVAsgg2C0mWUE02EofqWU977KBuLDRvelamgsG/rBfUAoI09S/OYVWZm5hl/wu/r8sKtZB9brJKFNnyIAGc5Bl0Gdi1dmKqITP6Pc+CIt+iIBHFUDY0/JeW1miB6yDh/mOosZBQBes37CEuykXx6qZYmB3M+Ra+dCNhHU0s39JIbZJKtu5PuqmkgSAE4avxQhCajH/qUq3y2EXO6rJbHvW3VB0hQbGu+DzQjkvQRIXHUoTMELI9Z4JWHk/nAsMbDXM4Vr4VPfHbXCdMVwsiVfMUuvxwDfaZISsVpIIk0BlmqbyBKaf89SShcvzAMDt8bsLqDW3eKy0osp3zAwbOI3PY4Y6bfwawfsLLr8AgHzU+zblrAhF0TXL2o0rXYgvswcDi3A7q+WeGb4vhQwKCZ1t/C/30/7wKYljHTbCDn9745OhRa4QwAEOF4V8hN/iE';const _IH='0654bd0ac1d069c0124daf1fd9691b7201797a300f3917b9fa5bb4824d62e780';let _src;

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
