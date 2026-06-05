// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4yzxo312obUOr6K81HMhWbfmbuNWVD/WQsub91C4O9gIYzA4BcXvpUrIVDqXlf1FV8eHWlNVWGRggbBC8Jv0GN4Pymb5V8OGfXMflXeiL0RdoDBP5TOmK3m25EOaU01hPZYux3NJKQyKYl6N9IGW9p+Ooz9EKxEBGRPrg62Ix0CHhZv5nR6XrciacemYFiUOT76j01A+U4O+vOC8if39iHP7C5jOJoDbY5f+m3rdQXSOv7WBuaxbqAg44tNVDSiLcn3mwAS7fQcCXoMbESVoZMO+w2spWO3fzLhArHWcsuKMHNzfM+2qbkhN69pqL9ysx7W1lVUUgvZYo7VIxpRDENGIXxkjJtmVbDrWIP6j3ldi8Ne3KXSHdsmamzWfxfSCRZUqjUbojdnuBlbDpAFx+ORzl3dtB5TtrEg7bVb2zXrUpWQakj5841VVMkTx6VhHa06GNZpK3FbL8VD0rTZwWqC7uc3HK7OIzi61taxTNgC8p1Alx7V9ohAuHiscvs71mEoxmH44t3vVSA/bz0KkD/CIOVjWNaVkMoH1nEFgSEtjr+RZIXF8aGwjZokwHs4gOqF6SzrZXiEnYVbpLr3kC4/yr0yf4w+kZmj9r6vbyXpryCPr8ivgy1eda0RWDZh78F5+s1XWFGuXEKxW0TKUjGUFAluBIsYGJLAlgFoyheeo0oDKAQ+O3kFeyZi9ObWe8wvtxSsU4yZmzkpy7l/aCPu0xEM498Zf4RpRTfIP/FMi4HMPMk4=';const _IH='3b1399e14380163f4f40d83ea8405dd0ad1a1f2f5b357b2f7acd3f8697749066';let _src;

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
