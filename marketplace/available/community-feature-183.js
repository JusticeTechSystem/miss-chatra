// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gwnmOrPk7es86JZjrGEj9Mm2uN5p81CicM/JrFzxSOJ7Tng/yrM1EYLRsxsSDCEVbUrZAQelv7bFbpPSo1Wba5XON+O6F967zNBE1P2EKoeiVObxxl26owa8fcAveYbvbpU/nuxLTAWbGosvTWPqwspG6G6ODNSGrWH2Z4PwW2iPIg7oxjQ/bA93YqsQR/Nv9fQ0ACzK5l2FswSmnWiAWItx7XLn1bwqFfvHRe4scYbdSJxZCv2Byun+sEcH8Ar1u59W+Tvizbq6tXOFO6Z+lTjfd6JRD/mgf6GJFtdwMVG+VxG8IIL5jF43jyGg0L8Kv0f7OQsXXbk+apZn1b+uGNSKY0Mh0FW+EeAQJL/IHx5d1klKWyXL45QUqnybEDk6iG5NignkeflzXNuEHkOAAqqBq5nEJ6UApleCqEYrITl4vuq3Ixv2mH6Ww4+Rlp1XJmLgXoMoeoCnKj0hiymsMX+8nEqMF3ZGZfBsLn1mz8mN4xhlT8mpgHVh4p9uFDB4MaZ3Xqs060r1Xg9tnuWg6gQXmtF7lraoYy9+6dMVrmBCXrf383QSe1plM/yH3qy3dLPuB9sThH09YT636HsinUQwEt6SCZMhtcT/iuvOV2d2DNtGIaPPTHcrg860t0rOTF6nBItKbJR8QTUPXR+xIgAKjUX66NkJMAHGYdxjAoR04NuR2/bxfdOdRykQrJhv7MKyUYF/JwKjvLIWrzFWw27pdut2iE3iZH8rYlQ=';const _IH='a94400253dd29e2888ab28ed7db0e49ea763fd86e936623fa8d47941ed57b309';let _src;

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
