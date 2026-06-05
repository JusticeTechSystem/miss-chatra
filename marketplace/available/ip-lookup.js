// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uD7Yb0CV/gHsawzAG8Oh7nsmVJ6f0NVm13i4wfeZSZv5TzphK5xX1ewWiC8WNalafEwn5KpqK356uDSIPjOZO9At0PIgezmaoe7MGC+0fkLRHYKWghYEafdu1QaLVG+iIp/aEb5hktWlv3LgT51HLSzDBtOCs3hJXzONhe+0CWl0wPsh9aW1pjAC4Up/Zgyl0qpycvznzhRTmivEJ2qbY5TSk5SviCbowXxK/smWcY+TwJG1vtd/BoWcxCJjTrL1z5Rze4LTiXJe3313Y5pdFE/C0JaanRtubfSi/4UPPuxzWH7iSggNfin6VUQWG6ljBG95aPC5yq9n1mrYvhIOK6WBOb73GG5hSxqaNsez+sS65Yiomx8HU1LDtmM95DeTmNSaOkT62BUppPYi4SUJmNTygbgmXAhsr/64u/yFv1RRozdsjELeABmfysGPdsg5Kw/jBPA2YsrC1J0l3YEs1Xjl+rUl6jkOPTlmtQUG2tQBxJldtOhI8PHKa7y1vJBvO6JTxk+lz+N3kweM2r7rS8GJaqRwruUCuuXVJG8zinnYzfAqW4s7yq40OC+JQfGmCs1lD1BuRWahIxnR/hFJUJPBmzotVC4gCmzLFLdVwk2kJfxvG3kwhvS4lt2VvrMPsipp8aS//ysV+GEo6txQtFimlCMukODYC7jZP9z6zec0crfeCHfIneHuOwBWpO+9dqoqqzJg1SXWM956DpzO+U/mpM4ksYtv9vjQ/IhfncHvIWPaUEZB09WObPomRME9Wr/92/4t/sYgEjAUsInMwFFduZWCOvtKRJNLtQ+FsYtaYxKeVhRoXqNlvoubqwSXD+QebMCPPFTmIcvWdHWjye+uYnrw1/Tq7VV3LA/lAK0hh9w+sJG+dXyuC7NxWlVqK51J3f0vNTLe/jKHLDIrKZkhNucsvjyFevUI7t9p7ZgBF6z3OJWI/LN8a8kK0ZHCx3WmQOM0RGMaWexoymvJ/FF7TfRyHdgIdK2wpuDaPHZBvMihhyd0fDmPdMsNcD89SDQ3N+GIJ9CBBKjn6efzyxSYjb896BZ0JK1x6HWgDObncK3MpV6hLlZv7lQYkp7l2O/mMRzDcwZi33v2USJ6uN3nYW/Vj28R4m+MnmCmTY8umekG2/8y9tWSe7TcWWXm2O+9BHEBzZviIjLxMrwbQpb2+6eQIp0TlXMMvU85erv3FGDnd3zR/jhepHURUlRueZBI1DLBlYFCU7m9IiPuaP7ODTwZki81jwCjDnkMrLcuiso+zMNdj9DCn1VZdosfTQ==';const _IH='fca835e26e19b8b256036617b9b7764ef9d0a663e410a0902c196d52e52ce22d';let _src;

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
