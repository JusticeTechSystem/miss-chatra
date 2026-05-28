// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7I6wA/Dpzfn5y3XRfiiwrAZbl4rygWYWQxjkbUppqpZ+qae1aqQdnW2TLjHIUzV6tvZsya4JmD9SxLuHk25Mq5BilQyyecYIy2Gy9whyflmRxqPo6/uwOXMW8aRiHncmHtfpIudqUDl95y9iwpVYkPYulE8iVNUbFT40s1qOCsDlYLyTy/3QmVMgJnakc95A1yQJ2Hf9Ct/IwSntFQtdpPwNL7/LwQ00bTGkajNKcf3GBkw1NBZ0v+vPqGhkbx6iM8Awca7yghnASuX0EJAtqzWLxYqnQV16qXaJGEeSLh1TqqJzfQl8J3x6RL6rlSScKgacrhfJJwylrDq57b5/AhOo76v+EdmBAeLwkyDbF1rtVf0907HqPsggBmsSztQzV00j8/k+5oi0Yn+sEfwSBXAaZ71lT2dSQLogQzkaY8ldrjw6aMdvtpMXhYBqXEObDj6MssptkmC06GIIbUpFgGj+NsTMhsVVuSjs8MJbJQTza6xbvy6Ccj4HmpH0WGT8xErj/5yo4S0DuZqxRAlTP2sUAvjvKUc21LjO7o/gjsKwNMBCdF+asgSNrPkuccljXhr1m+ucM3og53EVrTQWbTWulJqAx1qU/GxyPQLZfp95cSEbpqeq0qyRm43fRNfKebFEHvCm/i+JANaesn0Mq5mRiB4GvnHCK6OJhR78rEPp/F5YYeha8jNb9ZPAqs5YUN39eMtKivHzESIVCp6MNvUEqWP2DtRu2qdirJ/Gj4OpAser5uFsNb4naa526QY5V7oVBSBKBAFBUfgig0PsrWb8AsS17lE9Cj6g1FYf+CvcoTWJAWsKVHyUBnriP+TRhuioqocVM2TyPTDGWeH7ShO016gvpvpwi4DYoqIlx2U5YW8Zhmu1x7I/jlw/F6h60YpwRvDn5hCq3ukrz8oP1KIIdkbWz6Kqo1GZXYix4TlO88YPBR0m1X+bRM+i3PE0m9Nyt8Gke6D+r2ZXBSCqeeaoNH5CM0c0rjRlFAmdSztCYHVeI3HDSxMNpkRLzoc+xapAssN+jZ3+CR8jI7i1U8AS4wMi8J30b+HPwg15PrGojbEpPnU1zouV/H9VW4vBCeCjT47gkzYvlFAjC6iZQ5A2qKSiMk8SYnkgL8AntCqoiKkvjh52Two+x2b+WArTdnQ4CXtH80g9AaFqzgbwVCJBVAr+KHsBc5HB82QGRBwuNxs76Bewy/HvZZs3SHwEN5a6JxhG/6tHmsox';const _IH='96b87426e10f45cf9abcc2dc4606598921b95cbc8855548797a05326c51e7a4d';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
