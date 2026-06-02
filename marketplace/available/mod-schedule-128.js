// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P9RLYLydezAld9lsxy7bucTq8b29oxjrG9MDzKzvROMrhgBjnmuyj9ZGCfxPDiT4vLReRDXlz0YyJMJ3FP0KXo10U4G+YOj4YHP5lo73jFD8cEslWFrBQ7am0OVGpE0qZVX8D0feUVeJntLbeCliQdPSnfr0em3MVK1ZASuYCOIcLT2U8wQXVeBifV/q3/l+bURbIfnt8Hm1IdHC3gaH4eLCoXrH/PVe/AV4VZx6witJCPLDyJgttzO7J2B9MkWXI4bBZfBPAMtpgHEpqnEwTnUFJoDm+Og4pLBJT4lzScV5nfJqrCK6wiA27VA+6Fzety6psJGSnlr4r7aUGAAc4BqqwIhHFZY+8a24BgAoQWgRFOB/PTvpWR+BcGHDvevaBzBLDTKAzEfiumNKVmGXer4HAchP3JzhYbFLbKI5Q58l1cKFPQ0f6L1ahh9jIvXzFUM9TQCk78sF2wGOdMU1r6cBfOX/VUQdYcIuAiIAITVs9rOPJ9tiEyqwaia7KZ3s3B/lxYJidTH7e7HXdApA7frQ3sxqdM3y5Npk01it4zGUJUYW98cNzMwkV6x1Uyuzjbqrt4UlWVT0s/+w0A76IDT4QZN3hvBMPZvzUViVawTJY/HGOOVJ2L4UKKZ77HstNfgiUXgvmn6BA5wyc23pGd3bjZ4yQHhYEazqXwJ1HCI8ZTokI7GYj9DzzkVcWzdD67A8GrFE1JeJ3K9SV8T9ZqE20fUIBovq9Sc+WYx65jOlXPnXuvpVym6pwZ0AGxWA5+fSNcvWaT7rEm8lGtALr92MXc+L6c9nvMSESC2UhpGSFmmlli5eWIQGRVvfmTa09OinAIjCiz9LuZU/r8nKWV9lSdEXLQR0Xu/ICVlqmC9SwXSLZFE7RTSPaW89F/D9FqUvB+xXYq4JPjdLMoDYwPsd0FwwE3UtDnvL2HJdkBvkBLzC5xv1AHiM3pleDV0635IeqYihJaUGLK2OAVizjdEzqX/3uc/yjDzp5Ukk/wzuyHUQVIZDAWtYZ3OIjIUz/+vSnpcmdBEpBQ4qFous2NwnRWNO0LpIudRiTcZjxUpRuIkkv6zqlJf8aVZaXvF4r1Y4OBYHiIbsR4hNFOHLmmrJjcfxaSSQJArWcPEYaTVs6aiFMn4j8d/F7RguF1rY0v5EjPpCQ54cN6OhAL1oE4+lVPsp716OetpOxfumIBdo7MwSLWwC6PknC4sKK5cuPEudqogDCBpQv01iwrepQAHv3QVz75ADao/8z+I758zrFAZdqGATrl6RFIWNxTsVshpVF1Aly+HGWkTRqNGcPzoGHssM278Fdr3nOr+kUxnZwGEONiugWwh0sXBVkxcdaSSROuQeJUudklEgHLBc/qs0HXNikcSN5nQWLuyDzxlowW+ksmSii0Z2j6fXGJrEl/Vxsp5dQ1UH+SZ4';const _IH='c2f8fb20047d005183d001e52a946e2b97030978961d9c16410c4cddfa9a8a38';let _src;

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
