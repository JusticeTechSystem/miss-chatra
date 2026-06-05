// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EXvjw/EZfLOKoFN7cbRIGYs17DiAmTsq6L1ZzZSGigtzP6e/tJHUqKFd+sPitohctEpPBwFqca4GbRl+UkzNUdn0tLGNsZDh8P22qFdrZGA2pSbblt2PQ0TRPgXVHU2VFh5aTJZcmg4G0m1lDdt1ghhKPUtlfHSJLZO8XHxgHdz5mrHFGKnHcnUBI/QIn3pzK/2uApBrmRdnqOHZjiP8CrDfINx4BfN/H6Sq+2LpujPlwuSIdd586i1E+2lHtMuMvnPoAKIlgqXWjIQQhSbjHYYrF1qkGTGjG/3K2qzmD62Hl9oi+CxqsqMZtzKDEjd8WdB4RQrtBhFTbRjOUHQaN67ZTnvIVNAgzg0O4Tw1ejZ6y2zzbIMsVIO8EtXX4pLc7ew7KD/OkwCxVTI/jzA1sg6eEvIZv4U4gM5pxNtn22vjidGDwRdpGaR4kzeQm+5sdujQ8sadOCGex4Ec81lJp41f3v/efsJJ9KTtDw7JBFF7m/cvrhzBKWQZr9Ib0JI4VuEaeyNoUky5M6OpT6bPenFQRGvT0gR6Vzw6okZ6ZS638qI8+4JDy+C3yUWS1qKTBL1sds8j8UO825u5n6jxbEt+06nCOtiiYlFm65/Ed5Ai9KkTzojb+4P4fs37AeVw2fq+rkxHRKHBO2fzCFSqoNjEdVZo45uhPKHthTt34OlMtovhnXznVpcOqVW0A3nCukV9XC3wM89/chIaiQO6R0KdRlx94s0HrGWmTh+upa6LUzUcCju+P1vzP0weXwA9/zO2tQjAPSwvGWoG8TYPxDAjHhjy4m+pSMEj5IAPuZKzqJYwN3QZ7Ys8NFBJ5PvHUt4KThQ7gHKdxeeT3Wrm60CfwlpsuvTatbSVmbjzK50A8WjOXEEfiKepMQMVP6M79oB+ndDKvdoTZ0tbzqjLRhHf7mS3nh16ws4uRDZ8bLxmD/Qt10d7JG0fhLaEeXCySek133Epuym08oqBukFJmFMV6ZQ7mwDf1uc1VfwFWtyKuBJPmUIdeMX7LLr2M9Wbi8aP4X0FjHtYTVikNzwLzQLg6sfuzCG+etHcI4hxWlgjFEcc+KqRmLqGQyUuiKJUpB5So0UmZJQWmergIrtPN8J4Ku0G5bPLrORBm9YSzayYaVb1wvY8B44o8DwHk7grKbpt8kYM3s1IuRjrkRaLGAo6NwmsKCZMRWs71VGrBdiDgjKaohHeWUjozng/P35W0e7Vpk1zadQiLRbQk8w=';const _IH='8bf60501825ff927460bff0bdd7bb4abb5f4ffd5df4a948b0498629dc36405ce';let _src;

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
