// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='H66+3c8up6qwwaCZPljmyu3rxTk8oaBDu0fTSNYIowPNPc1S2nG1GVnwspE2twb33vUq3mPBe/op2mBEu1f3ZfwOHWEq5VUqsgWwNeS13rdCDu2VTdrIkGotWxC6p0uTcLuHWnfCyLPRxo9z9+gMCGKXznjmSYhpVuJtpVu4C7gG0UVudIoESWpmeXEWVeofZTTKatyIEzrerzw/A9g1aOIenTsnz1Ow/4bftkToN/LzdnohQTZaOm8hlyozm0UhzGFtXfFg2LqRkphiW7SmGIj2w2414rQ/ozj/YDku6LzU3PTRSu5XzOht6nQvlJFKATASCYNDda3tt3aYgmGg3rc8wy9uwgfC9ieQoMUG4FgCE/9nBZBDo7fPIpZxN675L5YPgrbSm31ZXATZw3L7TBbm+eW05kIhO/hYU6mSn+9ymZTiAkF47j7Vk7Pv7MuIUrZ5RBlouLFj3G4Q1CLTczfHAY5Qiit2MVWFP4Gan/AEnIllQqgQksuSiBcnGsFABJl6APa/6AtGbqMly+DHfxdZDku45LkqI7RcjB72/S152OHHCJMJEDixytVinI9D5RZ5FNTOErQdsAH+tJdWjNYkbuXLXWydlHYAVQI6hWPWuwydluqFYFOkg+AVYJJL7IQE8MBpnCCdrfcuSPYqbFMzgq3Hy/hY4pwKBlDlbwhSjdT8AY63KUaWcG/y7s3QrhLgkU9J/+sgA679hnSNiZRWPf04fqdMwhaRTnpVrIpME7eopGnCGzPi1vfQ2CulYj/4EIPPRETzhjTnm2lZU1x6uwNogCqV0wQxp8f7owppbG5Fv2JhkiAUGjMn/Py2GRgOJ+++/g46BqbflJO1kHeyVwmdOlNYBA7e+ZQ3mD8hfCG3hIy66sGzGIDcFdipr+tBr3PNg1tW/C+1gMDmSmnYK6esD3OQnGaJU42xKjZz2ZFHdkC2+08IE9GA5eVn4qQ45xU5RYW54goDz6YnT/k6iYQVMuzCcwdA1Tlb/grofnQ=';const _IH='019f5fe079dfa6752a1c6fb72dc56ec17a7834626a69f4ce3c9a65fea4f66dc9';let _src;

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
