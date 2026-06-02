// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L5/vER34aJ8zQMyz8eFIEEtWfZRDwnOz1U7mKhaCyYBuUlrGApvq+J88GFUbBaQuO/mawosLtE3ATg+DPchR/A+SdPbig3Ax0HX+tel7fH+Pmna7tFJ7p+4IhYj+efgUO2mPvXm97XZQb11obtAv6FdbgT9enBzUwNJm4LQszfqFUFGVs27NonNmHWkyqlidWGCthfawucyXjPdXUv5pIzG5cW8IDfYZgXosnvig4vPiAJ5L+sZAJ1TJOqgdFaRCEK8EqCJ2XhykAhq36NU4bjqwgXWzBq+BJ9utlqy8po8aj77Tclgk1Chzi7pTsAVDEHb8++TNg8Rc+wgPqXZ89fZla4xRUexaUztgtd4ERDsccmIUmAjUSnKUFBYcMdcHE7UhMAE4cvgc31v+MdM+U09Q3+vy+tl17NUXSyhIr+rZBLDpWBtp8wqPQAJVw1PKyS3F6bmy5UWcGv5S/AujaEf32+pyMVwRx6I8LQ1ttkRiwuOicjJsIOtnZ5GYZag8HllwA2vd0cyz0Lciyyl2hDriMJmJXsezRTs8DbkbybzjhFBBCAP+tQ2VBOAnAe1BIU/Lc8078lNebxLnZs2dfFfayVnHxvCI0mrUlrZSaCDjRKWj6k3m07zpcYHCFZuMPHceN3tll9nNyNs2gatBTtAQCyb4AxpmJloy4Q5Bs0Qm2obRD/jCjn2B2PA5e3jsTN5uXRdhym2gprTwTnxPGRxwrjsfYyaF3unBCNxuoiuu+wDsf5PdvGIJ/PR6HbiI20LRljBu+BgBTmpn/sB2OF5tDG9coXBzOmkPLwW6MaBJeEVgl3QQeDtvQkQj/2dhTfs4aXIlRNVAWuRi4xYLc8QYeCDziRdTr/CVTM+iqtLq5tyq9jMoW1bMMixNSWMtrbVi5q3BVxxTMvUkktyFvisSKKpH8lB2OPTgszVGi1EroFshN/g3lfUImiUvK+DFpJTzIgu9YznYQckS4g0gzdSQKgodbihyKBPF2qmPrT/LPnVeAGrv/N1CuXPArLJU9mfRR5IATgg8FffDIkH7pmMXP/t9fzgaFsMwOsAPceuQLsJzDluJU57gauH3VW2THhEtEoxg8KRnkafDMAvxz32OGdWdThl8hdZ4xA3PL5Qf2r8dtKL0BozhzYmsIWZnEkK/8/zsIXL5bACnZVkEZZH17jBXa8mSHX9/XGqx38z/99030ojTqKuLyx9VoHBK96j15GqrHpw5qZrU4GTUr+9+D0hoH1cUg9+t7nRM90npG2wh4IU9tJameKNy1m8fsCOWzHiMRPmm54b9IIbH4i9hRDUyeT56Um6m+FYP9R1Np2TXmKjD87lYEVzxWx1K0sLWT6/u4yCcc6mD2/SULXLRGNjsJWQCp6Wmy1p7h8f6e9+m3FCGMg==';const _IH='133993cfdd7102e4e70ad9e41b33b460640c4f7f39fd60dd4ae88cc5e7535d39';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
