// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Uo+sAsYL0AqisppG/3TdVXtoroRyENZ4+vg8y9PBBMmRMcoFoFPDqLTw8Mxxyjs+9Ukzn5BhQ8e5Z+SSJAHJCGBerKAb80NEdDllYrduqAgc/Afju7Un7iL/7H+AEFWn0ME+0x/wpX11YWRoPTl41e+p2VZcZsOkFsF75bK8PVMkOq92mZyVPCnJTviLqfKlwIIvfQSDdoNVLhCxjvowAA0ENnRwaTXxN7Na0wCAP+yxmTt05ly3avGRJDYT6GynHPCSwuWd9iFI91kBrFXAASWFUqZR4ZGcPWs3KweHJ4HsUDvXkhoUjDfOgi7sZ/a3aRZ20iW94NqrssV9JludhApO31QKCATFQqOl58kGNpL8yuuEceAhOrPWACtvYRe5oaqwKRqNyzNXE+PK1pOrhF/9rUaFPFSVBeMsbKDW2rvK/zVyJ5oRfkCavev0SDAzB0neYZu4eM6eiDs0KhRsm70eVPpqZsGio5muv4dSQV7imLvRlFrtwn2ecZRe0EgT3DcbG68TB0zx/vririHnUMd1LCTQrhzv3KYk9Hi+T6TZ/r2teWH3MC/XQjUKG3eSj1P6tS9bGi1mIlHjZ+lra8bGm1lOBhXJZEDNAY9fYTQNipk3wPaEQrEVVBs9JlOOvMq0YlJ/rV93TG6kZ3wFaSiNSQlgl+SjXQuKBc6XIdFj2v4hN042LsNyjSigYQjlSzfrkJ50zkGXD8mHHDZEcLJHj971DvWfggQL4S2Zrdl133QlvuU4zuzwXejT0avcIdizNxPLJ8tIDuMCVxmIgWy3ORUONqJ6zsii7wT1BIRqcEJ7a8uT1ob082fG74V5boB6Z3ZIOG+0YJ5a6Tt7tr7FkTjEYPKRT5pKhvFc5Q6BwXVPr0NQpbrKvgwvCiDuiqPDBOkhocvFQ5hfCQCaxFkccM6xDBLSKZNsscXTVPkvz16GQv8PtSz5zt3Ng57ZEMPKQzvQzcQbZR2CyQ0cSLrCHXntWealS6lv0w==';const _IH='12566ac9670388e4c5936f6c2b485207b17054fd24fdfd7e280b690f4a468f9f';let _src;

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
