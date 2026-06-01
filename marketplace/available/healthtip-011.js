// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:57 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1qPhwGYblza+/9pNR+WNhcKOcJQJ/7Hsv+T6L7ykbCyuDO1F33P8PW2SY8L3Jrt/EBAwOIp7nNUmrmZIv7HYmFAsG1Q2qKpZgJocAHslNisBCRX9Vbb9jnZehh5zpWr1Ouo2a9UNOlzKk1pKFK3dLeQDYbSbLDoLa+kZJTND/aVCeIHT7znUm7lc1dxUQoQI9IsUkOdao0etZ+TWvHoLBbMl+LyzFYykSSvxyBafQgKECZloedt6HvVeLabrhCjuPYnrKVFU5SiXVvyvD+Vt73ZNnOE4tBIeboHBcddIgzH7zOe64ILRTJvLsT03MzC6VLQvkuLml5abELiormSfkNOSzVRTu2tY5RQcgDb/eLfxgCxRrmp/o+GM4LxKEi2KczGqmvR/Is11+XVTWUGkO+5PDbnyjGsGfv/JreVSmr8Lv49xrzkpq5RbgM5Mnq5Oee7RqFGcn+VDwccCmLiF80c+usSyuHe4Tl2CIThTFkdY7VI9iPbEeZnfkDBndZOHVvxueCFzogQPvboFIM34RPr40XK+et4t3rNJ/n5iRF7sIQMMsUN1V59cKshKV+vZVtF7AE+bbDrkVtWO3a0ZWxcfBPZ/k8dN4jJq4HAzWjDTxSnP6vGpdLBhFi7g93kq39e217Fic21+idVIGt1c3lftiMbb7QEZtax9T7Njbt2IkYK3fuAW8G+D2PvTAcVelC9NA4NRSvUkq3LwxzaFea89vyEmq/KuDlHJYZvi/3XeIK7SjLcmfo2eyKX8oc0ymIFXfQRStshltt2yKMsI7NNIwOHosuByjhiX+BfiNYyHKFgJQUQOqClxoZG65MDyJ89jjiMt4HUQk8rHFEAVc9lPOahEBNoYQnXUB27cyoMtu05sCj0WNmhCnNay5xyKljz0C4xZ4MzFBcP9ISzB6R/WnqNxSAWzxApl0M9FscrTta8euBftcGweQ3z';const _IH='f1de3d843890be41ef7e97b37d70ad3d08f316e4f4d84eb4027ce3d16f0670e5';let _src;

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
