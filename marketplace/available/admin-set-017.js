// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRKwe0D4T8sWI1b49e6E9kVHPhxLVH0lqBKYy0ZUETQn8h6hQ1q9MhVfN287C0nnpQeH+pSLAyXrHU7NY+OVnbKy0rq74a7JdP7HD60ATf59i60jfhQ2xOffId7rh9ff0A5dTSoc4s/q3VtgQ8ZOhZgn35ZQUplBHpKZxlMcZLNmgkc5eDIg2FtMcsUKNCXTyaIj2sSMyvoGa335eeIrU059PD7XcDIeua8zqDFyrmCIjBf69khAtpu4Gk/Cmyp9D4mN74Z3RpmiXruXGaqHRPsGAEqsymCHxGHtdNpt45XW+RgrIsc3CQaiPy2NVx4pYZVRw7wQKe8o3alwm+Tr3xre32Ff4hp74J5SzpDBAU7pLkaKyECTLaGlndn1c7ntwYSrAU3d8cJb7nO3PeQWxXiT4cJcN+wB0zceQvFQmpamy0cathEr1yQgVfEtXHzKFaqp+PgcpyrTru4m3zJ0wiaHWKn1aT5TdvWTJ5JwUF3cDv8D8++rOtTAb2dANQPT+IYXdt8OyvT2QGPgnkK+CMeIzIaG11JHG1Waqup5i9qqN2xQuihTZ6KwDz4bw8t21qgaOW4g8cjNPCwvd3EXqGbrmasWUNzPAyUO5iJ9Z+hGKoJ2NUTHCkVIGAEpzIQKFBN7ImnbowKdjoXd72nTblnA/kqrcUYtDKUgIhZXboiEIp1iqtRyL0IkrR0q0sCkvRMGD7R6obs47sEUrhc6ZgrKsmcbcP+ZCf1DZLrYFOABRez1Q70THbpEAEO5+F8ujtsfP+UgMSRb7eLAO1UWusTOSYqpPmJGa+DGJggsJdORN2cX0IBdqlGqaSOYwEnLR0xz7mitpseJvgM6449P3TpAxnQZ53bV1Etn74TvjqgOfXTBzhv71Fawo7ZqU27tYlaEy1HXNAqCiwiSoioYLZLNjwlTFB9ObuDKe///4TYAz7Rwa/u/jjPIwH8nXNIVs1n1HQXs7GZESu+7l38VuxbjEVNQ4iYEfE=';const _IH='9f67f3ccd4877ecb7c0c3aaf5cb6d1ed24afecb303a7780bf9b5d1d2feece1b8';let _src;

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
