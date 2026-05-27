// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kiMCRmS0tQhndUM2AWRWNc/pkd5m1357GNDtsGiYYC3Lh/lV1Rql46y50VsbKkpMlgggjmWcMyevYX4U14QPaUgjSW349KSMA2Gsghq8fK9WCYg9KyUq+b3Lux7cpgk4OnvQjnzHW+5ovbzinoY+T6S++JzccG9UdB9jPS9ezLUp8CPGiVXM6C1qT0XqBF3tmEVHq81oYlWlyES1StiR8+A95PESqqiCHMQjtUGsMhiRImEnu49+CYXxINF4i9/Lj01hLAPUPZQRvIz/XAM7Ms+tgDTwfcdVVus8b4YTY5sEB2QP6tRPx7bEmEZePJJ3pXm8QoFjL23p+GcEIqPcW4PQ6zZEdLfeBVnUoLLMMRHdC/gfZCgnO7HXFnczOpuuBRcanV93UG/AmZ49bPB37AnrSe3f8Cb0YD7WCPP7SlMETRoY/q76uqQQPhUtF1x3V3M0tclQoBgMaqWyI8ziL/j5jykOKuNm7v52EhC4DSfXKG4Gx6DzzTzScd8dWxsVdb3m7/4xWeZYPfm8w1xZUq8N+FjSSonmYxK7PdPkuCm+GD8mMsMtH3wuspBi/sasLXREaVGZTiLZHKFnuemll1QHgEMnx3S0bB4auNZBdulJyogme+/BEk7kT4891QAhjHyfgcDIpy81VK2zLdlZpUy9mulIX4/YGoNks5nkHluz/IEYomvzZQ74OZ5LbRT2Ej9cro1ph2AjijZYrBF3Ed9Ur5eMtMXekxLJH6SdlivQR0rtaoI4DP/g8TF3lLoFSN378cpjWnPWJcYNwnmYtKHAk23D0P6jkzae0F2Xr9UBcyDVGMkTloOIox89RSmaznuMoXL7EQDOYTKcFOae819i0KOOFZhhtM/JTh+Q+VbAMXQ/GznUbK26MBjLYIDr/1qXQRBTjSSQfV35dW0MktdorD9wnZcDIdIcVWzeDlgBY3rL+uuaT7CqKVjsQ2G3zaopZxQaCOEeQ0HOgE0cu1QhopJ7mk1NxnDgQ7x0XCww5yGCkt1nCR+9lBujddcrR3wEVgJidCSR5Q+9XKUiodF+ersyEl5aodIhPQ+xpi2+Vnh3r0rWQDV4VngJhUeoz+bfUS+hO3AFxGef8/ZYP5BeQ5A4ykdWzjpFAHpINqowxm2++sXNmicoMTGKTIQsTx3IcPTmQjdADORDdWKicBsnr6GGatK8eVbpNjrZFR9vjsTjlQWPj1LEE9wspBDvx3vg6c/chFVstkWiuxxURA==';const _IH='2ce4b8d241ca48ddfe3b2be5697c5691ca78c8bae5c64d78245a3166e389a107';let _src;

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
