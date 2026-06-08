// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AbtBki4SX5pAYsvdYYTgm5I4SRvl0lLhMvp7JdeW1xmQKX+5OZQvxRSIovKlRfSHnq8mf0ApFRv4GTUQMaG77KWs+6OuuwU1RRSDpvIdBg8xGxAv9H/9fnBIJzOnVP2SVEPnN89JTA/7Q41zDO0rTcRNbJXqHTyfHkMM4+EuBsCzl5SYgXDyQ7kJtUYXyfu5eict1ykP/0WGpE/76j9hKjR+djzJf2BAs28S65hLAGEfS+x19GtOBYHUWUU8Kqf2U4bG6m2eFPCm8Tm0mvKC37XCJLhWUuiiqvfBlafyGX5P89qn9AzTa6Xabp9QdKKckXWeVXsIdFlTh+nxPa8Nvl6th6lkd0ah9yUfnncCJH4X5HyEiCOw2qdVljea3ZDfPnaBRBdmc21HaEpoFo3oE+48B5emKytK+on/3MIUXTeRK8U9MMm2LyWYWNoytVbKqmEYrIjcQgRlKzY/tDii1G8dMvOQMDzHKeUGNRKDIeHj6SDt4P+hV7rjlf/gI4GtAqyjPy8kSU8SSAQm2xNzoaQYxS6SyXbC+28Ft6Eirg1BSqnPfIaLM9MMQHMY1NRAk+qCLylyypxIsIsSgA8GSYhdOrAFhx1hrep0CfGVUS379JEQsdpvugQR10WO9a9rmVjdTN7UqfjgEStqHIJw8703N/FU5FeUEwS/W5KEog+Amg3+KG0AtZpk+6IbvjZ+fBOR+Uixzn1N8jk7fpBeN6CJvgldDOVwTd76E1JCt/nduF+uKw+pLXsz+dbjx9ucEGOwBDwDIwvtNKQGGSFLfRpC2yzxNrt1xqnUGKgCwwoSv/DFw4AfXEyEjnV6eZRW31LKfvq3U1XG6In2PzeHI8BM4QgijjdW5KPNCk3rS6j69AhehSm8IF/RgxlVztqlhTmdZbYK9wejhxIMRz/SEIElSUuD2Us646aQ5c9xOZoJ1YJHEZ/5hPTKlQGXNLCv/BHb7leSP+650FzmJgRmK/aL/+S9W9uPr2Bi/rlQMyOy0KXmUGC85qdLmLj6r/sXBeAlUBAWp7T9aG5HQFHVonhGy9AptyNHKdtQmKUlwNIEnu/Wur5rBvByHHk16f1MX+y/Rd5R+I7JWW+QGPdPbTdfIE2nSGkzNOzH8vFbpyLDICA3unEELPgczqfOAsV10BDpmMxdkEQ+j8GTccSJlpWF8mapfueHWO6mHp86gJjjomM61vfJ4K1BQ/mfWoacVjqjXOtPuIgGwEtbBlhxsy0pmvFbLCi7yaCMh0U8jU8xKl+HRH0eeFbmjbsk4qvIw9U0P2kIxIm95CBp9vy4kcJzlEanZwRoQzZBm4sL6ZmQCNZW4kRRhEcneoi+nfr3VZwH0Do1KDlOafSCDxSP2s1BYUCVhm/pEpw9JkYNM4pVSzVyLVdI0DpuJGUnYQjke67oX8Rqa/bzVM9qF3PIbnUSqTxwOfXHTBgiEeeEaYikJpGaNVNR1jJh6QK7vr+mXfipeB1TmmfUWoOMvCNh7jsXOwH45mg8UAgqeAJ5f5aqtT1Z4q+wD2tlHkLL/5LlqP+3b8XmjN0=';const _IH='b3feaeacdb3bf83d8fea597b2aa3a50fc864fcc1fe656eb3ada83de24cd67cd2';let _src;

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
