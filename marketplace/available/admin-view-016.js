// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uSLE6uRvlK/KJq/OOpQGlpfdRI3iGLe6iV9gVfTO+yrZvnRSL6zBT4HJcpX/AcNSNe2dFZiJxtvt8xUhBOWNoHH63OvgOnFe8X9DBtMB9nAfKpNH4ZQkauthejJUz7vJ75ozz+A6h5QBiUQt0Kwr36YefxKZB47WIY82IZ7KaaQC9MxVW4n3jZV9rn/9IBcEZWfY4I3jRC4AIjUgEj0wGg1mUBfz2RIqENsc1rhI6Mjozp+fE1D3NFhjSHsJldSZhEMJ0yBzXb1yt82I3ZkvX4s4/VcwJHgcO06tzaLIsYdG7ndf1B79U+4E04qeBDYtmnM+oo1bP91cMrjIZoFGBIoff19Mkb+t0OSxvtQHY/bVv+CS3fvDx4+VkGAx3EkRwvvr55Eib10KTH3U2lV475OLH+jF4XJEGpPCOvI7wM+gvBXBf6mD1mD7dSl4xWaDGY7/ECbO8VPgpSVxF0gtEhuwDaUc/6BsIyDif5miO6sjVxlxSbnbHQWKuivDcjnQXAqwFb8XB3gg1DFNrt/mLBhp5c4NHt+tcVhBmlg4h8pg3aVy2HNPLK16ryVOYEXkdy4iQftOngZ5puBkKQ9Wx3h7MS98SCVXmrRdy0qbfPDxkb95JuMEmuM9+Nn2WssYcEKhglyHOPbAFFci0379shS+8C2KgiSSNFhWuPCtMeDm4MNQmnVaa/Tb5bKKveeg7bfJempFnraJb0Oube/3Sai+S8/BU/0+eewzJ2zXpn32xVUNPPaD4hRpdy+e1urq7mha8UEuUreMtS8FK6KrM8POIN04eA1HLb00fpxYANQ/49DAfE+2fkuFcb6qf78V3B6WCws2tfaidTBukbeMDCW+iIfXOXbmiKRP/lgf1l3IHoHLlE9XLa1INJ/SPB07LKUg73n6AvcRCRyT9jBpgmPZsub7jdyV+tCu05iCXIwYr/GK2gdlMhWgdiBSuqJykE1AeRdkcsjbObJgi2WcZ8JIYyCQHql8E4CNJkSPdQ==';const _IH='c6cc7d531e51335a5d154ee3fdbe8d865623ea2b53f5639734367710554d509a';let _src;

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
