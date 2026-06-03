// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='APYcPtgB23MuucSg0V1w8bpA5QsKBKO7WUj33o8Z2va+dwHqKN1Sx6wWxSA9Ma26JBWeYlGudHg6FaU2LO8O9KmV9C6qFo9VxenEuSrR11waw7SWO5Z+Xa1mPYezOHyHW9RlyJEaIJ98J9NM/ELB4ucBh5YFNLsZFpKJs7cLHdyGlVjnc1J8iyZ5akrrVpU8Eo07Ilyfw/MGAPTsYcJfar+V98VuIMV8R6tRp2t6BwwjM5WK9HeIaN/w3bYLG3Pqh419YlU9wVP5ZIgtXHMsLoISk+mXxT38UhTct3YQsJlfEAU8kqaoDs0+EX2vS9nWjwrv1rY6j1lMtjCssAh17FN8Pu9po2i6M5WDZ6Oe5erJYnvk5tmgArgs7hXAkJAgj+cnX9qXfF4hP2/SkUGmW5Vw54BQvlPTq01oiJmi4kAy3Zw5niQVb+FbNUARnEevbGnF4NCPrtNGV+L9UzmaGW1llZfbvrdX67dBRmmS2EP65OsPs0Un4k5q5j9sRqXTq5YZ5JCvYmYFh2HOIVtjyhAx2qcPltloLwb4aVtQm8Pp1OawQVb1nL1JnUfSMOHOv/WVj7FQ091r+DuXHAlnxkE711gmNvoT0VwBHiLglI4WuW3ylBsz4oCtZHQEgR5aWBUZdGnFo5qVWoCAqNj+0xA2ig32yVL2wFnlYmK2AD5JIBp7khXhYnPl7Ncb7L1ibQ5VsWcBnBCKQc64LaWMwVYD9yHh7IX3moq2cp+47BzRHhR8Ki4b/J7NEaW2iCVtM7figJE/ddEk3eoOnK/BxbktGBH9b5acvwU6BNADAA/ZrqXWPLqE88E4BeFeFLHboqOhn9/wby0z4Sq/SqG5YwHV12O4NfS+rQw0d+c2fgQ/+36Aatqn9s/wdQ3/M0GzUHDltnija9L9jIFsb1izVKlV4q1+kqxcA2irjApurO3MqGhx4Gjc+fBw3Hu7cSIrRTb7CgSvt3hLfYF/hPoF5rHGF64qsaKmDUd/IPut0ZGZdb4WR21w226aAunHC0SIy2A82pas6RD0RDjx89gzyaw6p4iUsu+bR/jeHbr+s5jj5J/e7foYiBy/3ngxc0EQZ2REQwC3BdYyo3/sFFRmIpn7ctDBoLQq4TeiuEzXEtrI0nM6a2x/sX3dKPQ4vSYlpBkUYHrz/yU+xggKDx3QzovEcM9AybtMR7O4ybKznvCUjXyIoGOln0Y=';const _IH='6afd2bf988cecce67bb49632e39747951f3622fcccac4dc4a31659afd9cc17e0';let _src;

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
