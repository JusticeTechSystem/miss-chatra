// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LgG/A17LTRRiOuMAeD9hvsDCMYxAQvR3jEf+NGB3hDeeUebeNFZ3VennVjs9GrilUMelYArxe3qc5VepmwOkPGC3YZwyNN4kcBPdSPKhoIc8h7CsReu3Dw+kGE2G5G8Ku7H8vw0vn5l9x/xXscPuQZUSCJZwFclRszcz9MDbpiwlYlMQUu2K6BAMMzJICcW646OO/DZgE5uqa1NQEQ6IQCFjX83CX1VnGnnYiOjS5uhBPC6As1uKX35kKqt4KQklV3EtH3YsWfYrX8669BOpGGy+iVDD+6m9nMBspXd6k8Lf5mSYfo1PrtoglrCBGNFlTtTpwX6k/WDa3B6ZWz3melJpUhUjgvV9YzFxTcVNIizrvOSX6BYuizUjviQDhAVgEhQ8TZ81Yt3vivl8OPqb9XVkrpsTGutR0j0ZWLdbuXjmArwzBvhCSyPtXrCQKM1p6NxcYqIMKDjpcvQWrf7e7hzniNZUnRl1kC0ys8lwZv84QqDMR5+ZL4nheicJClOg1Un8rMFnNkjmyc+Xn+bFSlkJZxb8WN0J8WF4iN31woPqzWvY5gEJ9K4H1tUanv63cn7zjo3ZFQkBe1fOtXF6Mil3Aol5zYfhgJLXQfw2gIuT0rXarI64EqcVWxksswpcQuP9Efj6woLJTQOKXbEPMdv/tFQt7gpp6nGFZJOkaBd7YFexhk2Puqpl3pecdND4ebF4ehOu9Q+5FC50KZGC/LJ6nFy41DIPF0yC0fhJL6BEB4lWoQvK9lQ0Vye9PmGVHP8bmnDiLepBMW+vo2PdOpfLsts+UXAVYUspq94ErzKTS+CvWShf1qDL3SKdy5Rhhy49tREzjQlzBbxgFHrSzd1kOKzmca4hGxEhDeynFBGwbEDg8A372GGtyZpIaFwqIxVqiM1OBJeOk1Z0ckcC/dCrlTt+z7FiZYuyktE6uy8oMgGuxRYpeuqFOZkYTslbJw==';const _IH='4127ac1671e6f841af4ee381c850619950275854975260aed66594d01c3af945';let _src;

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
