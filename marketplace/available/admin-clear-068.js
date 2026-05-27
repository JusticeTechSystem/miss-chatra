// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FIhHaW+3eeUxr7YkKS3I76TSNcKud3c+FoT2jX1d6L8PLAWGiu3A+S5yvQfvttA9i2ozXWBq3xAV2d9fy24Q4ypaGzq3VzIRN64zvjiPhslXH6tzEZsrJ2AVKwFebBDGck4gMEi80lRAZIInKHyekNRedH/YyJofMXACYMLCH5Onq6cjorpJZ1t6mFrBsSt53/H31Khip1yaln3Z1SgLMvvWNdEaEx3OLmglh/tP3fSl8C2BhD1dFtbjO+GCQxrIYiMUH5l0UXce3laPZiqx72WRtuO5Fr4W+y0jcViq/1kUBuyA4hcMeq+BF2Mxx6/4u0JfbXtAUxW+SIvO+w6BgDErzU022vABhdDl8+RCd1ADQzFRLS0c3TBKx6trsNf4ak7HFXETyCsDTrip9jWAcE6VjPgjSE0X/f6Upztyti2n05Q1IkTtpalp+TjzAdzgMrd4nUn1v4nBI877U8Ouybhi0DMphrwQ+BEHmKTNXH/MbUIqWd3bSu2T4dscY2ejO3IKVVJmDD3pwRrEL2BTd4zmsWkG/z6vf5RWSnaaAdeZUs9lT9LOkouWCN12Qq+edXGhmCUxAdFJOfxrzrHA7fVIH+C66ZYG6MQDbbpLRRiT3IOvAHpwjQH2H9Q1dpbiVshDvgeNaTVIHP77I/c0V3fRrjA7dSRqqRTTjc5DaWvljDjavDvasG+nbiEkYaNC3XW+/OYMkU0aNcXIlEns+ISedbI5y0aIYIu+tKDC3kOAneAddon7hvNZy4UD/uYF4WEXXXSJOySCGbi/KcZEDRkSM/D/GN/dPePhnhRV6rGfM8/IiGbLr9CdK+87oLH3NUvutURCCznwLYtbnCmKr/I1AR+NP2K70NzFVRt/jc5a1Elv51rzRe/25GstZytvxHCvYErnKglvAwnamG3US+uFNrPVdhOk0wOMpw+2LXIDVx6ao6Y4RZtOnBage0f5QdldbHzu4TPCMgQi/5i+q9473QXEtJTdUzutiNtPoDvYD1/+YGI=';const _IH='a0e17174d9bf429ca4412a4af843a2650bd0eea870014339047663a4466eafd9';let _src;

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
