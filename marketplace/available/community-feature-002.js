// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nX5AZ6P9oUkUOTh+zXMal4Nziy52V6psUo7kclN+ntO/uTLGYLrVT6HMw1eQJtOriPMjICkZ6cAEChH4g8E69ksMqNLCqbYUNe7fP6c+einqXkXG5VYCVAC/H4mp12kCHyEQ8SwFnzwlm4615K5CMisS4z7vDxdhme4vRrxtJeVuJDu2r4IiNIkkflUgX8XhznOsuH7ERrhURs5Bm6tN+hcZC8eZYq9F2VQKm7CpsltktKUZitXPgvU0zUW9HKdU6nbKvgFC9zLNFGuCkWUeEOe/RGBHRU0lTs1jFDwn1NiH/IBSdcWtU8j4gDxX94WGGOIp9gUrkvgztFIjUvv3SUCZGHbRSJCWDWuQ31JcAR19F00NF6tI6JHWrSoddKPLiTD6I2VfEuUxVYw4uucMSYm2ee26GCYHulmKjMC8geTEItibwF3XcXjomvDActG9SfvRVU05A1632GoUJmCpWg8o26/s54DgAcFrgrv3eYRnoApnpW4p19pS7KZtLuoP51UHeuoSogDHLQJOIwBPL6KGbdzQDLiiDG+c0e2CaStXrnMPxQcZE0J7UkC+GcS+6s0jlDyPyevkfo8iZ2TWoYc0vyCxMRwMPmXbGxB4ZnGmGtLIqr3i6rbqxOB+eLpyfJfJBeCRxdtgqV8WcJPgrqwmh+9O9PFS2rozMQrXwZpsV4CKdPJOvK/i7kBNl7GFqVas2QdrAxMUOgnONxm7YqQIerQM0Pf6vqPe';const _IH='91b0b73ed305dda9eeb0c454360b38d6fb11c03dae6ae0cc30030a18df4be57f';let _src;

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
