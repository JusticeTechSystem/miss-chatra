// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyJv+3vM1nWgZXbNZ9Uy3aF91LO+y5PlcGptwLqN2EdyBV16hB/uAM42sR/YDeXZkJq+BotpI+KU53LM8J+QJYkHMKmLOrLG0N/iSU/fNuT90fFl2tHhDHYxRfnqNWmjJyq1sEq4EDFAYnm9tPIoHc+LCdFd0T1cUHHCZulymvIaxdoUyJIQsGBJYRu+QxYlHC4WAnVumqPBCGC7+kVqWE0Fqb/PhcmrnwnmkGXGasqjKy9xpArguDNXWZw6OP6edJK86nHPMhrK5pABkW1Y90j5idOliRS6q2+DjlYiEYPCI40Rq/k1BA12zWF7UXvas/jzCKJ3I6rnyt8B+uCLUtIbp0aSCe/uZF8aIPkQW+kss8m1jpplnDgI+IRDJVuWbNrJCimTdJqIn8+uo8h/vjBHLEL8UFg4eB10EPZ1ULqIIzlF8VFiOqzxSyaKhvbRvA5ELAmEGTp9bF4mv6ENZR/ubHZ6zxIp3fCgWZja7oO/1bG6lNay+KRAsctT+HAdf59RXVD+d8PCb0CM4PSnsno5Ieh7edVOxBTAUkDYEHDVUdU1xQGShftqHaNVJHvndhEMItGOG85aP3Qnv1gMYbPlA3U4zJ3C7P0Uiv+Z9TKDdl2gWmHSccZ6nm50xlrlVW11fNkRSs5Jeb3Xi6vC/Li4+pZ0pAaLNB1hdaf5N72lFJ7bKJXL6oSgsv2fz+Km5NcM2Ij4hJcTmdzTaBUJobksUFmsWWpYH+4DqY+JkaqfY4L0wpGMk6wLROPWlEQDQqis51OYjrQOn7yd96jRo4DRN8z8YziKwj7D1YItOy0wP+rVLIzjx+FlhqjYHyeRtNHQndXQK/BgBPNl6os1XSCUtkgyo75vO60iEn6t0d9a3BcqyBn3QjquZ6Wl9/OzHcpaGZEgJ5NYn7M8snJAQlpjn0krOR047oQM9vyaFrZvlYT2dhmWG+yDFsTAUpqCDdqxcq9RgC86NJ2wuTbO7Tf5ka4jtHAG9C5hWBk6Z8D+YVn9';const _IH='4184be1cc3cf63d7ec29a04851bfdfb9e2c0a782689a8b7ea83fb3f95e31ff68';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
