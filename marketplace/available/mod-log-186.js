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
  const _b64='fz/cD+72anPN+51gMCGApHP2XUGBubzO1Al2El6yf+PPnk9tYCYtJA3IXbrgXNwIspBCMVwpXLXIOCLF6DwalfpR2x1e0WpfwYGwV3nAWkBPMynek/wFVOIPtXGmiH30AaLYFqW+ECTAPgva3hzS92Tr/a/z3x8iHWd8ndak3kcVe6C8p/Y3eTvz488SK5Jhjkl5bn46V+L3FQtKPj20514EK6q03r7Vt2YPYxA9VoaA1/Wr4u/K8lEIgHKUdQ0mTfBk5cLDjr2XL6XPsHrloLHVZIwCNyNYB/ghsSpL/lM1i9f+MWJ/6MWLP8wXQZMzLzmtBdO33TgT+AyvGe+vC2FBm4vJcjpP4jHxccIGFbZkbkPjD8wVYuy/hcbNyrVSaweoz4t1tC0a1EKeFZh3o3GVXnKHGyVEvR5zbdMjONGpFqnNm/Z8vghp85Z9vW+w/Cmn0A6YM5u21sPtkp9jepKCoYwowMMal08Qq5fQq4J3vnEX56N6VOrl6SE6WGeJ6RU4hHYbywOLcBUAVx+MnER1NqUlWqTqYxZ9kJbCgv3cTjjIiaxit9vlEJ2F0uXQU0RWcktJclSqt2GStQY6Kfv52Ccnd898ddVbmFqsshTqByuvt6pX5xXpFD5uvrSMXdOUorFJ6HGRESek39OZJp6bGPRmFOIkpFk9wVmjRh/dyOoFhqQeN2gImsDxq/4QaXOuOiYGGoxk0vdoIdkrOq7EfI22Ehgkip9R7vMlewimIK77wSm1wzm1PZVr2Lmd+nDqLR2ZWP+deiFymiV4KkEYREK7rT8690TzsQn97h+q6/4qQ/mJxxDrMZqYrO1Yq+GfRFIYDM1V8XEwlEBLbbQLgzPbP9vzTI8pLLZ6PRwRhenqrtOKDiuQeEV6Hsp1LWgekwwFBgsmFcSi7QzVdnjXfOscrqk2v4rb3TVrterwk/pzq5/zdq/jZ7ZuUhF2u2ydo+utROQ6vumN2Grp+fnXj5+OF2rfTekFnlpa2PGrSLSgOCWUQM7LVzD2A2/W3hF19BTnjvHzipTj9ZL2sCaFfbEf7NpZvWxqg8hbtxi+7IP1AvdEZUSuQYsb1FfOhulVlDfG0G3e8Jnh/nES/p8hcNDPlvqFyaqKalNWSygWG1cnY6yXW1Rjgi2Rfy9Az5WRRMH4FdIuPFbtnBz+ydUpg2Teesd39oDF0DydQ/2kg042xxZ+yFk4uKwJeieURMqmpn9hXp5PJG/PZPE2V3NmiH43QlxJjT9LgA9xgYJjkbVGissix/HPwicbhjXVsLjMZfALM+lSHM6+8/Rc2lPdgd6GuRw95bqzs2LVaDAvmfc153otbkWHzrha48Bf4ZDQ1XUzOPSiYA==';const _IH='1d48240062f1f739d1603a62e51942034b70af67db35369e27ad892bb6d6dd97';let _src;

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
