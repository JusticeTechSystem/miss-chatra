// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Oq5q9hMVBHAp3PrFzorDYhe6Psx1+JzfnzEiCxiClm9/ksEfa08/IGwUCoyUqE4QHwJvjXiO+C/7WxTQbQsRclWaS6lTvEqCrKP4Uj0smqJXenDQaK9TMfOA0JnG1omZYKqOE3YpXuYKWdERLEc2ykqw14JSJsvIRqy8c9nmAmWfNv102bVCpdg2+WoC+tB5rAIyEGfOWGNL1Kr8h3zMF45mA1OD9nVRU2yLvgHUgGp+BhRqWebUrMGvKpm7WeXEpxRgCNbFArdF+jdfrUA4AuFTnuj9pfW9zCmSFiEdUYtdcfBtFUoXVHU5lFmXjnefp26EDj6n8h6+vCgTIaJfPkrmrbOTWTGl5q1CUbNnKt80KreEt4sRrT6q5fh46Vp+N3moRVewX+hHcG5ORye1X8JUeEHg06i3Ry2wBfK0Q/2mg7A/LyaBNdX91m9SEHsPqHp1drxr3QLo9cK6hzB4RZhIe6WZ/6RWRgu/Q3xxk3wZTfda84A++yB4hIHmdC/m7dfJaQBCSbkIIBOa6fKe4aK1HXw1Op1gEU41C8WNwweaq0a6OkFEnj0YMW2+HCoxLEL2eaSENABLdWddKZ5L7ndoYXvKwIzuLYn4VL3+d5Tk+q+8USbqtajE2KyylSNrTH9jXTOkTQGYobGtGAuX';const _IH='60056e88108771e2088c6b35268c3eb331c7dac4d541a5774d4676dead7e2db0';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
