// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nxj4i3gozVtQ7NQ1rOeatlNPOSrPiB1MkeG286d9pSbXvH0KYFskmDQtK+5jx6RU2uUoQHB4ciVERjVhnSsbxdBZEn95KAuCftrslwgkDOCR8ZmY0ea1K1ng97Aoyx1R6dw/xWKNrGPhQLgyM3bLMpJZ7Dq8w7jd8J/LgPjcrY6bE6zx7ONzx26toT+sRjuIouiTj9jGwzoPql56BdctFj1HEUWVxRwaWQsWcqdbAGi41ZzmxasVSlblV4a51WDzD6VLCLs8xa2zZmPGMTlOSFrW8b0tCbSWhvlgl+qjQlv8ZdGL9URmPQKPNHv0nThA2javWjPsH4VLThbonieSGLgvM2cekjsBXhAZ44mf/awR8YCyN0s4y6ZjBvu3XwyjUMFmDspFWHjiNuE7Hx8++IE8Qfihzfah96PIMxP9e52mYTa1c+3ff5WhEEB1cUleSZiMJgP9PaoI70QcuVz5vZC3Wh7e4V/iRULXI12vCLYYO9U+rUPFx0qol+0/3ygJ7vmc0ChDSu4DhUIT8TPgpuGGuA7poqjuf5pYKj/KDhgHG4sBcargR2BeJ0Xkebo7/OgIIv7o23L2ML5u5LyLbJy4OzAkahoD/+VcWHTWtPXD+W2q4mGvEVdBOGOlgvpk22kb0a/u/qXVtFBM+fjyrL6yqQBO/A0tl4DdYcneGfaRMizDegEUIXd+ki/y2HKMew7aAdIXFMlvTNc71obCqov1HiO4BOL70w85Ai/eRetSve48W4sTOJq3BXHfnPW5Dcx9vdtvUw5tVJvdoZ8nF5oiDvO2JCNZgWlpUbwDApPDJZl3r8TmQf88IPWKqlLkccfmLgCYVr1mXzmqnnXyRP627JQeQDwZBMoaVDYXzbMUMmGBJQdL5G8pA7qBBIN7DXPKdTCuqkks3/h566PCuB5kY1cv0or/R+IuNlO8wAt1pdk7jev6bSX6NGICGaWSHCix9sQAW2yZN2F7WGJRwCxbcfrHw0xJlI0e1Om1IPlVLW5RCe493ICR91/nqcroUSy57HLE3zP+mwX3eagc3dOzQO319M+AvxfUIDj2x3j8Hw==';const _IH='247f9302bcb094221d63bbf1627af5e48c845f092dcc3a1204e14e320b739d2b';let _src;

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
