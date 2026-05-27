// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k/ECC0IW5LvjR6IdePtknx6QVrI8J7I2NF553qs2/uS01Dmo12FTuAjxYh3c49kBBRcHuapDzOZvXt9/VGeQYqHyBAGtcj0sMr6GQ+WxrPNvV1asMrBOYVQunCmNQbR5z504fXRvLugJfm5gQmV2MAvhn56X8LxGJoNnhZderJ8qOVKOvOwA4mlIDMu9GBVUZyDJULMWEXLuKPB/FfvA19fG2WNF1igA7iNPLzskysU+Cx0iDnWA6LvABYMOimiPKUITRiii7QM8sc7RgP9o1Rd3lrMRv6eMduCZUi0CnCZQ4wN083NYjgkHInBTzJLr5Q1RwduEbxcA4d620CkuC+tIhTAw3lABsUKMZJrVDDk5rB07aMeT8YkOpE2r+TRrnNMMM0BpemX633fakUVi8SLB91PIFgMswvbbIsTcgWBp49m56jRJyPgSmjvciuQXtOdFM+f8xnbDGS8sxNK3MajFI8+x3TeOwfupxCQLVQdL1NGLx7OLcNCAtIcr4S3vYDKO/jf0a5AgexmIuEcyXEnAmmSX9atMhtD4mVQkmNNqPmHwWkxCwT3jcJKvLzgCYVUZ0ZozKOZMaZ0BdlpUCf78v+rTxu+YS0/+luf/QOuHNkNwQTHi/KRClKf/Wkx7j6/e+HYNgODfdV/fEBRFO3Ylu0v1h2YrDrKGTwBLCkpA8SscxFdCOnAPb6kthwvhlzarPrGaEP8occzX60nDhwjI9pVh21PfNIxaXdEY+ly8tA==';const _IH='7248fd0132c6a86e44f69a003f31dadc831cacfe88b0e9485a85e62fcf077085';let _src;

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
