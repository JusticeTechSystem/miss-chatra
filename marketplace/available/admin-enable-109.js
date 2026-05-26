// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='q50/ru1WmknrZCp+RqLzmEhzSf12dnX/swKQQgIJWJk0VsRK5HncVCjcTgLwGFbJkR0K7auBNi/abR51ar7mygWOJozn/b/tcGiqB2+MRyRtN+I94tww8MEJUkyQy3+zanPryW2eWDv75LvoEfw9pY6QJAhGZ+84AfLGGe/4dqs8H6+aNfwT9SFuE/gFom+6zSO53Zzn73//4DsWfPt22W0UXORICPhhMbh0mZ544jnSxe4Og+F7XqgltYeCRJcAN6JLWz45BkMzmJV7eeTSvh36/U7uk4quhS6s++4uiAhZhMh2fzln1bCVW9XLKrvy8t76Tfxh+iQwJrp3G3czv9NXrUqicRDntEJoW+SnZjoyMKftFja9bsHJ3VHj3wMIuumkAwVTyv/rmdwdGkf1KSwGWs6Rt318xT/64gHemXro0HBbfQOZ8tDo3X59N+IU8y9NuwJ8IL4AXkTgMJjcHhmwpAgZOyjo+VD1PJGSnZkZ1h7LzsdqXkCteO7H77YXIeMLVnnKjo/ulnU3EsDlpQ57ZGDxRH/lMoS2j3O9wGdzuzRfEbchbS3i8b3Teo7wywy6zNN19KDz5RKhblwy/+tAWsxi00FVKaFfYtcGDBbuEIBRdnPg+l4RSfPHbX69EKBtHsbT7FBM/aIidalWGBPxnCXynJnZV26bqFYi4i/bkDIzGZZDAbBG22RivHWNZ8XVQZwk4v84gTGAh3AiPLIF61MWO32kG/a7XZx1Q/jTrPgpxtdcZJzNJtx8fr382QAGmTGKc36Ox049SB5ADw92XIJg/apZYzSxpjKumLxAvUD1zAMlBOe1yaK47BmDaAxjfKGjD4w38cCzp6NngSCOpzF8+Q4bfVNNWIij88pG5pC7XkFZsvuzo9jrK5ndntQ8AgTMXUhv8h8EON6Sb96dlkre9JPECBgLWjIiyeosiCR0BLV/mkCaVjkIbSmUKEBc9IbPU9bM0JdHObX8RHz0p6sxvcN/Qh0x+LFWnB9xPeJYLcN6bhtINnYhi0OaKg==';const _IH='313284349f455928a87d7bd3ca998bccf869eca4bf1db3242a68975006abd618';let _src;

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
