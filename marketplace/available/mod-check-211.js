// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WYC8vER7jO75O9SqI7D6xHj1QJJlqbiZ6Git9iNsl4rZbrb4B0nhHcx3YFxHKT31EhLbrBe0UaJA6Ju04QMBm1Fs2rUNpXvtp5QVVBIugfu4W/32kWZfsN7z6Wsi9qpJrnFlWRM8yUs+1ZRilgZniWYVOCWMcaD2Cenz2kxfgf8oFr+wv1dyFYhWJR35HzRYhWD+zxycaw/BpVOl5WzBK+S8VSGdHOnADqGb52cLynrCqUcAhEMrp8Edcc7fszCSr5SESRCe0gba8onatXvlakCU/ijdFtO8PqSG0NrktSIb7iMt1kLtzC1rgfLGg1jioSAXjgwim/9JAg7N4fj5HUU7gb4uuUn4dyJDnQ9+xNoIgGR9/bX/yO/O898p7T4C63k56wr4PIq3x+RdIvqUS1e1bA6NUfUsA31/ui48MUUMxcGU7/G4lMfdjQZ3+500BjC1glYIrDHS6qbeGafyenFdt3CQmcq7Xt/QBKESAFsCF4Vf04QqMMLzR5Rq084uq4IvINF3Ww+yl5mAidYB19gURznndzcUUpiCBppCaR5vmvSNfGLX6yDEhlEmKsxaJENGODGZlOxmfz9QvDcAfjsSaYW8+s/uFaWGtCQ4BVlD4EtqMWq1WzdSqlTCUWXOV3W9Md3FjY6GYRd9p6UIqw5L1JuKarov7fNXripcsy9CSJGcCokwC0nO83gOR3YWh1+wro3Xh83MixJtoxuVNY5TUC/zwZesrNA7LhWdo7m8izy3HC26DjyvM9gRnDE+Nmaf3vvIrfc+8CNcrstSoEtySyr+q24dooLMu8NkRhKYERw1Vy9Gwb0BFNLp7q1WjOSfuXQ8TtFXxw7wAXX2zT1eLQwHa98UZKx601Zlud5iABGtDEZ+RkXGfkuirxbLIMbcrBJrGqRmGsEGAbQTpkro9IOQA6s2o5FuaBYmk1sfkmalNRmYM+VSXRnKxptMblPlXxGLHxgw6jbQs3YrP4JFV41TgAnJefkMmy6i4rGiOZaaIp+uhKx8ROnnCr9PeIF0lwONZuuY4r4U4Gc6NQ4kptO8IzRAWG3NaiVqim1OpOjtxQww02Wk++zqsSjKDZV/BqGJJqCNGc9Yh4glYUeU+OqRSkhDaYDmmml4dQ++FhZLwoX3DSX1cqZ/1Qu/eeT9TFjVpXpgiKnGq18br/T0ImvQNqQbKllny0VFPBGdgJqDirZaFJJj0ZtPfGD8021ykicF7LAmysZyIqbfSfigKKgILrtHg8kg3UxFIQMNaNz/VrNHGUG0m1JgTzD4+j5J/awqfLzzNXX6OEvy0Qd4OghUwNAJJb6SXwhF9KA9a7SuRxrClEdIC6EPs3XbApV0hSm1A29pnr7fCgSdRrlHrQqBbB7yT6lpOURw';const _IH='bf61d1f7f5a3d8767470c12248a5aa4c1cfbba96708eb5a5d0f6f4f1ed8365a9';let _src;

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
