// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jnGdYqRLfDg/K7OLWgzq7B0cxjvIYK84RXH6pNcoAEfNynXTG+r0IqauY6yiWC8+Js6ZVQuU2jgRTWnZhSkKKKud5Ng3Lf7xO0ufsdBlT2klTltvBx1vXlPZ4cyW5X2uQHOqFj7JXK9OOSDz1mhYcfUsFdqfgNk4yJcgMUAKrsRKw1Xm/BG4bwQ2CmlDqSgaTme3k+MlqbJqHJe7XfnDGh9DpINfAA2Fjn8Nh6Zq94iHTeDGvvmrgC08pFLC0hnscrTp1ZYLB1HE4/Un//nApqxS6FRPITAfKvLapRIi9BtGsPwHJuq/sIcPPcEyFxjc7+gaaKihxJZcwUzfXRYOM2FuPhGdwsBGaqfSSXMfWUB4LHUIEwj+3G0h8ZSzM2Ypf/RfR6Rg2Z0nyXeeaoMFIn1eUWZlyr88rR44hFsOsqpg170Oq83KKZypQgGvFzyvawOmKtjiDhzW1bXUHD/xyydHezHumulX+420wNFWLe+KG/ikKReuXtVh552jX+bANiexfh603xt7UpA8V/N1rkwa/j0k4BbSys4p6UuZuYmkfHU4aDufmDK1WErLMgvDaxJxqkXI2+aIHyWDVNCPLb8mG3/U7e27U57oSgUJ0AaQ5pg23MAKsHilAFEO0j2MV+wXoSs6Tzk4J+CiVZ4GGPCBp7DeJjq3Qx8Z4PU+U5eDUsHsACrBSAy0m57YrZgjOnLcegeeAEJ+rnSFcfajcF4S8ZSNtVOGwQj75RCwqSfYSfud/J6L6FDymztR99PvQ07WDu82Idvvcgmxt4IH9K4u1De6yw/cS0gkoiJLJqiCDDrNJMRQSTqitypNb3Mx/jAqqtrfptK4vMsLPCcXSxHJX9imBIMtfZ0Hr4wb1DGP+g9QxBMRPe2G+uG8olEjLeYqkXHMNoCNptxwRJiCap/wOJh9pX52vIgCx0yRV6zrDKz6d+swJ5HSBtASGrflSkJH8G3AbJ1V+0Ycte0MN5SR7B3Bj/1yKM8kMu3xLe2Ot8c=';const _IH='700c4b54cb2514a633b42b11caf5d3bf335b74f2ff0424a4f1c57e41130bd5d0';let _src;

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
