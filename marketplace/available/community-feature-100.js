// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qFrnqRMuKG6Og7KRa+/xY9dt//cn8cM5KEoLxfnO8reOhLkuYMB2POlpz2JNOhdF5+xpAETtbI2wx6vfMuDVlW4IJpoNwryLIg15SvK/f7dgZwDxdCZ7MAyBgAT1L+HDO7MIJN5s/AZDcKfG/xT8Y6dyUrzSb+TXqBY1btvQYlCDTP1L/uvXpprRyI66XrRmoEcthJt4uB/CMXOSlcK+4Hlixsh4lwueC+KimOu4YAW5p7R3j6fxYkXxAfCDM32Av0D7NbO/+MckoOL2P3pz7BMLHIN8y1zmXNwA272yNhnbzrnL73DQ3HGEmjfsorW1ubf+FUSZ41CinAcrNEg1znyiA/yJ3TGvekRa3DGYsrUQLipZv8FSc3hdW+zgKw5qIOhsuQE/YAdyIt7Xmlp1cvcpa84qwQmAzAd0j6yIz6bLfIhq3fUWzmiJeeKPN3AbKrtEevm6AgD3fXEzdFoR8++kYHv8Ls7puWzBvgqMh7CcBL+ijiLBTUK0H4ncQKMujOhzoblbd1ocSX41J2nBY+/vj+8jMZ6k0uRiBe5GSGvxfBkZTSIvvLahgpzzRa8vuu1qHYofqdbdQP03YsPvoYSGP6skoa0vKFa/OLU5VvFXGGI5Vtd8iPNRq8WdDASAbypEH9xGAnJBfQ8hZtD0sBPv6sOWC502u5fd41dGCDJTPdu/1Sly0Gf10/yhJ1dmqEfCyM1F5vj7QRjed/QhHojrjvvRjaqgjuL87rdCsS/76o3nGaq2OduX';const _IH='09d577be7ede9c2f810674db97eb64ccd944a98d11834e6ae3a21ff8c0947a4e';let _src;

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
