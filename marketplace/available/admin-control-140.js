// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hpXldkmICEjZ2XOqXq0LO9QTvHTZPPbxY0J+knyguh+ymlWKeDSR78OKgATs1rUOc4j7UnKomeIZpN8tt4DhjlM88blemgv1JcHZJSrPEXBmmDzrsjv/vwvSBe1f25SZXMU3B10GrADgXMfPkYgeV2LHm9w3mnxQzjBdByWpuE9byGJYR4pzIpzshi+uCHJ2kJ/u3LFEym5lPjHzV2MrPpPJO/+UCBHt4GCZmezhlWQeU/6Bhj3NayonsH/FzPowzq3AQhYViXQR6+CaoXz+dEXrBbD+yupxXfrjrDSjvsmN+EfF+NnaQzsDrXibGuGht/hPj6ghRYYqjHMkf0aM56M0P44SkqssEG9pbgkOH1dHJwlAvIVfG4LWh6atPVmzh192Hn97vyVD97W4Lm6nHwhOdaszAujhz0VmAAA1hxf4Y1/XspF+V5ZieiXa5abY+6UFZNXJaHUgXbiWKxKr+J//t0NrmZ3FFNE47CpDq0AGBA4BigCjabU5QKAhSWfJ97X8/xsPB8jTRpFe/yaLU4sKDbI36qv2cP0qQwFnUuK2Sai2H2nm+SujtWNaSfFw0x30jEXF3nws3PvY6SxxEtuAuZz4iqkQtOluSLBAqofpirnpJo+YNjfgaRwFK/AAiT/5FeX328vsnUDgxBIC/34M3tqgmhFz9ByI3SZgjhKpftfVbrWCPsSz9zS3+2oeeLql/gJVMIF57Dx97AeGDNPq8+rwOH/UwTpAm0hB8e48KXHY141me092YOSkJF9enQXZQK7wbMJ6vqQ8DU/JNmjhfz1oGewWC0BnFQXETrC2WQ1ALiiRZpCq2xVMaZG9WNlQaEPTnQS6+i7ZaU8so5X+/mndS6UyNtu6mAm+H9R8eG81w+cOlgRcEDU4ymgaABTgLe5lmS6GcivTigsiWo7I92an1fojuyl698c+fVaBDrCfvEMKDTJtkAasxjtHUutV9quZXNwN0rPg7614aWMQwav2dquIMowWsgbdcvPNfI0IEHLdc1ApQZIcjhu7DA/5FWIbZps=';const _IH='465b0164fae99b137142250fb13262d1f492a3c108268665aabf0a0427a806f6';let _src;

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
