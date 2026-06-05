// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C7FrtbuYvwO3hMSt0kTHIJ08+qf76SQIJsrOW9W9ho3aYqtGaxFp6cCmfkQ50cwwsHnPzt4cnx7+Jy8FdqCFoa+8KVxigUCygKQjuDKw3FGN7si/DRp13TpiCRdlzSoVS8H27e62R+2NlbfhhGAQ0AExrxnYtk0m58Z9QRq3Cj3ho/7TSX4RkSOUghGHgSFm3I0+7SKUbtMrWJmdFyJHF/RU413BzOafHeI6ji3CsHY7QZkIl3QhkNJ5EOrsaiyteZzI1IZZJoqqvicRj/ewTeY6Eq4hfIRCHlN9+vJ0fMCg0vQ3e83hWY8gUfvXB3+GxsQ/Gm3Dp9iWtfMWTTP3Z5KDS/it0euZP1K5bCDLJ6a76Rda0yUheX0PfMlNoPAbJhAuvNTlxf1UFEMHRReKm9MDullRq0sz6pIhwGucxFUKvuwLxwClX7xyPHr3RYuBLlT9adrFhUkWaZQN6e8DqmHY6NvpIgMtjqKmLhkLAD+8XkDEIenOwiUtRc/ztCFGaboQpJlfW7zy7f5fVqRD8iWdu+iWFGFKjHwMYKe6YAyfDwXquhgJjNZ1s5r/4iSe7M2PFIuUoHAorHw=';const _IH='824a35d69a7439251b53ea3a071b74d1c803d7881794b4e69e72b589c8372c3a';let _src;

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
