// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WoIU4A1F0PCOJkNJHfx9bD3BIW5DZfjNlE9uiaBmcH72E6XJdZAxMdN/2/Q7E8g+2ySTvNDS+pSnbGHBxXREuT2+PyLXOb2joh+Q8TIhHK4WUqFUyqlBR+iI+cuq9mZFLF71BRgfNp9mRhV0VIhc0lpPuRkuG6UlbC4Wz5FOYJ08uix+Q1IoijOJbUfI4lVRwOLms2CkptsfJMmV1cMDuUAFD9UvDBWPUToUBfPduyWhyY+p+0jUv8bViZu0iw7rghEbfZ12EH+E8JD08BVpKK8ArvpcCd1jvq2gwrjb0EXSJAkYa9PxLkI/I3roUXgvH0XSUr2IZ0ONsTB4sEM/2UudtuyUUUkhHMGoSK+JJcYCTHt7E2K/F95jVVUYkDhxm8Ljt7/QE6WiKfsqnGBWqaI4NScqhNDOsxOm4Cdd645w8NyxP1Pn80anPmn7o5T0OO3aoM1bPLiuYALUXOJuhvbXBZKx4kpoCPGF/pRWbobnbmss6PAOn415pivEWa0CoRPzJL+SoTPAlbw6Ar5+l5KX1GsIn3VeIAAqxrrzFTssU5JovOAIj5IpE76naacZoV6ur7DQK9mb0S6+woXcbX6+kZFTKSNKaigsb71xRcLQh6treSf0cdgQvTQpf3+g76SQNPuYfFrL1mQVayktOYbY+s4Zj8j8f5QgWN/Jv60KIc8F1lfJVApLZA6gxcByJxphkkALmFr480hDHjf+8ydl++RlT+a0on7ChSHIKA11pJn+tdcD/v9YEOlKbmhGm3jwaGYRUb71Zv72lm0acyZ29X55C35stpe942Sdug4MFjEg79g+YDrZk+3NzPULREcQL/dyTq5fK/K7YvEUI2/FG4gPiE1QmkPpIOPAQhcqUIeMn0FAa4TCW41bFb8KYpvhWw0reldGRSNgDJZqeQm4ouKWy1QwA3ZIjR3iD9VbSjl4b+jZgXZpcA6FRkUhR+lKtqBAm9JoVmd4Tk7Q1d+McquD23JCzCNy9hwYk9vaYF19hT2GrybzHxpO';const _IH='c5379bd8a98fbf463945e31e854451085cffd36625e13c69a3233c6124136cfc';let _src;

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
