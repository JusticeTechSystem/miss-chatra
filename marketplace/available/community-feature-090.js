// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w9zBTxR7XaGbMT/dtL4nWWR5IwIQFTIBXrD7W9qwzA/VWiNtKzQGsDwiWnE+DExuYUH7R5MquDybQPAOi+Q5Bsh2xiHsLs79ui0Vede9k2zVlAcX8TgCUi3z5sQiOzaLjNqSzKBt40rj//BGq2ZCALprgir0NiwB1ekX7o2yGaST49u32SDLQ+TcYX3d845AmQ5q0Ks1edEPgJpoSPu+XBBULTEFUla+cNFLR46/8xkBZ6da5kYKna0qUddlXRwjMXMQCXZEoq208kLAGyoY5AJMKEYinfOI05M1yH3ZslFOO3GlRStmiXx38nDggD4lC5RDIECdtT+2cbOu8OgdgmvyQX3qX6+SPlNW8N5bnhqnvKWsed5UJcZzHLS1K+g6GdCDnVCSX7G3cU3NYzSUst6iSuxQ7gdVsu2mBcKq5iI9K9sTaurZHtpR2GkaKxT12oO4WvzdSAJgx8lcOnJJ0hz8opNCgXciS5WSw6c/uri9NYiY6bdghVa98OsnEL0LVIySQT3Zlu21B02BKAKNqfzH8r84923ZNOcPD7jEGczKI/deH4Hz/TTLNICXPBK/Ja6PXdCQL6dogH3U/FJVLS9aYCO6xd0neYKwUQKYm3YARinYe1DR5otdMLgotzWHjvxOpkHFX1+x74C/M4UjGQMRUT7X2woINTJhBDe1aHlyMRrWv2JrQFP0uJIENZkY+imiFYogv4szrtMofTtsvWXc7KjdjFKPLnfMIeCprVg0aZGa4Qw=';const _IH='7c5e7a932e584a8d1a1ad944edc68dd69483d75d55fa623658887c8498792ea8';let _src;

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
