// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSojhhnMKU2Vuu7mdsIaDrPc6I0XiQ9R7XLqnLvbpvcWuGB+rqwaMNfqcQ+4LItCyCbLa1H8vBNpZ0MT0FTG+51wsKAffbi3SiPgU8RoNSwFwJl20+Fo5ydSgSo2Fw8dyPD9s3msPK8x4HogFyTKPkPSMW3jyrI6L2Ve2cKzhbV4wmoJos4JD3cZpH/8t9Euav/DMTONGm3xua8wE8WXdFnShYE8D54ov8yhyFYMZpqtjuYdsZUpkwWeRt9ifnDNtWEHbiUILIv8Vo5Ldl5mcXPEnf5WLkaNOZJdz327pSTkz8NQ+Ex4N7F6JhGN7ORnnKmex1M//UHpgRw+BZ+tJxQbU7Z5KYWGhgYvlV5Iik3HC7IrqEQNU/RQ5LH1KdAIvon5h+WwtWA1I/4zE+I/rMJMDO2xLreYoz0tm/7bJHLQCEDsqHkCIrCMxTP37x6A52iwcVY/D64jzexceFi1G5mblLss88wJ/9+77ER6U9K5rJawg+W5KOeEh6NyzCxGDiSrgdNiN6S6hduhGvkPnvAERpCm2RifbKoReCk3BMr05Y1a5Gs3SK6k4nNuqXo+gbpT+O0hTKarFlWSLrvzKnBdgQUHd7nMf6Z3BSwZYbswcHPrV5AfRFbgNsEN9X4RKxkrcFreNePWKo2Wlxj9kjlyHSo6yp4GjcktL+FvHX8ZUeKUDAN';const _IH='91c3e7b78c60e8b708398037fbdff4f26aaad8f844ed5962856b82bfd8e4b310';let _src;

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
