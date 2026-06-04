// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/jjB+jFzEA8OA3OBwVjqYjS5USt9crvVoy8Q42Cc5zbvVGV+cQfU9vVklS/ZqCnoVLlYnpJFKqSjnXGsmx38QjbqbrDApiqg/H1yzoZg7s+kUBHYelGjXnntkfVQcOQuEYavgBjNvDVHvVRG4un5Yh/KA5QXXZ9pLEPPYkmnfbhLM2WaxoJyWCDYExYpXYMzBoT6+l1OKBlQ8md3+x+Qxp5SPYBMIzQa/LWo/4at62dLlxquOKsoYbaFUeD68vXAa9kbir1ruLT4ltDILbrQyG2oxJ2aLVfFMfH0icovmg8/NSlgsMy7pwOzTf5c4/oNW1HFM46daxLDsu+gby6Q3Q3gIeKErJLnoQpdcD815OMcPBJt1BZhT0dhYPsBd9pCZO5kvRQDXOa8l0bKDWDCZpGlviLXcMICdD25uHf2Y/JeHv65jxd0BN6ZFY147Lm0jDFlXJauQu1PwdgoLUesa+MnBUDisz+S3G2i/BG5G2nm/VHPYRv+o8XFfiU+8VEbJ1Jz5XuyE2Dz8Eek608wq8W+MjvqLdIY7FHXLnngtplwTxopcbUgxKE9vugmV7iaxgmQcK8ghGnTT3tzBo4NOZ61ezgii0MfbwZu';const _IH='695b21ebe12e58b5b29254703ea4e41583bba0633ae401aed135a79bf494bb8d';let _src;

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
