// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KSp3m4lezPyorRhWPhkg6rKfumqfSnMvySmGzzDF5yIeYQJAMFwkfk5EkwEk5ZgNzaEkhBscCZ0mW/3I2KEiAQwdPjv3LzuRk9unb7pC1BnyecAEf/rA43WTf4q2aBpkikbkvjHzVp0+QLsgR3VM/5MtXqwp+jV2Ask2kRz9PdxF4oNdNXFgl0nCeWlkGpuzyO2UUm0pPSBjw7DSVC255AxHeJ5Ec05CgcFZzVndbH2GWVcOrMnXQcp9vIiuGGyTO2gdErojyGJPjR4Sw0SrqEM+Q43fbl3HeiWMxcc0ByKvX1RY1dr1sgOTEy138NuG4F0PV+bpcC4l1ge4fvZurz6F064HMKvnlRuCs4KA7+aNoSeq5mgqbGCKCqI4zfRZV5NC0G1Z+KnVkYrCKDZpv51q9lQCIbOWzrnSdrdBeSIoJ7XoyR2pz1S185h+shnV7hFkN4kvmFCB0SdZsG2L7fkg/bGGN9XYw+eBwXYQc5ENnW7AspwZH0j7kYKJt7uKnzuOqZ5eex4A3XAtQjiUuElZz17GxtAPiiwQoCbsLDqsNDW22XVgFEUzyEvB4+LRouTujqDN9nOqLmF/bqUlst+kWGHLup8q0lHhj8SGhb1RalpBNVcKs/r6eQXXJq5vKJlfrJR4K1zrNFnBF8bdNzJbkU/XKCsmRotzbyqtJaOUNyVEz1y/Fb2hGZt+SBoxIsfyGaPdCEfe2UE5JHaI8ZVPFFxMYNpBX6wz6+nRSEJnSGvG8NNLyP/YWkPWvRDDT09XZXx0hNaKjOm0M/dToGJFGVYHEiZQypyTjHv50ay1wW+2PkRp8ZCRh07KBNk6gQwSQVl6k6eBfu4JraHhE9VUSjVfJGInIkibzpws+6zsb0bt4sEAS6Hvy7XUrKzRm3/7QWpt461cb4J89+MahRUj2pf40rirwf9B1AOUSGIsOZtU6NveEv3b3o5W7xh28H/J+bHHVZebwwMpl7xjDXaYERj5AJ3TrizIv5dGC2IlONpYdVWJt7h/80OfQjZpIdjqFqlNMiFe5AUMobM04w0JA1hos6XF3mXCZlbre7VPRj0vVxrIFVwKa7x5I5P/+JpqNCaP/ndFQZmnyHV1Tl7veiK8YaxO0GzFCCzX+nZzHnPPcj0nfXj0+VzNAm+fjp1vhs0k3hD1dysAPFQY2KUQ0zH7Ro63pgkFFX1J9ijpetEUCDmda6HB5z4JS61Uz17GvgK2GgNxiML2VZyqibX9m+DUtRLpJY4OEEF8vEZTy8Rin78FMrWKC0ZgeP6kIZtVcuK7SECT4yMgisaGkujmo2BXmOtuSpwdMV/7/obvZTKT0gO3d9ds9rf/2l1ogDiRkWWfie40rLGW5/Wwe3yqaHez1Ewp69lsINty9llSIFQUyECPlA==';const _IH='fef0e1c04ada9726bdf8f81466b5cc58f98ea6e10f46142df54bebf032f06e12';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
