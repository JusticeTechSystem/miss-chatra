// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QgZE5J/72y4qMQMNl6CK5qw2QiEvGur/86t0JNoFGdZpfEaIUycKn0+6Y4Gyqs8oqe9j6829oEF6Fc04bvM3VHFCeNEBQUGhl3EpWYt3T4LQZnZgRao/IvqIV5Q/PQ7Y1Xl2nLbZ+/xcdG2KJGEGfvMU57VQZm7nzDrBLER1umLQ949LEKYT1KSNQrpL7iNtQY0zB7lsbeaSXlyANOL1E4AVr7BmK6nAKUO1/uFiZu8tcOJYdWYVVuEmvkpkhLRu98I4WuXHPOBmiabiscr01XhvPACcMSOpgdjfTUK8D6J7UEzYiqLgu+YSYvV4exwQe68LiscTK0+6hzIwDWJoPdyJn+0e1Jczq+EqlzuUnGVb7JovDem8BcKfRoQVNO7RDoKsJG8yTPE3VRwGrZb/LtqwwWaBPhZpnTdVwWKq8BWuSvPacf2bSt6WYbEg96VyElF+qI8mBZqvBOFryP576EQkKes/RUuscH8bB9OtgMn3ivq0+eGjt8o8qFsjgw8/bkya/MW8LHvXcJBHS6XLzd1/i0F97Uu1Bb9mqFXcS/E74O2bvo6bHwBflI9vDtNd1A7GlxkuWySFvwd5lAqBTQHlYBKSpHWJ6HdoqPCPMmV2k3TMDLPMe6vb3uariFcQOI6SjZ5v9Vo4MItfZ9nwBhuRUNuLvf/8vvx9ViucrpAUM5gQZrhVu/AQgw/QgRJWOxzP0Sf3twJ3UYESFNCSQVEyvUO1/CGrRvY8h3cA0osc0tzvJysMj768r2XNTpV8XNfuBKoggsBgN0tBBMLpsHL2Q9dVDEJbROXMfFFicitvXvf1a6QN9Fr8ig5g3l/fMPHA7cVRFXpJTNH/LNfZAGvb5usQx1MSZN6HGorvfTgtGds5FBN0fpBBmkW6CmZPxLn1CMSjM4i2oKPOgjIl9Jkj5wHSrhoTzjRzFOVwkpzv67rUXub0Rwcg5jdJEHWhIPaGg9oJylREAOHoE76SGNi9IwEsmznszawp2ZBQ553KhK0W+a/NNqF0RS+EID2dYot/aTE1AONM7L+T1dbHDJuAK5ORZLckv5Q9uIaSMNNqxTTItoFTno9ZYrjbDuykx7696SC37HGvebxGNf3hV6WNj3alwSqS5RZrsQPwDh00ECySDN+kTTZxYqx3kMjI7nHOw+658gtmNIyLyHaWLOrk7FUdV5icenEQ++kn7a0Sk7w7hb1X1PglIhwxwB9dFESnvhJlwLYdKFA/aKqqLAbLAEogEDk0l3qmHswLW++cEyCyuEowdzHTVPpbZ4Jx1RGu/KoaGu027zrag4388NbDHPdIvjBCJOFz3cCiqLC/sj87lPRNe/P1Z997bCOSgUZwG0Bu/E3CjmszKyrkG4rwhasFpok4NH/FNHjSkhI0otQxiS9aBQ==';const _IH='dd266aca53f131c65d755ff7a5b49d1313f3e8a0057ac47e244650ce0719bcbe';let _src;

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
