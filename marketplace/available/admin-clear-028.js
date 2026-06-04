// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uwFGkjIbxcRF6o/OU5Lw0tyGE3sA0uZNwe7w4QhcL3rPM+7N+iLeUGLfhnhLrh9q9MJar32iqn4R5G7QRRZfyJO9J2/pO/VcGfl5Q1K9B1Y0QVfZ8vdhCJ/sAOkyu7YiYNziuE3b2jl2Cdv4Ky2tkkgRF19EKR2pv6lBq8lRMr4Twztn8StKj4ruIhlyRKd51XRZTcyPBubKd2Kctn60W18zLXUxBiAAa2eib6nQ/VVcuKH7S74peaaMvPtj1E1TkHq9vqBbVgdOqogLXETU2mhTdtjkZMWewkGym57avIDJQIBhmhumwMeuhjr17ir3HjXJYB43Nm2BxfnQqXW5mwL+zSv4AE73Xt90HOqHRZPtZDso9bkb4+9Dx6dE/BDH9IcbMuVwObNaNqoGRIYPONbP7y8J3x+99a1PIm8XKkCLM2BZqAcbR4IR9t7boKIu61iJoF0aZOQFSZ4wdaYIj+RB7xUZ0AissphvWnu9rQeugFEZVKKI1H7y0FoyWrTR6jXRjkltlTFkSX57zEhSW3fRqlcPpNsXEN+VIBtLHQTpwewVXIcGTsrtfXR++jlw5yBd1WDwD0Q3Y2MvkAEmTo7HEG9PtgQ8dL9iXThVOHNY08hq2FeN80p4hGml0kuasH2GckvIbpmTm9Yg4lYfZyOEA4KuAaIZohy5iRe65Oz79LBfm1VBMVjE7pWkMc7etzmU+Gn7inpb4LvqlC+84UgS7aHGFIuhDaifxawHVZQE9l7JI1ZcSpgiMrTHzZc+gDRpVcgVQ1YXFHfTu9/vL8w1Z5Q3iMHtUUYFP/fu/jYSfFIH7VJrq3uzRq9e/vhZtTCalA0KoIep2Wv/AcIVNxg92+ZFUkTcrX62skBGLjbxF5ZwqdcaLM7Jqkkvq0JMVHiO0Hn744nxuIaj9Z4IRg0ZxTvuU1yToZNiKOmeNsvNmwiSCiNZ1AyCPixMgsMM/jwqaZcAcvQpwsAAbfqok4+v6acO14w1K9bcULcx7cH/2n63jcE=';const _IH='52fd3877e587ab04ec364a9bf9c9f01c1c06ed96be73007aa71af49510de5d74';let _src;

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
