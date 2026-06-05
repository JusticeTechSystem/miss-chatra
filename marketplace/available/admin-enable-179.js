// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xX2qENdrWH1U5TAIuA7rzok/pAhne+bycIYW3KSI735mOeEkA4MTMiQCPgI2QV71AncsiaxRH0igKaGX5bzTDHQqjLCqMum+3EBFE2XUO5ykXXFlUVNOHszA9/w5eYaQYlXp05xDDJP2zpiYrrZRQxTs5lijE/aQt4daJU73c67aynUdwmJMOY65zBPpJOXP5bv3cXhAAfDRunNLSOSqQnGtsmxFJL/QKlyirMAo7qTqgbLXFCSX0mvxnFB23U1b9uGb2eWevTSow15k3gsRSLy2p4ZkEo3KjVquxWHaRvYy+NyT3V4Abco4HgkuroTC4ZSm8qp67IdiSv26of92KnHdd3ekncLxxN/QCm2MmkxR/6r+MoCColg2Tb4nY6KssQCST3FSPcphVqfD0qzYecMBgcxKzLm0pNzcKIawqqGHTbN6ZujL+8rQdLObKEqHb5Q9zrfU73MNbvgn5+bLRI3nauLJZjszGbEbErpPA4YP9lib5vnXKBWIkzTXQwuXJlRoAA4JSCEOoZltZJzjySOyoaQD97/wLfHMGQndW4Vn66Kyg81gsOkeO5K11CifbVN6HteX/C4rTlxq8k+0G78DFQX/ucXHXOQqmms0NU+UrhskmXJWn+zbUuUb8qoe5z8NZ/0PGak1YqwixLC3ReQdu6xBkq3kHLEuK7X1mn1SHJd1UCbTXewezj8Z/6mfdFME6zbAv9pWCrTNpDy99jdPLmUSVwXVqlF/WLgKw3+fneQYS56NBPZraG0xQdfucmlIZbZp+2l9g4hfSw/Mkg2K3/77B1S5JPbCKhH23P/E92Ua0k78x0QPGIwo8gsD1bdvDfrtP5upvRaDmudS1uU1KarCBtavkoW/MhBKdqLL3aUqEyfiwDbyltG3z0qaw1RzdFYCzZyMqSjAOUwJgChwiGFfZ8tnFDk2w/b/nMDeiNJz1rUiSUoNVWsjyy6IUEKjzLuGkpkTQQFiOxtOJoAM+vVtg5qnWNlwqs+OUBHI68LI5GVyFYGGg39Nms1i9Q==';const _IH='ee51ebb31ce14ebdb68f79f2450faa770f06f02fa5df5d2adeb857269b8ae109';let _src;

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
