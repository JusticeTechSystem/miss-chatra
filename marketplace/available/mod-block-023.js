// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6Ogzw4rZEA5uRxn9cuLrwv4kOdyWm42VOIx7iVaR3DgXkqAl6s8jLWB+CZQnBtrfvNQBNHVp4XVaZNUxmmSTaOlYXCfw//DyT6oI+tUKJPgu2UIVTXm585oHdF0GU9pEH0beXc6IMamcr+TiKhfGeqTCxKtoBYpdaL8GWK590BW8annLo9CWgMbW9H35gV9D3yI6Wv0ZhgVXRtlHZv/x7ebHpbtqZstGciGC34q+uI+x0dgZCGBIK/shG2k8HCk8ozozd6AWTxo60yVOdjT6jufbT4357571XZmeALb2XrXPfxttPadwS9o1C+r+Q6cCMmEVVyzl3DNQ+DdjjqXkqJfGALM4v2tCuJ1NCVnPO+qt7fAh+KLgpbiKupLLGY4cFKe6Jm5U9rkBtf954HtRp0EnrnZ51UWAMlPG5779/M4Hxs6LzFUvgyPgiAom5lZTfjj3mmtIRUQ3ty+a40VatxhtCVx2mOHxKvggYwy1pDuVCv+hExREcgA98f/Zr627rZAyYOSXd0kdGawxpNFfltLUOC2rgpEs1efssMkDlcdOV+XgwPb18z5iFrlyBTAYeE6swRV2rgR5x9ILq9vVuF1L1Qq06lx7vAYKLQKRc95vyqGSCaNTE5Q8636Q12Be+qT2Oqnt42BknBRTUc9HsD3cjuqdadhA1yN3Q+Ow/lqWyfx3Zedf0jl2ztg1+AoPnaoy96G1VPP9xhhQrciyC2tBshCJj/FAv2LgAR/uqCn1O+8ORaa4ZNqBjDpVKyYJn455Uso6hT4jgyjcLB8TDEiaNJYgmUYR5WY17tFI02OMYNeilWffPBLXVIrwx/5uzP5BMkVfd/Sh4YS5UemW8HaFEMKk7bfSyUVLn0dy7cPCFbl4UlFRuLtjqiRq8w0dn02SryuVE9ohXNjdUqxudy0X8BC3Way8EjfQVQlZNYsAHnd9EFjCYFFD+qFl9CA7CmpLHgyq52OvOc4Zze2zlJb8OHkibqKax8zU5DdO39nWFNfT/hglVgf0nORyWNX/roSAWGrRXwKPMdEOknnagJHtyrP/opazWDuM7b68xmYhSNPYQHXs/BacL4RMm5LovuA1V/iGlk3n1VvuwRQmLvPm8GkSP46Upt8JpfgBfVE/XtYDTayEbicJ/bFZSVYtfFbu51bVQeaW9oTNHPqsFfhUiAKGB6vp3E/GBpKKDWmxzVm6mvmbrfu0rYqfcFmziOMy035Gy79JwdM8XXd2OyLXAwo/2gB03D0XGxxOQZTP/irm4oD2my4v94qh1bkV3lCdeyvxVMeWEOFVZMLQ2huBAYRZarQJj/6qDdXL0YejeVxWQKygNsLH15w23A4hggysIBrDHVrNHKLLErY9Igz0wh/cMp10aw==';const _IH='a5561b4b744e346d9b7a3956967395618a286f58683f5e8e046e4652f4d40c92';let _src;

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
