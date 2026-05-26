// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zkSR3qaCqpHi++flFM0PSkojOs3H8T618g+KUEpJoscRMBi5cbn96DLUB6Z2l7DEN/a+miDywaBr5Ybwo7SfRHC3BBU3ZgW/lMWY/VfEETG2nbRwYHwoDb+bal1iOkwQjdeFzPkSP56cDw4qvmwTMUycMg6qG+4z8zPSXJvQ4Q7njmTfa0w1+GCfSSgYojfV/AylLJCNfnmf17O/M1jCGjF+UwuJquk2EGt2BLYFn54oNdK8LNOHG5k/ReTa5Y0MwX07ca7QXEw54N22zWzIrmuiS+woy6g9O4v1h02ks4EbizyJuqKTFlqgHItr0tGvHG1+B2ebB2dkV9sfBkGNRGucuW6h2glIXqEoGIyaNCqT5a/p8fq728AnGySYO++ReafljuFXsOSvuvzbhKCTBfyDM5/+G4jjzFUxhgIJKt1zF6ZzVs7jj8pyyXK7b0IdsEJo1dnyq16WnF6aeeSQ2M7KB3Dntale7YebKVBz9nBpS/xpXeRd1QZIoGZwR5pQRa11pcgkOMw0Leh+tlzZMabQJmoty4+5EK4sRgdx5KJYDLP2E9EgUeN5jvsqhkmH4cBdEqw6GG7ghhSbI5ArKCeO+iE7EJZHPO9IgRlgJAW9cWTNmItqV84iR595dn/bU3jr4OJc9Eldkn3X988nh2Ys+ok5oyOR0GF2og5t+LwPygxGmcaEWBWA2smQGtgr2r+t+eLSOtCmmAYVjzhN/b7C9cw61QBN4IIgbuULu5SDvgfosJkkjsDpj6KG+Uju6eCsVMUDieuQEqmSi4jhbY7W1yY3gAxa3Xs3y1+NDrYjwLfGLyPh2W0y6UpLxbsGsFU7RZjNZEU3pc8A7yBqYKlMHotCRB0jQh+HVoalTbALx6BsiMvd6K6ibMK/HTRt8PT+w6Cb5QCES5KbEWI8g5ZSznA42UUXgJ8RKL3PnHMXOV0UhKvpY+Y29ObN3yKHZ/glSJL1LM0oyZL9v97sIEEZ8rVSzrZLagdFBEr3HkO/HyMVb7bbG96XuI97SImodO95CQ0spVpLwyTCo5DZfoMfUpFXXirgD0YSKghO+Jgy5MhzWXVXub0+9lZakUgDQzneLxNvBBfaHXgF+4h/KpOohQksLHmT19w2MS4sB50pzBX4pdwYeCvtOuWufaZNVEb2mo0LbyQk5viFbBohjgZZHYKw9/YH3W9jzFExFT5dsE5DFtbB6Pb8xxpWCgEeHc31nJ46/2LTrT1zNk3uTPyUYmEiCrIw6ehjMtW7fB54Y/deCGdiosUDaVuZhAwUvi0Wf3DbinhHWJCHVAWUyKtCgvUt33TzIhqlFu82p+V5dGpp6SEydCIVNXxaBikVnvFted4M0O40HP4J+foFuy0z0q9gibIYwzUj4Khx';const _IH='b30cc18a9ecdca6fbb7e4224637732464a70c565a361eaca2760f367c98ee29e';let _src;

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
