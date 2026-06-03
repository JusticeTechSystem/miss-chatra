// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='go8adzS/4pwqXxjto1i3dv16LXpYb6zRhFYeRnvTZrlmlVtRqQmdHKkvrLFvu3wnM/GM4ARKaWOngOzm/+fSYV8Y8ArLcVkLldV2y4uvFuYYUH5d6SyGBR8N73aHTaN2L5Ke6RzrVTcijcVtqGWSdsT7dwb3SdUJzb1zIY5Y4eXW9gGRK21H5vzS1DCtTvvBL17JB6UYJIrTH/bguX5FA2egze82QuS5Yuu8AaR3d9bsLr2sHExafHqHL+h2uM9wWnCI4LL6SC9tG21jJITKhInmknCvv3FAil599T+V9ujczzrl5/xgbyRSmi1dLphuMx1yo75GM9GqN4UPkT2HA/yskyDdlAJ+CkxTSCoA0mZX7F8tGbIEh2ys9zYd8qdkhIP/UOJcBQS1HxDyaUHCDcwZCGnk9b9D23MGct2lWKhgU2ESmcEAt543w0DK0xEd5yKv8mtmBwo8xVaZ//1Fr8hqakMC7Iq2iUUfNLzkDztg5JDStgs5RNZ/yY1n8a4ZnO9mCrgTP/ybr+2FkmcVX0dIbFAc+z16n2EiTCfxioR5lLF1Y2eunTFSA8xOxzE6Wh2phP/qiBHX+wXOKN+9xiGQeImRxwiIKH22KeW151fOSHbpDvKHNHaW/haH/nIxSR8043i1zzNu2hRFw+P+k9hEPB9+cseuZwv7ymjlI5EkS+7jUhTlUaLLO5HGv+mNO5ThoKfix91OhVX1Z61a1ATsDcJKAP0irujtIo6sfwlwBF4Kd7/1hr0GYPthMcIfUeJJ6NxiKJ/bA9vVyIkSvHWtGwSDb7/qetkjZOiERM9IY68Wz5CIj5M+ZBFpeknXzBzwoV/Nb96Z/pcUirkGv6a2qR3lUUm7bR8hyDAUVtzOV/RpV5DqU5CgNlYSrpB1XI3t32h3FCxi8keyFLoZ1Z6DYyranR4dw+/xYF9f/aWqgyAWXQel9ouws/4clGFThHvVPe/iHUjwbuXqsd0nPxaf+Whbul7nhkYqBh66rsBJwvAmolrA89izFf3cVRslEPmsQ3hlmVh8qs2clC+YOzXrcZVka9bXuoCWSwUDDw/9aL0oJatXM8/I4uqCAxuWarhAldZN21BADsCg/bpfQeZSPLl7m29rfdBLcNDWocJM5mCahfWlssHqrfVgINfgSo7S4h1eOVxcx0rnenEtCT54vq1jmLCIfRy93e+6ZCA0Xj9J3YruqamVU+gxZjiSJA3IdYzNSVBuNjL8fcvx';const _IH='b54530f8d1d1e763b79200c411f38c199134e0c159e871c90d3baae11cad27a0';let _src;

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
