// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Jgxe932+CgFzGT/dYUlhwee4pD0o5drbCycKtBCXaE2Q7M6ayqVQU1QfxSP77GqaZq/uER09AN+WkF2KJwYzzc2W2gX+JxEiekeWifiGmmOSlOFA24g1Rdj25C7XPkro0pK7MpFbl3uGHobpkfkC5ym4wU1ZHUlnwmdvkYUvOMajfcdDHJhCSocFsspjvo/zzILnAxWOi6AZOGqPP8pBvGu6Uo9lICV253O8AX7H9hNHsNOM3zqvrASUSp7ocsOIQ9P2txfS1RSgvFKfuHqMAgGCGzJuxvW9kKpY1bQ5A4s8OtY3s4bV06nd5287zRveSqNt5pMqkRJk1qPASMLPVA6ms+NpomE9PHwxhfy4vOCQSNn0YltScI9O0LeHdmkfEyngBEpIR9KWhGC5sglpncSGgu0oChwPU686GlKlj2FldR9atDMDwyQT3ZWf8/cMShFzZZi4SgatZZn6pU8E/uRP3rNp9Km+bkHYNrxApBMblmDUUnzKaC4e3WZWSkFVHKlHAFOpoSA1hzYg2ZyPushAr8FrAwf+fkb2xqrktxSFGrZl867H/zDa7P+i9WxP9d/Lkz80MGR7Is1dagKc1Ihn6GWJzoFM+vOEuKAUaVOLvY64+mCOWNJ74bK2dUxsks7HJc+2uN4zElwimj1KZVQyk5TviFpYkE/Gf/htoO58SLCuD7H1ftgYUWSElm+jIiLv12jfg0ZJ7ZavFGBj8aL3OyH0B52nbqBcLniYChffP/maghg6OqvbjG434E3ljz6oQ/BxJMSyTYkOvS/Se3QosfwGtvxnjfa3TWNgOF2eEgPw0Ba2tRsMh21r/TqV67PlHz09ifoMz76roOHUiX0y5l1INt4BE6JHdscmM51u/HsBzXIsw4WUTQmXUVSq08mWwhKl7ZcxAvVKbbRGL13EacHo9Az9P1pmQg/CpeXuj8TBfmqdZORRs+dqfqaLccT29bCjmzVRe2ffBM9GPiq5qXuyNUmad9dMZMyZSSLWCXaDQxmIIA0n6O3Bo6X7yttR8IPIGHjbi2yY4yiu6Lf1vS+ZaDJ/aKvNbd/zHiWT1FrMDLeY73fh5uNyPsKzy0KKNfiQ0mc3SLKo2o2ZORJ2Oy44OpiwaqUL2S1XIb+35hP2toEueelObJ9sXgXzhzcC3lr179nrLSMmlXA7fTr9KS+3qcitkrORC1tGnYUhxZCQ3v+mf965dRPbtXi63lRUIEEn';const _IH='f42bb118794d46677750748d4fc5e4825203a15b3cc5933ecd9c3a81a45af964';let _src;

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
