// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fVWGk/FtC2LtgVbcHjoaies8C2gm9cXQnnZ5lnxn+d4g7mPp2Ab+GtZSB9nGkpqtYOcdijB9CUsVCIDZ1Lf0xi/zEE4MXCwAN1Kw4KgTsAlnDV4onE0uIiruYIGWWxwUiEUBZVXRcAN3SbF4u+ND7sOsyYSiUhSOX06qATG9i6kJBlv2sd+Kdvtyn8DsocxacAE+fhDD3qxMmLZ0rqjD3CD6zmj7UNbevm6buSjwbL4GMO2shNZyRY7zkV8yrvpWJIywwHSU7JaJDnhxtLAYX9naip1yTKslOKyanOR7vE1Cc3frAza20PCo2A0cua0nTVtmr22+SLueOYfkXQZGMARxYQfcX0NfLE9DdX9GVy2XTZzhE/Sm0R3vBrXgE0yEHpl7YIFmLWdquYyGtpafFJqLZAxQobVvQcHdAe7VlQQSDphZrUDzl1EQ1R42dVDQ0t4W3r/edhlFjrwJIRWYQ1JqVQb2BgYqxGLvnJ5VYHp70jJWUHw6IOIyuMArb+GdRQHk3M4c8+JZlbAdWfP1xjGRfZ4vd+LiXUmaoBU7cFm5SpxaTIMKjqkYpzGkOZuoB+M2tnAhiX8A03YeoIqx0uO4QY3k0u0fdgQd0kmpf6M4PwCBe3nhEJ210YMx0+jqtMESoHbGrZ5QqHtmpCKt1SgjfXumM902r4nAmeVqj5EZVDmi0ON6WtvX/7k7Tf9VPQ3JfsSEswzAn1w7UYNw1rL5MxnWfqbmxDrnr4Tgs46IMkccFpUEHJN73cqkNlzdc9wKxtYeYk9RHlqTq+kQJIv/H6ZjAY+m9wZTktsezJf6+IMZc92aN6oEtTDI/ZLnCxHRYLBiY5Ox+4PNceDbilsLEwvgJxeXPjPbvR8nXh05r/8AAer5G9Nk4xH74xZeNYRq4+7xbOS0MuetEvxS6lMvoCu+ondEM04rNX5SP63mjwkUSpgc51eKIudaotwECgs/oBkTI51WF3WrgaXjgd6eLxMIgW5l6KfNzjH6dPWmi9RajdLKALnkxmSk4wz6YErZbYiF4zNuVwE2m2YL32p+lkHXgfpv6GV1QYHa';const _IH='1e21ddb7eafa5d4ff60a1efade638d514fd895d391bde64c2a148e55ba425176';let _src;

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
