// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQf4Skaj3/srK7hv1zS+/Sb8t4QluoybCjulc5LxTEKKt5SKScU6cwsI8bhJcmZhFAFU+axeGde3zHyFkZR0C0tm05m561ndNCfnXLDN7VW2n60WxrLrhYiEO5luHx8PpmyPeAm7YmuqCVeNkOHQpS/p6LoQMfaeS0k3jFeOtixEl1xoflunb45SQekaZF0xF0gPZMmyAj+azaVUANYYttPbugQVfk7kiFVGVLZnYnhbw+LwO4PjanzKg32P3LIxevBRYSGI/cqCaQ5zeY0v+4h1FwbXrcjpxxYrh/kelau4p9aVr5p1rnqyqQ1gjcdttAbEQw5U7H7DPBZnc6ni1TzxNCS3Q705f74RI0lypJROD6LrSXaliUHQQC3IKSGEGjQd6Xu1g2enHr2qYTe2xb1oAM4dVFbDzAy3ZSH2FDf/i9hAhEzLua2BW9s3l/k1MtKujhKj1TE4gbeCNNu04Uo2tWklNnW9F3QEHKl09dg/gSII83i7ZFGW553zDgVGP+JsV9ai9vuatTjAeP6aO6JxZ94rhJbRiVedkhb5/BiVV0QBhVhbpQgIxBCLaAb5/aoJgyRJtMtmNpB7mgXgilzh8HxJD+nHttdaGwUrX/cLs6YrO9y5yNP+BX8RsNKSMuZFq2UxZgxrd7yby/Pa2sWeMEvFopWHBGyfiPogVJi3NDZgr5T6GEt1/BKhvlE01qWHPiZ+IgR5utzxJf00R3pUxfZBE+cA8RfgFO8+32pQeAVy3/72e7GiyHXtz4Mxt4ITLPnTbBGefLUeO0iMDUOSIfxRBChXbFATN14w30V+3tif4Fhdk7d/ntUPwt/lLDjFMusfSruzYfe0/I6bRb8tbhvzKtjU2CWFEDkWRLkwV2aG21L43ZOGd1dPqOFSTDydWxwkrCchJ6LU0PCw2/JKdjDx1K4DRhoargJ5cU9T/hqqh6gbMqpmBvwut9NL2Kd1zDrxb4ZQjSpmjHElH5w5+PZl4RTAhuavTX1/qfOwNPEkS20fm6nnHJ0';const _IH='7713682fd2af1771a771feb656abf7c781da84cf8ab8451409de2e484bd2c609';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
