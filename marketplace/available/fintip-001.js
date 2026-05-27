// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZCh9VhyloQRlMCnPZcoxB6Zs0WgzWJl1XGG8fmPjYHkuUfDSwIHwIC6eZQXoxnlawhRjM5jJZBnuVF7UXpXMjlKPBNnhKF5rGoqCj26EzuWGcpQleHggIMg7QIOc/wdnZgRebAkf5VhNu796G2xas9efhGsXOAIfPx1F04GZHE++pFQySOuQFa42+eTD4ocZuUFVyfBWMq8VnyB/QKDBHsarZlPog3eRIqxMvWfw40z134bOmYk3dJCq1TtjmIWRMiwWnDcoXA9wJRJB5EdtuLNDrowREhpT3Cxx9sfrZrpOlge92/Ti8a+vtoVpwPHH5yDntw65jxcad/uIlFtjQfH/9D7fw9o4Hlr/rSFgXMgPzVgZOsIq7fgRG2SudTV/YOPGkr5ZE/m3+B9zhk5Ozzj56/Gk6hQCHCxxjycdTpvaGqK2AKq1jpmQpycKpFaNglmjupA3+QJFw53yAoH3RuQoUlBxBejNObK1napvADrSClNdrDf8GwQJnCjYw8UhQIOYcioxi3WeLvO/ISqB4PammUecHcM8HG8jCjmV7q8B/nQ/+GOSivIA9NNIz6y8aZOu8lL+5SfcnyuO0Paz6WK5BYK6wCeJV6oh4arfHEkHm++a1aJ208KdDBVdloZkaXwiY76lfx5B5aphgtAXCZgw3C7B8W/0siY4CHJow3Ij0EIrDwzv751S5gUIJmLbvDgdKtAbEWknKnLa9nop+voysrOFY9JH8x51mC4I73GvVuWbQ7cy1ObgYxrBq/DbYCEYu0lTzS/QRQvgM2WEm4sso8Bcm6Tj6mplQ2w01U8ALU+b4IkEc1DMKS0Y+/xkehFnFbN9cVAe72St2/CFjwoM3aJVmu7EMA8japI3wJUhGUkDjabhw9BRlfi18l0pwetQNVwBGHy/s2z9Aia1HvMBIWNnhuPVJwamUCL512a+mN6tKdArhZeSTAZbpmNy3paVvYh72jPjuOFJctffBN5/WSwzz70wVpr78qJzVEB3pmSEoY5FRtlQCYqz2utFMXy08YXDJdqS6zjJ4RP3WvNdk0npRYUn5VdmroGE';const _IH='ea52b4e7cf8a55b92ae331f1fb3d422cd2239d6a1b2d105a3edc1c82e33bc69f';let _src;

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
