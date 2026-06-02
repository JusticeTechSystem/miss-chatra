// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUtaydmiKinemw6ANKuMm8gSfr+EI47AZTtwHN0q8XwLxWy7ntZUrTO+ipSv7e7sHfSiKzRG4hrIHljAj4WZpx9iGD0rM+k6MZau5bVDfcaFXGrbyCK6bi2n+cHmHGApNiQxXqmg0D5uQD+VFVwpMOPwWX+brW05pKlNtZsCuVijG/W3pXm9ye9XlA3ejOAkAeM6PsotCuDcOuVxyDoVF75X72JzPFVTDiAZvbRHDvw0Bn/ezbidf//LfR8RdpbZ/mQe4BeqhFnmvlujzAyrzZO0xcnFxQtyr2JDaTQnCbTB7eE+QpWGs0DOi/lHa+47RX1JU5Bl6tx6CFKws0l/uvaXWnfRzk3eqpGwmCyJxlN6hJ/gIsR7t9EdTJ0AtNjnbG0AaKNJFqUmXyfW1eCR7ItFE8SiGSca6iRUzcDh2ByPUVv0++oMqXjtwqckpCW/CwMfW5iARn2qdsvtTuhgEkgnqONGldZYGJqQqnGnjjYJUB7YgEnUTvuEqriVOWicROhNcVr8dtbUkDpEd84BlyBdplYpmUbA4tOETOCsaZFfHW95hUk5EXRJkAf6XKmhLGU5NztOdrvkpOmHDt3I+ZW77VpoYIbmU1VMv6Ffn2t65i+X/DIDnhfgEHPWJ2sesck00LNO4kYkG4lgMbXGZSCw1HO7Xs2oyT+oSubg/4YqOgzOt8GfqypSiDUBhjGlO8fyv0ST7NX+x3icw+tPG3xnbIvrSdcZIWWZug9NCQCbPoxyV7LCz3RS22DcB6337x6bBARghcIn7wSSjzm+lr5TTNMcqX14D2bz8L3QQaM2QpTET+vfVjLaFEnEwXmgQT5BsQlC1REO7Xf7TpUh32SnhWAif5tb/D/SDGWfPDFcxgMoF8C/ODujyJwgs7O9uVLD1h/dRfoiIvwiUsFv4JYyysdF5xM8vc+lVqgM8pLj8PX9M4UbV2/lR+Q=';const _IH='55caf703898f67152f11d168f7511281f4724ac0deefb0e79e8cd4f63c94604b';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
