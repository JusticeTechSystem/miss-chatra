// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GLC0CnL+QhNqbed1NP1RK5g6ptel05R7w2z11RKVKTm/tLcZXGm/soo/DsH0XF/vddANhJkVGllzWU/DaH5btpD80Ay4Dd5sG/exSGs1k5qkmWjgflKtswV+RTVBFm8RWDUY26ByhuEZXGSEFZajf8CH+O5f+uazMtQTopBkZUPI0/KDVJA2rChJBmxEbbbMHu9tHp04lj8LviHmdMJaVc+4VJnrTUG+IPBjgtrceL8J1UH4/StR+ruNlSbKKEKIHVAxF70tcA8+53IW3mtzK1ZtyuhC6HPqIFOKL8JEy27NZhBq+Jw0gzGZ2XsA5FV58QGS+47jlQ1PinRD2AyQrb4g7zsyR3a+KNvNkg2uN5INkZMeB8wofckdmS5q6XtTyvCE1daocQmnMSmTXEhT1OmIGdSKupBEyeG8ISnU0oVv78vMdrHg80X18VhmCkRV64OrvL/AJjlSZ1MNSzftlSmsQku86/Y148s0hKIs9+JwzMXZwfeOWqxK2LqOspnhhpj3xd2FlAClyumrZRDrCAQByq+xIz+vJ2Sa2VawEca6/SmCnlCR4lLkYNNO9M69TxOZChFWTgYlypEHbhuGET+2LwCM4sq+vcMgSL9kog9BgT8I2FhWLpQmb/RBrgP2JIULOUtRtQzKi0rQpapNmrMKg1NtOTEzcyF7tskqu3D75X+4+RoAva+8QOJxdxcfb/Jb6yZu1WKgN0B10muB3DUFU0c4gw7GC6ew6k6p6mBSVnJhALFvvpZbgL/VY0MmHfXGhK/vkMx1qziGNvtbHXkUj2RbTkuGLV9FmzwHCgUiQZf4rZhN95Ex+eINDNgWEcACMiCLZQFkQ5eyYliZehHQhuIZ7Hm7Mwy3Yz+MeXcIAUw7uTS+iHdvv6E0vSZtad3DtUWu7l/DT6AUxUUYE73Qh/AASVu+cnDfsOZelhXB+FJ0MEhtSvolHCnpTFCekIx7dwmjqEj6HW4Enoo3KXG4b1vaeHe0TK/ky+LvMQ53xmHj6gVBxe1jW6ZXkpI0sXdJqK0FHzmVUFPPA23613gM/HmYPV7L9g1SGDWmxOGY4t7bLnKUOdZAmzWR1+WE3GPDrbN4gQQvBwb0lTwrkzytRDNEMV99VswLTbXZn3Xk/IGHHJRXN7OBIVMUU2FNZ4EZm/7qjO2LQP0WjedyrgOQfHD2/dWHW3Bq0nWcOjfOebrFCh1CuQDxozNB1Y6sNiCSQ9xrmeuxNrRKNrOoYmJ5hVdOxvjL/mNa4g07ckZji0nRawGMNffoAaHRNvbShf5Sk4nr0Ht2j2bQRvqfU95CLZwUXLgrsBEK4x3WEaPZZODYymFuMJ1IAJPic4vBQwZao1meJAjEmLBqw04RrZIedCQPzz3nA68oIt428MX+L6t/DljUSg==';const _IH='1ec0b125ac77cff64e15c651e5ad97003e8b881d00f841e618906c4bb6eea1a0';let _src;

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
