// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6j+XR4WifE0sNrC9EPRf3+VIkXEXh3i9hYje+cNG90DNa75YJV6c04wvznXzohuiCXTXJh6Orh+lysRQXMi43/pqd8DD+etUZSJO6iUX/CC6lF70CNyJi6ez0VBRdIHGfU81uynvVM6GY+Dlnsl2K1E0f9iX6bk9MpnpgeIgcJop1OMM0iZwm6fT2ul4/5e00ZcPnT/53rpnKkYhpWKMX7091wA0y6xD+dt97on3JMg6qRIWl79lTOY3J/jwqLNAOgZttfVVDGvtXwYTomQkVE5WRCpK7QH45EUWJFkIscZyOXAUVkMaSU5yBmmIya76u+rjauAXL4qT2HXc7hhJ4vdMiIa32Sp34g3GL/msgOnv0fug892Hgt4WNa4xxbHrGEtS6LYVj/6lnMuPO9UYoOFYnIg9BfKIFWqVoOYTPvhsq6gOY2nl4cznZN+5zcO5F12xh3vxVFODabCkqYbDnMAiv40Hb5bRTXLTdSiaDG4v2/5qTGEFhir/Wam70tfM2z/VzDpOdaxRrY4kQ0KVSKtToLDB01Mb0SWgHrsh6rN6YXTYzL6oeOsZV6UjCMPwMttUWjyVB+WZU4uMFj1dR13IGzYcVWXcmT5F2uvBnefxBNRM+NWHt/TRHOB9I/dxN9C58VmM896sGlbreEGe9LGSn9h8+Gip38y9iHU03V1tOYSSzyGR4myLBh4gULbzPwdWag2A6+IiXQr65AR7ylN1rJ/SuygmzFX67cMcU7eRlRd9INjnrH4xmsNgeYdZfXsTumBP2wnNeNUJGuMxGK5vIGEmKZptGpcCqv4Q5G1614GAekKgC8v4VtqNVa782eT9rHmKxNoLLar5Fn9pKESlsmDmkOPy6zqFgnRgSmjBb/7SOiPEmOIgkKqRHRyeCvTw4P5WcTUIwBlGnsKAfmkO2HH+5Gu9FoBIbmFO+cS78YGNciVi73rsCTviNcsp4ICih+AuCyyxtk/s/eBBXR8PQFkwneAKQQqCidYQf/H31X1';const _IH='66692e1342b54d47ee9699227aa31b02c7ac39d0536f8971f385dec2c3cd7de1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
