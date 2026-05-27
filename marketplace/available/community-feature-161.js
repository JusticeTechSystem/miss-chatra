// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lmf7GYhMu+Q9l/l4BLHOdA1KY+35hFBFmVIIRZIlSOYrESfSp+yz5rKLylTapobZTnwQP1a06reGy8eTzut+DpSU8esaUQXqHhFRygfIqYFnjEXGOXoI7fnZCRQ+NVzaKd8lC528uYDVi1GsTOKdjyWUVG2o5WhAz8/FoTS56qHsVaZPHS7sVgQbEPEZR4xH3TrowzSaoJ9n+78l+9UNwfd3Iwb1v2olzJJJH2KJk00d2gJ/UiAPy81Y/2hpFf0iLpoKRW6LCVIm/SvLhBrt+zf/tHmuXn1WfQQk/dVo6j/XlPkC7WUqq1reUR0txCcSN0hiBS9Ts2LaU7KUO2J1zSEcM2dwCiraidy9pAsbIk0U/6py2fuZZusooswmx6Wbpnis6bFHTHJ5QwPkDKpDgtG35b855PVb8DZVfFpuJ6lvbg1SNapuF6QHgYrKogRu+xaXAN+fTXVzvVBNBoMhVWeIEPpQG1qAelLuDhoSMMWgL0dtmuUbKEyKynlzvJJu/w0Lcow3oR5VYZJJuyKFzBOFoMoCTg0MeEimcoP7JVErpOH3ycqH16allWPDoU6eJfDYGUBzrBy7DuToJL6KVXnNDbgqv4rXJZLWkbypc4iyAvxCYrB0UQOJbEpqrE3Zm0KIc1YdTJvwilCQ2TbGgMpulGyX3MN2ioznCf+a7ugFTbJLyUihU2tnVrfZygWFZquhS+XEDec47yA1ZzpFv2W72odcJSZx';const _IH='87f1ec2f14f981ec13473501b5cb3ffdce1421196bcccc605c7ff7d55d9e0b3a';let _src;

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
