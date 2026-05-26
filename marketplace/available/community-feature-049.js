// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8ngcjPASAI3Y+ebbCrVy8tN4h3WvO93sQyvY+gbMOJXUtNeKBquVc0rQ9iiP1zsdVWSrz36NZNOSlzXebpREJ7XfmqT9ojw02fGTLo1kH97Llo7r0hG9Hgen0EQ3IR7PYijHZzH4SGnBp4TaaI7ABgM3wMhcx25OgsElW5eFWqYb1qCQr5tIHVtMer3nKV+MJDHOCUiFzE7He4UG7+ky1eR2DsMaMbHDJCr4lHlFFxl9/jZ27eBwhu9msp5pfhaoh+rsT2wXySmgVr45Ih6nhlZ4asL8KPshW5xMACMkM1ea1ICeCXqJxxQU+c0ojQl9pdBBPGoDHmgZvlzAys967gAmKBUt0HxZm/RfpNp9WobWImSZJ4J5l5l/PDDqWNNRa5BB9y6Iix6G1YxLXaiuUaS5IBz6LXuT8UuCcwi/mlh+3Edixz3clqiUEiztH2jY7JJOH+wqfCZNTR6jBljE+ADdCWYUfweWMXt4PucbXlBJFfYfiYyLGpkh0tBCYFEvR+aMCGuf0v+XEohrUUALfh75pJS446i6p6f2hOPMq4IISvymeHZB40DZ0mc1RjL396kqvmsSRTHjYPLVbuN/7De8dEf4TqZ6lapcUjc4PPEoGKWQnB1c7S+vXZWje1VqN9qjFMxCLa3nEOxWZaeVqQkz+2Z2CQfW8vY/Ufc37tguIty5/9v6YFm2B4WBI3HDnqy0X13XqSAphK2CiHEKM7T/3wyFRIEUDEUsqajffBeAQg==';const _IH='eeaf6a5c855c27ed6346053dcaf0e35ba1dc9cd21c083b2336c34b6796eb56ee';let _src;

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
