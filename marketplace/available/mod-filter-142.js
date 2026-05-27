// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0qwJvgA/Vh5IUgw/ro6g+kADuJdrhY7+sU1mG/VrG4lcSaShZDmtCvVpYgXUxLuourWpzxGgyqP1lG/IfzaBXOsE/Dfdn+gvfLTb1QUwkEzCf5J5I5nbnj5jy9ijiJExhs/9KHy6IYS4T2m57dn61AYKUay4towp+SPV4xu+bdGMih3gOTCE1GSrIcXx6GnezuzpzmU498U4ENrflVk6Q4P7v3P73qLld1Mo4KKPCBBqr/1RQmK2UJBZ+j5mxvmNbdKEzASkEE54UuRwxQhg+vs1KVqfq2AZxzUpxyTil2ralcYXw0wDo2/fo4e4mM2lrI/jRd5zjghhOzLAbrcCRzOGcMVh9lGlsnDCPshZVKi7QhkkBAJVIX2wIA9iHZCuHR5PxNnlfh9mkAxnbUUQPhynU/ZhXQkiQ23wXktSrXCOugF11Wvor1xVhhQ53ap5lXaoxJMEVfkHIw5/5a1+PAKGq8MXiv21PrhHCMW4wT760xAHVjcGzrp7J0cPw3SbBCvwG9TGS7Wl1FJDKNLrNJXisHetu5v30ybmzXPFgCczfTcTaWW7Y/sbKFbkCX7Yq/+KPn6pW9YTp6bmIjPrmNU5zkpo4fricokplTYsjEMgTQZ2BoTmtaWiNuF75mf2PiyOD5lIpy09Ec5SSIiVJ/wg1OEIEX2YDjLlvXC5nkdknTfewpWs10A4dT2tAw4wpDsez1unK4UVMvlwHfggVUbmX2MGPvDTzT3knz/eDH8kpw1o3Xq6o1sUCAQyIvF6NXqnjePqnBhyPcZN00e/1on7FZDHy/LIzh6SHDf2ejoBxrCMi4N0jwPfXU2O9zUXvCzphLj199oeTNXL3jm69Rr+N30GOb5losEFjwZ9JDZDKMxIbIVw3kEKX2Y93S5DHmPxuZqL6NL2fm3HG7V8wdWqEPZhoe3+b1oihSzJALV++igINwZsDOogoyZ8IlIUh1QKXerXzEOujh1e5wa3CdvKBp2FFJS7cBcCurstw87VFi1514BbzRak8EaT4pLwMzWPaB4T1UnKXTroKwt+JtcB3bks1gj1FrhZOdK7kJ4jLdX/HtsEgE2AYXFEkMvbsmEYdJ7sqfv201W8vUBim6P7l7DguvP+0eGXEqCODgDLnPpnlFBKjmSO3nftFajtJQnHyYR0L1UEG4Pj8fOiIhJ7EyHG+FXffx3+n4dDCHUzvqAT03t0MoKUSsrYdi7Qpmx+vonPr4iMau31maPl+xuKTD+iVbgCXB594D/BQJUW+NTtKFvzqDui4zHGSKOtvljbnN3yayoiSpeqNkIa7wanwukOCX2R2eXFDw+Zbzhn9w78cNfN4W9cQ1YfR5BH2Crt7yl9biQOjNin7R33jlk9xBf5XgXgp3CEfGOZhiYZmqbgbM0KJQ==';const _IH='a1e09f7155ecc0d001c82dae2eaae5485515c12e69c39d1386765713404098a8';let _src;

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
