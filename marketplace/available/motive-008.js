// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:24 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9HeiC8yKz+5QR0vAroWVvd8hmxdASoKDAWHZakgPH90f05MMVcbJGgGavicbFjgjlkAJnd2w4H2K9zPH2OarZJv0/nPJUOiTKGR6i362sQr9IvowshGW7wIj7bbVCGDAZn3kxctpG9aPTrTuUcDTG3wtMfcyukdm/KNlcmqCJRI5HVoaoJbGsNFDQP6swfUyhACViTcpOnObxSAhzb1U3ZUnvQSkrzn4h5xHHh0r/S3mcGFRg0M4Hpbs/n8mW+wgbJS1nRiXa6PNoYlbM+hV1FQr0zdvIvE2oOeB0Ajj2jZJ5rWWr5h6cN2GDaNMGprl1W0jwON+TxCK+vDK9LwETNUTl896hgiMlk7YeRTm6Ispd0rM/KDKaDNRRE+bHwBXAM4X5DVQO54gKetdGdYn4d7tawHXKN2CyaivaY91IFjAy6x0l4Lhm9SIFbDfNNkoGd8VmBrV75fxdjRYhMNOv6NTVIFtTRfbxwm3zn6qGUcHMOWCtgukC9kTg2ca0d8axKkcw4DoJ1QHDEjFNwXqVEOABUqfLBUgaS0UwN+N0H8v6TcVqn1ojozGF2s1bxvvrwQfRxcSgHQWzTkCIXPHVlIpKlDurbUjJHLsaaVG/j0YQQ4lBSwRvbS8Ti6XFu7sjifgCgJxXiCJuga/Oej8tlzZQ8BOwY6hY3mmMV43mvIIuNQ+2JnR+whil9FjMoWbiRcsd12+ylNumUN6n0P81H4a3cR23ORkCaOVj49waPgc5PV2wP26mSBB6a8IFmk5dMffpRduAeLzaHsnCX+fpYTIx8jAzTAwvStFFoTBeC/BQqW5bPNEj+AanUGcQMchaZIOGFFnllerCPlfD3AbpXplG4J1+cyU4/OOxT1stgPR3vVucNFxdqHvJvSjhNGjao/gndmEnD0c0zUKlBG4yIML0jm4n4TRmvtNqRZWjjG4ixp4oaW/jy3qP2nJEegv9qQpz1hWQ2Xsesb8We6ZrjueSKN8DSnZL3xu3miYw+fgqsZsGYoeGxC96hXgRr1ZE9izydMz/a0opmxR/VW';const _IH='bb451ffd0ec1a8f939c31e71a3edc42d379f65805d0b44f8a36548246b2c90bc';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
