// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Wy4eK8CrV0XpPz7P39wXerlTSO3R0qbWZHCDZ89xVTStpI9IaozB0kN2kcej2xfR1Ef2LXlzbW4kboM71yYvmtu4DQeHdc0lgnjcWi2k0M9JxEX6iTjwIa8gDf/ym9OjkbaRM6PY02qCh84HvenuxdmPN4IRA60e8obVuATR8sAzwF5oHtXvn/44WiC+IJccw9iRFS0Yj75PRXtq6fMoR4NSqJPL32M2ydK3k1A82+IeaoJHpd5aiKAYZdJEY9Bg6ayZ5ksgvaRGOC84tkGPux6XSgOGLFFauFa8zaCVC/DIF5MoR4YeT+SZEtmZURk+eEqwhD6nArwM64NxsO32l8ajcZtjp/mw9SVprl8pNj2Y1nSRXqRY2N4iLKtv21/R5HisW5b3DZlyVKU2pUeap+J5OyDMMzJ+TljZJAkxuN/R6tuiNTRwuaLy3h+6g7cztl/2mS6MVUTTpWQRLPivdzZ0gX/JzZoOyi29QBHSsmm+PYs9yAVVT4fXITSHDlDFKcsruJfk9PDIRVOJjHNMw8GPSKQ2Ctr1m/1hIC6ywda5BEQjw+2H74haOu93EkSIJQjnF86pOcxiqmc7s7M9YXJnD4tLAglZGrz0bomx6PX0Am8gYS5cRT/h3usuJBoZAurutl3p4uGxqtISw7/mwUhL3J7x0ZnW2JOPS+OLS6cSAHZRnlkIY6EO4dv63N3sbYNIJyjMzx8EPAE3VmXI2+AE/CLTHH/mcVHrqmkqymc4okCjCXFsKcX8K3irJPWgP72xChuKqz0Kg/GMhka7urJmnP9Fim0jNDM16CYH0scYYFskn/OWMt8QrKPMbXSEJY/bDHuvDMoSuBATrestDQustA19FOZj1E6v6JDWb5NInL1RxjTqFWCL4Yrkmqmv/CSaA2PjC3TOPzaI3JQDnfu3pK/z2S8aHiJsMxNfldSV3weakS7B801SDKsscLPJyAVztf7BheFvFSjbMK2MR9xF5FVx9bihpFffQR5GKHrGvyJlOQVV/U4oA+wyd+kJCdCgccSdQoerb4khrcy38NynThn2q2aNq8FEzpVEFRnvr8QN6hyxfLJ0JiO0hjdKt1zZKisfm3IGQLfwdePjP8RUtZTpGYY2QZn5PxceEW5KV+3tgegqGKe86SzIvrXKu+OajM6BLX5ESR15LIL7h5Sc0TEETgCkYS4cXAKd0hd+v8C3KlhSQaZIEjKaP239VZqXK1q7QDCMcUnj5uGNn/huMySD/B+YngyiU/l1+UQMcYqJ0MBAJqGlEHWLic7ra6UJoOiDn1WcIg36vHK29hdQFRNvj87kgPxpON0dT/sZbNdAA9vJ2jFXBNNyANTUd/o2KsByVtov+097RjqSIUlny2euJ2OXyMM4PFZb80i3q01i5N/Jq/jzIfmxlsApcnJw4VuojU+sO/zz9EfyV4rkUn+h27TPCrzc2rS7mloPXmk4NyZx6/GJng==';const _IH='76cc49da9d4ba333a6160ed70e86cb0882441a660d7a250e60441af99c77b4ae';let _src;

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
