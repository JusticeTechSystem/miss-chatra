// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTFxtmYi0XWP1r8hDItIqMXmkB5ov/m9bXxzU9KZ2D62LIZncNTqyUpYuxLxA7aVoowgffJphmtWw3vDQgFdnIlQyQG7RUI+wLgkPuW/kpudlLpLGCoWt10v/mSMAYJpMTg8d1SNlzRaMHvo5FqQFR60nHIwbZyifAJnsaedYJ6FyRvxa6rLT7PN/3GBBIbFywyY/GHMDitTiX+kl2rNIJegJZcWCLXWEeZb3ZNJiQjs/uiNJJ+v0rOn+hDqaaHK+wrWh714vABS+mM+ktlZqGJo9BqejiCwip6cw9zgDRFDQFLpkUil7je0gzjZWg87sXxSi/sSuRm4Z5yNR6X7YkfV7b3lnYeb4BOSg7BmruwL/XbLVN+ShhoEMk24b8Tg6ZB27fu2K2hUgj2fY3bEziOiNt36sGUt+b1bp+dJHDN/WWJKBUWR9eUopVNDxs2Hg2Qz1OSq8vRDWHgMpv0E1PJJ30MsY3K0NGSppUG5aP2ydDntGACjaUYPNFcDY3EMU7mx9e+bWo4UZAjeM2tYTDeMdLUxSi0viMUH58oZwKdTeDb8XcrIMN039OiC8YYANkSm+Syc46AYeXK2e6fOQDRPGJWUkAZwT+nLNac7sV6aJ/zL1tQJQwGA/Tpx7oZ0r++sfPDvX+YjdZVdjGmAhnkGLqlPjjso5WZXuFhNgH834IslWX2ATNj7LI9DUqU7qRI+JNgEaKdYsMFytFrcX466ARs1fedV4t0byqadVZg4TYQS9eVXda3HX5DxSW+iGatKcyK5kRdKQ9fCmBghIcs4NjUErJSzHHQm6QWjvzEUbpVAoA/AzWScc3o1/SMVbi6cuB/2feDU68365x3hoghu5WpEsjrYB95hP6xCosyflVqaXIJLdAWis53ukOud9Ccy0D/OKb5OsjPgFXiEUMB32+uSh+8F+ezY+MbEZFARaiIwCZvEullwexpSN1stDUz0FlfUt5sKAfaux+dTYuFcTxHDBIIvrKRL7tqV+gDgwd6JRUhvvsBZsS39Xk=';const _IH='b0dbdf2cfcc030931eec831e301b3868b8d202846ba382fd7d886523d52f6eaf';let _src;

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
