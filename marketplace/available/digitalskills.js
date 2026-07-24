// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT3JUyQuJ5ormEk+N4tKormKsUOEaGPvqG2Gb4PtsDwCz2tC1rpp63q91k79y3kP/BWOAZa7qhVqik3c14cr0h6EhhUoFT/qzH9uSNKD1RDO8jPOvQcFV/Gw6Cc3N87dA+txUZn28AJshOSaBttpINKGpqaXZlL7/zy5cvfvnlBCHrHgOBxIPb/PEiq4ztVDISaqZZMbHARvPr55ktCwCdoFKlZyA8nNPxLpr4D0vf0rZ3NlIy6ubXK1G18yTP4h5pJfqDAiwBYWCR6oJx+WztILIbrSaM+SoxaNyXuS+2jQfSwxxa0ECH6tzY5oTwDPx6KEHBWiTLSw1R4TfrXbIm7ipVorKIuf8LwKYtUVYVPAR1Tj1/Z3nRut76EuKCTZtyBgo+uTVCx8NFYCgpPYuqO2T785hn1hV5em6MXXfHWD3oiSprufB0TYaVkNHPY6Ja1V7PoF7Q50ZPUaJ5JhvmnssIEj0d94l1qmVTBT+CH5Mh3Nw+blzArgl71BdIcmmSd9f2fhA18IA4hqt3n9+zBAnUSJKRQi0mDnHRq8MmSoZ5rk92ZrfQdZflxSXOUP8jT8QkxPZsvA1xpA5X9ytEvy3S7LZazDSENCvhkRBiZOaVhNOt8oUOdDNeWb8jcJvmNihD6nx5IySAg6jiJALRNjyhnoCipO1aEpqRf6fmjkycKh9QniNGUjPDe2UjFy6fJpt8Rhiwit7uTumymKigLa/j/hdqY2mlcCYnVly2zemlHnFVhEeVmbN+JI+RjWS4J7lOxOFu58lXjbjVvMKAn1MZSIOZCUqW/RmkS6Z9l4EOCR4FAB+RvJ7eHDH/prI1rvmPOwfCLnwC7kAWOgdbj7/kf8SE+2hinj/ChNyUO2070JUfnAk+DHYXPRs4g0Wom4aF4MUdoYWwolug0fOFpEelVNt2fvLVKkGVXwX0FYX+FQ6UXjzTgzbqXhxLayVRAuCo+IYhCI5ReSVUGzLyQNhYe1aUCP3ODGYjyKZFyPnEGVsKiAydeDT2Gxtxya2Ivbk2t7bnzia32fN5vCvkuws7S43v73JjCO1dbi4J8WNnDdg0EcDIJdmlKGOmrRHNOEnh27nwwQTrfhxFlDrPv+hZFlJg77ztbT9GN5VbT7AZDKzfZRb5pEOOQff/3yfxehYdhLDRdaKnrBSkPtXj2H7IEcTRli0FMLXbPp3DjdWP9xrVVT2OauDLts4pxWfuiB5Asi+FXKPRX3ZKWEg==';const _IH='1a946120a7f525f14faaed67698e3fc23405bd184ad0439bfa3a5f2a79d63c18';let _src;

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
