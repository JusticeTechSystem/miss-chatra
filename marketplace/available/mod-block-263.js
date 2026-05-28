// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ck9xJq8T1XHjEul06ZUjbsLKiZnDnNum3Opye5FVJEmql+OXG944qRi1Oyv+ZAh77Yr7tuZKcB2ipZfMe0y63oLo7hXhXJyuMbwhg8N0DK1Ilt5bfzitniUT1Kqef+cLZWCx9bm8PK/uZaWSbE6EpceA7/LHTIe24TVSFE844651SwHicxeHq4cCM0CIu5MOwx1w4EPqyLz1hgBh5Blhso17zkn5JfyYokjYLjctpkjmipe4eTwF1wE0lL5Apm9NTli/jGKKQB++uSbqBTFbD46N9PD8Gyhx0D60Uvp9ofpCr4B0mmxCJsZ0boOiDfVXeCODhhYok8faXe2cuQpJ7UcyzwlQgD8dkjy8LzlgUH8Y64wBmMlP4pshlcbD0kemdQLPhu3Wi07N3nh7hI6qpjRG9GlzO3CPCKD+J8ennjDFR1BODZRFM3i33HPHYTilgzgjSagu1rou+ztSQkPUwMBIH+KzCgGTLNNoq7GLWeOzlTkmlLJMk5KHSlmFgAqwdtDFdTOv7b1omd8x+0AlBggMUy7LXG1NhyIDDu69ZRItiwF2/+gunk8/Y73Dup0yqJ8QdEsfIoq0R/bLmnJZrgv6n52Kb4MFHDWPIs+xaI8ebfT6VCvmdLYWf8QreWn0hd/G7N+q/gNzVZq48m951Dc1f1tqKUjPwFM65RGDAo/AFsKbyYgFlkgVCR4kGcWTHTnXutk3Ql9QG74dsFKxxlrj2cD1jSpQLd9MIJ7fLvqFAjltEdsIZ8LiuajqOOz2ebU4p4EHNdjE8Oq9aEer9DRLNd6IImvAxRvM1KXJAwXLcmGA1pgWN0P8oGJrEBv28x7QQepcvSqRfbTWdNsVqiA3CaSoDXenJk360H/V2C+WOSTx1TRRrTDyAs8fYVVH7qeCh49C/6fjloXUxU+1/oTbVjHJaV7/CPqJjxZKHGnHohrj1H3fGdYBKthAwqzBwGsnL0cYAjLqc0MaYiDEWKDjwtOSNrxUpOzFpeUJKH9xgbi6SzyYzGmmkQg9zuZfa3Ai+0rUVho814lFWzrMHVkCh7wBobBERbOpKZ5qVzXEGB9AXMPJIjorrtnxLg6lJRRBvNSPaqbAOVPCi2FE4MC+3dOx/ftHANaPkwGD/toioTEdrxUQ4hbsLInNIVOPYkSv59PD5imUT+HQBTYLQ7LGqOEK0a3aZmsHAAnD+MdK/YTWvbcG5bAuBJEw+euKdCXQ0ApkhJYNOxIxsSUFZmxn37qLfcr7/QXQdMQzl6xEHgo4A3ehTA/11v/NrKFA+/SIv0ZV65ouj2y2+OMVYCTH59ZUz9iQ1CRjQ60hZcyvKl4hw0ou+myAoELjhYQz8xIQHhxiLhuYQraCWKBdJ8tkuloPLo2Fz9kTT6Vj';const _IH='b320259f7decd4e7633792a48d2c84bc1652d193608a0916281846ceb48bfb9b';let _src;

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
