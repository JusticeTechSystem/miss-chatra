// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRKpFqrK5GA3eO/fwysAHl4r7Pr0pYUvyPk7KAc39WuWh9eg0b5CNw+kDWDEGWFszGHmoOPHe1ibiYxmFfqbwyaGrN2C1Rjcs8eqieol9XXDuqQg9tGmCNzs8NIB11HVD2qFcyxr+g0tkHo1F/sfVStI9n40Pb85y0FzW19ri2m4ZQA8cuwCNNeOCRgAZCIZrhuUm6OG3DstpUVigUqhZDdFhMndd87oEfE/KQPLYg3bG9AOc1r7IAP/xFP5YdaH2QcP72O7JgTUN+gui4Y1EOBeFYuQYmPdk6MBDa7XvxofCh3H8bwNtu8knh2jWA/fjHur3eXglCiUMhgcvuT9I/w+3tsFLH6KjiBz1U0uc2gy9jwJO/CNNQ7zprZS5Kb73pUX27XdBgxQ2w/QK42ksHYpkHsZGY0KVEA05xzbGkTuR0MM08NXq5ZOXcowBD61548H0AIXsYAHRh5EkcMurbBnlSsyBVAWnJNKH+GREH0230m5QEUdHz47iDh5lVPy9EMJiFJlzXmUKVAQHY4IyyrEJ1kww+uSt7hKbUljJLibeCdxI6Py5qVDBsD2duYvm2Ie2O6LL9nuSZFensV3Q+mYya3rYzWYWG8LqGG/tpNpsKa80ohril8ufAX2Oi8UU4SsUGUMOLCnD+RFxlTPME9Iz1czauKHnyp9s2yy1s91nr9nbrmuitkCrlkgY9B22TX5DX+czAxyc1yHNNGEMhdUN6bUWrg9tXnaww6YRnjTyoVgfD13A==';const _IH='df83f3b44816105580516c2de1321e41c54a5b8676f87d70c46e109447dc9aed';let _src;

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
