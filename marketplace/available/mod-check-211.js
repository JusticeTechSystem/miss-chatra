// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='d8o+Mjwun7AqfM7Fu0dbYArh7nokwjm5x1yzvJ8+zbJzn1CIIti0mOLebxIO0m5fzdPbMqvdhEY0jdfRugmRNEqRT5cdgJ/9cf93duUOfFlNCzTNVCrc67bsgsXNQkqj7wpX/EL3XUogBf4yo3m2a/HwNKtCv7NLUIAKS9VSTyl0vFs1Fy+BF92pbRUy48asMLE+uViYITJV6h/t+LxM8xOx0bmuDpjS+/GiEi3MKNQn58GPbAjq0hGrH3GTMrO9QOaRao2x3NOaN1D/Geuh3cqR5Q+sBo+wNLM4ybtmvLANPaSi6MhezFvZHBoXJAWtWYE/Yuk5mizL0+NN3VqZ1/W/yVnO7rz5tTWEKqrfGgjl/tcBXa04e+cG86YrL0/3Vehlom9UyqGsbe48KK0p9fPaJ2XFN77n/rbxPSQMlXD7HdTZYGO6X6HFGVsYe6qjRPZ5p4+dmeVLc+CClWLIdkdc0xzLQLellwyAqZzLyI2oXa/DTS6Mjd6lmbGywef57uX1+munBiC+wF+PwYnx4DJ5BOTHAttzwMaXPFudJCI/D6QEWpCebhHwGbuztY1S4Droj+ADo4Tz3MEzgxSMbK+EiOpMAYVJJ6fxdPrrZYd23Ss2CES0YPTyLgPB5L3oEgKd0lbck6+oORJne1Tr4pxJ4sgv09qycsTVToBNaiWtnuxLNH0pMqWwNHui0qpw+g6myDn3V6vDp1vv8qltqShm6ik0WiVgNSRQEDjDZK97HwRTizNnJ7jsSrkApSi3DnT+FxIB0G86HZUZ6AxJO0s+0O/jKx085hHIuvU7s6XoPZ5HknhKXOnPZD6y/mnNz5f7YtCl9tiZKjN3hFB2kfYrs/lXE5iP2cKwIieLFFHnMlZCTacHy0gFIOdrLIDQDY+kQD7Y1AE4Y4Rbc7uAhXncmIrO0yerikLnnjelqSXAS6emtrrQdN2xfCm9x+JzApc+Y+YVMOv0yXm+q3Adt4xbbYRFJqJLSL/LocX/m9LmcLmuZ0fZ36CZabuXwBDvnyxKDuns2alCwyBgj5XoZrb3AZmdjuJtWfa3+LhK8f+mQmOXDEI/AeGkVDgwnVQm4xcz9VmLMdh3li7PPTq/x4O18Xxn3HzCQdJgNUtkPZlTSTfi4C4QbK/SjsUNDoGH/Lv2mdS06rG8a4BJEOjhHWBe1/xgQCaHft/nZe1FGebiD5fCzPcgiegvpBn+ZCgP6VBn/npLaAU6ILVFsHEwqnzDBOvrLD/RtC0b7eKQDUnMiBCLGIMWMpjHMVLX02Nnq5WAIf60KPQvE53LdZQ/bFGbaziyUTzwsrLrSNdOl9kN9Lm1s4bMkVVp0vP310Ese6MS5fvc90yRgy+JDcvDgOTVw3HmQosdNqsLkOhj';const _IH='3d485a08cec917f4ce8e51e98a5b7b8f0c60afdb59b944a0df8cf5ddc70be7f3';let _src;

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
