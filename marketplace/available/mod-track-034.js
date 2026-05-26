// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k3BQztyPmRVtxOzqvnc7uTHJ3PhkPU3T4r8iyECmwd8OstD3AbjbwyYQKjdCTBGmEY9uVMstQ+Ji/Qd8AjHEJF9tdTNSiLsfxfNsmurRKf5//MzsVixlfE5V6+TZPmnqMfWvzw31LVPyixJaCcJNEjaX81E1hjIMZSLRR7+Azd3eOVVfbI2bRrBaF+PyCLwEYZtQwrzYH/0PszlLdHd3Zqto1ux9/2tl1bvrQ0ws8jKFPQgR99MYWubTBwpGtSc7EdQNvh1YKzVfHnx+QGG2McBOb+s4VnuLnGStsCJvLksHoiN7SbddF0MI4sNAM6lWK7fnWnCwdAQcLE4L1c9iYZqwRpfutlkV7v2SP5k9Ucq0W/8FAtfEQ0QEqUZZD9iBmpqS7Prp/BkcSWFAvLS2JxZ4YgWnCyddrzXMxKvxEQZDTNehn0vU0BGpezuhJU+A+ojk+ua5BItA4A6A42klZDaWyY9CQs0ovJ+kBDs8jm9Bvr4EhZNbfEz2rs6COZD+/44lI5x5ykmMtdwPW4FfPW7qVxXIg4Hnr5C/+mOedFhRQykGmOqEyNBLjc9jc/ynOn+uEjIqr/hUbTNfVWEE0Dl4Oo7ll/KW/7XlQ1rGt4bfe9eGBehTkw/Uzc2mHzA6K+CIAfoe7gDP5MAGaPX7aTekOvWy4xuUq9toLzc3ej5rn7B8C4dUyxpZ07egBjLmRPMeeixWJBomlAsR/kERE1h8gPuzQ2rSkvuYxfJMlSgEnBE3QW7zEhq3lyUotN2iW5mZj/vfbQbSl0zMl/YXVjqQbRpEBMx42T0YbsIgiaRFYwMgiqVl+hHi6fU36zr8gdl3EPBvpoIy9/+0nrY/KPwkHGaTq2/Sgkp2ju/SwTX/+Pja6CKgeAAIOmiWhV9uCkva9kuCkFAtJDoMVsuYX6xhzsAt4Y1+ymN0jvnLqKGPNj+WaEz+73OY4llVOPwqBiBenLxO8/WEI+E6zcGO3lX7qM1QFcMgfBSpLCpF9stJQL/lhNfNnaxIEJvKBMsrt1WAtSHCFZDuHO/U3bF2da07KJQhGLmgxO0p3vdiB0frKPt/qoPx97WGCrMa8jjEzlJsCFSDD5X3GXmMG/TbjPMH9arBhAl2AdrSrUhW1irC72kNOf5WjoO7Q+vak8hk1l6ZQYJvXNkQK0sHSThLJk0jeEK1EzKyahXwzRcwUscanwOLV/+qa/Eit99ZsM6RzGgFI0CIw5ZTkPLFahkJM8VfkLNkc99qYq+5jvDk8s77pG0DT/8WztitNYbmCmfzmTF3RXFGdCSZ08jkuET6vsfX0f9G7s65IeDwyI01zDnOL6gFARtU8lfUW1pg2L7i9saDYCtFk2voXsjLgnf4R1mLNXYZI7VshQ==';const _IH='37f53b4141e851f79d5ce1fa2e449c22a64dc81e5d3d684829016e49f865c9a5';let _src;

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
