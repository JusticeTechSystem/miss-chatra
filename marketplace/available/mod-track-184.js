// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xrLlrv2dPpjbY8SX6RjhewHIerXc8mJA3aNFn2KzStHbyKXeMBq0cMYp3q8ayiL+8hO8H6foIBZp8+4qTRW3sUBxllSQMd0pTK95fXCPJwN2DUO3mrUvrCK3xlsKgvgGUE2l406YwXHYgWd3sEyddf8Guikjoiy2gNSqTDSY07+Fp4lYhEli2s/FN0JbbVeGf3vhesSim8vRVKmaDkG5v6gXeeTCTUFke4V1Ox7rvuqQxnSp0xcbY+y+vljdOlUH9V711a057pMbNlTNNIkms5NUw5G5EdPr3xGVcbDbCFGj1tABMZYXu9GMnvyPDxoHHIwWzsfzgKn1p61P2u56aHzH8IK1QLMU0OcITqHAXxqWLe7GnkuK58h7Hu0YpeoGDBRYCRIWzhgcqjeqpI8T+RVCkC8o9EkC+4Sh58DW9XkxRrKUAQ6gCYTAWCem3JS0vkdEFAFl+47oAd+3/CwBXXX6V7RG6aXaMLu9dFrQ+9Fvp+pPBXCC+shkm02vn2Cik6gPIaqqFUyoRbXCfCHoH+nmuNjmpuDhelcCKBOiVkMQBuSDaHeAQkCIcEDTpta5jiHR5937NZW5L6D4/9phxjxYYE0q3k+qDDDsBJOV5qNp1a3NURya8ZDzwNkNvsLvIrxm44kFJuQGEh8ee2pP3juMv9FwrJJk+rCBMoRkKUvLHUt0PROYVsLzAz6TADr84aCJ7x6+1JyFMyYtxDPbiHznU0TTiZiKSzBNct8AesI5OctA441Soy6WMVRK9xyRe2v/7YNLaQ9rfUylqYto9pAPCPKJvwhL4Do2XL5J+rxva+GYOws1IiRQM58xhFHQHcl0anDGocKIMw5b52xWcJTWnVPwm/4OScZlAQ4SZS8VuQkOi1jmkh0DPKTYZsUByrpyccfClv7kqLyLdGF6y2pUYBEj9hJ09MRxU7eqz1AgU0GH2je/JDt28vXufaBJcFpZVs9PK3IMTyTnsCwccHuu8uPgu4Y1s4uoz2rQ+RnpvvhFOPCpZE2z/6xYvK7EdK6nCEskQsFKXncQaFU4R2Oh+sJMk5sJeoWPCj9MTxrOIrHrPEsd4JFhvIlaUxLePlvUMeQvxOPjW3L8YZNr0cGQpf66k2gFQDaxLRQC/VmbtuE72BZCmuBBH4FdrKHnG8AMcKqVllXSwfpyzOHOSVhrGUsJpR/NG6oo7KERGWfQu4xtftltiQ7R/OCS5TGMkwAH5xok4+d3fUw1i6AKoLc6mGPBOpy7tj96rj1ifckJ+2bHsQr7jLd4w4Lw65RUVhJV40csA5t5eP86aqeQGtwOCcZF5wMOX2DymDPCC4oKYaDeWbMKUwmSSjFbJW4pZK5Ss/gxduDTIVwS5gafvk1u64MXpPrJ/bRkbp4a';const _IH='088cd10c2193c2ef0957c708d4765bea583226cdcc7b398b5b34eccfeaeb93e0';let _src;

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
