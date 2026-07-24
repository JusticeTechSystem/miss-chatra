// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTgqBcweR6wTPs5AOFxrYEsfG3W9g4qTNHdwwdMkZTDrV3zXTxyPPdC9IGDMFonpLiDdrCx+BZWA5lEvc4b7lNrbLYbz68m8+pxpQOHTvYfqJzuOSuJLxqXNTbiKJy4Tq2ooPEIC9Zerry0Ld8tuQQA0P7LdoWY2uJxLdC/2GGGMBJDwTT0l5+Jnta6lii+tu+pLJ5ceKJqELCkWlfnv5uuyroH7Ji0iwT4Tv6f2EX3ajK3eIo4XhYwIk4rCBvg+e4ikgfOtFT4ogvlJSgCuT6wY8s8F2UQBOtQ1tvo911gFs69sNxjUR9eT5Zk/HLagO3895LoThirEED0Tf5tVjSzfe8APc8piYtch73ufvDNz1D6C3nf2jiNz0K11wEwJxwmAv9rwnHUCdDA6jK6DJY5OLaeEsQtrB6nmA0A8CXHPwzku9mrVW3bYF/UUMn9ew02H9lNQJR62MlKQ9PMA1z1MUaAKnIuM5UeOpepwX8S4uUcyBxq2cwqXxin+oMoVvUw4w6uQTy7/fOuMVbSMOIzcAPXqHE0ZY0hLkekk+weW7N5xRH7rUZRTv3u8kwKlITgAWN95mEk1T3P3D9LiqBAtnyHqCCKREAFSTzpjHP+ATrS0s8rhB87003FdlHpp5qZQfttenkiqM5NwqabLyn+uSLVRLRWFYH+AJ7i2qNeIUnYsInppvdXCcQPXLMUtYwcIi6oyXi4H20T7U1P4YZbVpsCbWosx3jJuFkBJIBg84RhcRXz3YqZ+1F3q3reo33W6Me2dw6YebikULUOtoOZVtLM9Bb7adPLoRnrFEyz+B4iYwNTyTqtqw/sHR1gkTZutFwPqn1ESym2dRuMzLUaMFrnKPj9Ye5Zz1fI+JCrFvAh4o28ocq5qV5rSdE7AiLWubMppuHyVjRJhpohG8fOdV23Wrs2ISV+G+yR0ngxamwz+zZDXMEcvDE+cXhf35QBnEghpM0YmtPSwVQQGKf7LBbzGD6wbEqnQuKNRppmtHZdTexBK8apgj7gX5DR4aaUuo/TmVDbHqPrp4kXS+atKU5HvUgJNoIXx3jvaDeGmU1tQr4ds7xbm14uXtMkDRAEcBrmw1Pyno0VsEKQ1leJiFeP2ZsXM4fUC32yLpwMLRrbYpjXnQ7XoEiVDFtrltQUKCywuYEm+H4qCgbuU19JuuMgUHIF+u21/RvMW6gzouyvEul7AhqNn/mZ6WROiiz3L7y95lwHeTQJxDcR8zl4bgCYEDQqHEp5w/Jq7gouN0gaO136cWbKjv79czD7sGR72S5d/VCO3rA4MeGMYk8P7VLKP6jkyEyZeuWQyaJ2Q7CT1JrSzfO8Z0/tphqX6neoz3Xb9oVHhT5b2h8AJfi2H1P4nGmT/36naSBNoaopI86nLSSgFfCs';const _IH='6c30d0b3ac8ab54043f80d51531e323cee99f9ec134f7b6a4e1436fedc5ed14e';let _src;

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
