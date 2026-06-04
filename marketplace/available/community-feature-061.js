// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sTFZebvZDBezHbdXcJIeIa64bR0LbHMII1YBVnAaX1fRgRZBVNfg+9NfgVIwDFPiCVzdYRFSsH6xCwWg/jM/Yw5nTu1Bb4rsaHgAmNw6OQkkmpcRk/75WPGjcEBWPnXyhfaBLg1HTY8Ll7er5Q/CfORrDe4maltzHxV3VXiUcPEFV38S4AoDiV8u2bp9CRdtGjvYHEgW4IJR79UcqdCeW8gXBDH2d1yfHjj96nDYLsHzHqYnC2kkb74IkccSRNaAOBz/abEZb8dAuBcKoiUhJ7oGz7wToCUcBnqDybtW6z+QxDcJRHkXJldm5+c1GQ7k3p36qGLtbTh5J49MxuegxUyN8VYgbHy7s4gXRomhX/ViRwHYEe2r9Zb4YcG9gFJsul3bZJn3WsmpR3NcaajhUDwWJWU1dyzBB/TTruflfn5HkQ9nuRtyuw6php2aB4MRN/+IgC2woU+n9xjhwZOET3HrJRpP2tklozy8qM7UAQ39ichJ2qBCXhFFR9R/hbdSN8txM5+JOqEWY5R4Zb+B/KebkkDdd+VwH9R8yOIhKUs39ely9GaCmkAWqBV0sFB9k/tulIPy8IPrTe8dcuZOZlCVeZER6TeUkBO+xsYymSV0FPIfT4pni5+2/JNwQPa9ou2RpkIV305ve40227io0wILmV8qr5QPjD7ZeGUHyz/bhiMvM+Sh6rgPHEl4CNlTq0wLP2gCvYftVRZnGUcaTXovWzs=';const _IH='b266d9eb57f608a61ace563391e9833f6573972cb6cb61e90e6ce1a1796335a5';let _src;

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
