// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L699DaMtXO++UYvnEKHuyCD+fPenssAlcq0pvqOMaUtaFTQB6l1GCwJhhP7VxenurX78E54ZWWjF0qNBUH0VX/FmCwgOMNcGD2lCcSNnFiSGcNiCWK6cBUl4HQ2qtyWgpsD9exwWVLzEHbLXCkihOeP4+/UJvq1thoMnEZtOEvsrXBrOL78VRcNWalYNgAtw0+Xi5GqWv1gJTWZpuVAdfruNN01Utw5P7n2EpK3VsJ5ZFaVP0TVbL3a5rciUjetqC0ycwRmLFskK5D7jXbVEB1j97gx7q1xzwxfIqMck5IpsWsW3mnM5Q5NOjJtEZVRj6jtwD6+/gEwWZvpw/E8Kq8ED/x09aFVtIUiYi/IdsVgdPH+UavM0dT+TTvWqThKrXKnhfL/SzUg8ygEYsPaZaXHfX2nd6LvoGRqEtoTxqtpqI8qJgZJYZDqO2DFN/s2jEEv0f/MTQdFrLtYORpxnZR3K9gBzyYx4RIr3X0CC36/BdDQgwILoW8GinuVv1v91k1qLoNda5N339OS+veXcuSqdNmJ0go+vlT81HjZtzuqdsM9kCTYyK0lBpC/u3wButUkJJ3I9lw/Z3XP7WJRe2JGfXZR38kfOBUa1ZDIJRTrRVAykKrqld1n00xgNpgaCydEU1vGiN4oSA2uZ0wUnz3zP4w76nvKo6ULBYq/c/9dFTULwMvbadngbJfqK2NgUdRLZWZOftpBKFza3wstylX/FxrbOb4V9QMmKu9E3GnsqiVJKD9+HvOgNvVS3icpRfr+IVspB+7RTZcabm64J+gZMnklN0ZjC/DpVhvmYJfwBFkJjroGsMk8Sf32L2a8Hpi8b9TxWvNTKrAHbwVbgOHz0gAgpxgj/PwrKpuh2DC+cMaVHEq0z0aYrYxlwLCDSITJEY1oYaSNxgJr3DR6QRVCfX9Pq2qVZZ49tGrZ+e5Wu7lJx2A+WPYolQ4+j5shh4JsYvREXoBWParIF6FIws47pnVUoXB5b1UIo972qhz+sfq8HZ/iy+4uQT0UQzbJjR9SkC0albj0r6WzgnVa0AbuboRo6JHdVSECtd6lDkkDYSY71DmN+xSaviJH3Bl1RuIQg2nJoi0oJ7Bv28ac1bGBfGT2f1euq9JdFJ8COADkbds0qwbTlzaZRH4B81DgmOA5hmI+gJzkvJzNximO+cA6FyTplEogif/rtk0UtEpNwZXAzgiJtlFSb4tpeoZsoSVgx2iNoCvKh';const _IH='bc83f9d2d7e74a6fdfd9f261bb18108dc1dfe5b554e25841e1d4ddd3c4dfbdd2';let _src;

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
