// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MfXiZLpUY5uJR1ah+p4DuirvzgYUDanj/Ziam8utss6Bc2rAsOFLEZabjDgZjYiqNq2OmYPgF8q3qIO0VyJnvpy/3RC4LIPl5U4/KYi5qCyG9ssdVEB1j8E076QbRHs37lckbKF4TeQVchQwPI+OA6P/YMS9Xcc30SNsEpIPddpu2o/MF5yTJ7a+m7uYQHkQTusIXKgcnaOssGdjEEpToaCEmfhg+HYrILXKnFWPygmvYwTqgPXTYI1cvF5DNoysCMSTfFxTdsFntg6TZgqezS14VwRPv0kZoEfk/qZefdf8Ncij2gfK//P8rLNclaFpsvPK+OMyawVB2LEcpK7feF0uAP/E5AaVQok2BHkg/HstiPUlbZFOJgkWYcCW0JN+065y3ggokAmVIUvh0/Vf766G2tVhHX/nUy1xzBQY9pXjEFvRhnJ8C1JR8jprchc0o0tociWd5q+qlLf6ZyvVrMmUpxuStSrcXysoY4fygzEzW/xa2oWK5wix23CWwoDxTOB/XgLdfOKB/5BWTd80bajMpzN8Ld/VLpwMNofB4K6LtqxpLsL0jf8/4sA5L3q6gcO+GPDVH9mutPYmCF9ooPjNnZ6GJo42n+6TYmOZLSoyCHKkxQt98iFN8cbIlka9Yuh3GAJVKXFIVIymRyDIirUex10Vjw+tLoAkblc1uZFjukAkPukHy2DMm0gCe3y7Qh26WDOwB7BlHvxTVwENdpEN3REzNbnCenWzVuKMHOJ/+tqV8q0LVn7zccRbgpwE4Dd60TpZg/aoKmmq18ZYWBAMRa5Z9Y+EX4N2tKjZnSRq7qcQpjIEC+Pww3TIKjNzVOW26t7h/esowrZH2c7KZS71k+kYrqX3+kpHdoEwiYB+6FJ0gojy5uT+BjgTSSoLNeUq3e3mIjwtPyiR9gvuEdlOb7l0GG4TidshBNv8ujut/h16WsgRDPjxvhS0L0iYpk3XEArDov54xVKC7tpeGpvKdT8elQ8PndZiVXSi6rBSOc2a1RRrUDMnI3wCNWWhEOLln8vFgzWVY+5iU0dHX1hrsYNv8idc/uY39ePtsvBoxNOwChJ+ku+S82r1pQl2mBQqS9NiR5NalUG3Ao3+8yP99Fm9DmMI+U5nIt+9H+CM/3CBEupJqpQtrGgX4Fc2urii/pEQTqa8GRolBzZuOdY78SbvE60Rnvq1PLvvKCsFySN1iExT8s0oGSpZd5KjImNhHue3PuvdbHXmeA==';const _IH='726c83fc0e2057333e3b0d5d41140234ff0ffa463d6dd270ad13bd8650c04050';let _src;

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
