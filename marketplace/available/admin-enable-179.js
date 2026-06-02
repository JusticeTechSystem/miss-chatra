// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X4JDjcAoZfMVsTtAL4qmWF3n7W6hH1nrUkGc7JwijPNFdhzjaKK/W28WmyCqA2dsc2033SBdVpMSPSkaCmSX3Dk1VMcZDKDhCl89XzdQKLaIWoDKu4ZcyXMQ+SLDy5B+MPY7wkrkoCqnCjSYI8xnjhnf5xMS8FvUBjOAjknZ30PL1nMv6w59qYQr8n+3brN2AmceJBXzgZEjBxthfujiYU/YsW3QnaXyso0s+EZkO4e6HZawoWU894Pm2LiO5PwO5nqmHXFVZvzjrYttZTMSMWCobeQ+KdLILKK3gLEgS1cuFX7wTxxMwNgdsZMLtw2Hs+nJXNIXxdhU39tdZeQe/NOLOpa56EtqVwQeq2KvGNxB8sCiCXEHeXKpKCAJZP7uTssDzkj4F2SGenadoW1hRsgieqHgXWlEs4pd525mkogqTyMD/rKbyTJnr5Z5orQVPOyPMZ04LpdLqZyD2FfUeoaIsES/wOt9EgvZxpV8t6D5v3kiC+rguIdlJgju6mz3T4GgOFQkRnTekIrMTHrzDOK+lakzr4dkBACaJTb2UiN/AO6nlZmv2ldP9y6xZf2HvWMalqlOE+fjyYvzjZB3Gyu1Oj+LwQJu4l2Imva6monXGi/MV/INGkXMC9wGA9Oe+QhclKCXtgrt5erGKED7y08iPQ8FLblWm3Xk98yV7X6s189PruHurRE0JCnYCPcctFDEFjl+UGG7+3LJEkDmVMnEFHaLlWZ8PNszQqzdhV/GqsWa3krtqAN1Jk8NIm2+hv8DUsubfUnmnBJI84SCjhtl6X3BSuuy3QW7vntMNZYYlwJSCB7uYT3tPXOLb0Npfjx8d0Eja5cw8tYMqzpYxtnPqYlcVNs+sOfnHoLAbPVkTOX3shXPgm4knvEVp80irw7DvGZ/EDIAJjrAIu6ahVRdbDdy4R0FEtZLtw8VmelmFqOoiY0Tl1hd+meIiw1eMjFHPUTf7jN5rA5qvz4VbeQQgKNdCms1QAEfNhqhZ8YWyqnAjkqd1K7KIyVw4Yh/YQ==';const _IH='1453c90f6de0a1de90b86d832c1e519aef78abd8938ee64750086c32058a0bfe';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
