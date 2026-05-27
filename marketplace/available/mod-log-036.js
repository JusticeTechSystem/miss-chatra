// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z6Pg6tReEr4Mty4sTLCD8Vv8c43BhfqkPrEjSU88ZYkd2TUH6Ax08SxepnAfgrPTZuuq4U5QX38e2roZ/UWKzg2TFjZKc1BcK6hgFWpDsO/h3v2vLmG/03ptwE0Gw8V2EUs2DdpJ6PQRLmfhJPrE2wMc4ZxDk5GeP4npAFjmtWLCdbKvNKvwdSpZ/nLf9PXe0yzworZ/HzSysSrmRUHXq57jh9nFj9YcEcuJ+lbDMwVL2POBA/sfhbHL4KQ4xLTiA4O0rKzO8aHL4FJOygzAQSogxQWCaUBhztwSvd/54RDwBhzNRT/0iDFvTBYu9XuvFsI2iHAiWBm7E2y9ZjLMsOSks/TSfxOy8x46L7li1EDHvYO78oKaQZwAJAh0C+0BMH32IsL8BJACuiZEUDYrjrqNJE4ViOVjCPKQ/fD4V2E88e/Vw9fhrIKaSRMp+1WnQItzQCKMnoPUprHeHXyesLeOOfp1F9rDjtGyfsMb/S2i0/3BlOZ90ZX6QnKLvhlTZbi6FjwaxhNWdqOUjs2tu6vknKqbjC7B9f6haRcWHEQJuu4eO2w1iCadtrglXGPyEg//GodYFqzl2gMIbHRORbfj1CxefDaTBNcfBdhzWRvD4pC+mUj5z99Z+HWhTwtoA+ohvdYDl4V+upTMuS2SQK/67H6prz+rpDrIPr6pQ102dlVGc4XJ7NjtYTzCWCi58cofDvvrRrxSXNMHFFCH8/SGtDYeYCc+jCQsdE7l48z0jUUMrAPG1eqbFQmzNcVrCu841qGmY8tB+OeEDfqIJgnY3cuC96gnYSsLCABv8ABD1Xr5DOF7iKO9Jppoim8avSgSGyLRQ0jHtXHtT1u0iIZS0xz4f/+0sAyKI0BGgR0yOIt6iETRhsmaKxlGVR1Ci6tXwX9JTlsBJtRVOnlWv0dhvWsqW9j8UldwTZ+kmw8qw79GUno7ArGGJceIMB+8iKYhJboP9F9yigZUoDiX8xSyUa0IK9fsAhXkqYuFVumJMu+hFgwCtaMx8UbMwHZNrWjOU/viD2wJ/sdSAap0qylp81wyEE1fruS+F+GZIC1rEkDHk5zpfLEc/CR2unddpR+ZlK2Ubw3QIW+8Hc55bHoE4lqtxNflqsR0dLQlOAbX2tbXV3fLTQcsnNwhbUuxcn7zBbC9Na12QcaWBFXwcWkJjJ4f0sYA3UnCcx7dfhlwaYT/LiDYwxIVyxOrQcYBJDhZx/fzfU0iqEsbbb6FGFTElh6csaDG/RCqpXo+eer07cEV+wRnLmAV4GGQitG9MyfgFxQTKDKBn3FPPEVfCEfsFcK6dfZVyP/7CAGSA2VfAA6rkCOGTfziVwn2NgfAqWrK1vQ=';const _IH='6fdf3fa447931baa697a6aba999110b7b2ddd09b0028b28cd737df7b433042ed';let _src;

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
