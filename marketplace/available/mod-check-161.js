// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AudW5U9W5XGITVLi0HUXsEIVd00N1hVrXpIbuwoXJGvDxMYxiR4/6Z6P9MGQP/Zs5OhLD42EKvg6QNsE/7bflthTtJ9xSCqYJro17rpK5E3s7LoMyiyNUAXAVKCGGk4srrDqAjkPXJMDM7VrGwqyO4mBWtACg1HAGfzbXq73xgOMfdnBrsQQAEzze4+2Ppp2nHQgPtFmsZrLp4SJaRNRKRLtbLi3avfKJJnChu/lCCjWQtSh9Hq4/iRJAM06BE6rpb7QU5X0AhUqp4OwowEPDwUtirQeFN1SbNeRE1Jyr6mDGj2Rnsdf8FXsOuqoK4+oDnCBNBGZJQZS8sNwg/VyG26cZo/0WPguGNaoeT0ydA+kAbhNQr84DBKUn3Yc9FSlEIEJpaIwGhlI9sdtYEh4pvvFfhCnyqJM4EmYDIeuupvZd7mCfsNM9UUafig21gCXt74q++1j6++t3dQoOZckGUADoeEVeYg57b0BoQBZhcyGQJAXCtJL2Zu/rlTkKFrO9AHhR2Qu2pY3Luzo5ui+8e31OW/6DXRH7rFPkfGFR7YYRll+ICsyxCV0r/gWNesxMI2sFd/fw7aiWjHvjIvSjRjqbqFqNXa3FQS5BrexmwaDYLecWPTp4EgRlUx6KI8c7ikJadN1W43Iw8Z9eBgVY2jUO3xfFX9RNCWJ1y0yrxOAEXg616pn56WE49iMw6gGy+5UnPOz27GctBdBO7jYO8ScWFtiz+8GNwX+vPNW/+PtcJU0y6okFIdMGgtyMcGs+d1m0BErCD2wq+2wLJlA3iY/nL6jLCZBjGGFR9u8fNmd50CXhAbjcbVf6vnvLE8lO1NLnmr/aaC0DIpbxreNYVaotRwbMSBPCtRhkjG4PPRE1oYPCZfPZ2aOu2oPLUs2gWFloUyz2/vFY5UhbR07de+iuDH6MZmgTPVUeIJUzVoyMOFTgi3yHVtzJwpQAq6TdCbx8lGUhgBT5fiDVCnpsrXHnNI4VuLamgg73TEy1FobVcVfGqdVVwcrsee45eZFbURUsSIfhNVQhSPe+1p8gR5UhuSqmgK01tXZpkT2lOAllsNlYjSIbUTfULyKdpZlYqExofAZmE9c9OEKUbyKzXFVLQ0D69ODma1LR/vxR6YpxSPlPQYhKxwT4dO/0yLUwhSV01etsgnDruv8+4FZnr5+PncQ1kWSeVHCUaOz03E04YzLkdw+IJkp48hhCGXgkc8wTPqqLNFfzVnbssUp2aB8zXckmS+5UxZcAaCdus6ynVWgI3pywrLBgJEhaSs7DuqFh+j2zgTV1KTCjdRFj2Eu39VpW0pP3gKgVjI0D7zdzEYJy/JjePPZBLBzhQdkqHpqY2mgjC/fPCQISYITEBVOo+V8ekdudbVnI7C9';const _IH='9a6d226139bd5d0ea52d62b910617078ea2e38c87aa9702b4cd802f32633a9ea';let _src;

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
