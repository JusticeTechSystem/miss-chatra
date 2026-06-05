// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nY5VtU85UqqEMtrMK3QCDIs6Tfe9cX9ZFgUy9Y17Rm6PFek1AFF6bdX2Qf6FeHkMrI9e+pNGtD58N9OvPYmmNS0fe5RIYgzPGLwn6Np2ZFBCt/3+t7bbFZmhh5uLaA6Pi1P3PornJGxurlTfANaCC+8z3eibbkv6MNBNIjFyDc/rirYDSlJjmM2CSUJhoLAbOHlM5ui25Z1XndfejSmVkXdjLZokpff49YYoSobtyh8OGxxAVfRoVM6FABRaNyAJf4689yeYTRYX5f2aOEOHhyo16HJuoNlJDQcRXt4+NVctfMy5RRSEyi3HyDirALREcciSssrlNiimX+gNH9S57w9UN29LvWCc2WOeWpo+7fPUWyfPDQ0vgQiF+nb1bsPMGUxXd1CDBmR281ZHwT0+Zt+rLGoJp18l0CHZ/leFkEY9oSwYCfqK8UcaHB1n6lCAKbvxzJlhS6soEYyYWu1fCEKzJmIm2r50QQtYpRo4RVOKfnjHnzaP/WsZSj6JteNYYqCHOvAsuEGePPxj2b7npSMBrEXy8zc+D+gGKN2HWz1cSAXM7UQmuuRiFoBvY/2w7dzefqh5gXV8QPxgp441gqft5PWh9TPXGpuUINvsHYbcYaxFDr2E5xwgNwXm9LZHWbamTZcTQaccgdMrokIDhVooL5pzwH1JXnozDOtcI04F0zK6FG271D9IvZM1QBi0nxuZ7m3X03G3/Bma7WSoEOw4xRRhTEfQxHahIz/HiApDSs86JoDT18ufHD4oU39zY5a5EtWIjSpaH/W0aZaAuZB726D+5ES+TQeA4QgVXwRd+tIWZYjbqWww6COXceWOWMl2P7Q/U2eITzNovhUbLAbAPWKsdVI6yuEOTgv9XdKwtKW0j2dgZPyXf2ItcXxoCzt5PqcE2PTxXaVBqzzABsGTRL+opXgOHF179mkelRqep7zKK1XB6lg7eb/35f8h+KNrM+kN7w6BZ4w+H7rRJm3IUqYsMSPuJLDAsTtQlBhchIhXtMO6B0NzcZ7EcrNY1A51sv4urFjCR8PrYb6MNLYjrxxuU8r22VcPBJPk/Rraapu2GTTkPYy2PNcrPfx8zg7BKWysx8jq43w=';const _IH='25cfefb8f39a15767d7780b972b34d8f847bc4b86011efb198b36d594445cc19';let _src;

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
