// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR8ATBOxGUtclIqGFy+KH8rwfsC/hXRqwj6JDI+xyI6QvlfCW33LHeBZ2S8pgia2i8/6BiWpaPRh8HXMp66GD9Fyd2X5cY5LhdTyH7FfCWdm752qfv/vXrlm3D+iP4TevWMPJYwEbTOU/1i2Jiccx4ZflA90Axq917xZqsYM7a1f7WT30mAJ+9VF8DIdGxuxzz0iTj/xCYnANi+3WOq6ftaBoyhyZnkbY2nl9BNUZEkzH86LyF+dE7322bMEatOlgIrOtwsnZfqtnM167mF0gEBsmZFA0YeWOWAreAVzCzh6l48kiORTy46+Pi9mmFxbeqopsw2kG1ngbJdCKQshEOs+vvS1pZV4jcrklYmAYlmdDNVi2zK3c12jkGgt5j6AtxXvFQJuLWYxYVIdhxEtTg8N9wtkJMoauvIVH9h2M1Cp2EtOzk36jMDi8dsRsa/N1B8HgPAu1A4D4VF1AVrco11aC7h/ZVONCu2TprSlBfH0XmIZkIpAk0SBRZAcbBbj4orRapD8Z5L9S1KJYDmiWzWeuQdoAfNQ/PWHwOSIPbltVDdMUmUU3i2nC90dvaZaFkHNTWYxtpGH46+gYOV60W/OlZ5XcHwcmX/+stvqkqNzy3EnOTLVJeQmYxmdp0iYbfxdst8FDpOvH3p4mY9/wChk50iQKbkMJlms9e91OEo60KVdfdgCsYwCiLyHiYsKlcFz1vs9TL7gkSc3XVDWLOe3rDH+rSiXSyNPz7M6egFJPrL+5IkJtVun3EB6xeZ+hdcZCX2UojFklbjmFYWSstBuZmiaSGTnN+XOerCDtm6OuPP4TysC6qnES3hRUtWLEpKZZQJyCdX106QYIcZc/tBO+DOznslYfb1JIiTH/xn9cNYZy+TK+uEEx1MUSCBXFWvfH9vqQwlkODthSaak0cXkt/eLGYZzXtCaoRLKuMEX1CVjxp+5m9b2XOQMXiwU+yRl4juvJPH8dHZwBjBoLf1nDMq3yT4cjn7xh+Z9/rG5zp7b3IS0vL8mc/zCWPQ2NPWjfcl3UNLoazrmp3nTvekjDUQ7YH/9ihD9b3I8VqbehgKFFw585ynTl8j50GhMxNbXDrwyE8u/2f3t9lRRQdLgTQ49PHuRfFfctwNbRa6kSLpFvNwXrq+mhzutAr+i1CTCiUA70pinyeASi6ukfeYR4Gvk0/RGrmKK3M8iTkIAEaVHBNwIGhjLM4fYs44he1JhXVT/HIbEeWPWhwrC8/14EI=';const _IH='439c73755576da853c33cb90852df03e3705f01db4d3503fb6a6bacd377f9c22';let _src;

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
