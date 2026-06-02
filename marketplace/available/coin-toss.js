// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HsgE/bTVXlbz7x3O1Mwf0c+BWdACqSffNDCcNIQeBoxMoIhZiaQPw8lX9mrj3qdThqtC3G5/bXnWljYO0UCsHm7n+NuWeoP27JWGdb/9heeD0RpWGu70fdYD2NRY3XF/MC2+UVia82ARMLUK2J20WOneXMhrv5dXGMYUUt8xfPKvV5Lu/bHTeXmPZfmLgj9vGzH4Pg3SmncsjJrhqR9HlqqrKjkw8yJr/LLdYrUORh/eKSXostCwD89hD+MDd6Xte+6jM0HQhOZsTAGtNCq2m+J2D3prUnkjj29QBr0YXfeKG58PZliEOSq7D3MYb+bvr3L9V/4EYnMY3It4X/v0lnaskTY5tmPqVAUEn1znD/E5f98M4Br21mOgdLm0Ul3k+LK+JgpW5RF3taNm+AujkFC1BschDXvYfRs9G1W74LVNE/BBevyiFpfshpgCNIQ85zsT0gEIv37T+PfmmyloPYIjRf+lSlrAV2uxv0XPGhf6mB3D7vWZz2HnykmcHRJO0VBbKswkNu6Dgt6E0LyiRp+oq3CmDFVwmRxED1LBjty9UEiiIRdiqaQtCrcmUYE2eCFx+X4ubSj6uEG1CyudHhn6T43x10iAY/p/KIT0skSuQCrAv0L7kPCUDHSpg2UNARo65vNNX6PhPOZxe9W9B7tADVhcA6yG5kC2WfQTMJepevHUS6qcARDh+5hGco/A8gZmMMEcuyfBbJZSR1Crku81fQKBbI8rAWromshCRHF7yROpMFuvY2TtRRkkJUeuyKPdHE4j/pCkrLK66xZvt01hjHWnr32+Xg==';const _IH='6fc212f0d843601306925fd5e090c51ead1d9af48c8a7f30caf5c8cac9f22101';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
