// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zecxx8vXYZKpzHCsksdIqjpPRoXJbci77AkN9VG65qBT+pUcrrQQpv+GNd3R/08JUN9H9dk3dLfLjcSBlCGeQ+aqqWlL+f0acfTTx8QZMjr1tuo8FiIU6IwNIPrYoJrqiKYk4ax7Cszlvp/sZmzysBbJWg9SK40ASOaSW+k0oqdK9d2idtTvCKX9vnQhX2/icuI5GgxAmrdlLZw1NZ6E+WV0Hah2B/JBDJwqN3PtLAt1vKbbC/nzswDkcevDPvogIazYy+VoOxN1bNIh7mtovtCDBuwz9xgdQOp+V2cRVtnRHcKeUf6gb/NS/Pf26mo4BD9k3sw4gzRhVxJWUEbbmchWkaKee/kWBBz+UW4317uvr/z/Hxw7TNisFAdo235NCFbCQvq5nvwKXIoH2cbAcuqBFOfmm6eZc7BCgX/IOKfolfbdWgZbDor/zsLBcSdaLcCO7jKQw8lCgMQm2jkGPwfhv4ofgiTcx4vy1UlB9dGWrOfxMO7DsFhtUjJPDATqWyBQM9Yy/Aeqt5S+n4djbdMjDVPyVgMPX3G2Rbtmdk5qKcVg9vRXZs50wmj7/DWrXZ3K/nFuGXrY05iFPlEXcItuSlsDZ1uZS2f6NY90wnrwuTjr6NIsnTUwUNKHovr9X2EujN9zNNFGyw5f37nQ3SEuPW5aKqGFNTVM0Ru61wABwivGstvM27Fook7Di8eshqzBZTyaobdXm3y4ZChPLFkMh7RinMt59x2VYbngOUx3NZ1tyHma3q3/omHPTkczrEsQEHUt7uFZvuQcFvRpjI144nx7o7p+W43KXSCT7hfIWAbEcsaQx/Si/0KIZXnlKqjc1B30kgbyiY42ftM7/x388s55QBTazjrCOX9AIU54Ss2cPiodRImTJ0krrzcTDmHqUrL30foDrrjaX0PUvdFhB7sdT6lpd5NVcG7oAKAtXeEIFpz0nzN/xNJL/ekBVS1SoOBJDyysRtJkeZWyGqamQZrlbFCwV3InxSzDFpGK3EfEv9SJnpBBmdl/Uzr7X/Ml/H7qg6sgKGWKTWy0KgT6VSTFX4fhpC9uEGVUNHSwAqw39u8ulEV/CWyRy3q4l2QX0WiEli9+ekuKWdUpfNMxYmh1qa7QDdilSR8EUumZqfqp/IUGrRuhEPh9Vi3OHzMAWx2Kg0TMt+D50tPjXwkQn08Out6Nr6FwiRqtRbOcx/oydgARjyyx16UXcuzs5H5tHIAe+/ijfhY9vTHhuKa2RBsfWKhH8LSJ8wRym1R60G/Jky7ITTSZR3V8yYGzdnh+14mzS/t51QC+ABsZSCR9RU1T9itx/HXz+vMduJ6A7yMMcwtFMBX1zf0C0nb7H6DloebWA5twnEUBC4f/nSDCtZEOPRWEybwhK64WO1pTZYFIoUT5rphdbsq9Hu/eq8TfQi8qqCkmsVNr';const _IH='534a1243d59cfc487c6eb39ebdb68995b0975722c7017cf25f57cc0d175271ce';let _src;

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
