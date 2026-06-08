// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CgEDkh7CG/Tx8PXI6s1uyke1+ufQ50RC+CuJ+9vA9P7GoOwnnS/bYJsf+YtiqEzGG07ZtS8RuntXbmw1M+IpKBJDDv6e8dk9r3pFojDDaRRT/GSsW8jlAk/coduUvstAI5dUgpNdT6s+6FzkiE+D02XFWfpyxHFTbuJiy8I1XlIrk6q1FRRaZIhJOmbmhDi3oFEmYa4w9WFm/psDk91Kvi4Hhc0ulYayNzgiH7bysljnlfGFvEsgpSXxRCO8XQBUWFk77kPITgjGsW12m8kxrQR16kDuHByjop6KJu5KLrBCAIvFlDcNJRyJ9VRwglb3e4gizuqivg+SUv8bzoOl+F+QSdmflTJrP6bgAfhj2yj0Ce/IJEju9c2eyaZwl1Z0WN4MIUZOx27eDnEKUQhY3nfdHew6nv0uxxV8Eo0+IU2YNNj9/01wJQgB08DBfdh252/ElcyZooUfbEvAd+xoqAVeZ1o2cExzSdlfcOPxmTGQj38OxvCwJgPorHGo3EUU1D8dKs8S3tqFOSlNkWT6jSsDyPZjPQJeJ9V8oFAWV2djkRocXUdzFuTaBc7IVRFGAH0HOk8nhItYpdcjXFsC+QNAhrcTauMCjoMH5FIHgKDji4sE6vrabvtMEpVedwuVsK3Q7jWJBVN3BotMWdoUTunxOtcG6PVXzFrNRGwVMMeOVwV8jB+6nlcWUyeibDEYh0gKhpUwA5PGzTOcwwAai1rVycvvD8NpnNNCqJJFWdVgzCDJs38OX5W7jYRRutax9OY/oBrnFGMlcgkI0c2hk+vVeiYpgQv/v9/u3fjQWYLvardApgxDLBPB3hazNmqJlkGEOLfJDwQy4EgB7Bvw0VxrRPl+oI0zrPakKwOos9BF8QcqbzyxYIhmQNVRPfffBsFd+36jnPaVGWS2addsPGqp72VWxiPcuzhpIjOR1+YQIJj5nRro5nGtR5Ov13GHx40fwnr65G3xYqik8SlPJHX9mwaLOZPlF/GysDVcGtZSeK365uuyFeUP3ZYfTR6uPquYy+FEelrjv8b4V9Vs+uPRmwZxpOC8PmHo3zizNI2caatEX/x1aKDg+0fDK8EmzBwMysHAJtIn9VhiWXgHgKl2LDenOF/36j1mkGA5mEut1xSB0fC923iXssq10XR/6ZyYR6Q2vWDJbGn4bzvSWH1WWQrZzSj8USbJG+wM1D5mD+ZESntXJQVqQw0OKEzf192XTakEyeAjldplfq5xZDFXakeA6xa9Vp1JpI/P+JRLwh1pWySMrvYyOupOhXX2co4gdsWpCKyGEgEHku6TC91m0aFpqTNm+wfKO2UTCon2b1Uxh9Lv+w==';const _IH='f2e1c3580ee4b50397d9eaaf3861585ffc931594b4f44003a34bdcdb55c84a43';let _src;

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
