// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwC1txUEbYDV2TJKjx0hZtapMV7I24N/SaYML5kL578ug83t7+0bvBdo4IQrap/fLlHgcubYQs9BH9N6DGQGjeZYkn9A8VOSRxIR2Lv3A8gIVLnELG5HBbpm4OsL0t/ctAyqJ+RG+RvKdqz11Vkqv2srUENEZdf+L5Xi17lSzthDEbCTfM841wVvK7E3U3hcXNNDaZI2lFVR1YfCXVfulo1Xy5L8Qj3sqQwpYzRhbzCp2CtDSWYcb8JA+lJ4I0/PxpRAjli9EDkGQRX7MfeOouKGtFzgYp9ua7ocSvXDKHhdSnHkgpJ8pWePVDUgzBzYShM7HP67eb5hAYitO3it1/nNVUsdPvGaAY3pxOLDHRebaQUBSFGR/FxmEVLMNB5ArJZpldWL9E9vjfIACFrjmZror9+aBbkcIFoQ54EfgVNH0x8I9zb3xk8aBoi+0U5FqBsZ9hOqQNAxJAdm/sUju0Z8p+lxrGKdrHoBCzwG35naAtR74DAhF0W+xUpXmjLbAxulkc1Nh6jZiP/aCL3l95K1Pqjc0m0YtYdrXAQLNBfX2daI7fPJjafsnCtc7I3d8qq0brzf8Ez2MA2Z/s3/o4ae4L/VAtt1NNAzGgLjjK+FcGHMqTO+E4T1eJMvzd2Fv1aMtjorCZC5D5uu2pvtUnt8XYkVzW3hYHeR/9z3uI8auPENagb4IxaglujXfOy82Vp9dnVTz2Nbwc1k5YAJWjIfcUtin89XntnOvQSEWUDkp8/dhgQEwlgG71CiPyC+1TW04NsUPVnttDjawUfn+RM2Wx+tU8QWgBz7XlgNbNaKP2Q/0BpONgDONOVUwtFRYpHR6Gj/73A/Nzv2WGyN5qgcUUgm4dIfMjRQ9rh9OdpSRtinM+Ru5NwCuXM+sSQTyWMu/s80gF7lykjSKS+Emd58cn0m/bHGjz52t7nE1kahygeVljJJbLkDoFQcRrAmYL6ShpyMeAz0hjgkkbAHtrQ9stKP1CquLYmFOBmBg6dOwqIRT2aDINk/LpImZzMUAdna4f+4rPeicLnZPbE0VLW072XXnmTDQONEt2/EQwjO3GK9uFpKBIzrpUb3xHmJuqePs/RmaE53CXFxLRm63Hu6uSXPvyY4SPH3UVgCGEZoWfUZ6d4T1XIfK5D88l5jAInxq9IEDKviNnQ4oRsTHCeVcmK2k4TOI//V7kFyT+J4LmyjXxRBDjZLDoiWbAE4bpufBIKkHIg11C1CXLdngbPkJt/6Kebpt7mGiCSq/ajkkOt7uKTiIBILBt/hwNjoqOnsl51gLqS9Ih3I6w1OqYTUW+J0QhoZMYkENapYLw37nSNT5W/zrJy8fW8nALpm7KxRGRMkP2A0jPCeo00qIrfz/R4KHKvIaf9e5ew/9Hg7w/WSVRTUl3HGo2ws40pTZD5T0aBneGmJ2/MZ51kyUe/JmMN2h7YyALbcLWVHcMGADrDIcaJgwPKVK3xADT4wnAHws9t2jt1LGliUQ2f0OguHil+SLPzE1Yh6gvCOJKFvFJ0=';const _IH='28a5f01b305052c44f5080b305b92e2f16a95a83ed2f5fc8c4c972789fae2a4e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
