// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pt95m153ssYjy/ycQgh1rudVCbYDakYHxy+PJEXKPOQLz/uC7BkIb6lyQUTxzb7Se64lsJDmtUOTQfiyj7J2UVIpqYoot9SnEiZA7E2Xg27ALokWeSo5oI2GDE3pwWwAFCDqicEt+58n7UWGc/GduZUk77m9q33oQd35PYvLJyuoXLDtMPbZLlax0YfB/wCr892CArV9pX9daVL2CDA8njyzKReaVzql6AY3Xng5DMBjEbPi8+v5o5KUGX09zBpFbZmoKNPZp8UPMILE3PVBIoQdQUdMwFrb3QhJdMmBbSwsd3ru+za6VaQlv08vV0bAcrzkC4/72vQ0rD/U0zE1w4d8C0gaJte++7VtDcpD7u0OcHcCeXgeE2AUz+V4I1cxVMVuplGU1+2k9wqHyq0bow7AARZ+9CHjrhGLNiZYy3PJMzQrdQWeftPDOwQgzMoGppFo40xfbK4TJkwymwrxRJwPVTnx2PcxQLQzP2xvKzGDUXrU9W0svTpgaCZUL/tHHtmDkRem99rV6gBKJupCOao9A9MobK3gEr3yBHgpPYhQrLhMxyDVOgfsq3RAKA1GUg81sbgIpY9v0JSEc0v943FRO/q9xPvdgu2lQGONAPTNb4uG0XEPsXzeqCqMTVWAzhLlBLsevG1/WTWWBkdEJd9XplLsmbMqcCNKhYN9/mN6ja2fQmRkv1kOg8RjHfxj89oxjPI0QPiHn/3HLIWqFMkIfRKmoiRZ+s6FEEcet+XpbvJcWNSZdb3cOOXgOOrl5VopfEWe11IkJ4IaR9rp397GmUrHzTNDgysEYhFHal08hlUJJ/se2KS73KzBM2hwwa4zL2oeZ743CcxYOKDhrY1gp4oQZj8V8x4PSPTcduOgZORIit7rIFeEIhafmwb8jtTRwuEbwc89ZuSsPkmsQo4FlMyDa4Wv9ZWrZLFZTi3ovRQuaLi7ze+QYZHMd8/goAFmDW9DKmta7xHJjWdvdUAzhxQVaat5l4A8aWAPYA7c5omomMetPjc/n6Y1ttdXlkiqRr6CAFsmKWCcvWncTIJP5tQJiiR/vNU2ynVtHGrnIjXOX8QxlVnN5WlSirk4LoyERlp+kKKRFO2Q69+yV0EVW6zSLiol97irNZYz1WCYwnmcuH+l1mpicVwJAAZ/Ss5hvd3NBUoS74EDiEI2FRTyPD8GDpiv2+vYT5f/syxuD3CUwsR1DgE7Sl7QJuwym3r36jVp0PM1qGY+Jm/X7JCCsFN4my7sryo6mXfwDFUuFC8Nj0eYqAeUrggAwIaIA5HPUevXAYT6VM848BPNCy9Dr8sI9H+Gy1b8lnptkEJaVsqD5B4FuS6PetMS3gHb5YSvNCgtTFdM+sD/h/mN8PxRVpJh+939R7T8eSL/';const _IH='3a0a023a72c190159c99d3d75423e6c523d9ad1d67d7c872bb301a1dd3129391';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
