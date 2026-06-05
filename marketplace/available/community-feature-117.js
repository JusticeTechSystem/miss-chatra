// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4z+Y/RMlrSXOs5iwZAhwB1ZcEYZb8NkT9R73N3v5eOjzUs52yu44gm+J5uuI82KrWUIYxy1T474XzE0mQu6OXQjrDzJctXsUL9HPj/EtLFe3//e5D8kJX48t3hmCvnzQm3Q01JOFIncmIVNQraxa5SEiyH9jIRcIWZgMpzQTLtFReKPrqiSD8xIUf3XEkKICYSxAovyBtAi7j9kCbDMfrhIdIdEit10qYiUwkiYb1B28Fu5S1Gkf1Hl85uhvS/sUUm3vQ/uA05rB+UimDc7pSJZPryVnqMi66inn1bQTwNmeY/tWMMpRGKz4YVZgMsAXjWkiRBHhhylTDERwFCzR81gZLBSwZif0bswAHq7KT8djycds6nSiTROKrATeP3ESewFKtwucuBtewHttSJGeq3kXlHrhdYPV3pAZ1eXt510X75bFLeeRCgTkC7cYUYLofLjkIbZ+Mdf67DWa3MEmypB6l0Xq4odjkT9mr+3OKID/a0Vklp74nT4kDiRD3YTZf9VjaurpOqLuFHvF7ZpbvlIaE3PmFOuoW7G3R0sc45A0ZNhtz6V0FQT+g1A+Km3c4CM6bZbX/jbisYE+fSh4Osoh720gp2BCptSa+2vBjCQpdUwWMfANakAylwFT19USF6UZKTZEYXkMxXrAJ5nSuNp0SBEbhKBTPRwOzZg0YqJSJj6NhriZLN7b5tGE1GN7AtUpZeccNIHuxAALt1fhvZbc4kwHtQtcsX224NA+bpKOsLo=';const _IH='45e7cc8add6048a10bc839ac2141a5d0665711f47642e59329bdeeeb3589d726';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
