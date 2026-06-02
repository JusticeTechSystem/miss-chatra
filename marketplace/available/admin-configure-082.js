// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7M5+FdF3bAK6xg2wZFaHQ/pWgaFYVCvyv+vvxE/J5wgvkkQLya5VAmhGiRS0l/ty9JbnorUUpSFak7ZLC5tGxoVQsnbYtNyJed6CZOKTkeZ/vOKmgFF6chs8zGurCN3U73I7PGgdBfpRlU1khSdeSXQ+7Iuv11ktiKCmejsMINjTQ2l4HojEYdjSPSd4XX4DvonTGV9NKZmAuINbCBhM7yl+AG1pdH1HSHz2TT8UZJe1fJrJ9Y99aOn6k6XqfQXw5H9uL/OmzZoud9/u4Rv9QzoeWlJS3/iSpGHNGZo/qvgeLD4ko6XpXr1YVGGiC0CKJ4ARA3JB0Ib4PQhkLYcHEqojv7Q+wLqeaourktPmtReoGXD5SsMbkcCWhWC63XgCc9M2qHNAO9rGNBld1PZzUpM6lh+q6oFCGXZ0Fs/wMEEkl0WfB0I7LQF3fLKqTvipCY73gGqChDgSMszlYjP+iwjEDyo63gh9uMmvKdgV8j5Ebk7XnblUFZCSnQj4Kb7xPdbPza49nDb1otsjsoCAgjvUU4mnX2yfJdedg+3qwSFExr7msj2Taf6eCXa7hm8YH/bM7tUvlsztEXfRLfN9hTBCKlad267QR6UKBMx4D+H6HihR5IuWnTT2rpM3kHuHGvSbnqVmOr0qTW6zYeA56oS7/n7d3Voyab0bI1zg5ppyU8SgS7Z8fdfiqbmSRrnBN1WqSJDPJXQzIlK/lwxg7bjFEGIJ5aYAoUr/aRvNo2ar6Joowe337kWT2/0smIWRP515aZcXwkwZTD2VZEXBWpQ8tZvAy8au4UfKKsx9OOtRhK4ccO/PT1KvaZ9+KQERMh5L4wbLNVjbcOKapMKwX/zIBbD3d4rRVxTIpGkvFt2cys/TGZr5i8mKwJoU7Q+emJ98fH/ujm3G8EISOElDE33QX6S5H4jd3M6cMvNXeeYi3nYPJKXJxo26YWo8bAGxmf3lb2p+ibOjpFloKhkLkcuFME1ht/GdlNwkp+cddQMABXWoXgv/rH/zZs6uNyKe8rVKJ4gr+++Ip4n9CMcazGXm';const _IH='f994b48cf1b3c69c53cbbc2beab5f3ac66034723319f608e4219a15b880b1a06';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
