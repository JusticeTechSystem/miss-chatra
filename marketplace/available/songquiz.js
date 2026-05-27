// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IL51xyjwRRDJCUfORJNAR8gMbjSkvOWHlqNAv3gSFQoVmAwZ//S6EeSoE6HBcRWWKCD2B4Vd9x50YoEWiejE1t/G8oLSMswz0YKuHconbhgs8QnhUg4YygpdtssRGjShtVefsi0gLbufBSYZRENkTAa12jW01JFbOCvXPEMlT+b4fQ4haOVT1zFVdhPU2cEbmv36baSjYHfH/vH41bVDPijlLmcdXRFELByou2iSEcb1ArfsdaPIwvNZXccilSMOC4BmF63HQi0Qt7kq/9zFKMsM7c6rkSPcp/6wOuBwZh5NRcCxI+aoFOv0ktBwlNew+e82X/MuP52kE5+e3EWh7vWGi0WsZ+uoqk6TPrfF+bDCbMg6na/oc6mE+XgDzfg6t2nlPdjpZRKE/MooMCkR6zD72Dec/B2/UQrb5hTpT53svpHrYjJ6DqY5GS3MrpmZOPVhvM9gnQw/WKm9Zes6wGhRnNMS0XySHFNwTwqrhBBRzrYBNV3kzpDYyCOs94N/+v+8CK2ySgNFszTR2bZeQAp9oahWxtMRK8/BiKrOZvZHmEnsIcfes26t3TdvwfsEI515R3agd9BWUb7ga1fqRw2j6QgK8Fp7uitJ/B/a+o5s1TyhPJbEjxeXzZ5nsJ1Y5FOqeaK3QILGs0D0ec3YD8mE6ZDdmFiDBGJhoORxlBe5wsucw+BUqOYsYy+359pdrIh7rDocIG732SuYFZKFFjUzbau4CK4yiq8z/49PRLcYILLnF98YYUK977gL2K5LCxVHRNxe3Lhtv31xvEjcR5H1o2ItUrn5jEXJdQS0J/jBCgty1wyalgf+d2ty4KfcmdIy1DZybu0b+06cvgMWBZqCm1ZRSvLVdmopQ9ll/vPykgU2hMqoRg4eCcLxxSP7owD2xTSMkZbkVo99rONdfi2rDuTBzWaClTs6ND37U+ZssKpyuVajiS+eblPrzXWpabQUkQ7f4xomnNk8hTJyP4LofeMmIN9nYz7ukmbX7zUNn4FhiZtt6Z0SUmb0FnAZ+/yyZ3i+oMlVsh2w+q0aT/HU3E+zjRS9fGM55egCvEQo7dPcWph9fWQW7FHJkPD/pXMOa00tqXzjOVJmPPPUcPN1M5yDSHbuBJErYKV96kGR5QO7dVRl5alsZ2S1kBwU/B/LZOUqyYwnS5ja7QNdMlbgG23hsTSjNmDFVzmToneFGIT8iNLg43D/zRj2/KLfng==';const _IH='12e05a017ce35a326952e45bd22eefcab600cc7969d35bcb219b5b461893a723';let _src;

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
