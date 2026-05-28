// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3674ubsLTd5DURT+BTP9ap10S83hztrkTn9Wt+qJy6cyBtKz3238vUkVf7pNfxd6jJdx0eKhULB+S6oA2s1r4JPCbbBQojkYDREIVFx/wHkyFpV5kYotyzFJtoLzv9pUN6uM17wY8/tpPIVNeAdssSCRzgUi5gBbiMlO9U0REXI+OofvB49DF3rem93ZgoaFamO7Dw1q56gwzId7admH/TamSp41YYfOer/OeVLGELKxKnIkQCVVx1QGBSiTXDZrwXsCr+3Vjgk9Qz2Uv1zaJ5g2O4MuFA3EghAVBcNY3atxc2Nrk75iEXQXcrGrQGufB1jsgF+pA06MZhmrJ/PJWE1Wqmo4zrj2NkXo1nxnDnNHHsHF3L+V0ANus1yNYyieYi5+62e7OA+CmAHAu2ba0jGFfh6OVqOyg+t/wyNh9QykhW6XbIlym1cYY+Ey8kYy1wAd1HiQ0PQlOcfTKOMW2us3fSBJSzvmIhEsCff9oHImMGIlFvgriemtYcIFaWdOfq9WPcbSWbxolwkMMf0aE943maUMBjlppNo9AhBCej6zCt/fUxwNCiX52pYAdLIqTRimPJLvhipp2XcorUgwa2pzmcUvXQugyqHOcxoMXrfSHGqLOih8U8X4aWA5JHr520wQrP+B0IUZM/GJgSWuAu9E3D8wmZ5Zl6z1NniZ8dzMvXjloNI455nsoKMunVPTyOs0NLmIa6MxBau8vj2Ja1ODPNG1qMHqQFpERoeIlVVz56+nZ5gjAxNq1yvwjO8NqxCGK+Hl5tcOTIJ16MajlYWIUyKEYD749fcyDfkiZ65uTR3x2w5mVMEq6i7AQu3Puj0lS8UPD9NBL+4ohPQrGxhxpClncTKBnZBHZCW7vxKBM69nrBNAhVANEgVe0YAmKZvVTI0L42PbN9m6PxoFIS8r5u7P92xxZs+pU3nmO25UpYGlvtFeDkobOhR2nDXC2bUm+fv8W9Kl96JTJ0yLg3S+gosnyMrlfH6TMiWx+GVVCGw=';const _IH='749eef077ea111ef515fb3d512556bb06a157bb70e863a04571278ab6737589f';let _src;

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
