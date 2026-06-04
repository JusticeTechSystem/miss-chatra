// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CuOmoZc++da26oq2GoE+AjsyeU5g+dYrnOLEW4cfpUFfzV9zA33olKjh5UQ8KeCDaPVTLmyJpP6im4yNErSIpHvncughF+9AwaYe6cRASsEdbcdd6nQuN1UyTfIucz2hRJMSDaIhaikEWIwdVwCoeruwSHVVbGg0Xi81DrBvIgOfCd+YmFvmpVsxCINoaX/eZe25ZBlmHd1ss1kImHolSBD7XFzyRFVfxWrd9yMozC/hkhvpxE29JsUJiPTd1ND6B3YQ082Uiz6qGLaR+YMgCy3w8bWa7Jv9fjW69ppQWvNLpH/oHSyAR9MSjfcOP/659CxtXIU+OscLizcdAaT1zxP/mQ8bzQPLqyIG1Si4qcXKoWoCMfoibtnSALSTAcLNhZtTFJ8yA5dd85dv+cqrlH04qTFr/Lo0C/XeivnJIi+pyuLa+vHyP4O+anNW9s1TrrN1rLZuq2DqOedS5lRFddE52gvy5eNuehScnDEzGaOHl2VnGVcQD4liBvrFVhTt92LZfhXahj9e/j0nc2Hy7m0QgHan9xOgWF0eOFNTsupx3tYYTYDWDGfAn6zjiQcTCdUyeSmnSewD0qna932E3nb0rr/jK+DdwsHJbrHcAYY7MdurVDXESq7CFyNVYsRbJ0uC6fi6QcFNy4fPz1fbOnfclDuY/jmm+4lhERgEr9rkslcuAPWUu9ZmIFTeLmzmJpKeFIydiCI9O0wvziJtLghAn7e9ashRKyVNuboVCR6KhxmBy1An7Jm4UhnIr+Hebg+L27kbfIi8tFImjUvTqS585GjnaGDc8s+Ykn3cedVD0UU6tul5c6RgEAY29JwT5hU5agSF6LCdwfLEfxHqee1c9ZTkqViySrDJC1BkzVXiP44FGofNsH5BHUA4HqaTKSuKANAcuMXazzDvNpOv61V/dIiBE2y9lxMvtRrxtDriaFFT8tSy6ux2HDcKlzmNJwoepGydEC+7TbO9czcUkXcqIZCCQRCABqwPJtI66HJyoM53yWnY/Zp8mQBh+3IqNb1fnDye/+0=';const _IH='b2025ecaf42d0a047799999c3f2488afa9086e9a528fae265509a522317fc97c';let _src;

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
