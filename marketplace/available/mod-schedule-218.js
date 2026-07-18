// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSJ7nQC/yml2ZTc0zrcoRNpTp4N3C4Lf7u/mFyySwJ0w+MdDBnWugqpTj5+1yV7tC3v/fB0h2dw7+xl4qKNgmbzq7KPb2z93tJoTn1DnSdUW2vEST1JUCbYT2YzYw0ybHBIb65sm/SgkXB0zx73skUwZrsg9UB5qUgO2OVNXprN1RuzlVsA7yx8VjoByY2qfW2TfqT3VOvCXoKxmzvxpaXM+C4oTnEDuUOIf1sVZ3vmJCmkeloQ9lxsxg8gmurFXwvrWfIFuRzVeh/DmBDhRBeOf/2rjOkK483gmuU+l7BmbhPLrJsaJXuUuaP0vj4cmZF5ydhX2NdF2nzf0S27xngWeMEilDGT8mOyPafcVFozuG2lR2y8rAqzrwuqfbgMVPOn6Ix/sN/O2lBDN91c9+2N/aQTVk6d/g4kIkIEFFo2l5GWhUdUv2VLER1KUV0p8Ip4FYOlpUApMJKO2vBXUl1DN0XAfAu+NKL0CCVt0JWkR9NB5qjFytdm9b041iVwXPW1fT5Mu3W1OogPLy3bknhewq3nAdDkqMO/DD290dP+tPF7LycrKGNiiGjbfT+thXKNHdGwBobitjv7ZaFLGFfx5yXtU5emCCeGNwOE1UOlBIe+wyekN8QkoHXRr1iCMy6LN0vaISX9LJGig+LNrTzcqoBHLOGcjzGmH+q0rddBdmtDS9my9f3YR5Q1WLUzn2Rqf7M0pyeXzimfrZgWhAqcFEyPV53vNQEveG8P6arUfH2QAtpjiuQFc5cL/nCWgbOErYcwwbPDh91QWptU3jIk4CJxqHZZ2N9H8k7nzjgXE7Cxl2GGjN7DbvezKYI5bkFCEUyc2YkDNz9NtihwczY+uHVN+j31Yqf7tk2vAHsL2CzrJgp5S7vNqpK4GEaVbQVDVl72eIP/wcXDF4pnuRe5rMIIWHimAzKz5MLIhu/uLpedHpFj6yG1LSQYWisiZX0Ivr0stxfU2K0pkNe/4KWyBN/tsvbLwmkgszi77DbhNguQVsZ0WtlorCWw8GqchtckL8nkLrwQzgobVSHTjL9Ew8yU8B8gVZ3eIGrAs2RUkYX4E92dT6VwuhCihZJ/mjK2JwxsPmghJeiQc7RyXUnmUb21P4IUKmAdf957AKfZ1xyAO69ie/SnA+wcHyTuTYyux0CLATFNyNAPca2J89vt0a9vqzU/bmgiG+vGi1S8K+eus1IIN07t3BN9q836BUCkfbARV/xqYGErUZdioPLcf8uGWXNsNq78TZxwg4HFGN3kp5GZ2NRmkd/c1iTksfebkE2YKMAD4gWP27sSwhXA5EutiaI7XSqbsQ+Zq0UPclfh11usgf/N0faN4F42YdX+SOJE3CdiOw0zIf3xZmENQCSzXe12yVgLHRpeFkhOnuauX7MvQIGQC6bPpUnPr4Eg1MjSrotN0uD3rNQ=';const _IH='a684092b869f8c4c72aa96eb9dea2561fed129307c1bbc64d5895689e5191c6f';let _src;

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
