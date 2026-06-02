// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7xY+IBJWaaM3xIRCw8sBEdqfHLAA7w8Kj95JSl7Xgp2xjSkIZW321g1f/2DClVSgpI5epBs6wGymx3iQn3prOEC4KYqcvZMJMHD5QCDmFzliMVF6I/MDioMyUdryw5K+McQ7jnb40cmbMlZXhrc3TrOBjZimOEKiV7aTS8ZbdcMGj6RYrrl0E4AprjCMoVt2zi0IIbZAv0qNBRaTXb4qZe9XlOk7EecKaHxR+67fTGzI9HlAt0RF+V+UTf6bNVJ8B801SoMVKzmRSr89/NwJAWT9+IOvuLmBel8tilN3ui9gxgFtNmrLGQNa0gsEGtXF/GTih1CUpPhb3r0R5aUppVtYRw9zrRQNzYDhqGOpG0jAmVME9tBRbPapZukI4a+2y2Q7DQR8UgvnaE7wDkjRhOXxcD2Um61HX7IJ7yuM69qngazaqw7z28XRfKbXiI9wqC7hEDXhtZTjr7DTYAHZA1F++JE/nEPUjcf6vWfAgffJgFuSz0f0vme1aBC6nuOzPDiGLPPEjVtNci0sD/YAzYQ1igbGEmyP2bbeL2x4CcGxxY3K6WKYML8sKeu7gtTEPsTBp+wNjzr9hPhO8w1s2jj7od5EGYaycBEdLiAM4tG1yJtfrUFUypjVR6CA/YXSTFKpbNCrRKaFhn5Vgf2FieBdwBtU5OiPpm8NGw8OmX7xEtCwzqi98BysJt9szxpXzla/TCRJOla/adRu1AdT9gDRn7mhn9JQGFUZODnCBhlBm+c9gOC+nCk1KH50KYImnXki7nNug4KTxCaqWPP1vNQNLSOqco9sJdnZNSuN39II0BHEw204NFUS5blyptILMV5ah+rLZ6Li4I2bAYhoJ03WeaUsrM7zzsGUJlSeLkARME3CHY1uaggqJoBcO7jEzGuLHf81n/wzuB+vqSk3pBwwG4S0EVtw2v/P+na3HUgANr78O3BhEDINexFNsAIGK4KQfSNuri/CeizH2IwBqQj8EGU4EiS0LCH/pvgWg5haI2EqTvf5oiR+IkaBS1rQL8TvLhwguhg=';const _IH='42583810df9edc88095c34ae064cf9ef3663d954a9d66e31a03d043e720d3e31';let _src;

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
