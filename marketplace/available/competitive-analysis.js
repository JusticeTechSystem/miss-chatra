// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3PP/MyVysBuNwgQhKJkCczY8Qt6xV5BxuXU39KeEeun5tSH/kSZQh+ki0C01QPiIDN9JKYKEi1p3f9B08W1i0tc6XU7A+kb4Ib/9IgNKPG3T/DMzVwbUfeFHXWQEUI3GcsevBqO0M0RrmJDNMWXfgem87hXXzrMJZrH/EKZwz01/RVIfLLSHc7jrZ2ZyAeNwYgeOzFww9lxpifh/oxGUHh4ocenbel3mkpsCCKHNbuyWf69KM58GHD++vhnrobbpQfyXaU2sjtE65NKSfS2TFvygU0bxINtYOr1MeXp4AGU1kWMfoY+oN7m0csb/+4Y2f7FLyoMlLX1fZYY5IbboN09VU+ohZKtCxSWdejxpXeIg7pGsD3IOgpdspgSQDRPdXfgdOnMW4Oh2boduMPpLdFVTaKw4BKpkNZjoJtjEl2HPgaT843FfDeFZ/mqKSbQ6xhZhvmZU5MfO/aV/vMmWUyscFIIrE8aR4ZbjOTQZdjXWXv7l+wcw7Lqe+oeyVeWN+01dEJJFYQ+iGQ/JW0Da3vk0mjfknvJS/hHSbgSfJoYbfIPqoDLQNAMc1Ta/EJdm+evhdMGhmZcFz3A4ZNtgp93RksJGty8MEVuAT2qwvlTYqdO6xkksuCE36OIdKUdkpC/VZ9Xxldi0ayHeGq735yTuntMQRtTuk9qK32YB6Mt2BAqFYcwFQMMmMV4y2pOFK5Chdm2eFMfa1zyN/ada5L2sGgvk8jubi/JiPBYp5jmn++OBsXtQeUNQ61RWxwrDOVgZDHJb3jmCOt8lk7G5fmtbKETlQJXGKdQR0Pbu2OMM6JJ9J8CrKMb1HPGDQtL2BcPvcrnr7mUWACc1WSL/CLdwR2wJwUPSoXRT7YHJNCd2Xn3+qrEbqmX/X54ujPTA2tkiV87sSdquxNlIQ1FlOVUgeDAVrS9DVongqDlavy7DjUuKQrd5E7K0EHBAQOjENyUciRj4gq6uOVSmhpgRaGLwcJWiETmUoTuNygGe5OdtDF8ZeDslAcBocI8J+ZjFV49ESYsU4VnZMA6YFvvtDjQWww9Uk5q/qTrL1q8jV1aomX0LblOf9+6LOBQb9cSffjINzQK72ykKU0Dlc4uoMllE/x4x2LjLfMFFKaGr0aja0fza0T3ehVEXs4VgUnB4qJTBR811ocqdNE4vL4kGEvqLuRi26/y4MFzzmdGMGtdWPyIvRwlEIRCYpCxPR3cbzXrx38pToiGPM2kqemx46VFs3ZYzRJxW447RxGocXBPk/3f1eLaTjZL8KlE9OUprG0DOqESR4jyy4Ef/90HP6DoF+6ZQ9NlldVkB5yd66qSNUabt+YrC4q3RC6GLwtk85x4nZ1MPmLuJ6VCNNA3fPl1ol/yYWA8wB0yST4NOGHr+YM1YEB8WbQxg7s677FQaarn+O0X1739/yPHikA2JabUWrcOgC4JjcmrmLr0bqPU5g3wDGkTtxBrlgTRQuea3pDs//yUfYUBOnzVl7VbTEwOGIr7vHYc7i8gaJnXI1wgKjLGsOfp/+q4CXdS4LDoq2+IgXbYE2k0ZSPvoP2zc/JGLP1TXCSauZ4eFmZgvxIQH1tOWTGGUC9rE5Z3T8bTFAZcdGgOmr0LKrz8qaxoCOJkKO6KxTKtNyaTavKHx8TQBSEIRsbk+mesXaN7dYEkT5T9cY0lf4UljtoMCuZEkhWw7uMNkF0fdQgdMPfpL4k6RTVWvKFTL5M4nE/IrGnnAw/U4zokufrXIdsWBIa7xL1K9VdTGU7ifznaUAVlV+vckezF+S7qWwA==';const _IH='1a4ebed0abbb66170fd9b6b6a005d7e51b8a47ece19af32a0db2aec244c19919';let _src;

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
