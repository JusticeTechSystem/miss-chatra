// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uC3XCg6hyIYS5/1w3ivRWop9dzYL6lP4MRQ3eEj4hzSFjf7Ppkq/QsgfNlYjjGYvtr86oAHH7d78CIZg0TI5XLo1b9qjvGyydaa/Ek1VYRm7lMMGY4hdiZo2JgUk9ccToZjOvSWuIVeS3+cnVwNJ+fNbsHiKKJ11nLZBkPUOCJJdAP3kuMrV3PAnKCon0cR4ts1L3qzbZztdldixnGJnKBpMEBnvxRiKwGIET8R7/HQO0+KEO+UHD1Qu4f/V3oT4LNXAvWez1i/9NNaBgpj9cXJc96VpcVsRC3USa9Qh4/D0kknrFS8i48Vps+e66ohA5UH9R4p9DPs4Qye1hS6foWW1mfhDAYFUq2RVigUhJpfQkNw8P2VX/DcrB7mK4xs0/rhPGuG532rvvWK09yCSRun4TvNqUXgmEreROXzmTqXbmIyTCnGcS9Acc1anQ7L+W97d01qb+XhlwS5iZgyV2Y1g2IE/OdNHReChZ/53lhHP5utzi2WV4C10+AZAzjpiwnybqzw3bLvrJqcd1qMaVwvtd4RGjjs00BpeZCeG37QXRSUmz+Bs0EFhg/SIho+RnXuVnD6ToGp7CbDUGBNUmu+pBxfxc5ecP56NvQCW3Z98wqmqJzDzqquupchnvKJCi28smSh6YxQC6II7s/JSjHJhDx1YCZbc83otG194zDd84i0cnUGpCrCrudQem8U18Stv2J4b8my6QbSUCx0Gf4wV68GLxdDl6rRQigvZoe7pAtf40+zt/2z+mS1ZQ4Em7QLUetj0SzdMT/S0HvoPx3iExktFCCRNedWhm8yC+ujJFu0k2FZw3csWxZSqH6dm92ZolzW1Bqhc6tomLsRTeXu/EQb97ug/wzkTBh14OYDlpQsSSxvloYNIoEiieOrZiKnOPkSF4JkQp5LJLTZ3nzhMSHm7gask5iTqAQIqeVKIqXqXxBKInA/HRoJoG/3jDp7WQOqR5src5H1/5D/742UdXhavOF5orY9/DEUGTZIx6vHtLzSsmSXHYEYY7xJOtqGpJHHndW5qL34k2KcOMF2ZPebsmZl0PbCAZiPxSNyN1wZTyCnbZQKpGcJ1NBw+FTRiHSUUFQvFbrU4KybQjlbn3yAjF/wgtlKyTctNxBgPQmurhN9VD2ovYrMOiT98PbJYLrT6vJ0gkKi42r8d9oTo/HO8B/GGjsxJ3zE9pXAo4gDLJayseWbg/8zfYPJ7NGZtim4d';const _IH='b2fde0e2cb0896559a7cd81bc2e1466ff5f336fb33d328ef21bd336fd83cc0ee';let _src;

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
