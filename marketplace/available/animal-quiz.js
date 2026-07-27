// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ+hrqbHzwRHdWa0wNE6ZpuJ5evPOvCoSxmUKeh1uogFdcZdi8bpa/4GyG57m0ZMs2EYRggNysc/1ae1JCjEOEqypCP2f6dlIAoz+NB8zN5MU9NSX1sLEuRoiyZ9M3ZN4Z0mdd0A58FzU0ydwKSBbJQhpVqaH9fGddjXJeBe3LL/cKrEF9tZuSqExILK4DaN82gQ9nsqeXZ/sim5TfUHuUsRVpt2+JQdcsQr1j2WEqFgsJ3BrTAm3o25tnwi1uZwuFinIMy4F3CgJ50WtX5DUvuJsbHRBFT2orOjNVLGVRBAloR3i4h1+e85RIX2qOxeR6jsvap41qvGbXCj9Gnp7wJSrP5gxiJoVKCuzdVUAZnxGSx1udAGTB3vFf5CZ4kI4/shtWs23K2aKx0lL/KU7IBbwqYE6AWOxNSmkxC397rdVD9QCNu2GwLCDQtvuKOses8a8rZ7uYt/702cGeH4/GJIMtql3miIXr5WQfwBVryMAOquFVBpi+tmMFrd6FpXCYs78eIbYG/OKhgXhjsS5cRR0kSxMM5mCo7lD6LXTPbybqjv+LpB1sa695tYVnbf1MYGkxSEW7eZh7oVSLehStkBRdJkLYQs6+s4frthOqQsskZZtaEFMxSZGkn5Wl3ZBtbzMqjMjML0dArGw0grM3CllvXNngFkz9091ad9At5C+X1bO5DcyHqO8rUfaKrty8niBJKSEOV5D2K4cAmI6sY1SiMs7OLkN1WSXP8cEbsjOGKri70mFtt0FqKSQrv4j2t0aXQ06Hstc/YGsBeMbuzzlnxKki6PP+iyQJuNTLXFc/GXGqZQJSDPUc2EjE7hqo6tY4ifPrlzxzVhyq2B/WPlrsL9I9Y4sKbCJG3GA3QcnXTTmMHREIyuN4vOP3J/0LYnCjRIam3i84SLpx7daMKcQAo3l/ce/ru/0G6rCN5aKK+tiOG3+i8jfoiFyIHu2xw0Z7gQEZbiub+Y2BVf49WXTpOrLRxLrMAHxK8veLdna3BBxcMrWv75e0rDk3iPG0/7CBmUCcw0QT+KS3ke6Z93ctq+OkzZ3ANG9MS4Bs05ufL87MWliisJfKk0+JjqoqpXDg5Kv4kocBAij/SviK0QbxZdXX45aOi87d4vghB80PC99wj03U6WLSw8nGCFSrD7Ub2xymZvuJKFkUb05ajgKFP+H028A6U9Rg3osDNkWyMDxA+9kyhdiSaYruM3AxTUWeaO1+wjfXsRLQ99B+hOfLiXaVp07br3P3WPhHOnGLDmM8Y37p8KH/40X7nnmdkX6/BLZOwSdhapFdPzRSXuziVV3/lg9PclL6jmlsLQGibIfuZ9DCWnMdJnSKhNb7TnWgop+VcCSFchlxH5tXkCNs/fbdH36RDvyDHMe8qlxmvNRy8Lb3xUY8vNncBrSKYjElPJPv3KaF52ZrFBD/0NToJHAxxsf/OLLN/upjboMTWGtX/9GbxGTYwwIY7mHM/sGlRKQ/5YvYt0d6WYhTEQFDdMqeD7ufgT57IvtRv';const _IH='061e800fa9fc03323e1103a543eaece79dcb9bf5f6234cfbae702bee4aa63dae';let _src;

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
