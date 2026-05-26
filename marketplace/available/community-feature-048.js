// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z4WCEk1JJsiTgAmDpYxUxTtH3howlehqAFrs4obvvXUPavLvYFtweiEJnu8edReOUOHVI3o1gEL8sDQdIcLOcYwAdV7KQnLs/WS+1kO/jm7xBcmJu3KOzhpbDPkbw0+qZ+JLl2+jFmRIRLCzP9yXLGcK+0a10nQwt6diIY7Ft8h13098yV/rOWrfyZZ9yscuMNV9vmwgpYqkVzApkvMAm8SKA7m90gRcXX+NgOMLtfrarKm/hw8/UYeR2R2JBJoaEDz6ucQwKuZHADRAc0gmd4DO8AvZhP2lsaF8MuLdpNSEOcm4yMi72V6OMBaCdcjPwa5l9OHrKzh/fnkFkKlXxe9iiY/W0n6/s7mMKxe8G9imvSBuFO9qVoA3sJ0lwX8SyyuWOZEDJ26bxlLzanyv/jvgVTZA4xZ9WMJEwaPoAzWjyi+Fo7VT0u5FamUR/FranuUfN3g/U5bTGMaQGtQNIGQ15gMbFsHUaKcux2qUZVRhBd83UauhkMywLI6/pyq9jebF+PJuSh/TT5aqPgBddsBUKQ6anX1SCjACTc+0Wy+tr7lJmA6t58rRQl8KrBcXaujFYWxrc+w3OrS5j7oKaHKccP4MXAkRfc9XNroPcIcGQ5JvLA4PG6q8zc9JqwC70vLWKLBhvp0R/ubepAyfb4pumi7zf0+EGS4TkAtGvgidx0Ua4dS1htcmXfmklFE+TPwuuP2ey7FrkI9d5NaOHMdW3PlvA5gfzA==';const _IH='9c7c5ceee137376398111fb6faec738d3650f579c00cecf703223677988d9aee';let _src;

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
