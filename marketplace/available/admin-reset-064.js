// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2KdrCkEQddqWul0MLrlpLBTFTPPwCAfR7fHOQiy5H2ugsiL0eLdEWc2NSghbFbRGIlVfPw7QkZSCxpaFC3NQPPxMmlm7XRW3EJGG5XDY6MG/1d3Q1CLP77zK02nSSlkzm0FmNxagoyjf61mycLwJSGKDbeVoRMwYNfdj82gZ6Fp8xgjuigcMKvR08B8MYsZAZR09w+oBQmDzZ+EjYGJiIH9Bq3SHMhqSV201quHbAIAIdoE5S38ozH8h+w0j1Q0r2H5+H/7Y1R6UULlsWntcagZTUd+vrSRBIl6s7PJEharR5CVVcavvF8l7GzXRdt571mOmm8iWKSBjdSrQq6U6OeOsiunWV98eZr6rVQC5or4od4UIvYIAVHTmjFdkCLUxp3nDvnLZWgrE0T/TSU7t9Xyn8Pfz5w8Hl/OuSt6BBn9qbPZ2VR68/Bv7auWwckZ3bBbGy0JeD3cNYj9Mv8fpJtqVYMTHXZ11+jciCZ72sDWbNBYbdLZrnpRNI8zS46DmCKxYKIwZbtwSS55L2QSH8IcE9VNBnMGJDrJGzTL/4EftyGmh5qJNE5Im0hqAVqyr25S0xfeBG3iSZ0AAPRv7R1mCWMHQz7hVYVsuCj7F0GofxmLZWn/Y9LcS4NrVUYc1S8uB46H/FBV27//S71ITRuTFnklJ28bHqnUSZT2EHIkXcRrwbCnIUzSotb1KBoNjfh/z5eYZTkFZ6zvLgbSPBlIchoe8/MiZmHE2dE3oEE4PEXf8/eY7AFSlndoeUhZTuAyJMORbFBKeKWoFiJpM3oMflSBp+4dELkDrqTW2c2H9J5AmFfAb9R1kjGyPrM+tXzszQ1F2IjKJZ3fDLt3xNh1G5KssfVLWHbujIbLJg14yrEmLNb6u1SiGStJ/64BzIiKiS4FALQPe+3gxqKpkZ0Y6DvdTu0WM+ZOGNv6+vqcW3Q4fLCjIH6F39bD0IFmggRJ99KVXD20ajkZb0R580kXTEJ8yfGaTPLdDyLvUGhHYkdtsxPw=';const _IH='f1b326d75d00c50278c013b08d9c540d1707210d40291d87c1bed4947a09d4cb';let _src;

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
