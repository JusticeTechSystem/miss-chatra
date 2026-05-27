// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Xb4CDwV3Ai/hKvE33z/lRLAajcvIS3bLjOydXzNfQmhzXjH0hR+ay1sxAM4s5PrEP7u1jyhBGnS6oYWclq6rSPiDJcSB+I7SIW69tiGlVx9jEKwA7VPyeHJozlUlcYnRerGK2UJGb8s7tB/QKEuxkEf2jL7StMkcN7ZPUGW5YVhBeIEKYhTggoE057AYwB6qYJhXvAuPFlnlDPcmT9cmp8StnTmSX5ajDBOxnL7k3YX7gTNXpNKBPmFiNSwf+Tcny8AvoiPBbFk3SUP41mXhUtflY6IuzyPQ+HEHtV79JPSXr+nxpGVWCeHNhhSNFtZlgOiRmz8tHpcgFc3Y74PHRnJvJbrsUmdhj+eaXvq6omNsEhFEsMzd2AEQcqjrePgHP5Y9mhayp/dfIREMixPxGhfAfV4ZMWzqfjknwPfOPrDL5ro3iCVowkqHpKI+PYCOTvkLOS2l7nL90pjNRykMLrC6SBTZ0bb+G3YMGlyLExCpya/ZSDYHnsO6or/ZSAZ6cEaBej84BNVKMMoJFPxmXqwJ+ag7DyZvjc7uhZdinqm67uLUEcCgCEm8+ovIxAcB+ux2p/hYCwYEig94Neti1tLDY7BiNZ62eVyZmGCcrm0T3zjSkyuNHre5j0TCGnwWK3zC+4gQSkodsh38A86SJS1cEDRbnv6b4RqPDVIvyLwzUJZgyd9bm9ofmW1gO+txklazZ1wdDuwWV1oK/KT5X7FzrwrsL0TXAik3ahu9nRChqxT5z858JQ3nNtwZWpFEoqSpNZxoEpUx6iPLqm8jgazSfwuBdov+rPw4miR/U4lrwHgeNBZ+kiQJ6jt2VwbkLId90ot+bT3/7V3Dj4KA5I/X5TvPV08asE0TjQnIavcsNCoJJ7dGYSdHRkpDNAcgwTo00MniQVYAvvRTQh/yIF0vffgR6cBWXHnZrAGqwJyt7CbRMj8vzC00ZGuxyjPswNObpqhvbBvPiZTOXqDvbwdmOzQRIbAIkvm10u8v7jdEP7nt5ZqpGPQWKUibGmkrliV8EKJ8VWDQK6EUrnNvjQ2M/zwnlWYOS6v0sDV2wd7Ij7XRtgkAO3dBJhxVOmFud3kU3gy2z8xwZaVQTUHRWrL+Fs7Goc+0nYKhzK9RDtQMc1XA3lmaMKrQgmBu6QteNMUIh2wdW21C6eqaLNKDBVUXbeu6+2pEWM0FjyTwk2yacyBP/McOPKCb28Te0rBjGMx83ZLaKqLCzW/OGZtP30YNRMfgJR5caWoU0GQ8stoN2sqGtOn0Wb+6APpP4Sad7JP7YwTcdawx8U5JmmHX/t9G8uPqN+tvvMZJLJ+vKIw6caz9K0Y/QP3NdBKxLdP4BPDWravhSlndZPdRXh/M/Ca8AK++Dy/RlIbVjtOY';const _IH='6cfbf82ab40212b82b76225497e497be671d9ea95df35d1dedbf8378b820116a';let _src;

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
