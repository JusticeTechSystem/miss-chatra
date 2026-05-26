// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wy77U4geGh0gV8SJ4qboMRwtaGp3cngE1JUnq9zyID5jM8rCtq5lMgvt0iN7A9jLFYtl4EnCy/spdJBTRjZbnEnzabmQbVcJD74b0Tr9nuXDlpgEdh/rpe3P5S6aKIF6eCM7VYU/lrp0tfsx9B8CtYzGxRR7ot52eHV3qc2RoGCTSmlLljO8CAL1ntaZKalvLryOqsHXHi9jIlNxSLlfEl2dgtrfvVFlFBpjjGfMvTtGVglFd34p1/LAWzi6TVQRin3UFhmrfabmi5kyhmfn3PMhfyWEDYvuaR99X7cX/bTcrYGhUG7+RtblRGBjuTxSXlxIg3214G8BaWeaNKO2nmizAVsIbSZS4XmAbr8Q/LLQIYHX+zxYHBj9bdah5y4aFOJCAGtPrK1M6XxRqff3ICVzYZLG4ks1K6+GZ/r9TGiXvj05u07F1lgDX0XnOUNtF81ZI4goPorjU/y0E5HK0Cjh6M7XIijoHNQcJgCXpEmfOeCyT2Ge8cmmUo4FBZ55qCfScreY0WHNSMMBOmXFYS55QFNb2tAUNSTevQxvLLfRYbSUt5kGZgEFL9MSaNtHWnlQfYoAOSXE6zoNYShi5MG57/rw3DkNITVvEXt6tqVgoSEvuhqRx6J4mZPW50uP8s5AaXHCrBZrHXJLZ4IuTdSS9PZchZvDGZKPNCOzm43u5QpAAb+iXMDAbMBMY31S1gCSCf3V5K6h+PxA8vB7S4iRV4keeIlrOOzYY9A6TUrJ4JjAB9wX6kkjWf0qgJNwJeVhMaVcq5hyb7z5F5t9vpog4iEgRBGR2Ui1mE7iQkM3WMa9YM8uezgceJSVHqFTMCMpV1bL7ZjCE7MnWPEFrqQSU7mI+HD+2hA9BLxqtSI3Kjhg/ZtUjDPXjsv54znXWhvbNOMzEg3lkTMqhvR4YXOiztN1n/5f+wfE5b4XWalqN5Qzc3wZBczxduveK5JboVGwG4P01pw25uNmxqC1yeAl7adSabQ94QFzxPtc24fPiP0bxNQ8i5oXWKK4uk0ACwHOiUyPSr6iJ5c8FDOtA/eMAXX2RB+wYRA4wlpv0NwsDj3ZCIHww7kSgrG6XbFF69QKKNQl/65s7HJuSfhhlMl6bji5R4QksY0/dgi1umsunIAjR8wYHyK813XEz4cfZ69Nonj2oGK5nHW9c/Z4NvdrmTtGb7mKhRdRoETYJSeY5HYg6TI6PFlwn2E6T4hM3O9RrhxPBsKHoRPOcSzkOCz9e9gAaZvxVLn+dxQZbY+M+EBoaYF5UG5nYx5VTiCDZ+kx2LzD1zmdw4rLjAMgpXKBfZLR1+xosrcdtQf3QyLstiVbYa9I5lDLMuM2G8FChCtR1EtmxJqSZanJvw2UDf8LRPxnauKMYmlmKrPA';const _IH='1cea7796203c65b774e7985c24dbfa0f5c09306704b2baa89c98f6d109e46e48';let _src;

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
