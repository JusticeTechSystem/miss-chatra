// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7YfH0je0sif4S61j0Ag5kHwO2dSaFd2sttdSd00CTFUvHP9y3OEuye2c7apLSrRQOzcGmeF3ExNcSIwjBeCp9Ga/wti9PS7K9+4Sn/pDqeQD4u8bItLiPaVTw+2YiRvQP/KZBbQc9eEuIKEx4PY0HI8q0r5eggGTEgI2M22c2KpUEvfW9E0+6xG1L2TCfM2/LSb9dK6nvm/1eARDtDWITTWwcfs1B+RsBtM9M7tMi1wgstZ2cBD4AOa+D3FK6Z1oCRYf+0tDy/g79atQqTEJrrjhLA2EL9u9s+sEkG7xpOG/vgoBojqvwLuxyAKxp+n2DON/25OpZz+O2kfcdFVGrhNpRcS3JH3IiFdbzugdISR4b7xlSDeNrkzB1kDK8Y6kt+cCGGraJfZi1bKPfbP1Huv93o7MtQBR1x12jLbVsCvVR3qwT8qQaIelf+bbPqIoid1m23mcp3sULA9Pla5DzIHWemAkOQt+CUASEODo6PNACUArW0hTkoX52be0mce+QrrkyKlMexm0/5mlpqD5EEore+Q5TBtRrRkn6tHlW5sYa71DrTwrAXFjR5rK+Lip0Aym/eL0tvv8A44Vg6FvOLRmG+rAB0eT1IvKKQFTD3ASd/LjmyZ8Y/VSUJUqayDn69QdJeZoOBaD6flUdCXtDhNsvzCIDes5SXyhNWaGzfQfoMKjrXdiAvrB45oN15U7sB8aTJtNFuy34pJ5CY+mORxfwB50BiYtz/APRQJU+zMrApsdAUk=';const _IH='ac634f9577ed383801dc4242f35ca6c927111f205f0a2c0e9a4801d3b7d8eced';let _src;

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
