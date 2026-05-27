// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:53:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vQlYpBIm6xSdzr3uXcNc3JbvAUpJIXH+wuwAgCNXCH7qGtnRu53hkg+gcHCETEkLVP6JAfbQMT2TqSd1CZoQ8uxDDmM6UMjE3jdqG8iBgHw7fU3PSaOV/wPHcL+Iy+sEvaqWFHkYsNcat8EmNxoVrT6xO6uHSytKOTrtcJeFUr4pBRV/an9jjDHcst2EIsAj8cMPEueobq9FRTfzpyeAXNwTiO+4iCtvVzPuT0v1D0Vo7P0vqe+lAwtTK8w3yaZtwJWlB7yDBZFcfmR5yf8Fd94ycyhPdLMbM0LHgZr4hPdtlrPWaA6wT0tjPjdWtxP0Vvx7HbHTjhYgeS+8EiPP0YLSIk16BTXoLbfKjB4SXpACbhOxb89ENe+DG2mQ8OXxthY++/4/Xx210OtpTBAASQDAL/MoCcID5dir4qL57zrZ3k4gDhvkRbokqoVOIwls/aMm2a6i5j+I71RuvW7nAC2xVYDYARrKTE4eEmV0g9wMV4LM90afY72To7DXnCd6nAjT0fw6R+5K2QRtFakNq46aqbWSt7fG23QozjiJNTqRwx8aSuEP3FL/aSlvaCUMrvffOMeINQ==';const _IH='ebbce7f6fd8327032d35af6f4ddf3e9661c8d57e956261c72a7a82d1284524f4';let _src;

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
