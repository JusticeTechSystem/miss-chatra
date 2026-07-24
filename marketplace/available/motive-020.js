// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRy4xRDNzOzWd8fMV9bLuVR9teAl/NXU3fTLmLXdWzBTGmBFgwKOW6U9UY6fAEmtllqSE37l07EAprgWCYvYCet9iVhe8lVbvaCR0AdCROHy+h9butGzkva1ODxn9dsZY6j8X/resCz0yXaR0at0dQ2ymGDZ/rktsXbviY9GIcwM1UEpSqWMK+JzsD1prs8KKkdOiBJgWXLeuDgvUeF3yRr+52WLvlrsNNi45ms0qv5HIral7iTZ0CUrta6hON28RnZSxGWoF6t9zREPs0jAGInEirtCwgIOYr2oEdqXQ6csddy3PY9pDRFMQtCgp+B79eUvPcjrAf8DlKKKNwEippSr2uoiyMgyg0Le6FP3DcFh1hQfxjKgvnTW80XnkrmqqaCJR6W2D5R90RevW1fz52IjA2LDmqcCLiFZfaE58JPisYP7jyjtCGGuQ2DnocF7us7nOXyj00ttPTHK5HAVQxHql+gAPtTOVQd+oGmqk/NtRkJn5Qo0kiAEE8jeofboJ69AAWnOHWRn2qCcRCHdNg0c2iXc1kcTiXJYBBG50KgxmgzVjBvo3Ei0qNVR/joOPEjKmHCQ4DSrTDUPPUlWxB0EHXhkfARkfpKhsC/NNgggDKqUCc8u0uO6zGE1crajlrZyBssLVEE4fcgupc6zuVIJx4Vy76DACjyviFSUUOafuBN1wsOLcdS6dqQ00/iWyF7Z7Po0zzQq/VQAB6N17M6ThcqIE9xzXl+a7WJkHB6qy8Jt3SFaF32Cz5pUbxJUDYxiF9P29Rgw2TxP2XULCbOrDpWU0WTT6nIl9dWy7qCm+6McAic9k1uP6H3nSBNX0gIvAXvQsF37yJwwyc11QweJl3zs9i0R2E2V1M/tRJHxB6ewSkiPuIyE5NGpkffESD+2NpRPRvEfih5qlV3vvXhC3g8Z0PIKVzDVhXWtEFvsUuA9DUItvAgQnt5opoqv2v/wnMB8bA/SqY9+YuhwhBmP4HrIMBrtr8bjIQuEz/R/gFFpIehmOtwwPTBbcibuSKune6PzjPiLO7BN948sZKubyw=';const _IH='729b120971b95f12ecb0e25db9aebeebfaacc9b11a273c2941b0020d9e976b01';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
