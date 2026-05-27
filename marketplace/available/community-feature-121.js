// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nwoS2kQLhN9Odd3I+P1c1hyezGdhoqABw6p9HtZ/3jgSl4l3UbK12FT2C39azCq6YU89CBqglMjp7I7E541QHcz3FyXFaMY7NII4ueqIyh8QVfHcID7crkC4jIQoxQOgJiFpzea+XWTFMeA/VCh94cI0BFfKekV1xIP7VLn3HZ1GlKlhn4bdXcvX98Jv1urXvQ0t8uZiGc+hBn9a55C32Ad7zTRIpTb01ONBIC9GOypthZfRPqFdZ7I/liWjHX3qSio/r1KYb4l3IcBpcebUBLV5jzYPd21fXtT/RRw0wBLTU1Bw2UGxfa14DASpkUy6lMSRFIh87pR8wsCwLXf0Z4h8q6j4utCCoHnIVBie94uFM/CS5bRTOvFjnoUUH6PlFnFIv9yfK/f4nSFeQF+4WA15hLryfmPxncA5z2afZqADvndFLnVRLJbPyjPB8TEk6/EvlW/wN7UNkU+y2mxTFhxWyzPwphz5OZ+w3cmMD0HuamMpNI5fUS3X46magSrus77tlsXHHyvxHcyWwJZ9s2l5yg9M112u64i6imLhbs8N5/BbWjcEOS55oqv0N/7hsU9VO/4MgBXqgz8u8OkC3acfbAjUnxfo6MDCpF7LGhS6zdwBd13w1wmbKaVcEpwWpF8QaXmeDOwoDuvFOx4zRGxlrAZJG8twLJpyO9EwHl0u04fgQAknQgyl65/YGgwPHB2Gr0Nk8lC2OnjLqcXf2oFkq7JHz+M/';const _IH='fd5774e042b00d47dfc026c1065fd3e6cbba912fee5c4f90b9cbbdcf592a7c1e';let _src;

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
