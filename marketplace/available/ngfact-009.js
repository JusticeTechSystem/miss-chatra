// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iRvahB328LOaXsr9ugVEPgIQz8Zf1yL8Rlpxo8qQ2aBAmIGzbolfLD4Th0Sj6bZQMLr6SgVuFzfLnBlDw0f/SCltRsRrmIysOgQlqenx0P7rKKwHyQd15W7zmN6fN5ID7GrMKsV6jSX5tvcW4krnVdY9+ZhsuF5zDSU9OkAUOtOuIWpHWej71tER6L1Hqpqkpiv7fysiXT6LmWPMIpNynJ6cZqazvMEoWOBAXBw8W8weFcXLh8dCWVgMFDsKR40gZ+EQcEMRY+T6vPa+w54vXxWzEBy1aIQHFPAIY/l4BnjK3l2V64iltD+5hcfP1vsK5MFspfVBppTw5e1zsmGNhLRa2olIIqJAn8r6L5yl0fyzR6HzwRu6zqrouskYnYExy1REuAKC36jzeUuctMMFqR7o4otCwfBLJ8eLYnJPaEY12YJYFql9U0rCJLxnxwOB84FBv5ZEojPU1t5WTkb0/7NrL8lpg8RyKQbwi/6Ndb8gliQarGQmZHdp0faxNa526qJb5HxfoSxJVmaak1s0JasQ28DI2dQxmUiiPJAHgJjxxbFdpBZt2psSQpZPc7M3MWpZoaBbxdiRYlLTb3AA5Qrb2KczSyksVT+ZViMhL8chUiscKkGWOQ7dWqE1OmjYvoiEYM7bYRJkvRRcTMnxFamXxdTHtvtU4y9K11SpC0GXT0mxTPmB0CPNuOAzdbl/OT6/OGOoECGJ2Y8=';const _IH='40e93a61dcdfdcf392a87f08fd0a47d1a4f1eee6d452c3fcd869ec11128602ca';let _src;

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
