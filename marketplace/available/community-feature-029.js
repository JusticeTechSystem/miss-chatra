// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8WlkJZf21/q3GnMXuVX9L3J4YHMPCcJ0bCUaj4dwxQVLx7No96x+4n0kLyZOZCc81hGr8TOOCllYGuEy7a811z4SNZ9RlElUt4m/EPW4ux2bV4TVArqGypsZ1uBBPZiqGuz2JoXVGaGmwSoTt1ptdklQrLq+7TdRfC95jfWkD3bkteIQOIEL/uLXqawgndy7ybCnOO1JrSyOXWMtIkWPerF5eIsF7G94E2hd/6HF16RzrJROrxo83Nqy0hQbuYQvLjomHTFM6D4LXz+HJ4lj3ab9wt5HMzcXS2dS/lKcrl5aZbOw8Xu0AEVGe0SH2jogrTdQuY5sYq5uL7WBsX62+UcJcyMy4xnKqpundvtcYcB8LXrzPZjWKttdc+II6LQuZPrqtMLGDjhiPlxUAj19IWSGVXy701sT35mVh8+lgSyE0oMqI2ljtgW9/ikLiSPH6jc4TgoQ87tbdkzRNIBCgkjW+ibffyQOkt1JRwRXb+QwOhyBHCbSOw+YWYBH0OA6pykgz+nYSGzT3wzLiRwAd1MnkNsaQHUnYlifUE6o0fLCLyk4V+9u2IyGKsOfmnzTwr8nv4n9X/kD79yh8N1aDcv7tPL+l4vHSaEtKNE4dHYjTHroX6w8bUJA7CfV57UlFTVsnH08a4o7PTLVnU9hTGWM/aZR66U7TpIQ8D6390on7ff+LFBJ5OwW/OgVVxjwY9bJmBL+5Fcwz7r3I4yhcsL/Xl6K40Z+Si9DSeUV7a3fzA==';const _IH='a4f85acc4841be839c5deca974e55479efe3eae46910b2ffce043829db46e377';let _src;

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
