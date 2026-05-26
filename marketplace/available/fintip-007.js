// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lwDDMNEzwFPbIlDECSHPokSVqQMfst8JBA1WNz8SZUXy2OyH13Zfg6atKi3HORXnEbk0DsLP3nj3l0cwipfqs06wm+zeW0+MFvO2Et/2yQCCj2rlBrqZZXtbRoTNeN5t1FZdx+UglcvgHWGIMDhIy4q4bFBYkHmPgPtISdtXQHN8olosw7dcMzFa1jbD2+R1a21mkufBojzYlax4flCD/davk1bD+Mrj8044963INAx5udKu6PyPANrrEUldA/hG0+uUmQXHbn3tqnueRCqEwmLwukU7wE7FBLArFs/IJpkZYQTUSilmiZC9I/LndrmlTrg0D1iDyQXYXNzK5R/YrPP83OF476zGEhGd3vMAx3AZEBfGl1v8/qaPQIGABEHMMs+Ie7hoVCsnk2szxSkS07a8qyEsfOkGi0rWaJiorhG0Wm3Wpg7NbH1xPmUxm36X1NOf5STaSoUjwoPlpxkhfXhyTxjo7HbKlyboVuipUbjI6YEMOv7bL5WL6GSOgPOfZpkSCGXFKz09ZJcovyHEE//EyQrHfjVH7kbn4inPP///WT7ooU6h0T4DVWywWOOjFg7T9VQVPBECUP0Y6O+SPF2mXd3uwVKQh/oAXeJxqFLMukJbzn+o0dsQ3Mm59FdQqOvWXeIteuceePGYUxxBwrO7x9hdyZrQxfiGglta42tlo6AdC99aS5l9Gz1rNz4maBZ3+ZNDGZf5JyXz4zTyq18ldI98exZ4rwHX8MmSvMvb7wvZJ2kOzr7GaG4NcPATrOYoDPA9iWo9eDMVGccriCgRrTKn300djT2UmBreGBKIKGm6j+d3PrEvWl2qZmpWS/FUxQen/Oq3STPTLBnpr3lXJAF6lEEQ0ucMMJJzkBKyEnfl5mrckbFLuRC5Y9RgbVLRc6fsaimAtC+RWP6RIvazxW4dC3byIa3pfkL6WGoni6+nRjhu1LsEzsc4p38BxqD1GX8u83gegdkl6JBEeOCEIjFiH4AcPUczzZI8Y9jhXoz2iKuOkEJGx7d55s1kSwkglalkvdjk+O5kKECg5s8GrU2W9kxs9Vk7Sl8m';const _IH='32a196d18e56ece9e21d07c2753493235a2c6ce708e88ba052fa7881dc051555';let _src;

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
