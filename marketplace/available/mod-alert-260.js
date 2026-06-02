// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FUrqEdqHj/oUuwAr4b+rs+iTa+fwrClpTuY5ocsiq7rQZyRT1v8kSO5aDOe02HL2mVw8xVCAoRh/jVS53jcs2b8kRFv5HhYEaR8UnPJvtNes0WzBNTxyuWrPMgWXieKa1WEOuAL8LJHznolVg/8ScSvv6d/WsD1L5onX0YSFb1VZQUcV6klSVMdqr11T1OSeX/fhItW6wD7mPkxeuSdQpyQ90gPi7XMsJEYvmeydr4sUVLkpZ0ZAfY6hXCxOjjn/RBzeI9kF7ZcOr5J/YtGit8hiO8JGpYP4Cv4xcnFTMIRw+ogEWt97aw2Oc1+FuD8SzoE6kTDMvPIsP6m/rsHIGoudb71bRLAPfVKLvQLope5aAD08GUupoXyz307jXk0KHWLRXsyCbf+TOAJtuvjjwIeJDKrLNQEHqLn8nyw7jAzR7AY/rCtUYWRmnIQUSkhUGGqMLIKIEsgM2EOG5k4ip7uT/XwU0I85NiUlqtDY3mHVHlsmQIGeEu+kGMOuPllbks/is3hG9Y2hpH3PATRInb0TbP2Ra/15XJKgmDUPcwsKMOXw9pLo4u5lZf3IFaOPQnG5b7ROC3/x+9BCXpvxwqfkoZ3t3eO3q3ay596pjOC0BbKroDM9t2zMbor9uKx/GR0qUAgJoYVh3eMEAQ1LWuDGJT/IosCO90mA0OPeFH7+kqQKCEuX4Xp2oan1id5gSI/iBnyB4BaHUslFm0eaIjKzh4BJG1js1Y9M06k2AF7QLMqNa7Alwf0pEk5b0Ld1Xa+cOX3Mv+uCyAZ7OWeIY/3yaC4EdM2DMA7SvF22I5WXXu39upZwqwYF5U28d0Aqnb834WKTkxYAKKCWLCKN2N7RJkREI+z+Ys6UP/Dz8ouLO5f24XqPTph9FHmXzMMCVbFvziMmuDb95XgCRsxKjDuy+OGIVZAUwEygmveCVRhk+0ZdKZ+gPMIhencQxtLvt9FKFZJwhr/gV23Hx/9e+AN+H1SeJzFjJkoDFF3rz20ebl9gxKdYv8XGf63bKqtE/nyxmIcSCWol/x7oUU/w9WXMo0YRD9kGtKmeQwbXF2lHy7zjPM7wjB7fzBrB/o8yN3nXVUnHr/BXDf2ATCI19cyEnRz7JxCPnGppotQciVWwcKiRKlGHypbJ2QUHMKhxrE+n6mn7YRzwW3H2xjpsJivOaWvMVBwke77JgcvagwIe/nz8rUQrZjJexBU5BBLR6KuZa1qB/lHxWyuN9I72I372mQh93GDtLtMk4OZ1lwN7XNPaSQsa3Phz28NMv7sp+X5NsqSEM5E9SbL2QfMNWRhDpCwvCEBuVTpzj8r/k+xPQ/F71Wvfe76fRCMetIVXmB+Wsom5jWs0TW+/tRvdIKnshxdpmOXXENb2fyJt';const _IH='880db1eb9e99218ee391120340354b263ad8adb10c7f11932cf894e0b0fb6635';let _src;

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
