// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I8z+e0QmH5Nde2an6N/H1muqehEEpU++A6v+AopksMp/6XL22Uof4oVK9R1vQRx/g1w67n0g3H91pO62d+qIlgi8V4ZsCBtFl7Pp6zy7P4/xZfyWStv5UDrdZxCdaJvDqbXG1SAz32srzvWMd5PW80ce5wcO1FHyRt/FpAS8Q5GrNYI84k+XE3186ahkzl8PBUjA1crLtkYCGqRKPZFlEM/pPMSG38CVs/7ZL4A0KcmpTMc05BF/vfIkA93hdMcXB4X/mPkKd+9vQqF03Otzr4Pzy3/rJCrntQr7+bfUoBdOiCxSRQo8KLGTqKA7kLgX6ReNsJOmjVXVxADYu9/Rw5JpvM72yWFI/cGIumEPLewUMaU3MxJ6DFuMboZs53B8vDsHuc7Q7CwKwFyEeTMivs0RU156SCh7RyA9/boG+l9dx/bRqH77rJPmKR7egYpjPJzJSOVFuWYSPOvUxHCKe1Qf9mio+jZWJWL+yTWwBMDvcyxXxnRjc4oc6PzRfZIbbrXdlNoGDLVoPo/5jzKquXo7J0NyMucup3I2fgQ04JWCAhKMxeatF0gEpjSFEAIrUXYtOppp7aAdlR7gnTYDdOq7ra8bsCiI977xS/BWO+MncYyOrNV9UJhlpmmGaYhVjvggvPQLUseUmf1JQCq6QS3KMSHt8cnKFTixAAsPS5pWSDKWkLNFNc+GxZlKJYOC5LKZxlPpT+Lq7u2IlaWkXBfcU5UHONGjHJ9+';const _IH='b588b98c0b1344acd9e6122976bf0566cd20ad551fb2571c1d25c512b29133db';let _src;

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
