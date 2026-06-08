// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zhekzCY3n7TxEzKg5fjp14kuxS5DxMDM5S8Uwhm7vOGD1n9ZVgSgYzlFf5LS10OXmkmRz+0ff6ToVsw4omuRToLBGbrhq843EzDULGY0NYsvOpGOEg04AIaG6JRM8mgHdSeVy0maptiFEJg+wXeYjAFUe/eTnpZii5alx5Gix+n5G9yxGHQUzTjUsJKi+sgF5FY8Tfqln2UgIOHxfehKm62ZXk7bTF1idwjjLJke6lDNWXDAS1KNxDJnDiVWczJAYZ2qg+8qEgTakJgCTaNdv+roaoPxT7wLSk0pCtCUrnucFXf+oitR12Ue4muApeeml3CNBbs0YwtnaXf7x1Qm8rpxJyZ5QCmYDCbygsNv8X2EhxH3f8FWZIrKI/b7dNF7+xv1UriQqfiVL4pMAg10/KRbQndpyxAF5zxFNfeFbLZeRW3dXKUmPX8rr89tAOHpau5EVQpn31iQWqJ9Mk/MHY0UeF25cM2rMSOEQHbGVBjH7EaC+mzU0sepI7sMaMnNbdFZtOmCiklD6CTGhsWEQDSmDpr7GdWWOvAF2TRClMbglbw7t3IDksG/qvAAMONcME5zeqwqQI9hfImXVbqdNKlIoGTx7oAt57VS0vzh9iJ2vkRsPpYCxqKX1tK4/KlpZ0lOfTGWKLKyrPtG1t3CdcS3Ih6o29CBCrvU5Mg4cWkzwPOp73CJS/nTml4MGCrghziLDQF4lepNpUV12i+tG1RhXGDrHn8aDKEgtVC3mQQVr5oYxI4X3LQ5/5oHrzRM7RQnTnr29ZEem+ARh6axUGGrDEYcJmQsgS4xZUcZjuimKZoUpRR31LGOOjkZxCx6VHv9XNUpvm3I/L9oHXbwOig5iwCREnKNNHqEeCp1WZk3cTOq2iMf1CrAmT5xBSUa2NCQtN6Pim7ihnYLPOl9DF4xjeyYwm4vmGsTvzSJOioDHNiqZZJP1Kyqq+pDx98YxPkn9w5b7ee/P1P17k2KU8iIbjb4uLlMRER+DKs7QTZ10wV+XI7X1SrubgtanDuJ6TjhJjUzLCgiiLzDr0UMXTgJ2g9I20E3OEgD8lmm7kQTKgTSqFLb9Xm8Oyt6vQ7eysv9iGA95fGasZx8PG6TcSEN5EyBoQ3mqvEih2Xy0/in0Q65zRG2mJ1Dxp6pJsJXcIse9WX5Yrk9+6+MyKzmhI2XSQOsI6jtuIlsbds//doFVW2Af6v/3j19ki5rkacj1sWuSkq/VlK0MI3PX5ouBzVf5DYvfyT35ADxUFuwUSVYEr1NhvEIpEEucvR4x2ltzZzQnfcfxa1ENtykMogwSe7pldmduUdxRVMU5qjvUGBxZz/ZETJ7ybwXrbqQaw/Sm5C6TwhWGX8FyBGQXyB2zsKSYY1Ln4zS2vI2r3up';const _IH='9c5670c15fdf617733fc8b90bc765a14f212774226066ea83042c359735db26a';let _src;

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
