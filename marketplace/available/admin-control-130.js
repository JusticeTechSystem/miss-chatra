// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HVWaRAJuk/EcZBSz1nwF/9aKwWnh3UXBQbLnff4eOPFkD+3sMTyuZ94t4j5XcdgIVASZjem5Et3gMi6mz7WPVKJ3p8tCDEE4kypfItAcDRtN4KtPt/7Br2ebq5VEH8A/eKCB6miUqzDgvUmWeNIN+44UbU3QZEqNPiWPGoiM8s3g01w7EjzQDVnzbOcii43z1VbEkmQHGK0nRoSpUBPlbCqo0lRwvLjZl5vgypucSmZI/ffgFS9lEiZTPiqlbQGdCDlrmyt+/aXVN7RYeivn3iQtEjmrvXaw5CIRK4UfyFX0pkuP4vMyme9QEEDyqq1Lb5FhFgKYMT8HbwBMQ/3zp0DIRNPlHRTFM9B8ljQRBmQWfvnNnEo0qcJFXb9AmdAUe1oLcqgq78mSn15mBX9B+a0jA5sYKMh8Mo0MvCqbme46y01Xhvi9KaWBrzt3tpiQIrVnYmPS5hNf+rTqVdLrH8+MIZrwOwc/neCDWKyOGgUIsexuLGBeXkIeczakvk8Ge5g4ZanAKS0neqOWT/b+BcUf5s+bXNPxVsxy7LJ2Csvq3YYkXBY7Gm7picZX2lYeDez+J2w1Kf14SIL+wnbRtlYRSovpOLnCOFDERrZ0xRHNhzkkfS8+i39/YQI6tmdiOKRcssqmVlhm/P9YhT1qFjUbxV4SwBl8iBHHm2ikLmMiWoodpMB5CMbko1nhY4Kbkq7QhDYT69mJE/ziiY3BNygI2g28BiUuCZz3xMZ1o5mmeN/XxHiTZqfY7r5iLvRQHOs6wfsPx7A+XDcvJwwlJxVmH5w0nhp2zPvglyYJ8fZl5jIpZDp/OLy9Jpx//9Vgt56KQaEDKDe4AcN6MT32UGNCEr3RLnazGd0Q2rhn2lZ4qHVu2ez8Io9wFVkcaez71d783OMoBYgmmapwMup8UBersHAHemrXiSjGpw+qD9Vg6oVTO/U6k4dNDJwG9yZhkX7Xjn+UVijBBCqwyUJm1fzI/Wt/v7qSkyYqrxAtpyMksqM3uJ4gXTP1R09KD/9jACJORRK+V3s=';const _IH='467d47b82000b322664ad31306809bb55b650c3d90101d63d41e6ba4a595dfe2';let _src;

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
