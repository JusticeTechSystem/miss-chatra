// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:13 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwbEC2v1sT4WfUZJVFR+BZyijxuFHseIJWEeqPNDonXLcKjM2DEw6moijD+jMzXyOlMOEbZ0npMujEv08ud20YKRMoEFpAYl67DmsFHPMubyyoTGe1O58VrAOV9qr/zCVnNfQ88j8WRB+iiLS8adg6n1PA1x5QFIRe9fFn+PKehK/4B8TpcaIwvvjXJR1icVDhg86shLSt0NRBEo2oSsYqAUbcltJe2xIg62MrxHbG99Yd8s29WwICxZd63/FIwmb7rru+B56mjiv0FObcFpjx67mb17HPet6wndXsQOgbEU68uNk1JgRDSAcdX9mpmFePPWGeIWf8jyKIWedSBNy72jxZAAgDQSZycZFIYHkOgMtliiau1xK7esVfJoNw641sjI8/r42XB0rMXEFOiHs3/JJGPfVRU9A35eXlEKcy92HwcgoJesn/wHU2ZlUdBp9w07MkM6MioiULHYyidu0PzWH2TY/wa0Nc0uAcIl5cjnWiEc7IoeEIOrWw3g/AOIU+9Rtbk9f3QzHtxQmp/fbaOOYldMdMZc1CWO5t1R8hs2xBr0PwAWkAYq5+YH9McytiGQ/c2r9+eilra01RQ4pAIRKOFOlR+HoMOF/AX4Tvy8nTE0OiEuBva44bZuTV/DGWx0BxjPjJgruL8c67SZHupTctjlCDdB1sVqCGrCnMaZx765in5hOVptK4xJ6Dg54T8APiCrmNGtBTO3W+rJYgS3dEwjhBHmv+fsAI7f6uZa3YQTQoUgwDJDRj++JxTr5bHOOrpZ702VT/wwdSahiU8X+7RRJlSGsH9gLPcS9q1Has3+bffQAWrhiRA1Ucqr+2YgbV5cXZ/pqrWc7VRkLYxTet0VmjAnjCVjD2kTfw4vpCL4chyfARrWS3jZ3sh/5C9M8IMEY8NEbm8X0Tg6n2q9xj8ZYVelV8KAOJ+agNh1Wg59YVx7JoSTNDOkxYgn3zlbIDI2cJTftLLN7AeawLSiV5lNiFI+u/mCp3jepOlUS5q6H+RCkXhQQumLfA==';const _IH='6b3c2ae224f1e2070e3b84b3eac95f55d94528c31a10d83e3876745b50611a2d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
