// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='h70fzHNSO07C9197kDPfOuqIfhFuyDjzkvan7rOK2wSM54mjIDvtkb0GJEJfdV8ZBqVev47wWLYv/brBSkPbM98yIMHFCzzUf/P8HQ8TND38VQpSbXCSFfONNetl13Tzbh+sZCCwOcUt+2g3HUhEdrm23ZcV8khr29cnAgAYv9sJfCwklsuJHIJa2Nn+y/yyoxYdjTCkAKya626dhHyMY30uP+xbpbaMdeLNT20q8gupwlhPvbQXA7wTkqakuhs9moeCV1yhl/7cJ4A41etz7qNZSgfBbfhRUkGPzUX0ZPsHN76yyjAvuxqXD+tARsfjzx22EjvlN3mS8mc4wOHglhb+WEXYDA3mjgaZsS4XOFMPGuQFr42QQU0Tn5qL+NsbovjIwFsDYjzOx1jB1RH3Pf2mKxIQrmJL3Vo2FAoct4jgIZ2KIxoxmVKTRXJrlf+V4HfpwGs0nTl1WJBUEF3iWiO1vBspZ7yGxk2u5PX7VxLWGKrv3EaImKt+ywsZ7P3adTL3BHfMZYwbk1TAVfM+i5UHSQr81y9He3uVRTlRIJ6T2xgHR83vy23zAnDBA9/+oqdzECI50sL8tYJeWOnietYh17j2y+aJHfy734VbuFjSEka/ZcEd9MgLCurjMcneSbTyO6Pl4yZQup7SUtrP8khC9fPzFxcWgC+1tLpdKj/gn/96BBQkMOg5cGaB4z1O0XSbE2jD9xAQvmo7dMO1oGOShGlwPjGfWxTq3GCSdg==';const _IH='ba520c596640f3a12dc285d3736bbb6ca6b0f08bac0372f1b166d8ae1226afd8';let _src;

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
