// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:43 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/nEyLhc/qNiRue7FoNQlmCALqDpISeGMudZAmdjZB1Vp5UZjtDa/YDpuKm9/Jjy8BSigQz5HfOT/cfFyo7dQXpdq8UspuuknDl3NR+uOCkHy96vxSf/Ht7axHmYbBEqyFY+E6JGu+3rIUlgLfJD57UlyG5mFEpiijRZq2M5uDsCY+Yepn1L4eE/uvaGdy2QZ83gOTXi1BypKTXP73KTZXUlFSodUDIBg9/hl1jN+vOPLKn2OkoDQ9eNgg7xa+w0NfOtGDsd+Rh0xNs3/ejfb21an9i4b/QUPhhKyOzuZy1RUIFx9rfP7acavbhZGErYBQpCJ7qAey1E5k76LLyYnESkCgqQTsdPxrTeLfLTqKKxEEDZkgIjuHGA21kpr0+aqDiF5Zko8XoHVdMJLw/x82AJWissVhYiBseBUw+8iEAIG1pJMEcRnkiBzkr9/PjGBUEZqXVtFI7qGDobaipebf4ga5x/RSZpqhZhLVNRBdcZ9n7ZJc7N4T2oYEM7MGlMDZDWhSV3+wdf5aNz1Dk5pxNYoXthkJUvkpdXxZs+a/gzCrDdLZBX1YUtZw+Z2RJ0YTr4uhJI';const _IH='ca68dda70d075bb0b83be282a95dfc17e7ab9c1aaf9600d7e93c1487291813dd';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
