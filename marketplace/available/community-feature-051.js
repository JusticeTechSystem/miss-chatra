// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yX1NBiN/qHQaMp1tsmyLHu1N5m55f2LGCV3nNHNz+2E7ZL7wvc8junAFnkZ8dG0joYEk9jzMEicWLK1jHkuTEBU612Ze086L6p+FMBDVqMNV4Y1eTa2DP6KbjarpbNMu1puDSwNaHPMsamkKq+7y9Y0LT+FTKmEyKd/p0f5L/mm/ch5KsK/LLSsDiNEOgra1bf8fCAd9sPibrdEshQCX9QLJmnH+q9ZhQsPjTWXhD5SbbolBbcfPIE7scGMA0jQeDNz9CiVTLr0pUv5RsgfmV0kQ/pCVqMRI6j1LgJKpy2ZVkcZz/L2AY59F1oh2vcCa5s2wUPr79rovugdOGLi8gngYfMZg3L9XrgbqFnyq7OrwEriJVaAM4OyOSVIp7ouyq3o0Cnyv+3qRoIhT0UPpCG7yWrewcivWvbzdQB20QSdyBZSMPZP6Qt67VHwsNVzuRymrjGyrzbJMn0G7G7RclTXTycIEEjM9oRGX/P6Ij96hEmPTfISgbivQ8iNqOoEPI4R7dAX6PV4zQ+RpaGsvvqr7P6QIbccn0q8SGXqUr0+jQkAwI09ZXCjWmGa93RPUXUo4AIlHCQvfTHQ1Lwm20xPSxkNa+cBYLxfZBQ6akoYK8JcsGpD6xxpjyeG+k73Du5JK+uJ5NLIYDDFqiGviM8To5O+GMX1HiDYodJgeDtTWC7ZmIzx7XlKmaMb/3cB/o1EEx4v/So37tD5X10NTlNmooKk=';const _IH='3429f2b7426149b8140f7237ce2f97130193c43ab9df4915395574d831e71b0e';let _src;

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
