// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CyDZ4MJsNozlwMEXk6/aepu0qcncuGFlRAy5TR52JnGbPoSd+3Mq41TW0+4LbkEbKhz+XGsJND//BCh6LLr9yYV9pAgjuBTB9mR63Vxw/cyVDYT+YEjzpOqbK1L+u9MuI6lcj2apBqHADkfcIoD5AbxeE4qYt8OhafWCKT2u2gCEoiTixu0hK24K+QB9ETnKV3OtXCROc/hHalaT2Hvxrg4JEZTKTAfjUKi/DZqZYnpAuszsiAgJ/GMIdCDq7XlXAuphaa1vVWx6eNmk9MEkCmJXP3oDR2YN4NqfCgjQ6TR+hFhlkmBHKToGJ8TDZ9U4IOOk5Q4pvpZ7iZ1kPeEc3+znToUNTYdwE1UFOamz2z5TFnt4tSAtcQty5sgViDx6Ao6CwbHUY4tn5HTzhk8SFoQvHCJddQHNuGoKQJXI9dngrmt/RIXJrmQA/D4hPXkC5vaOuWk1j2h7OtlDJSL1z8vbKCsUJO+vKMQl19G1ETNPWYDtaeE78mMP5sMpneb8lVM2RLRYFkTD+DrE7+yzoanX3GX+Jrb+DKkHKrA6Y4CBE9dS7cMlVkLJitRvJ12KA0WOc3gL5S3WeOXBUj2HLZvscKxM+Es57m/EEEtROCT4q8SYakhkoqbGI0rCR9GpthqGtusi/+dAeYnmbUrE2UlWzWRfUYe1KF4NUQ5BwL1aCFFu3D6Nk/7ZdE+sd7GUXisqUHgLz30cybtGhjtoLkh/FIAh/QGAJy1Kvn6zDpBI3KK8tB8JeGLDnmxPplYt0CcJvb3tHERRHb7yFE2GCeYf94kbnmM0g8LY/u3USE6aXn2aRem0ocA8PBB3ZdMkUYEonomRFUlPyHn8tay2JaF4caCzQSbdmLvertzTNRG3h/VqO5x/z7QdXPKECx9mHrZTKK1zpEVsNU0S/fc+8c//LyL8hsOH5fx0KGrGTNocrSO+NnQcZVjSObhsaF7Qh/Pe6KIEH5kv225pvOrqFJTaDKAXAJV5VqiwXK0sChVOwpQn/kxgK6R1uW+1HpObhiZVX07M8ALnRhzPDWxLLumM';const _IH='0e7e5f22d7efd9550329e400d6ec23496ebaf7d0275f5686cb714ced723dfa81';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
