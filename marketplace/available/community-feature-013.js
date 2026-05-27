// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4qpVWbn/u8384/5rfOgXN0HSdaTeisDTjB5ULuzbJVBPD0Rs1beD1AoH0wZpKTHmPqIaV6U6vmnt8qAlYlZdDwsUQ9hgfYOHUeqfHqZsZSCbY2cwLYqZJOjOYLGkOaEqg9uKcXz3eH9A3k0oTjuxqesSJuPbxHAY51YY14KIAoW5EAjSs7+aGnOaKeIKtm45CFlqVYqo9v94XVtYIUJVWDU5bKgooJ5EJpVJz9TgVyBcPZiBVxyK1zOmkxSVESK/3fJE+vr5lUzxZ9187c9iW4ZSYHf2tNcZ5WrawX8gKmkBXlzWEd7Ls82pvLTIQGnjuH7ODrUF+hSf1LKFKwF3Bx1NAwQjMLlnCdfUux4EBCuPS7R5kk3D7uaq4dKpwFG37RV2cDB9ebqiiQABoJJYTmR2zKewRdXSiCbl+/HPsC/m1J5oGM5XEM/9k40piQBYreFToYfagVu0iM3IIrPYIQx67qnj1H0tTy/COVZtNG5hhMcYPRrFjWVD7O/Qr/T3soWekJ9izdhcUshyiJgvMVGPQy/qhphzyG/6yCdOcKdMP0UkcGct4Ofx2lmVyobk5/W86kPD0DHTSkSNh6V9mxrQQW/5uDg4kQwmo8ATxAF8rOE3kygacIQesLVzW2glJ7XNguIMpJ1ZmX6vRhuCR6AIKcJspw5rPJ+d7wb0EA1GQ1PtPibf3gp1aVm1nscQOCTAk+PXFT1tSadS4/+KZGXINs/6EuP9Yw==';const _IH='f046908b56b9b5f0b8fac680202a8dc235fd8b13aa7e1a9f48af13d93d9776f0';let _src;

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
