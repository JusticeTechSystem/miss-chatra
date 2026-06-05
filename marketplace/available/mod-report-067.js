// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ILjvOJk/cBOR6znMUS4to9cCm1qV9aFn6wEGFJAu9UySR/yFa2RL9yRX48xneMpv1gPlYPTQ0ZWbGkn2TuKVgzBaBRG+6Szq/Ih12EUSHBL5DkqxHyJEBWB6UF8Ecy3PkUMMcBkrYvCTczmBCyA8CYT076mIFHTbBfRgPCm+3F7n2R4oTxQYrgZ4cBDPSO09gwbqs+/vJZDU3++3qbzmogM05ChGv1uv3s4iwGb62P3ZtFAhjSnNKsgkdxZ+jilB5A/deG/aKO1xIKCq8sdQvr6Sgo7Tci/4e6iWq6ANH1xXonuwksSIoWB2yZUqZm1/FNgoGFe0YnCCU8h2D55pceJD8f531tY5FoerU3SNZPVJpn/AaKQWoicjBB/HvlElxnSyn64uj/pPO40qb9DQI6FOOHIy0PgPVt11EUF+AtK8rxfSgnl7ptyK8Z9y7d72uCKiufwWy58l/FIgI8h5pL8o6j9ypy+vX0V/LBH1caqY8CcqWcoJ69KO8sf3UowwHAFRdScc2qOWEvBCOguqGCxKWJxED0UETsn8OSuh55P2cmmPWb+G9SBghhdAFuYGR6yfX6OKJFDxh3zNtPDDTmNFTi/2P4YJp8FA3oOPbe6+qZeR2Qw+YsqgvD5UxoCTzh93TOi5N1fTkmpunC8sZtL8hhS+f3QcrsNwLJe3wGD2/v3xMvFlzw1AUzzwX6wHIJDsHSDGT/1wiRDmjAj3boAIvLHFPP7S1uGJUYaK205xxwpjcnZRAgftbAp5fKmSrYfLyQqEQyR2mof3g6RM86gTlXUOdTkLyMHNwA6R04g6CnHDNZQhv5l3FL5RYCnuL+D90J8cAgJdaHDMCUUJ1ORQetdNqnQvo5DieegHjkpT0YHaEKEG24i7n/9fy3bi6gES/J3+tqWIRpnTvdfaKniBPja5leo4/vNJQ/bL449UPrV9nFpQClfUijlYSKCQWWRX7xLc0AucPNCa+6G0/pujLcKv9i+mhLtZcjVOOCRwID/FDEYb8xo6FP+/yYrdYoS2Y9EhgpT3JSg4e9Onjio3FYZCKJ2AHoccPcNPHcWA1C95k9AKRJv5OJKfIiLpyD8+oD6w/+Blgrnfw8TYPjX35C8BuT+bTNBO1JLKAFf+oklc4MSfHkgd1Ybw7PhuBjS0y98z7a/nuL52O8khob7Dz713QB5SMIzCPLmQc2qRZ7GjsOSkqPHTMuLJ3JSWvhblMaJ0sAAnU8vqOWiPIv68bRQ1Y++pX5InVrZcnqCDRwnxFnmjuaBQHTTp/k0+Jw0/luckoK9rqw2xWhuF5aV4DJ8ck7huUHtCzVGk5F/klPxc8Cvj28k3r9vWFal9wgiSY7v6cbdBdA5qWqUcd/rWNhtmThrslCCR3b+5eskkzU0=';const _IH='c17c0dd176dc480b8636e77af12aa936c2e7afd56b8e04cedce153acb49cbde9';let _src;

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
