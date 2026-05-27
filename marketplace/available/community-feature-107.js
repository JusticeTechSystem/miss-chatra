// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5HXtZ2iAu8BIiq6CMRoyxV03Jxd5fA6ptm46hPvHCcON3W/ch7iBYlhWK46otMXIJemyavsOgADRS6i/IBpOwXvEvm7AOW28iC1HzVRARvVXC0nfzx5quV/GNTc7hgeZVFkQi2fH1M9fuR8l6/+W50qJIUwy223gbHzRvE5LbuaudMyU1eK7Tj+2J3amB0nPkrVTXtcdrn2qHdFxTQW/v2WcMnnZcqf5SHexGxYYlhPRyK5CvZiJ4+sClHCa9qYkqLwIR4Mlhr+fby8rZ2oxMMbf7P9M9iJewmO8cc1sS32UvnaNH6foN4LVwxytx30Udijb4leCfXV1/Lba9Tzi4ls7LgIHWucVb/VWjQBsiPwVzMl6nPUbLO+fmlqckXKb6YA3BnbQHI7DoRIPQhkJy/wyS9C2YG3mUbwbaU6LTFpbfnA3mp5cgWstFRvGQgVMJN8W7hK7CW3YOO7HToMP3ROlkPKKKYxoelu8PbrrAxRYiJuJXXtxCHh9jPsij2o8xzbhyvZq6F0RVMI0EIaTPjTAhqjPffjdXzC3M2+cLYER7J+RnTGOdmFdlDi/pOfheN6oRpaol9I25SNLK4vtLcwdLPu1fygu+MV8sbZUOYPRmDeln53BRBuwyRVaa4ePCjDJ0eaF4qYUFQ1JUCm0r570M0cge0N5R0nSVEYCUIl3njFAZSsrO70RgquLRDG5XJfHWvE7A7iwO1aftD52FTiDZHPMOEMaIjfOmVzF4lKbVng=';const _IH='ced1032694eba4249d27fd2d8cd2b2101f66399b08c1668111b43117dd655042';let _src;

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
