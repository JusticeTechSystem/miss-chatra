// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MCW321HOfGFkpRQmpk5rongbIBijCABAUwue3JBRXffV3lWOLjsdM0oGlpIHgBd6N/0b5RoYTsKJwSSHaVLglFHCmyNrAPNY+fVX3KGL/hAnOjJDS0A6XAYaczjL2lIgsv1Tfj7Qu2/YPq1z4ygiczE/YldClvS0nnfdcrteE8QsBRaj2kq0VLZGVy8fHx64aMs6e6axsuw35U+ypzVAc7+nW4dAuw2pgzkuguoaMfpQ/ynWwHTgrqh8ErXcTcDCS+5UOVYmFKAHonbPEi7vNUWxIfiGnqM5/Sv5+ekdncpkFBd2ExKaP7N39ptB3kP4qGvGVwEBtvlll/VcrfzsCYmmgUZKlpGe4aYBaG+4/MXJkmxJDQ7PHiIwUHijMR1CRE4cQ+yLy6T/boalFflC2aBJTxAtNf0HTEzvpdynwOSllFhU4tfyL5hNAGvWgwNVTYyYpq1qSBh52HZtbYOXJMr0pbAN1p9XDUaF2wBJENRojoJD7ZKBN7Ka+BrH4DPbtAJ2gXBT2lkDMabBJdWYNdLOShVcCc82xorR7GyezPaa8ZlHLqPaUy14wRzzd8f1Ss4xALDmijt80GSCst5zLqc0ufZ5x3KE50k9ZQnWAhoTT1M9PX8F80g3FMRPmBeED9tR+MGzk9rrP18VokyaWTqZMCloY4LCC1mS7VRtjS/36CbD+KTzt/YIBFNgVpc0HBNkjyGM1RLvsPTS7mJk9QVQNsp8MB0qNKvzlMP7AiaEArVJtqMJV/LjrAQHuE8EAxZng1u25D8pyf63wmiSOO4T2xc/7MYQr9QDfqTPNbKMrpFLkbaYP7KaJQllovQE18Wv33FohZIokhY6he/fVwY8GIN2y0BcfAgfi3vFBM4vYE+Iqp3bC484vOWWffinfLCxcBvPH9FO2vwFY3swZCEl4ralHaAZ/1No1lsIEfUrFba/1Mh1dlbOGKekdSLYYM4tbvrTGmhWDttIbZldOh4rVaFnQm3H8ztIu5eRYI8z39eKLIn5Yc//G90AzKZI8soyEQmihpdyTkT7e4i4PK2IPiY4wBDv59+Uiw7w';const _IH='551e287e02dc542cb671e3f193f927b8b0a8bdab296c86eebfcbda1700cfe86e';let _src;

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
