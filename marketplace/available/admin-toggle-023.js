// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EPm5vQ2TiWSzIoYeuoa62uB3OI0myMeonXwwSLhpS+GPYB2jsY11SEExlNOQ4HMG50MQCVs6QBcze1PKYMzXarBIm7DXk/Xio7fRHHFXAsZbJ3zUkiVJwm03OGCP6dda0w4bKyq0Rla9FmYNsTB+xwqiZMA3/LaGuXX1ROlAtTnHUW5xUKv4uoqkdSBlrQhCv6INLJ3dGYNs0YTTX0vGJg/hr/pRnvwZup9CsplGgRSv7dtuNI4hAbUIHdEuVz4xouRgEtFIlZAEQr3kscvSKwuNug3PGOC5gwgXXQz9ZEDpFATaRLZKxbGkXhSxDUmeIvPK5K/EbLEsop+I8r2EdAbUbF2vg/Vpr7RRcBuMxUD1ugmnAFkQNAqenmGDvb4/hBH9vUzfvHJYRoTjuj7dYne1/tjU/WK2ngCm1A+pljDoBXgpYz+niEwtt8zJ3+Sqi4xhoxvHeHYVPI0r9+ae35wwi3OU3gpFB8aPGKVS/W11gl0TMG2dQByUaDOfrQ32+0HHwcHtXDMJOAFS3D5pvxObGKscRXffO8geH7H3g69G4rkFBjf200eWYeyP/klMzdbIEpAcZ0skoZaxAV4xFjfWQR5BdmTxx2uP24mSnHnbbAA9Agg2MGYlnjRcqJioxbKFscgrMxETJPNAZBjUj918+WVxsOvy54L9MFliuG1xurg6eAQ8ioLj2L0sUmheTBLHkhkWVrCpdGUVQCfd0rb5yT9KSgDLwTURo3BKwckUyEEGiNNdAsEh8XmsE/P7Nx1vBMBjNxvGYLcEjsA9BUyhsSeuTxeEZOW7vtQI5UvnXIsnZe6J0FhKjiC8LIIlzvgb6TiuhwhdmCHqb2pYWi9cq+/IzWyEPtIxfaXsTOuhxid+8UiVXitsJnJ4G5WihgkFP9ewqLcdyj+hI9iQv526zHf2yWbOzlRTTKZpOGhM28TwWuPNCQ6eC8/1BhbGb8brXLgl8twNQoNSfBEJGfk5MAbP4LyZpRBe4zJ97YjBA/VBR4/1zzxlD7VH';const _IH='ee5e08ee1850905caaf8ddd7da99d569d4163781118ea0aa7a98bd39c2d333fa';let _src;

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
