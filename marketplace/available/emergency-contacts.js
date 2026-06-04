// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EiiPIy0662qIwFhJrtO6WJTKst3NTH2KAxZ3THX8QfW8J3xdOtaTbb6td156yih6K4g8H+fbgWfiowA2RXpR+5rdYZyiKh8Jp8qBzvWQBkMn/ihgLpx2pvdhifSUVZr+CC15P2vj+L3sUiMdox9zvQCz0Kq/tJCdPhoiw9v+MYN6QFaNxcJNxsWbBX5ULL7VPnQYePH8yrfpaQBbu7PRlnbGg8c16aVeQOTt7H6QIYxGLuZvPr8GDReki0jr0KSHvCfb2paDrGchccULPMFrF+gHGn9GusKEKxKisVUDuaa7+4kuG6y5BRwNduvkGPwVVgndHtlRIqyZZTMykYT/mIyYoUrLLDv7JMBAp1qddv9avnot8lyb4LZ0iLqet+cRB5ZEC3u5/bD1ZJiHzhoUu1WVZeK6lo4jNL3vwzk8eusyMQChN8wpqb0RDsWstw2rxTuPUdatUbijXrE6ImA1psOIJ4QI/fBG38NUlvCw6keMtsYVB9J5XslKTwi4iH8hdrtkuoADCNm9sEk+BtSki03aldYdB9R4LPmbhTrysG9BqwIWVve1qi8RNL0xoJQuFLItptPBcrs6QH5IeifMiLgZf9Y+B9RDmuYuwz7+UHZj';const _IH='c45d7af54155cfb3642c260a69a5bf8290a7cfc9156deb3b0dd60898403d6c56';let _src;

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
