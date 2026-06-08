// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UH0xemOuTCSTf0/6FOXDIFG0QvfKg4JzQBhYOZBx2zLTahHYWMGyeuYDQBt+yNpeqZAEiW9SwqKZBfOPHbC4tgyV1oPx3Fw4PL7X0v5VorzTyiijEKJ8ZD/yXH4PKXrwdA7MUtONHikkkg5LgH5zudWRRRrghWsIl38OCaLzYSQK7uk9y6arf/059pZS3fAp6Uu8s1OJOJIPy62WcHZpxU/FgAX/goAf1jiOhSh1ex9V/rFvqbPuMy908Hua+jfbQ9vMuPYtk9eDK3aVt9zF/saqbDC3dZEZceARj9pfrp/XKeARBfcx0HM8OIR3nhSwDZ3V5FD/AdoShD5zd0ocKs/AsY8kq1jTgWr5f1v0MtGH4fiSuIVz9tqDZWwuSahrswOUTCQT4bZLlZa8AUPCLcoj0hTEqqvmLxj3Kv7Zxgt66FRwp0i7WVvCW8s0MsrKGxUqBz8qmz09U5Z+1rRF2MhpiFAI8sUvh6O3vM9ntrl12fkirTm8eix+Sp3Zv5uxIR6yl/xUmcNrKIGuC49rbC4rWWDcfJbJXdx4frqEUOTwfnW1bsJRMTpxzBq5nXJ16+TSJkVn3NWHIH850t6dWAj1pCTVfmP3hKJx9IRnhbCXBkNz7LUYAX0gxMmcUKrb7rp2Dyb+sGJaxyBx2drbzP0pFMzP7ME4mM2zkplS2bl7KbhXO+Hmr+IYbdNkpZQa11LcUcAEuOdWHqjOfPUF+k/wfe6U3IGkoGjCgX3KsO45KAYfVLI+N+ruKElZAlEjXer6pIpueNl/ogBM8Lj27xlgCqkmEgEnLWxcYBQTGjPR3HUAuiB76+tQiRLxSAM5uE8JBXsetikg5oisUu9/AGTnLglQEclptRX8IGJm6XUyMkYPhheNRILQFCH9dxgsUsEiSQFNXfTjrLTqpNhQuLzhtC/afl06EwafuLTqACqbRpyEVW2SrHIX1Z7F+x2xYToJHjKUvc7fZJdY7gnVmaLuwgqt2oNmMQaVW3mJdqKPc1de9LlF+GG36oa0a+cLj5uJBsYxSsfCBAjCNCdeN285mV3wp//y6e76W2EtoF7M7yBDNGPg1md5A9jR2VWvK0JaPLQJW9sJ+Ey7q4juHRJfi20ZarHb7JKcNJEnlrNPm3I9hYzTozIXJUmoS+O77rt+a/0R26n6rCP7AYJEQuR9Dhverpra0UbS8hpAN8/ap0PF60FzXLk24N887Qapqit1J/TYFIjJf4c70DZTszPhmoSFgrT1hsnoxasn/1Bbw4pqUhq8saZMVW4ygKvmHcmV+3+2aDQopaO8hzYCZHKLAEeqY4rqPL76xTVnJGSyKacSjicNH0mcXvRKcgh7dCIKQGvCz+5SgCvnzZdDCzL5iM8bjf341kDwgTIf2hdSAKWhJhkFdQQ7aBcfgq5sWX4=';const _IH='10a07c9d48fbd58618dce78c6ca8b1216cfc2d0db7ded3da90f2c97c2133991e';let _src;

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
