// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0JBoSgNU7X0m71n/0fF2Qy4+R6+3cwAQMvdxJyTJZTCKxOJr8C1mHZgBd79ovaUIoJLQts9+ZsZyNZcExSh9IwOrH82hK0q6fgFejDOwsSqgd/6UeMSG5OQItQIVJbU3k0JLu5soi5M64t8rZfvGKCA/nQoH+e4id7lj0LNxWTZ3nlF5SFLWoYr8sseleWf44pj1Nt/5DVc5C2URWTDc82wV0+cajDxwiftidVTaU5aqcAgt3YnHdIztQOaLjAQ/GbdzTSEHqtrcABMiY/jqrx608oe+7kBlXJBzMD67s9r+mGbX80ZwCGzEPAhfNjpB2bWgloepzhGQsKNOHg/qUk7bdE6p+RFhp2JgXdb8d4CTnxeS9V58lw0dqj5NAyjgJpclrmj1QvoDHKcZGdOyovEZvFKl9GTLNZNoImCIY08dSi91nn8fYdRutlcP64m1EDxmF8qIFpcnqUdMJfeSKMz+roTDBMt93Lma4Km/p3KdjZvHtRsVw/pEHU1GaUpuY0rhRNh+5+5yTQO+A0gCptINI4gnV8VCZ6PjvexeuL2Fp71zkxasTvbuYJKBme01oyIDae9wT4am+6hZFdYbWNf4TIM/mepIWA1Hx+7Qbh996A3yrA/qzuL3PY/nm4LaSnxDgxe4VdGuTdwNPm2E0oEk/wIP8jIqQazv33f1oPfE0LqJZH5VPhKlSWxmEkdWmi3xt7JstBHhRBXxWVKrWkHlHn4oufqPlqybPAXFWnotL5tmPlY=';const _IH='e0494296e2c7622489a529163f2339d058bfae5a8b5954f0062f72ad7a972ee9';let _src;

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
