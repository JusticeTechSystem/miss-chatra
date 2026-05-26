// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FdVb+QCF8C7nty7cMFAjBRVXti5WV88mrmta+fW3jgoUpupBLwpTXKi7XTZ2VGJSWwxyWV739fL/ZaKc4dP3yUGIZx6TRqHkApG3anU6joDGpJUAAuK1sJMk3DdO4BA8GBpuULNBRvswS6gn3qF8oZoR0cAl8hJOg6PpDqcVE2OVzYqBC6KQfcyj26Ok1sVqZLOo7kUhCz2cxVbAQWoclWeShV9R1TceSYG6OvXCW80ny7g5q+eMiwOLTl/vpL+xJRbQk9uOEhirVqcUgi6S8Y4Kg/BuYH0VTQ/gNPNkcxfFEncctxPFsET2cIYhYdHb2SyQ9bAv/YcNoUMrdhfdkAreBOiN4Mgr1/PVFHV0IbhWYPUbwIKeEr8axXfsFeOnFnecUPZl6GjRsvaTmhZaTFZLEXs9iy8r/KCvgGSkQ9sobVBFnTLJwePuw6X9Zn3FFhYTaob51wht/iZwL5DVkTTM3uZx2Wx0K2m17pR5GEUaQgrszWkqz8X3fb+8kYVdiWniWdmB1wDhiOjg4/Nm0nvFBmuUPKEXlpNY3Z+ZLOg+3UF+KxEUKoAiENk2ABuSBUNEoyReOh6ZcxwyDIt09x+RoFdKTzn+NrdCoMjaDtKj5o9GPQrQH9PwnQbHLXb80gAmDI6EcZDFfX/hBOLR6PXq5coAgFYUcawW8wFonXnMLGJmqswnmJSkfzRI73OrKtFwta+W+rL2WkF+E3GJD+1HUNFPJyo7m60wVCmwfnEA4+6A56tg/fGRwluBX6PIcfdGTxX66O45DUYMkCXvNA+dMxGMwhf2Brxkb7eg7wZACmRtU1ToHyNIl7vBHx9NgJp3R/KjIa4/UTh5hP0gRkehcoBG3F+3uwVeRk9G9gB+zCEwARU96LW7rWHCbqLcH9rnqGM7FaX9tl0O7hPId8sSYHpUT2lut/BUzbG6fCEMIHAN7Q1S0Fs3qDA3UtlXIbXkA0NRwcSf0SDLCOatZct99IGUyp78lW6uVRV+aQhlRrR9xnzZRdat0L9A3nDtNaXhcAGbXUsr0p1ae2lW2iXS';const _IH='cde134e656b898b44d2319989c23c3864deb566b1f49964596e8cd75a04d1943';let _src;

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
