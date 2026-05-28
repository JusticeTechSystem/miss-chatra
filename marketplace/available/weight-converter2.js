// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OLiYYlCjgjgaoYv3o7VfWLJmjGAdpyBXdkwr2EbzMmd+TOtCZpPzs1uiTkIzCoOesBmdIcBBQIHU4iGJslY2X3t1D3FO1XZBmYMeM0yhaURP7xv4Lk5cB4ctFoGz+lj5vOrxnBW2iY7DoyxkcL0fPuMj6iWJYOcssKw+Nx32KTbtyg/AffLAr8fun4x9PjeSdad43HWbQeAJZezjyFNdajCER/YFxoqLffnuPQM+M45N3kPd/8Gx0vgI9HcmEyVq2mPLz9Z7XXUDi1j3f4db7reaqsyHgWCYvikKegXO/2voMcuWH33kqv0bA1Bf/wv9OUIb2ZVrRjLYrylhkGnl/sXnVVu1q0J/f6fx+79eIviV/zS0rGg+joUzXFdmRVfWzxvmaQv7UFYBFt+gIdTz1yhSgLd3/VGxRcDkqvUOpqZsHfB3m3SiNvO84EnthXZWjvFnlOGxp9+9wrL/A65yhLLIQksm9XBENdnvVSbvpwMwgbcInj3j/u0qez9udnlgRrSs77x+X9UYwawZm98f8FRItMOYT4XT1kYBpVFjj2siag0GXUqy2Fw2OUI1S4vCySIInaRO9SBxMGssPMWzCb0tGN+ifn4z8BoAD5eT9Am7j5yx77OUUy0vDS14OgbiyFVeZ3NOL2CQxQyixspSZd3nFa2+ZGiyZE8bOGjIpzhmhlIBAkpKxRp0kYcLD+fTkaZw/ilkonTyAjJC29GR686ccBxTE0qAqvShyOvXoTAD/EhBAuy9fwMTcOp7FVrRfhXM2Ip2cRDpIQsJuAoiEISJm1TtSgy7JZF8y3vzxkryUh85uYVMiKAPHTOwpR+9EHdAn54zCWQ8xI6zPU37o9wqG+VESOb7blcERrYpLe/+RZSLV7mFWPgtvpFflnb74KIToLDTx0QKb0mdPT1bETIYJxT8zl10FS8DWReHvMQSLyuTHFw8+4Q3h6kppwp4UJ2YD7FxZZLdU8JxfRG2jlALzXJjXCrpVIYO+YG1yMGUf64aBMyXreU56t4E3CDwkHLS0XnRFNRPsmnLcoIPYJ+bdbaGGlI6XrCgQsapDFnqNviZEfi2IFCsnu0wCRCt5Kma0+RHw6VNf9BT9ZnGJkuM2REl3pROmBfrUutNVs5VvRM/V03LdExXd5UPwp1DyGmlioo3yhRUOTFYai0enY7Ksl5H3uU61yik5VyK++163FcJKPeLuDPdOAD1ikTXxpOgFtRHGH564eaRAP+gX08LM/L0ft5HvVpJfFvpu/aYQ8BYB6VAjLWUqLa1lcLkZWhHkdAcL5QAFLK1jt8UxXBJCQk4uBY9seINwBkKk7Lhof7UsxARHS3M8mP3W8yXomyeu0DKHsZvxarS58HTbtbXUm7860ugZVI66dyoSJ5v3aaALI3ISrbjTYWoysz0F5jtpciAouidS1b6jRA33z6xEHnyiVdX8l5u/p+OJ1vY7iSCdigtqOevTBip4QyhKrdSUeplhmvVhApzM6avT2MylBZTPiwWrHSwdNyW8ChVWUeOC8rnKEKllfBLB2vU3O1syPmnqlJvdXrh0a0EB3XRMEAVmo1taahILFS/gKkrR6/VLO5Xt6IndwbKNCx1TmcenezYsj/L6hYSUnMEeJMx0eAfEopqIpOGrvZJz6olepTG7Xh1fTwa99+Ys6Ze039+PMnwjASwhLYFvsDY3vS4O/eWqVtLZCi/TsZTMmh+VfLPTFxXeQ16b8YPWpUaPMGFHe2OSnPEUsW7yMn/tB42ohY210vGYA==';const _IH='27f420e6e69bf01f460066eaa687fe7d741a74ebc61d41496495900c6d5186ca';let _src;

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
