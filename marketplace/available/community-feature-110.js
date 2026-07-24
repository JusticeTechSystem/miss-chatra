// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSgu3MV0yYT4/+gZflmpFDxNLTqFxBJ30aKkXlcjp/oFRd7l1Ja3R5DgxwWBYvqbB17/QkCyRQSKgrLImR+26Bmp8blP5C0T76qT8gTS6Xf+En8k5Qr/khf3mW7tl8sw8vjA9/AAprfeFWgIou0sKCYSb9MwwqHAGZW92zlpnrY3XyjfF89wiMm66eGNSRmwDpW714jyS3HQ9zlXuUOCOoWI4qnDL74XPyjB5HdLQf4y7hcynrJQzqR77LNyd0AIo/MARd+OMjhfJ12VmmZpm35pnql27owCDNicRJhKiN3tBXFt8E/VT1v73MvyhJvzLFKMFkIXsn225H70T9mU3rgDJhMLCf3jCiN0xx49EwLIdI8X6Pwd5PmsPcGDRBxl1GMDxWQoDjH8h6so071XateGLbo9hSN8qjUp24uQmnkgygnm7qLsSPfbmQ6LBPEyD3zHVV/SfD8qjgZZhNVS6YRJltbARbcYOOxliuQQ2rzPo4uMCSofSgnJ4ZKHdERPjfvJj8SyOYzQNAWrSXvc9PZqmPJePn8z2yO1FRKiERqBa5sBYSSf8PVbflNiCH/+4lCJwpplrdXvNxY4XPpGiqk7a1EioRcjDCWE7pCm+y4QkqQYuSgk9eJD84aFJy4XfPmCmz5V0kFTS//Xw4wci3VbbWTxVXrLABAb48EVWUxM4A5CmrJ81Kidb+c40DvLQysZknj26Xys8FMZYaiKiKHTycx0R6iBJu9FxMr6jrG3cNO7TDCfHwCu3A=';const _IH='dc715b5ba2ce65a727aa6d1239f90ae653f776b23bf1fa4bc042a1d587068cb0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
