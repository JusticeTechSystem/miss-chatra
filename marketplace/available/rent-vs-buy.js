// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HDToqG2aJm8Fc0yV8HpAFwpG47KkZSBERCm6VIw+DR39qamdd+AHMaZiXGh/4BW/6HnT4kad06I//ihOhW4U+7/K+8cD8QUymX08q8GAcxII1qDThsqX9BSOHylQGiK2SxW8QJgBcH2/vTNw1UDJzbCmsONbctzyeFh3Of93J2ImFvQIS4Px6M8xopsxeWLV1/HnMzxi/GtPvW6kUiRjg3dlCT3VDZCXqr4zZB2EhTlcIi/flkKJOgMeiu3B02Xthx7U6JBLVZuHGQA/y2qN8/oB/KHtXQgvttHHHiCu/4OiY1IuF2XoPxEAsYmh3ZdJt3FKEj37SeaziDQ8FD/zivabzvAeCtfgxFMuBkP7BQxUyOqbktD/9x5/r/itRbGYr3uylJll4EyHb4oaNH1V5yz2/8Q903+7r/P7ayL2GR2REk9Hc69ezNR2KsheaBFRNfRKOLJQhxgo64mYNKDbU5viXNr2/XfcqobTWb+KnIdPND2RKP4u+F+Uq3tdvsJ07cx9KtabQ5dyntMzdKYhzAKPjWkyNpz2D/I47FXoh8ICCyJ8IEJLArCK/XTpmhxwQWux6nK5BP3PRnDBq7+44ldJU2mUZqcIaM1bNQiu7GM/R+wqVX71E8nkEGw/G0rjQkK12CJwjiTpEyWNX7qRbq+8Blna2nWdF8sqMQUQyAFnLNv3wYlmWpJi0r1SXUJXqaYAyq9uRsExVImiCR719EMHrf3mR8j/gj+9pADj32/eHnvFmwNsqrBKtNdgJTbR2Kad89rx16ej8y4a2acfX+StJjRmJ1wBbKvzXVCoX6PXkV1O9S+UuU9ox3tyzMLWEfqQU8M+5JDQUKjQMzmLxUb/qiP+M4YZqJtZqQEThEwpp+vf8z7uSEAE+GGGNdyjRtIpm4KrgnadlRR90Oex0IvJG9OOsDQFkX72nDamX6g9aVgWK6xV94t/IyeLj66XTay0vl2fhkCx5u6POl1/Bqr8Xa/A24+oayR1EVkI/v0aUXVY2C80z7cPUej57lXsDJ2hMEm8RVrB2J66XX+RuAZCMBP9lTADekIJxPsF3etEl53QIaCn3pyx2CanR3SfDSTH9c+JNlkA14bLWsiIWe+dV+Y0xrclyVjvRbcNZ8ZCWqj1ziw7NQn4lEIqriWcFuzviCR/VmPS1HVR4WhlJSVaO9enWhqfVZRazpJDkugJzqrQDelXc2vFOwy1Eoi7Jk2/N9bZosLVDIrds1crYJ2FfA9qpG6rMirtSrCPAuc466jlBGwgmqCDZozaHYVn33iTqDP8eBr0EoeijDkAy4kk9Jz5zfIqRVcbpP9a3kfN6N6NGrZNEotKpebr8+VOXZKU3KURYqYsLaGhSNIIs/6slShVZAzilKVEvmR0Oi/EdCzoB74IwQ/xYGtYQ3SyqlHBmLJVpzHxYEKAuPWDpQCBkzMr8n33D752TerscDaw4KxbFHCNQnGURg/wXiloYCX13mOQ2ZcqH+R8E7AiiHkRrRfLEwkZfJK72CdIfJyOd6bgL6WqXfaAb6ndKiJJfeZ7UTmiQgtpXSBzpIJVuPZvZ/LAWRG79NJiqyivkcrvMnQuC1VlYAnmCUs/wvrfBkygODDbV9p+6CL6sjl9RpMzTxfn271ZI9GUxfc469O7j3WTqMifugbk/GBk8+a8WkrmO9xSWbXKLsz07lrRiXI8l8inFKmkgGY54OPG2lHnm5lmOg6O+EXFWilfsnpYa/9PmJT0AIJoIO/GXOMzw/nL12xKXMhQmCc07CEwRIastNhZPhJLhNHXWoSnj2uJaJ9QMr6xZ1aM0sVhUYIIRSrasg==';const _IH='a174328e2f9e75c65ff928ab4e31feb83af158806a138b48179aa56220e204e6';let _src;

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
