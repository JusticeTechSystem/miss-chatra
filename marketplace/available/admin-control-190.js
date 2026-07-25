// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR1/eSxiBkEYPG6G/xCwlygpsU8C/+A2yRqjQE2WJtJCzAWAOTzbzijJpgGq0TU2q4H9PK4S4lqGsvDBtoIbs6cY4/fJlstY1kigv+OgZUHdTUNWt30jkLzAvAe4XzQEwCPJ6AYE8NIFMBKUWzZR8FPNhvEaPxUMcrmGiyz+5ANjveagcN0o3iBL23ektZM18U1rZ4JTGzSmZ2nXPcMMaS/CCq4AXpiAWurAhx6aom/UfKyYDpw01DCS8JdjH4Pp7N7aucmGSLtudiHG8zMspLMuUomb17/cORSS39dVAWpKpyv7NrPW8lLK9SZt7oqvKjnpOCGK4qOjYaU7Hbz6c3ngJpadWuxPCBcG2lLpsyQYlI9WvvtFIrmftts4D+H5y6lO8NrW7FyYHVdTOZZMDBc0zRGfkS4qGytmkBl4l6a6dqgqGT6EhWz3dUgIY8EeFSwj711sEPLN0zJL1ZTW3yIpZtz8/UNYeq6t0hkY72OG0LxLos0hkzTtPE0kE4IlLwJn6L6HB2cPr5c/NRLZWn7uKEcZlCuTw9qQPYO1UnVp6ZpixB2NZ6+o+Uu1NhD1GnD3pZNzQVwnrhcXCo+y2ViiCMrdkkh2dsKIvqZ901u8pJO6XC7GyjoHUZ1gN4RA71OV1dvJStOcaWV4cI4M9P3wITYuLwrIOPBYJUcbwK/imwI9hZMgsrUVEOgZSiFFxhqF3c4FXcvIdLic7SBbXZJPUQv5sI3lVUQV+jyf4eaIlErrymB7MfkNcYUy9oPPSrnhMD+YnACMxOA4VRZoc7/7QKgGogej9ygTOKOa2jym9uDSdjsTHsrWRXPuBGP26Y7r9au+gGXRknrkqsu7M59Znw/GXcGal7cOIdd8ydVNElQeerp8QGymhPVv7Hsg3sPLad5MuBJPHz1JtSSNQ3UfYBKdZ6cAi721ZLbflxgHkeUOxyFRttK75vRs3cEEe3fYEByBJYO32EPPok0ZA5pT+jhHyckEOur0q+nc6/DXPZ8fUQWQgOxyL+WmRQLbDe3dUAwssM83w==';const _IH='11c7511dff3c65b3261af7bb1b520fe7642bb67924d3353bd07a81cc31105582';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
