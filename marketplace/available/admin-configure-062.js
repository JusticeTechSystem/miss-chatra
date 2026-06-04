// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QgOwR4xE/JDR2TGRNl5txx59TsseHtcvkaDnF6L+SDF1N8JXM5cawkVms1MWF5H+KuHB83d4D5cXX3wbt26S7DJwJPyYgr4Fy/xLD6cWTtj/PbFBlqoVtMa5K88QATFFXc/u96DLNU9+rCjBSOw4+WnfQOwlq7bF6AZ7Rfc4Ju8oRliQYs4sgp4WCTYn63NxVdfAgTNuxny8B81mlipmf26kPFmqLJLqRWJpBMSRgHD4NLrK7e4QnJDfe5pSqEmA7jAHTOQD4Hbtabt8Hv+ne3kQTWHahCNaRHTp5m0xgMHwvAjb0/e3ZnijbKCC5RSmTs9KbF9I+AWMDIZMbN6+CIqc2x6+dO7LMmgwyqZeXMvt4gEZ7xX7GuS6ItPcuBgXvPJvaSvVgvRtt/SJm+kVhaEoKmrdufG8HD1CkN/6wySo/hbU079faik071luP+utJLVIWmeIDyfUDB+3E5kxuRWiiHWKab5dkbN334IxFhtZhR3wkh0NeLhRUc4W+3YTaj4ejTCOdYr9frRf8NuqDuIWrYHyDtnv05KfUACL689YMd2azlbjiV4/G+kjJrygKNZLZFP1w+JpYndW+SaDJZpbVEWMqYkNOziuExVsFt/cOdpY5ziHWqW1zNEfxCaFmBWRRNigYt/MDVhEXJIWqZR2/pGFySOu418RaLd4Kzlcl9VygtLBl8/mIuw3+KC73nkXAK3wUWGC/aflpZzmeLNqjxdk3JFevXGgIXprwVUEgf2v0nQPD3AmBkV1DCbqXTnOJ+5SEamelgkIoyJwhmrxyUU4ccdXOusE72whzkd/6CNtcX779Qi105nkR7zC95dkHZQTEA6LEIYzD2dSwZgej43KoKjM8wOHya/JrUASYoVgqPQZWArv0NIs8VXSxkb+97lT1/NPAOBvC2ON5CzNL2X2bHKAllmB+v/PfindWEVeB/aixXpyyJB6WL3jIFlT8VEstPvUWHfZVkf7pnt1mPGy0/ppE6A6bkHsg9AbfWKTbA3R3B3jX2pBRBaGczQLQDWMwZkmgAwR4TPzb1z/';const _IH='de0d8316fb3f8c65bb2b81102d491b679ea3a558d95966c060af89e7a12c015d';let _src;

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
