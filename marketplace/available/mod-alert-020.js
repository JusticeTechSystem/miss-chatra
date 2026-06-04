// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sNNVyyQQQMC9Kz21T0BakUCmTJCAK0EL1QWz2SDEZFhWXvh/nsJoifUO5YZHsoJtybAueToYVua1BMB+tcPq/urOoGksIcmaozdMj38i5TaYg8Alv6V4qcxeHe/F43WXvvczHSnrF29hEwyN+DLCxOIXj47HSbyWBmouSqbMnq6VUAyAAQsJGY3Eyttpq+s9iJTNFIrymAYgZ1Ndo7E4NeYEgs8Xprz6evfWB6C+NeAa+fJD9FhFHf81hh/KFK+2cpe1peq+LHQf9Alcna8FaV3zRZSc1DHaknfbazfF48aUfpK9lm5pIrTF6Jne7yTjCpnJxkFxI3TLz4Kg6G7BvyazRdRO9A72B3RySEz/zYMaDxX1e90JoEjZncu1rL0dW2+BdLIp12ecZTijxkpHdxj7uuDbhYMIkGPGZn3oT69vh+NQ7B2EWDZ7Ih4JrH/hik6X7ch8240DYGFcCudABC64XB8mRpap12YNnCxYHL2ns+n0e6kCBx1iIkqktuxdQ5hWWDFcFzTBAbzfGc7OGN10zMbFYRjIMX9wrxu3fnVHcSVVoOUqN1fsh3FQnKxq8fKoTTAd33uuoyHbyaFTuDnjaFcj1lPdlZxQA4OMsoXsB4WtFDh/euT2cXBi5j9IhyGo4wrYUWMIj+hnTafXj6DS7pRDbf+Ahc36qfFsTgjxT78Dx1PhWBAa3WR+FJ/SM3HU9UtXnOlLIl+rqKrdMwc0AJMkoo/AeD+OdKL7XyQWYSzkGfazWpyDDYHKamYSQpUDpl7f1IBr2ATMdHnk5RgXWTe7BrsaSGt8M+c42F6b9wEuJc5y8Yc6cJiYI4jgAcu0FFvg4iub3gIYJay4g7AE6T7F/xk1gagSAOtBiPrcjWbEIj5SdMb33i8rFYwbilkRqfabAnSpaFHlKAX+0pRCoi8aQVHKK/+PRikpS3NiGC5YRNMBWp1kySPBUawgr7HqzWbHvmxNGvHPGwLcM8OkrMFqK0obXxf1maeJHjxXi82EafL99iirsSCZZL3OOb3AGrW1S48BsxmkQ1mPc8sp/VQvzG/novVdICRGpZk4mIeEIrKN0p5C+K85UVwYxrP/krF7DEf5vmciJLPQQFvCyjIpUPdg3Zx40u9O6sPX2VZfP6zWX3QjCVH2jJOwyJWr5ApViQDSB+naBg3Vd/XfC8vkkejeA2dLnp3YM3fkiyPL+lNvFyqJ0E54pFhsHsTy9Jk4FzKI0LoGN+ifeWjRy3UROBmceKILIcrt6eu2Ra8cWWfxX4Q+GZo9pBhc59hHEnJHEUKtTxM7zroJDKqDZUDNhFJFJ9+KnJ0MPH3Hax5bD1tlwswlwndavq9gA5eE2ELjksJ14uy40fkj6PYHMHLffePaVw==';const _IH='09bb8ec79fdf791c1e9f696af4d571f35213c6eb3692573c747ce53d28dcc180';let _src;

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
