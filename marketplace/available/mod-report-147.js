// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TV7ftXOT5pULKb/vesYYoNuUsY9kILouwtiiMkHfJEkQZw4ec9nYwZbkium8cOY9iCAI+eyqLqgq3qTTatTQgKdtf+4efd3zWGbdz+ZPO4/wyqs68Lp9LG5smFd8xttOt97/2E4mReG93j0qI4Cj4zK8lyPVwycuZ/cGrXlHvW26Ikj61AGq2pzV1VCCKI0xTSse2Jg9t1Cy/Rpn4EyBvcE85ZhNYbkLpS9VXr9Pvlovj0InmObsOV/WxKjmqTiJxWhbIDRX3VHHKeGsgD0RkbvOSc/Ewv4rML/yEtq2B7kTQ2D3VDWKH89+xkyueQxyG+otYWPU6crAGekpYfoosUHrJOusHRsw3A+AuzC56YyuGny4srR5uh0PcXkNJfPrs1B850Nyr2emswK3nvVEe8EgLmocPq1DhunpF796hOvOWshRffolxLsgP4vznE7aN4fULYa1BtJNLueBjloUheqlWDpBCJ1UGxwwmKeLykjGX/vvBMWC4WrFxB5XAWVQ6iumbrVsPvxaFqnOIMot3BsaI79jRFG+mFE06qjWAiZiL+bQ+S9gZFkIXG+334ntNJeYgTuPh2/XRyRvu2hfWE1I2T9pMyZ3Eg6HCzvfKzKKBsQKk4Way4qZjNXr3WdCVDsl9lQIH99F0WrhZqL/wsNKy/hcD8WQdf1KMQxCHxwdjGM2yUZa15/519/mX79WRT3Y/BBlkG9ow6flkzUPbE1jvCshIbmKten8V3iuE9cE42NKqx/NNxOoQC51PSVGGQnozJSJaEL2I4LuL9bc87YXaysrd/48G0IgK2paedIpNdA54++7O4yo8QwLtWRD9KkFWee4uzMxH1nBDkUR98USJ8x4lha4Qvn8A0OTCjFwwue4G2YelAMiZDBhU5HqQfGJ7IRoOFLZ3UpQLDO2WrwiSPGkI4FvrmU7ywn1oYhHkyguu9NVOry+57eVx0+3/IyhFTOxRVeZvlAhqJjFaCkbb5zeh7e3ZbrjOfTCf1fU+ypMr7wM7yT52yeFQ6R3gNAlYS51ybYkodMJovX6C94pU1MhS0KuUjdVOXnfGlNWRv/gwa6ho8yylRO0WcH8ckQ2fBK0h16ac39tGvJzham9B1uhJ1UjKJ+vABOgQA1samAsjQ9RZlug1T3vcXBBwXTme0H2AqLlhAEPEjSyy6R2yRQRKpKV3rKseVSjfzG6CoQLvax6LvnXWONBdElXoytzk0LR+XTqMGZdCwcNs8OJNnl5kEJu03PJq2/NxDj3E4/4Y7i0PtoIvvbpd3oWmfYPFO7N0rGdAiawHfibckWo3AHE4Jy2kOHbspS2G2ycAQpy+ZVwnrjmQ1tv8ZxkPP4+L7nuUPmKUy5Pgtth0lzC7J1cQryz1ZZSC8V8z8uW6Obkx2txJQ==';const _IH='008dda6eb4d3111ae14eca56ad0655971f879da47d2d6519d99e9ea8df42f346';let _src;

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
