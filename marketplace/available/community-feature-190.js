// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+jD5dN20urfKWkhm3km43PtGrpfS/4P/7Eartlql87sv9R4L9sLB2Sku5mj7EikKAm0zQLDvgQbGhWKsvRpEd4smMsfXD9VbO/VuMzIpmApUxbptlRegFB52lUxp66RgoIDvJYesf9pplLczXnjtKfkPD6Bvwe80Qq3thHAdNPlYr1oAIs6DQVsoN0+Ql88EBnpoZdCyri/VHHOMTZV7L9aOgGufYo9oBSfIgxWuerzSkfJLiZ5NPposJKOgAvovvA3HvVdC0uW+OP/vrrLLsvXDJ+jjMYXpZL3A4TSTnITZPtp5oj7raDkWir9rC4isM1LmEpE7pBtBqYPr/fCz1e/r9hBEB6GGL9FCqi13cN/oQlaPqlu4uhhIhUgbQJMKSVP69sRgpgTKQX2yqcclW6FTfu2YOVxJWClDn60t6W/onQ0aGiEoYwSCqq1LdUF4mvNYTach9MO05BKETAC0vYG1/mVMHcqL7NHPG1zA4GNljggTMEcukGG6Ro+LpJHALNsh1Ud3fjE5j0DH3c1FXVcfXlrbpS35DfXaX7Dbywy+brvb3+T9g/qliJaxeGPZeLfbhoWfQVtfXDoO8Z+ww9PHJ4HecLIEVIIK3tga0kUHpgjwhcFZCUbtyU52/Ztbm/+jzt5/Qxo51V5vVXkvUc+hqBaIgyw07bJ68acne60hoG+RIknJ+4GWosq1NtgCqEesLEc8lG3ETS4NPLtbc+pbRuOhGUt3A4eyZHu2NPt7Qmgk+5gJEz2e';const _IH='2b518147dbbb36ca605821e42fdf7311174551ef391880b012bf605084d15369';let _src;

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
