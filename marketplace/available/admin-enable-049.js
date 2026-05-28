// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bamI/SKEOJv4Nb9ea6+RuOFGBcaAbPUrul25+dq3StF1k02YfwguA5HwzNyohQRNnNpA/Nbyl+1RUAbCwOwy8H2S9tsA14qhO0s9TSlGaJkWVEQS3xLj7n+7bhUiuJrDvI33y+YkfczuFhUeMItD4t5JH0DJFdTxiUzKSXwGazUUTKE5vJKr5gq/GNJ9g0oFiNLHbr1TpLj2SK7RCkBJYB30G5v4PU+0SbeinRQ4LkIJaw9wqFgO8dqOsOgPjwTyaoXNohL3a3nWg4rdeYeoV53vfCisYCgdYNnGreN6RhXY87uC+NhyoZk7+H5j8WqVj4j+yCsW5vuWY5MMe9RuiqUYrfEMIiJ8QTe+70qKCntxf/nwWUhEyhR9yIvVXYYsjSKDYHYopDK27lntBRRepN3mVjROlXTKN58PV5Hn0UmoeGA2Yy3ZuEvVH2/73aw0jf7y3lkFeWfpOeg9q547ho4am7Fo9/ocLohpS+qv2VXcNJCZqG8FO0zSk6R9TaKQxx9cErqtpzyJOumsDXNVETbz0BlKkFvhEyj4/fgLz61i+OSMkSap/CdlrlNzigVn0nHtdBopkJtVR/JDVWz185jLpIvoMYu/4AijSn2ZRr+QAobAgcwBvqktSwIkYdb7+ENALgABD2BcVXyT5U1r6CiQbIKgn6HqTvA4ldjlTi8azq6JwmpyU1HT+cBItBJZ0GsWBD5dzctikVNbtUOkaUHuERtKklWTb9/Pk8LiiQLAMd6KDZ93OShwfJERwUsqxXYOr4RR+ub/u+UYdqUoTST+K5OD6fn+T+24WGGt5KraEFKInWA5bI7OGvOQxrPm8aQLAHTwcmhZJPiRGsSt9gl78QNbaZz3gpUpnaIYCO56eaFJ+vZH1TSmN2eSflBOlIpJ8V70e+NF3DlM6ZguxOtUlC9nFuP6cc6Z3uR16Egqhn9+SOhpCNULOMti6cS6yIMix/JuFEioIX7cABHagM4UJDkQXETY/zkyHQqAVDKxfYew0cvHjwKn5c63';const _IH='5e7e0cf7971f7dc4dfd606e39680cc4df40d7e2f1b0cdd5ddf4af77acb957017';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
