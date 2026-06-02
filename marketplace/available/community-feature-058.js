// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ILlOLYdM4wWBnmfB6fEw0z53QN2NUQ4BFkCVJxv+NNx3JhgjdT/aRDKTRwSXUgh4siGFqqVZpBADocf0U936qmxhVQ+qCV+hLl0DS9VtdM82slV5rxEYhDxG6iVxWupm7ZnikzpMQAE3lzbQlQhGoIqf6poaB3GvbaNTjyDulUJmTunf3SPI9mrcfLJix1Gpmg/SiWBqMvcVyofVKIPBIE8z0qNN10iuDx425/Fy4cj6TjGCRS/BTSId/fHiIafoHi4nE58wj5xnerNVO0pcxqQ2T7E9gqXqYa33g9w9mLUjYmhmtOHqBTgTjKTunUtaUTz5cm8dgxoNruuWr/iudKkug9E83TNmdhOJvwsx4Qx+PQZVz56c9llOcQRviuCTFHbIYTs6Vk6X6lH9ZOYDN/7SvMpbeL8c7w1VL/gqKcAH/HDqgZM9wZ9NqViH5zBOgfn5/phkRsS+kMp4Pb9OnWMtGqTa6NajBLvmTbVvwENvgk/3OAh/VFAirEihbLy5wXKcpgZmvslbZVsC/5ZxaEr7Pv2zIcbdBsUIKI6G6Nrm3kRrRqXrnrblJ5GRkI1xVAn224f1gEyEUrSxBzgikvs5gJ7d4jhk8GleHUcb9+Ce1k4JPGovrd/ps0pmOJDAGWnM16aobUB7r8dmDUItnWvN8I4/vh3knxYIoBKE2mZbvPQukbpoYKDbu77xp6NlzHVK8VRgcNwlOgGas/uJPj3fRqEFQP7Wjg==';const _IH='eadcb65e85f75755f1e71d0c2bced689b2531941ed4a8b48a2bb359b469c6606';let _src;

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
