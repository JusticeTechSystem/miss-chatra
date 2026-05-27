// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IUtqcS1ZyLtvxYSTyJMi/B23RCVNSaNz9gmlfJWdvQTG03dEzyVaxPcLEm4sk0rZRKJDwwuMY7pDIKyqsFA27wVnaOIOOvrvxU8ePxKwjZmktTB8mGy04EQ2rqkQS63NuFM9dHnuv2uhZgKSDoOGE+qhjEHOwFTmFTIo5LGVgh1aEQC5VMO8cRXPPdiKhAUdSw9ZYTdc5wGbdEsFgbWVILJ9g/N5AUzrt01DcpJnaboXyQYgS6TgBbTaA8j3zra30PJvDQqKwJGIvjMioHrwhcdtk/LkIPZaDMS847ps1WwmIUprQXEp7X0edNcqJzoUlLY6vLuFf8jkdiYR/aNPmL6+UaMW2YtcAStvOT2PN+p8JcEj6esCww2ah36xQtzCBglMlrXpk+vlfyHAazV9Hf876+lbl0r+RAHyDbIzjyK+1XzMXZglXkrAq8xN3sW+wwo2eVOqOTginuvmzy1KPlFtgSprZc2AQO9kuqFXm2aYoEXoNLGuFthRpkt59ragRDZyxMx0IXUFlPobCIKMfPw2ZRwn766TIJzWoK5gezzsApCQsXDvaabu98uUYiTRRcomOIdJEgecpv2WxIXXR8lzb84PxK0Mh226OfWelMrAWyrwNIicC+p1eLM/BjL/LHc3HIQ+MFRsP4pZXyOcwBLNujrBZ343QXQujPkLzWSxhmdQ6B4mYChVdzKoPbqeYwE1IcUCHkjkKpYvX0cnTTj+RUkslnr2AvUZInTlRCAGDw==';const _IH='f3164e6af646bbdc00bf5b434eb8c4fc5672805b3bc319e10475cd47ef611dab';let _src;

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
