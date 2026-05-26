// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kzG0lyeBD1FQ7DXjVWzuRmRIPgXmE+1gZIErqCl9Opierzo+bMteJWhn7fRO7fOTj3MfLPqOJOMjMwhbj1F+ZH52ZUJnhlYqWRAVfxBSVDFQRbMWbFabaTwoq6x7Lpi7JP5uajboEC3b2oyLd5A8+P2gagReL9kDfYooWRloBbWsgdwWml0vKxuduVB5qPWa/Z8AGFuo4Z2tNziG07TFeGBw3Q7/hf56dKae5Lq7toaHY5a5tahJiaSgQmwS1NnDz99w57Jn3CUyDAG9719HO+M3jPs5DoL/Gvlxs5BSO8jWhK5rii7xF/18LtUWT3EKXExQ7XLZxiEDPdrdwW9Lj2PS7mTzwgWDBhGJVBTybiqniPgvM17ZaD9WVDr0Mjax7cHEBAYlsBSGqtvaPTSEQnNNXNsuzTf6Q67V9R4JnLV6Nmr8+3nq1Gj7tb5SyOcvEz5YrP/3zrppBP9l1bg6Giz9tX/V1TAHMtb/18qfjgkTseXTHfa7qUvdqwWkWNoLq7Z815piU98ys+ikmIjUzez8e8O9+1cZdAKVk8272213EJQaCU7zduDM9nqrioGPQN1+SrXnD6nw6behrGkwPw22cyrawldBuqNE1MVhQ+61vWt/HPDhdojfS4J40rlWUor6tszEj/u3/YmTZ52ezWwbfbdtZvqfF4K9BOhcMGSNQ13TWddh8BW63c1nO2mGjeCsycKg2Wvq+F/Hwde8svXq4h/ewWCCZPjOMQisqMZIz8lcdrU=';const _IH='93c55d3b3ef57611fbf8fdb67d3d22b54c29e9fa9c7cecbffc7b3564f06e8997';let _src;

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
