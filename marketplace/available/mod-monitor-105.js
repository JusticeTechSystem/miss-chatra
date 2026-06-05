// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='563+lrdbg366mbAVcXm9IkHfORns0d2ZpOw2GmDJwmRrfvzGx/hZDQi9o1vtZkrsl/3zmp5LrGlFyyTLS3LfsRGntl5CVFFsCCX6qjP2XemDe8j9977kaZLuqs/pAmaV9GtvfQn0glQpE2eLD1AvSMANMd7qVkSUCj9rpEX3OFNDLHEOs/ctcdN0Hh8Y7Ac8ZX9B81zG+Lz5/IuXQgfLG3DuQgeEQPedmPgZrLGVmkXp9J5rbzk1wRBf6i+QqsBFSO7FoH+TJCDw3xzgJJEs9zRlwI20+4DflWYrmwDQUWuALqjdyfIvEQNZVLaYpRVB7ga2AYMCSOodtHMQ+OVOyOy8xLAm5kDyJMuaP2SIj+EZL+9UFNMEdD3K2yqK/AdJj1tlpheX+Mk1M+QcqG6EjV3Qaa6GHFaVDDWNjl2mj2X58lu7ub2sTq1wz6RIOWHC32rUh9bzfwNLSRTqiZhBW2gQdu36qGiFV49p9dX0HqlUq8mBysKAhtaxVaKSlhS2l7aMyTe+F7YhliB/dSINgrssYC3lsvQhXcCP+d7SRE39OeVHIuZP0BcyeiMMy1R2bqWL8W6qrAxIjJZC71GA4IJkDGbPL2XHm5VgnC5Y6+Y8fgCOtcsz4aCjBHoXljgUXZ3exu3toAtLEnkJvsp4fQQTYmBT6C5GbSWCpLVlvkL6jbwe3voz3aOt4VvjJkV35Lm14BT3eL39RkrL5sWyLehe2EXzz8b7nBNogwleVdQWj0dtlgSYCjx656xIaNv3jaBTOkV32j9u4flq0wpT6JmfulqkSM/4inxjeUwIwSMcSMpUYmvljP2Id6bUxhJXOFFUPG9ltau8vAlManO9GbIpl704O755na6R4iSEI99u5pFxMVm1+Pv2QmrOgWyslCYX3w8K1xHWEEAHXtDcHSu+mxpuXGq6OUFI7AJRP+UwM1s5DzVG4o/Z8IwbdM0SZkeKMW0dwjAkLqYBBM6gOblDkfP9xLVWNAaqtWHQe9n7YZqRrO5oWEqxyWylcVy8QmGraPbBYYwMqhCxk0l2IeALNpnNIN2ifclQPVub4boe2DlqsfqCvAw8htuj34W0b3Z79tAgOsO/LloSJ9C9nN2qBR65F8cM2cPM/hJtPxOV7R2AWf24DaMtg0gpd9JCSm9ltLbdauxU9dd54W0imNK4n3rmXElNTQNUoVChvE1P5pMXIRisg3YYXRrhhEZM83PG1DgDj5eIgIitfNQiz2c0w6dDJSM46plJlIqLvgY6XVSjC9fK+kz6jExs/I7RLR8q3xHcQ8LE7PA0ek8Clp27vsU/zkXTY2lDCGaOjRn4KA1/Fz4Ad49d0IpIRNXiOy2JPEZxqyhrCUe+T0RdymQa2UAUTJXCtcHOqVxdjRZgSKpmlX1TuypCw/DVzMVa9Ok=';const _IH='aaaa05f450b51c9112aa790f4bde3a28f671e259aacc5eafa96378ec97edb570';let _src;

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
