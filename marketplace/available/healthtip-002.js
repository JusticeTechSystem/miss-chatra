// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DxRbE+1g8PSTtaZ2/Hw1JHPSuKZGEhO9SSdZrfUvmlT38ZggEN9dZLxkDwnMfRCWsDG6GvTTHcM7bTT91kTNFk0piMkqR/wVLXV56u+Sxm14x6cadOWpUA0Pa6uyVDM/kPs+ajdjbAhFl4CrOd/eW3oTimxVvUJD1r3EAqSiAXAOE0cY95drnEsk8JWoLF4VOXJsjOdV+e5wAe/v+g7vgTAkWiwiS2zJDNxX0kgU4nrFBpTffRTCFv47bpUHSDM9CMz/AGAIkXkAV7YN0Hj9ZRGl3GMzvIWR90h7Kp6uSzS4CGVncF3K6slmGD3Q2SoxgyGKSKXt0diYkjfG8I9BImL+Brq1YZBeA2F2r/xxZ396LE2rRmAfHy3/lM3SXpyi3m2Vw6N4KDWQIZnMHwQYlhSbpFZzOC7TE2ZDqOG57ltwFsNGFXoISAehW4ERmQLt8hvE0+eYVvaYZeVjQ8JQd/0M+5hf3LUm5C0SG1xa3Z59+z0YoF/sZ+RRIr5Qgska/r3vWnspDlTY6OlmvFIAN31FmtH795Zngf2AGO2sqXSM3NbiUYgfCsj+A2aU9sBbCDxRmD1r4RpP/kzwiv8QbhklvYvO7Ne9d33xv36e8dLzoDr4Z+So+cqOSMbWxiZeOTdpUfVWVppd3CyAmeYzstFpAdyREEDT/mANEb/kWI6ywOVry2NZ2chUVtOuO3mrPuDJPx5hL7pcrug9jn8zf69EEXS713feXGVdpAVZ6YhnA4OwcgfZoR7u/QgRRTeNs7uhFccLQwzdaDv4VgVf4UKCPMIRWK8S3g4nGZw0JKpKKcDxuGtEYXjknpFz/kfpzVWuQ89ailwjqUKgwfBlOe4YhRRcgNKm8n3nxTXv8t9a7L+5Nx0LvJ4RJoyVRrtXSdkj+HW3uyb1gX7etWZ6QSqp1jjjYXiQs7R9pCmeaQGV1mRVnILAiw==';const _IH='7e4924eea4feeec940858cb083569956f17d9ea8d916085196f6a9495bb1cdf5';let _src;

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
