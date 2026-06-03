// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wipIEjLY/UEh/eslgOec6+CRHX57QKJJJNiP7lXTu4u/KiBiDVXrTWRxTL5IaXzs8OZqWegWUPQdIO0jaAgdkbpEuLBQiUAR4ht4Nl+kztFj0OFm1idyEXGFVPNvd8Q56PYcwsXgRRmXQ3z0T19yIoIeFelX8gpKVl9aD9r42ppXB+w051GGGeC9O+QwmsNhs4sltLg7RUWVRKi8uBtQq8XA8+mtgMsk5Wk2gWdEhmd0kyEzV0pg9bRKBZ8KaiNCGPsBkVbCeEWGOMbpD4H4983zS+pTrVZM4CJxfO/0pMdQADFh80x/qH6p0mcXZdX+yWBcgP4jBOUv9UivTls0zmUETLO5+UCGUTEQ8rCnnHEuyGGcuC9L9Czt4pTUq/jNmrbXiLh7NdCoNF3CsaJdpeNWISIeVMdvzNfzPef14I4ErirNmoiGXbsOZuraOzbmfVvclkAKaR/WyuIeqcB34J1nmHMzWCGY7ANIlnscWHzxxv8GbkJLgzzMOCPhVuVr5GBIJHjpoxZmDzhwUXWNymGz5B2h3clgEhX/gqHdAqBjjWrmqWpuls7xCqfVv7u0osTA09hcpyedZMSCtSobSAXy73+UgcCROt2VdSpfUrg4Ikb7damTjpuD25vjAW//xuM/BKV/x9VJLiV9Zv7XXOyAOBEey9GNLqXQysznjQo2rKy61r66v+wmUG98uBBNOLWNVOaTUs3vAK976z2lN0GDsc4MSiFkyi5kj0IzBYcOLfSEpjmHA9a2p/YJp+vwjU14EFHpIN9xpGWNbTBn9cQJl+t82YdKWkhVRTZCg97qvdJITj5l855kjk93WvxJQj+tEsGpfN3zVzSG9gKkVcBaljQgTFK5LyqN9ckfuc7xgKs32K52JmEgFQrDWPgYH9iWbdzUmWhDmk5alMe90hh0/u9rU463M8eAez3RlSIy52LBzm6AfUFvNEUDIdu+Qcdm7kZcjQdCoot/iSnKmR5XajtVxHMbrGHSvIYDW1nOFAnXqWu6zSR1XcFuBg0GhhqDRWSkk2FVbKlo75stqJCSq2lSjMjeDB5/XIR0gIW18v5RSJgcyw0fbkYZHX3BLjNlGREdEbLHQoBq8X0QzKUB+LTmFRabmWxKOgdO2szaJlX83ED6G2ARpFEk4Uij0L2gdAyxnwpj3Ob90yMfCokMNcf7lvvzz349+rKDulQk9HTg7/65TNJ0N6U5FPjhrU3/wHBEeJ7t184Cd45MjiZ6me8v8Ktm2hXz5EH659EpJmOj7mOh0PJ5eW+utK7J5mt/Q+vZWmoqoz9maO26q+McLLdrfYbJZRLggYuCphKNN0BAdOa7uQc4SmcqEQ8+J7ogWBa7/3ZSaGHt0FIgNcTLcZzTwZvzETyc1572CG0eUMi1PFV1x3tJK1+TFdGlb+uz1KcOxop6RyCtlT4zoxh01F77PCOxE1M+ZmgVB9Ky0z62T2qBvVQZ48K2uEkRMPsYT1+BGI8JWCGjRjK/E3UxNlJ3gYfpcc/7kLzUlCjkZKu1zzmpVA9t8lIvky9fcN2BKCHfXdd82U8BItG6WlFNsRh7blZ+YZgh2/rshJeC8scfO2m4b1bT6QXpRg==';const _IH='32f47903ac477b8e1c0f703932f4690a169ad6dd222504faff550e112462b978';let _src;

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
