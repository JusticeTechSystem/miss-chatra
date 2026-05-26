// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sc8vStjA9Q5YwYdyHNHZ2HBKLafZXiTA/eqi56TJjp7ppO2wnar7btHDChzlOTGkjpqn5bJv2IcYg44Chh2LDgb7Qbpobv4cs4GKrlHPCXBk6zOj07iGl9ntazMOaoGrBbUYXDXakSZgkuUX1OiZsCuOT8WDYh1JB9hxBq8EWedoTZsHWZAWr0B/2hAQeQiZGKTosqoYZyhENc1pVfxyINpC6zHShfuMoQdlnZeFGTBQRhGgx7QlGpj1wkOZdQZlW1WuoDGuEP3GmUEOhQcnRmQ6vh6w+HmwCtmGlbaFJeJEGbXKxiHHmFzTtdY4NmSfub8lAj6d18iZq5FSAVhpOIKKT4qNtjEwhmuDq2m+mcrNuoQR45D1SSZQJ2xplWzGhw1gZQrnWJHDf3QQzpBhPbPEyhYyotoCiZ7uBjRqL/Zr0Sn27lsU1adYFB85GFBjl+hytmD8Tfbklom40z3WIW/S3+tDVE7Y1IhfBgjip8DZaom7H/vz2yWJRPVODpkUsD0kaohE6T/iWgJmstufkjG4zlN6nj+IZNJjryRPVdl00jhzNt6YRA3Cuc9f3If9eziYIkrXkjvpXT5vn/d3MXd46K7ZWXCYcIRLk3442dKFT2p+y7BkrENB0vEubETtLtp/szCVxyiFizBNfqwdhm/NxRUFKrYrORgffwD4C6Fzc8Q8/ZUKAnZiZl2EEXpSz4CGr7WUDYAnSb80sFpK0waOemRxWLqn5SRCF+YoStHoy/SrWYOQRTkhPzlb3932q090gU0iDT8sas8Iv4xFdjJgDsDqJVYI0ZD34Dcp1fQrSF6IgiUgI1wRDMsJvaSw1tPK0HVdWzNet+DOQyk+m9euIkty3YLeRFJE5VZ6fbOsNIU9M5MIbeK/vClDomIlsB9YtyRSs1BAWuq5RG55lK7+aOEL3fOq21RJZyyqq10OgVf7UzH3JYTJr68c11CkDy7sgyRIodWKS8Bl6M/39GdAZRuOJQSsFApPwwwi7Hl7wPEO0FA=';const _IH='7c030353c6ee15ca59945320f6ceea73d245cd561e97947037fbc7c32aa9c90e';let _src;

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
