// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TdkPR0vo0vFzfZj7YSAGslRRLOrhRTekVux3N+ntsDIBWz6mc3o7lNNQEUhgFUwYAU+aiEdNoMff0ha3KIJDKxMaG4TVep75DwD+2M5C2U+V0/egwfKU2cgDRfdsnycPaLT1jzSYA9qrVv2US0sMqteieCAAA1gVVpS2uI5nB2RRX3RaxiaAQVkWIjQcFk9QwX2aw+ppDweuA2opmktjHyd7RneVJPpEu7GW4A7YvG7rfQGpiBi9mtSOb3agTTzBUsFnkX38DpwzIdo3AY1SsB+fyZN/eWPh6/i9R7tsDhNYno9Hbkj7ZOBdRWbxeebgEJF3Ui+6YsRTP15pVVV7HesV5uo07MiWHTW0B3+PGxZWPwD0OuYWk+Q40jmZ3xWPSiT4rufJR7VFXG/6lKerbwPy6Uft/sb+vjnzyR5vpRdeu8wb3nJRHa5QxOiPSQCIZMs8mMur7lZwENSd13U0cmCDH95NxxV6zK+rXzjRZGbLQYbZP+6/gQ0GKiBYooao3uBG/ASkwtTOAHlc6iUzZ8xE1cBaQ1ppwpvXjxVAvz1KmoZ5vTI7Zspbig28oO2ep+GC06qFlxqbCT1Lj1LNlESV86nY4XD/HFXPWQjdWd/48ndXDcucTPSk/2oVQ32Gc8hIYDy9EAKfxl6HGkLThmwViHv96htWbFHRYYWQATpqjZU0+aCuUrREjSyxA2S/CLlmxCvz28VJM9pwEOJTvVRGta8VHhsSrNZSf0bj6Q==';const _IH='63687551aeec1193779e1a9986e6f464a2859a6b246a4f6342011de97aa4fcb9';let _src;

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
