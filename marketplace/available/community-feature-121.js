// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uhKYgE735vUY896P3FjY7LIZQu5Ed8sG1HF8WMDDNNzuDjJ3gY/7OU7HG2x+3Fu8QJcu5ncNA16OAeFdPQzdDcIlpTpwKmgpf+tBmHE4cRn0hpTqRFnBxSBI5dUpZ8vaD0GuO6vwfJLKdzn1UGPdODUhig4qfKZegA/xRn7rzhg4FnLR4Xkr8AQrxPRWSQ4pcnzTQwBU79L1ZXm7ZNKiOIVBK0kHnZ3wnql40QfYmgaOecbEE5VZqzVFIcM7tSHNtN7SmZuKPzGDHSfyF9IBEKYkX2WjTsH1lRuLvJDnbkAryJBMwajy3fRvRwbFWnbHoVieoVp9/ehZilCgIy8PQVCVuukh+tYaOods5+GQsuGXHc2dipDUz/iQVdhHqt4yEmyDsbOA4ZVfjCRItnSrPy63i7UkzncjQAcKkyf9t3vRxxm7dRrPTNIjzVGXdMLiTXtkPKEA126E/QH4a45NupNuetwITNVXx07TG4iuhDfXFalr2of/94JiVq/RqqSDcb+qP8nGXShoy2cL3wzAvefp8Y+q8NfO2OGL9+GPmZb0VTLL1lhMVBuexGtbasG9Mf56uMGe92nHIV/NpghjlpZHdLjXAj1bhXmKRME9hvVPOOMqdkbs4Drc+V+onUG3jrAgfSNbGAOzwXpAOwEp5KN1ITQ2a+Cn/ibBsRfiU8DfXaY2GL43B0eXhqYg63H9pRurPag5AQ0YLA2rVFE6JhgFqwcdK8Ec';const _IH='7e13a7fa1d8c911812b57b0d726b89ad200ef1e8addd9186c0fb5d7500d50fc7';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
