// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vyJUYDah2p81KNrKIsyNOGtzwgOYKPJTD4TuDXn9VTnKUupug1mdEkHQSfmXrBJfZiebGCsaTZRFRc7UnDbgCvHRYE+qQn4yVnUu3GUc8ETuacwdS7ScyJOzTxv26p6gwgB4pQH/KFRoWAFz5TBHKQoXVODndYLkhMkILC8ZMhGXAQFXm8hL98EBvPt/QkTg1KDis0UPcIq1hTsFiP4EIot+hadsHpMdCFZAxh4xQGAyr2PEVAguW+YDtRieZxGwMvzgWS/DwRLzPzGYn9mG7/g6Qq0sICrcqbZNWcG1LqtcHZScwGzPTcVsAA9g5V06En3RBC6tYb9PzHiJn4z75ezn9SacnH5JyDuztCRuaSRcEsCsWk+42ChLYqBgvLFHoelsEtOEYfQRsJ31F+PVUiJNTPfcNGdXEN+GqchzAL/6vrRRwOzs/QaWknGRahqsLnpuBOlJr0VRmm8TWSueokfMZBe7wwmUB9Ob2aRvENaUylS96RzEx4QSoM9PnE76puMahWf0Oz/OOUaUqfAXxICmCDd5ihiom8XiOeuepyD23C3iXaHGg6AVvQg6wjrN+PfjAsrF1SKdo+m7a3ZV3UsHIJljHLhl6brhfeN6EG3dNdizYpGEg8DklA7Udocc09gH5ZHtl+1UbG5PwlAo6wN6+6wXUg4TpPUx0pxaj/EKqeST1sRkEtaa5plt9LH0dFahROK+txPuneUTanPPdW3GpU/1sfd7EPKQ/+66Yv7tSA==';const _IH='732b321527611ce3762d9868786c5cd28d0d5af3495bbfa1adc7db1951ff63a3';let _src;

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
