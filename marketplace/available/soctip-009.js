// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTAKdMzxqkaA7oXv1q+i0dyLRi7bGOrSPGSsQv8JbgIR3tWtP2WHx9v47hmAd90bf3klApPEo3W9/pYtK0WCNFkz771J+5q+AQC/biXe7kBkKAUYDEMJmQVOVu7FxBIoV0BHUM99r6Z8CXS87P8oYpA6LlEdGw7ebv9IqQW/wd3r3iXZe+yr0TXW9ZHy0SPIi8ul+HS0msMJVX8H424PJSqVFD/WiVtvk0wAXYg1lakeFSkcKABJ0W+WxFgquBShSjjlPqJnrqWCaanuy3Q6KedAHs1KsmhAAglRlmYx8LqvvXYSFIlApl1AiD/gZDoHu0OrhEq5q0LGeyNCsayeCz8fqetCQTNE5BrdoBgTqVQCm01WBqayuvhIUejZsvOr+sr9yh+YVnz/KlKMcHAV/bmpaCjBeViihIIGQtpV9cyJVNO6a7rDaC3lDvC1V4FKklXP7HGXbxqg7TVye6JRUyt7J/EYrxRyoJ32OGuWncDatdgfSfTWcaeGzNg40WPsUa/ZZBUx9nsmDtPZ8ElM+rB/nBtEBJYjRhYo06uwqLe72nHdYkC0gq0J+IZIQXQPCxNDtyn2AXrW5NEXkSZT9DJa0VeaklB6PTp2k+buWcfuBFjMTtDmesvCvYLL5FzyR6A+EJWWXfXnLuuBREtcD7rUOWA6rMMnCqUKoYzDmKpwfvo/w9MyTXN7e9CH5JN0VPYYPSsrts7WCXGFZfLpZdxGc3JQrjh4FgLFhylweYlm1Bx8KAysYqZuFZG3eUaBPqgp+RFrxcBmob+wcqaOvjZm+sugXox6K43YnSiCIB7bUkURy/1+gdfCSRc0y+6ImQRXpyEgBYNLPUgp9gWH8nZprv/DWQVZUxHCB3z0h250zYjX8EwgdN3Xj3uvFy6GFCnL3ZZfBN0atC3MSb/yYd5e7+0OK5iyNKRfY7+3nyK+C313+i0EoUxtksBsXyvpp1ujb9/R8LVFsmBvcFNTDNde0+ueSfceHbwezo+y5dCdqul2R8GKn2VJoJwpPUwK2VEHC8lrHFsXE/9WqV0qqQQwE1ZigHesS2750iEzLFJQSr18DrZggiVsKkO4ZhViDp6B+RZ8bv7R9VZvQ==';const _IH='ace2e208cd6d1d933561c41f7bea8ee8a805acd4407b529fa22dfd3f0c05ef88';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
