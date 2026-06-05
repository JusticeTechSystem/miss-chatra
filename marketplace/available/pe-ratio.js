// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Qr0YSvvRJ6ZZmfGCfXisb1BM9gSYE19lrg7Pvb6IRJbqbylR74wCMEyLYGcrzdBjYrhSLtgpRyToOjKnt+lqm7QhKbhU8M12k4kHlhZV5DwBkUFR+8dSCE7tRiwXs5PGQ6pVrAeHfgBg7dVAWxHngRbIeSEzA63u3X5BXVJlMEAlVBwd/DpTtCSlWWebU7kEkhn5gZOI5ok1oVVpJQ4kRNiDmkAwtyMG0IyQ9YlmzS/x6iHD4sX9S2x48Wdstl/I4IUc6o4JGWEHTRUdTlV7oyIQncAxrE8FsWUrOR2icbU8nSzlwTKr17lB9tzxNHzpMOFD7KwnWaF8bBGHY0tyOyr7Ke2MoKxMjYCZ7oXuDdxwXq54pcgY1XP4yamE3DVkaQgyTlw0ek7QOiZ16YRDukxTHctmFLB0iBZ6/F2yHg9wTsRL6+9csnbKW3xtpsWwuYdG/Y65J6Y1VL4wbtXC5JIcRMJPmF2y0E+mtj4lfWawo1wyMu1wxf6f1ojXsh4Yf3ieszZqDSjLgKKZzoozUn0rqgtwc5mE11MlM/GW6GSenWbPEoixmTwSmxODwV8Fm5KIAQ9fTVwGdymAI3/FfxbVcUKggNexKl06MUXbqbW+MQQRt/KrJQz8Gv5bLW1H/Nndb+PHI/dL6XqbBYduvHP19k0y+05/W+XFHri4Z4EK7CS11XsRJ18cGGoX01mdDluvgklrRbrI9XJWLiFkiZdAu4R51Cqy5giqCsIQlUL1QDAo9SKlpmtP08ZT3YBdtkTn58/iR0yKB+Ao3cQhRVNIJNhxQDG0fHkeeqZr3GxCNEKpLSI9XfgijqsAxV2VNiLabjlO7T/YhonKHpDuhVrb6jsm4k/rXCY+nCgMzKWSFteiOpOQcdUFTYIaCSWUYb5LS33xYVQD+MNZq4jWDlZWMyHW7sBCFYylaNyRhWnK+Xh/eGfYBT/D+6WlR6Er/sVlj1RhYBs1Cok8tyZQl4EGUaBbJGDwyq+vBpNuAoNA1hywFY9ii1qu3LMOMgnUC9mHo4OSxT8S55t5AgniH6Mr0oCUmHNglYZgyfIbxYYLmKgz5B1pY50VLcEzX9iTcKN3d8mEmEh59cleE7SWqXbsMkA/g1D/omSxitCf49dZvSH1byDy1SC9Vw==';const _IH='11ac19567c5638e9e3bd4a7ff2caf7223397bfa875dd985ddeb83066ff943e51';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
