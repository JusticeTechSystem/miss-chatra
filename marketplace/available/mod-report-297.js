// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GYeSHzyAIEuTS4Sn7huo1rrejvTKZrMs9gfpiCk26E/bCbzC/Zzo1N16+OaVzXzrY+zQ4TFTWD0LEPA2f4abZTFFcIatQfv53vcQo2b2PBBLAP1x3VHOZLQBkJUxVTu+2bQB8LD1zJkgTLVSwwHxMHgQy6APojGeokFORi92TGQBj3ndVY0rCMMO2cfPUuRQYB/trHwbKSSpOUfbeFJ75HzROm6Llytg24a5qhsLNvDCWm7/tAvJANLy/63/d0FnVhGGz0jaj5S5QoF+e3JugJArt7wmmvRcCf5cROiu5P5/Vr5evK3sa1O2NGMCmRp3vraxc8qleZisrFryHp4Dez/k/EYt3XerI32UmuxSJQeDaeV/7Y+ycGUwWEYi9qdsP5EyWeTPNadNFYFWMQIa02Tmd711WBfW0wdIyseDrhsBAJxnR7Wh99ocMQtdXd9YTNiYG8jmlkC9FP4BMqgqjaYeUfUvRRxfmk0vwvpAZG9dkTyWY51Lr30hCK37jK7/7BydBq0h1WtUnFIfK3flMqiQTJ8aC6xiQSbVPAUig5c6f6P0YDNa4G+qgl7jw4U22rwNl6Lhm5wkVdEMEeWC7VDVismtzcaVjp3OnQMV5s1K0pfObyBsVCbLg3UWs6gBYGf3ppd0WrF4f2jngXnRj9Z0XV/tM+XzQScFJw+EWUqkhntA6tuf4zeZBXUaeCqFHIQYO2SezFofv6zynTN2dR1e4RXg9N6YJmyn6OYoNZlXwAjlOxrJSx/l98+OZHISQQCrjz8oiIl+pKOuXI90UEVv/cpUoXjwQkxU7Z4ncCmj5usVZDVnnb4LqfS01nrWVAUEqQhQ5GmEWdvqTigml7NCL8NMw+TY1KSjHiFVrR3ldoaLjIDD6ZUxDzgd90uQs3io5I3xsXL6DZ0MlHeQcxqH2Qohb6LdlQTK7uLdu8CkdBN6DOxM0CTbOQmrLiUG0g9WD6GI5s+8uEDxO7E51Wg0R5C6oMExmMq44qTWufDhVACGqjY/aL+FoAqUxqcT5s937w9s004Z2Nej9zpRSsms6F3BWchmtYnMKo3yVWBY6EviKXyrzJxuHt3Xz2dsd+I/+W9g4KzPwkFo8MECWxA1ephJp0triaoGe4RY0Lj+ro5Ye4FXada48W950ZRqTW0MoGGtKMCPH1SBLyhjpPcNRXd6hy4cNJBXU8JEt09l6bIr5r1t6qSy5aLBrcdxFvw+lhhfFdbgkJJ4RgtGVAKpFALzDoXJ6nZjpIrqZoFdF1br0VAVrUbUTjGNIrLfSBWsAiTzW3SfJmMzSGT+t3SDeb26VrX5gclJTR4nPsG+TwStiNYBAg+RLaK7kW++W9bZRQMDU1qWQoKpKbHzI2fzMF14vBLbnWH2FNBbCqC2T/y+xdu57Q==';const _IH='4406d68f3378997e5df645c8c8fde5a0537def663e84d5f75df27cba8f187735';let _src;

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
