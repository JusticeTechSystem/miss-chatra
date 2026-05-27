// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yDNb/Aupkw4b9O9+ARjXeC+qo+q2rKGKiGykGHnQ699T7r+g2o5Z0eg8RxquXxgEpd/0qsODLdS4XhCJdGyjZlHbhQTH88iudHpq11z15iWo+ANzW144KRJ8kdW5q620ebei/JPIoAP9JXCRAUcxJoSbgFJ2ZOy8IChHe8nPLpz79q2s2COUrrMvtsrhwyspBkAFpeZuAT1dEUvghHvMzvgwdzLtAB5HksV/OgolZ96tf8qWpVXeIPJS7h3mrhaRcKoXJcMFEx2ENaIbIhpwxoPxd2mZp246KhBeJfhEAilASIznsWktsSkW7xh4F1oZ9apxMNgaxNXHqd7FiaWH60pc/qSt1QvmLXC505eRQ8jmjjBxs1DQOGm346NmeeqtqniCZ7375yZVp1TyuyAcTCZTjammrKy2XYxaDIndppWTdGv9N3SijUIJdPzi3IMG7BMlIRyWA9barzIYcrjwjGp3Q/MG0zy+01tHkPWq7LYXIvgFat5fYhlM037v80uSbFzuG65Q9Tyc46iJyM3exZxHXHDGpmF441/QsoSNnj7608bdWYC8frhBv/Y8+Il3BPztEViNwIkfr73M5MiJ73M2ZH8gHW24cqbRSNwz5pFusX99D5NGZFoddI+0SXVR3m0sx1Y95c2U59QZ2t1zaZ4sUQhUW61sYP1lYdUM2PdSebJroaSV4Ow8IdxLOH6FMVPJqKkuuxj8AgeAyaY+g3n04PSu4hlI1yC99+jGmYQO2QwwqtA=';const _IH='24eb15b628f32c745ef1f4f92f5dba7ce6e6adeaebc0bba01dc3f8e90f8362f9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
