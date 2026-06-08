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
  const _b64='szZi4G6kzXthjPtPO/zsZ05PhKBks3cHgDVltS2lgos5OLxclfOSF1F/USZ0n3SOatvvC4NCfkcAhq7I2MvZXytoBgEengSvrb8/EXdMnzNkSbhg5Lo9SRiSbbEt7tfVd/o2FX3SbVV1nPE/9m3DlkQ8K2P38VO+VKg5DEmFuca2K0FKQ1ghxOrnj7/6elSJ4rI0GSIXWpW31tpJD8/AOJy21LJlf1vgaN98K0gaH1vef0NpQTC2Zl6fiAgYkN5TRz4lzlIwkxf2HyqzmabjCe9kofnL1MfZg7y0V79vGHfE1HreYQId3wfERK/VW+QMApy8GdY6m0Wvq65bIM0qn3+wqpy3ctDlcnCHAKZIxbjuSWbhL7cNh8njDZ9YI0RhUQNGNfVVnBEaeMc+Dzptn+Gp1TzzjoJUe/uUQgftiLXOukkpNy9+JPCeE9gOCIDMsvwX+aVi6Iu0tdVAEpCJGNun6+z2Sohd37siD4bmqi9CYUK+5Dnel3oliZw2NDnwGDdDDosVuEDlDcq8bRgQMNgLNvwkJOvRSb5U+g7ZDOiCaypeImtLjK7dISjIe3l7OyqUbUMG0kbMI2usuzotC/x+xcE2iiZKlSleLrvrYeWW9lvJaEFmTjDHYX4+pjJMczcHUagb3Rj9ywCspA7DhUG2FylSuuY2/qHiCkXhQVdfopFX/4n4qFcT6zazhx5hcbvCdk4DdmE+eT6YVOvKr+1VgVtxgerq4GkRJmU3FgUTa2OgPwpew/K9DS/AVoCt9UmQXusY2am4OWyW6M15wZCY6FkidpEmmRICvozlbSN0wSuD7xpBaLOApx7B9TUoolrvhqkyhOoH50373SGBwu7fuqX4gPTz411br3zcg9/6RK/KY1dWsE+aiQRhZlQKetxdU0kaJaQGKUvCRN8h27iLm48aEsQHQM667NaQFBCa9nM5oTKUMZY2X3ElWemhhkfdtY8vOQdHAHfOdzS6sQRLzq386p67R+SNs6mSlpQO5I/KTH/2nsWDynS5FftV/XrZxr0M5A8frJ77lpKYH0Re8mHMsjjtLZUxBdlb1eXzFt+wK40Uz4zeupRWZ5dhTa5663l3m5euyc7XWrTgw+rOYt1bbJVewKWrPq6OqWZQgHFdqoU2bDwL8i5VIZPwAzSpQPKkPVxGZTDEPwIp3JjdMmjacR9vnlG9WbHp+TUgEsTJe3dOKO7OQZDBTCYACc0ez4sqKKxVNPhaXtx7ob5WTf2g9yMcTe1mCGcnyjPvV3L2s2stUrSiPHFI2XdJexrEDSV1WgI4nBm4T1ZRntgscWBx4trW38NfU0+engXlamVOTlLAkw61zp6rQD2YRlf+DVd5vTQ0OA==';const _IH='7d84f09fff524c580b35b6c9f19e60020d123fab52402da7be73dfd7198d8bea';let _src;

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
