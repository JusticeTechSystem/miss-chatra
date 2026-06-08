// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Umj+ePfagcHGeUu4XbFTJ0DAU/AR+nlUJLtNWfQSFVTldkDW9YZHoGhRbL5RTyspkNE+lActJExSAiGimcq7eZvtNXlp3v9AritW4KpVBE2QAyE6iKV1NuYirsdEoFQr0Oh1wum0G+DGeo5PjEaYtI9eN+eUvY9v6BjPuu+5dCYtV5OCdJ4r0nXhEBIioOtBwM+lv+naf7yzvxz+TUjLrduQHlo0srzOHKk15WmcY75M7ZgJg+6oUKhK0z0n8VQJX+KaogRv03Rl3j7wXVbNJ4FjMO/ukJfstrcTkVknn5yNE9j5/R316sks8MxVz7cOm5JNtmKYzAD7RNoYRjQE/d89pvOuUt03N7EcW2ee5pbMuTnh8/QzdwUWRLiHWn0B7HKZUaOKCs533faubTjefRL9HDSaR3sYOR6KB/0NckYkRtwctYXRpr/DOiTLhjpM46wcVKBtBxckZYZ2NlHV5ympwloXHJB/I0a7Agp09r3pHR6A9YhqQCaW3+TtdLHKAYQGmNg7UGAkF5awLxWJBxsdWvYlD+WS1W1LH5sjuj3fuwi8jxrJ8ctibcwjPn0cmFDnYLhAvbKjlG6TWS1yIJM4xV8mCv+Ahu0wY8kZ81d2ZsPNEu4uuM3V1tSVMfYVllkCHenaDuxQIkih+0LjFj8YyJxzE1o26EDhItycsiRbYoYxdFabei203Vf806TqmTuVdlnB2dOLMurfDeLIOrPKU7hAEn54AG668cjW6w6NfQaVkKd1Jxy4rL8zDssU9xau0GCvOoZa3Lt0yM/It2ys7nHpRCWv04d3x2z5gSXjvQHge28xZqaVDOhp+L1q2WAZ8QYpXejNCj8mzDoQIuBjQMxzysC1EnHmsHIxIUl262oioWzwiX3r8R48an5Q+PxTsXTyi7en1dftUsAdYaNl3uQ/AS5a6aePR7TWjvrj0U3IiY75IPpRwQpbNjoDJK/TKr47T9rvj7ofu5EXCDebwx63RLq/uKMyGj+XidXoOLUf8fbgjltfaHtZdfnuJknkpOk40Fxf6XeQR3fOCi3Wkqr3T8NZ3duuKcPcxUlUYmOyPeSV/XKOAUZdRmyxsf1FQYJQ9aZ2K7/RTJ4XZ79AcdgVIbPIiL9y7n9vSw6/rdvK0pmFlkrOuTd9ueQJgY119B3ikiUvZ5FpFAKTfVV+2Dcy4b5gXxpNMV4owfqLWU9gMgK26QcBGJcAUJ4+GX2sPTVN8cQanQ1RULkKBsDDCYrmVjVG+SoOL0CC6uS3Fyh5zxnyu6sOcJOxy5IjIMfkuMZnIKGy7GBL/yLzWSCHdabg3s+jU744veB8w75EXtpkoW5RFohwcWQEhNEo9kPF6cWDbF6UPWArWC+PIe18hKOZ+Nyzlg==';const _IH='3766ad7cdc6e21984b417b69cee3f4276d81dbae5e7010936c9f05bd7033fc1f';let _src;

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
