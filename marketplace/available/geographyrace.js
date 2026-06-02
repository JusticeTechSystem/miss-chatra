// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='03qHIUrqIJsMaysXAnThhzHpljaG7G6euiscStVdOW8z6S7yP2Hv1+uPO9dU27xFl/aSAzRVzChoo6+Hc14fSGzh3zS2osYI8fqNKwi7QXz22Eo79B6L1wIPY6wtbqd7cuV/TO27vSGDQlQzAwuVGrSbpcE2heE2GQBt0SmY76cjoi632G/JJzezp0Y9sq4Ps32zB7eU0eExeXUHendboFJVitV9QAojWjjqOxyEItOu54llYM0+GDAprTitqkwxpS6bzfad45KSQcoou4itgHAVQLAKLiS3eQOa8kehGKLAATKSCVLDPL7ksaxSvZe2NepObNib1fXFOBgd7k5mSMIpO/x/bp3c2J7W8PFtTIwFYWaooaMbd0bEvoXhp0HdcbaGt+uiRbZ2J2/HRibJg+yR6YgR+Ju+23mwEidO3+VuyPnqT9BX1uKoNqoCGVlcK2KQlZPk6UNBFEmCRgwZmU/JVe/9weL0JkhxAJ3wz2FmO1+TuW8DyA4i+rBS7DZCwazBxS9FcAzw/QEGzvhsVF1yhkoM6ms4KRgyjo520t+nue1Z/aXjFR1D+ggWCMTOLTeZm55BiUtnrO/2U7jWToIMuoFcnnGYyCvM2hCl4iiM/NWS16rCpHePxpHr35kVKXyZ3YyTkD7kQOvlOXXSR8BM6OWFArDiOWEI9ZsQiL6/n9qvHIOcyjXXgnERRG+WEFJ25E0RBmiDTM/UWGuwS0pTXZexBZXsEM5QV3syMEn3jJpex3hKVxUkIGUDTfwSA6e4LzTWwjvfmhR7Z/iNAeN3l989Z1hA61n+hjwS8xCBznR1vCnhR7R8nEVQqC2Zzdx6QAw96aDf4OYSBw41u502Mb2lKp8f8wR1wyVoZVHRxkaHgxdLifykmyBNVNVyk6y8RXFpMAO/ryR+bYeaTY/WP93MpjuWPMCjPnLnWLoSQm11vzGoytyozhHt1+uYwU3h6R4PuRf4Dq9Or4tVKF57BkOAP3Xmuxxdw6HMfr8ehliD4HgefLsn7rRgiB9JdHc5z0VhzOReH6UskDn0tIZakNHXRyhWlRWoDVV5RA0DOtijblVgxygrwoAgPlCdvPmmXEF1Aa4CJfB814SmjPSylYEgAyu3Vf8zu5b6TLQCG5sf3M5RhYicaHhxNgYelIwd6ZBgtBd4OgQfUQ+O4hmH++dJXQ2wJfuuDVLx+OiQyM+U2jmiX0pAMeXMf8n7hFFU9Amyyxv6f0ldJSA=';const _IH='9d5ef2a5ae9777c3a3f34cfd60fc717f05341601961941ab193b0e66067d7151';let _src;

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
