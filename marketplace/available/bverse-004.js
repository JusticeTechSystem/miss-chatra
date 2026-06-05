// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ozI+ORYctPRMkYkez+jk3zA2DOkyQRRFjUkgHLdoEGJXKOrZ0o1Y31/ZkVHSRrBFciEPwUdC/hYhFX9tV3bpvcR01bqbjqlDYKgXL4RDdh05yVbsilGLPJ6W5+oCtgA2af6IrPcai+VYjZY8l6OO5jcouZMlr1vsmjfQ0saHBc+PZG+X+VhX+VG0yKaUEyjtPrV3t+irj7av+0Wd1GEC9EAUhSEYNP+Y1JnlcrK26WZzHD6DH9VilTzcwIVYTNUN++lUsCgMODRMwOZIzaAkY1rsjgSEEv8loxz35RWMq1213Y/PkRdLJV1lGCPxd8PnrvGA1PF7yUeZ40xEoPea5o/a1dWfddpkMpDyzsCPdOJhBp6lpZ0RaON0PQhP3XmTgLAjLeHkA8VAPF5ZRbkDWs0pTSqdLe1TbxWa2YDr12x/gCK9Gui9CwRxyEg0XzNbFHLu6iKcL3h5h+0QmQUs08wVd7dl9oWPJDQtrzIq3I+pzNbiXJw6k/ebtqDWHQNh8hKMjx312P27Z4tJw3aWPI9JcZq1aqsHK3zihriR0R4vuqIgMbzi70blAAgI5hvOuuE7FA1vzSpwa+nGxWY6mpcKTPuwuFMd8AIBrPLjSz7QgKXeBkDnFSaWe7XyeV/zeag9XUmYBZ6sJfVEz7/Sugtj3RSrKtMy6Y+equ/8sTNCRXpuRg==';const _IH='407767417154ca3e3f5fa46dcd3e946f93f1367e948b8aea25ab9b675dc7a1d7';let _src;

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
