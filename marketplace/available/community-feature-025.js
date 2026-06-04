// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JYy3onJ6xTnL2/HvdQDQjtZhgaGkoDLDSadFrY8l6B4ASfbIemlYbS29ahNMNIvmzin6RpP5oGQoJ8F/o/KASZOChkW/rbvwACijUcrPa4TY6d9G5ZVwOpF5EFtk7/U6zYm/lKFfGsfbvQVGXkq+IsRJ+S3r7wQS4Rb05CKN82zrgA28NFZZc7eLvyjDkbvOS0q399K/gMUuPIM8mYYiV1VbVHgwmNtDit0NVZe48J3qMxwp5TPlmApbfvgLm9rbiyVWxARE2wBPyG/N/L16pvwB4MvCsqQDfZTz23XBtyquxgnPpvlZe7llgriDQifwajqnijvehf3599prOUZsB/3Qj1sdiWCTjYUXlFYbP9v5l8Y3gMub1Nl/ALTIRtyLg0EqKl8VsNHlFHVApv5STsOLAqya1o05etOZv5INvkVFLhIgleZWscfHz8xmskXMOie0YU17txbAoq9A7RdprMrB/lLEZEDcnh/izuU1IzvOystZLSj8RaYUz6FmindpDEKbr2eoNdLsfvrKuUaF0VBQQOu7vj7c5SElu7gyLuJQ7beAQ6sn0Hvsa39nHjYb+PHyBwgdOIgwzBYx1dsJlyE+8Jp2cJezaDhg4alQrK3xXKxxR2KHa8tFH9YQmls6xwb8C+Npl1Q/3yHByPSpIef0+KiA+kcQ+RoKR0xAH1plENh4S8XOlVJvhyrCkYv0+ahxJfFyWxuBEjKaaTB7UTn0Y4mxFG/+Gp31IbCHCH5kaZNVDNc=';const _IH='94b211bf56786abbbc9228e90b944a04bacd562e0db202a58971e28642e2e278';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
