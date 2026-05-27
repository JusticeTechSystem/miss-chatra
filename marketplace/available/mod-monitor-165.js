// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='W0+PM5qBwMSQhU9gR38+5Eg+uTOSJHky3eGWoM9073KwDqlPP0A0YM2ZTbLqdeDtP43lslbb0F+6fRSS6N3qDcXq2Ful7wqLSGt1V7ktrB9xKMvmijEjE7V5Plj0gtjwyVTi5+jaTKWGfHGGb+Fr25rmgMwmt2tS++K+E/IhljZEvTJnebOJvH/j9TalSXFXQVjG1Sg1rfbYSMWAgfbZkqYNF8G8X4IQH9VPt82kxmVYMLajznaizz6Ut9MgWKD9s9P+8qi+axSuIsKtfstz53gq2Bd2GLgam8uTu5N5skarq3TfUGYAG11WKGwevHcvb6kQV4m4SmX31Ei1uHyriEtA4gi+tYnYJdEIr47Odhxus4AqrITAUjVai7gAnsyQf1XZjIV+dB9XrcBQ2iLxSIlIs319hJpf5wCrd+MFioUwg5PJyCwvFuVVZD2YiV50za5SZoFr57fc9Nihd6LgPGfJsLKa0ioHTTKheaQ89mP8euLvdEaCSEsPXtugnVF0r9HOBJyuzYjx4D7vCO23Yy9W0oNj8uv5+PTHl/+HzoZ/glJYm37U8gd9eIv1YRwzMPoil+YFfh9wSVJ7vYCOMbe4tMqSbG5CrUSm0XZcp6uk/oN/YQMKQCSj7nfChPNdGiC4SePW5TFOAqjRL1NiflfBcrz4guMd9oeq6hqkAXcIBhQv+ldd3Hgh7m2sqHineokFMUBijBqDymeHqUHSEYNTKsi3VFlEOsjH9cXq5gGEXe+LN3M5QJjKgFnhJtPh9J/3P7QSOcVOjhSEHRZ1KlWBgQulasFVA/S382S/9d7P7zsGyHkFcOu/TMpAR8Z4LtjHBfxSXSonU0262a+fCqTVUBUE6oesyMGez2G9e1pQvpN98ro5xa+EagP/iRMDZUz/PmKjBGsFk7H+L43GI4rC0y68sY/+0b1bd4Dj60559Ln8+Zf5bywxmTAEsZ8pgXZcMo2DnCrg1zL3FCPlvRXTwOuSkAwZ1RK0d+VRgV5/025QwF35ITLT1ESuHNz2vJXpPUQM0tltVHy9dAV/xGze7yxIeLP5em77EF+uA/CbWVIJcjO+23LhOW4LZf3feYyotHtO9MItuhKxP/gVP0/qL5okNWslGR/8FzJ3qjF8Xqo7vbMVBKVnk9fSCjU1Ui0VHHnSS+O1ZtP1B1aXTajjYTMqWKQCmAqVtJjCnQSNXpqz3MpQ2ziRAyLCH6TeTjweraIzLjysQ6lqKeWiPYnjcq7gihabW6PIQcklry8m+GCePFW/RmlxLLLqCLHecSd8+4XJy9lBC+JdszMLKCtGimiRL/nayBPi/Q8ioIamf37upWPtibIwyVIWB7BIminfZefORNY9cIuTEsoZv9avCMDk5E+0WUoOvbBhsm1ZKhx6AWssdcpMVkupklc7EOc=';const _IH='585fb11b1ef0de20cce8f3873a86e1a095e4ed6ae58b297a1f563f7362c22b5c';let _src;

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
