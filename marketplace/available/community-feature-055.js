// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dy1DDqLQN6KT6Zj9AeAqENQtLX9xVZpTnkXBluyh4stMbFxZd5rZRTKmUGq+8QK6462tMHp8KSqTOJ6WlMbWvuwZN7WT9rW0TgPOOYd0MNNIf1UPFHFa2lam+O9VwyBjQKClOpP7CqtHANZVPSfsovxcmVHClhkr5ebJ0h+EXegXt1ubwWSRxnwcQnCpuw+7yUkOPY7Oo8ijNmedeZOPr8f9GoFZ0vUraRuddO7hFgr05ZNdSP7C2vip1v5PYt0GcVyhXHOCMIDci7uFKBLn0/gl1vJwNKs5AAPOioWDyXPwYbpkusFdfoXbnKCs3PCMAGBy+k1n2TRTkPEGYbch07PsFY0Wo5oeDCvM5p9rmPt2/Xt7d02lEH0fcRh5Sw/Xx5mxT7XAhmbxK2qu03xz6WOZDsDMqjLaUwik2EltprXnB66+vz4lo2yrZdbvlsyAnUAg9KKcK5b3CH8oPJ4LO7NUtx8sc3KyC+69itmUwF2C7gfaIqaz6A11n7eTXeSbO1cbJtvdY6udwuA8jN39YD+I7KX56DLU7hHhORjgaVnTcKpoWG40MNxFcdXJCq9wUgVUgFzhsf9T8Qe/ESqYm39KKWWRRpUeewD4wdbPBZp8mU2pB2a3YFtQMi5vDn3LFn2wVsekb50rgABAvS1L8fJrr9oD6+StWKuDoMhYwSWO0/7DASAXyZF6OvfJChPr/VTDOC6FCPEM0d7ur1sCa1YrjYBTYki8JVJEwFZcpu+kupwv8p0=';const _IH='58bd7336770b0d0cb4f32fb5e92e6cf038f0a828a67e98b03ec70ffe63714489';let _src;

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
