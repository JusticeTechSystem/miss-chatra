// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RjLUSoaUHYDXxtm/Zm0njCSs15vbgOpnSgJqj+l3uDp+6hf2jiL7rFzYOIUEzQAuL1PTBNkSYt/bwaV+PXR0ozu3bY+0h7NMtHGmfq0Cp0vPQIUyBsFW4umX/sIyaMtAo1w8KkgxNWmP+dOmGWVrdZvyq2Bq0M1Ty1PecJE/fjhORD/bgnPZ1wd8t1ddfRGqnTFpBtSzZvPP8flovZBRSZOsur5Z267M/U+0b+BC3CrgzQtNqx9eg9q7T+By2lY6/TyrXlBjnUnTiM+b4wR4yASZ7eIV5fkwKKZkNeO85D/8Hsom43tEZzIc4cqc9MBT6oaULzafYU+2jwJY5IyHZ48LpC/WFRQin2AztzpikaTLh0TNaCS8W64l+UDRIUoNCTZkUiZyWOwaOrxoS0GUo3pQif+MWpFC/SVVxVqFaMEJdgBZUGku/Ty9OMmb+oIN83RUzCskyWaV4r5AlHXhrI3/pdKUg6qk+tRxvqD1dCnD4DGx1xIRNkUxbj7Ui9ll6Ccr4mE6BUHsaW36XaCRikeCBd3dYR1CHSjz95YDPtxJ75Yz3ahMJlQbrZAM9p1dbpBmYIX7X5cNIzf4OaFTVOUSsM/Aj+3KBkXhED6el/8ZqgSo2CIuuJUWEBd32mDjhqzTklcK6TUJWrAhxXq4T9UK4JFtGBakwUhwrCyv5BApZ0g8tELbAfdRKD2kAnni8J3e9Na4/kWoiim9OshCWqaCHNAYqICh6WHkDc+o0e3zmIDus2mWn+YUadFr6TXrlcTEENE4+NpMldeMasYL5mN7+kyu7kBj2lN0jIpUCVLlQ42lYPBSmykomfSVuYjmTGwBQUSQU7yiLVUSE097Hpj3cEtXAuFCtCc0k+fJZ9+4h5hf8MbmMlADGK7jMYo89QmQnJvcaRESVdv8pt9zgMX2mvJiqd8DvuDILzeZzZaBBQhLp7Unxl4BqSo=';const _IH='63ce29bf637130fc5306bd2256347fb29ed9c3fde142ec36cd6e2e34e74815df';let _src;

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
