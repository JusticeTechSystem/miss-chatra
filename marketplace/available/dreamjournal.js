// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/x77uwqxy1aqB/ilpk/DkxebtPikyKNQ3wOyvfkf6Lr9xSoXeCAyHLA2lBhyKFrYVFfHEzvUz4NrZi0q2MbCVHTpzi1cX1hsSETWYTBAbLyMPcTEm5AjGcdcAbtVz8AIJqMEY3rd/bRg5ZTbtafvpWnzMK5qkafWoJ/aEQnobiPl2KyzK7ObwNeRYllNUhDXxjrGPNX4hQ6YgiDg9dxRbPlx/r0EpAolt/kQCEZEuyrvP0E9ZQrpQKC56aSQzDFDJhNAvfH5KjQFQ2yv7RI4yr6x28NrmkFzCchQ2szA/YAXOq4JiaIIOnF2fG6wGkQJgcsiWH57nhxRsfADuXjt6xAkG8oz3FfneFJ91zAm+6NsD9lBW2X8ChDazDbllkbM+GM9ohb8+AvDmnlyoN7Um7t0XLW9k3eDBBFT4mqKz3e8HTlCV2F0IsYgA5yE1E7GDynlfGUqjrw3U8UNRuyxXg4I32gEzuoYxPc0ylmNwEa0yfgDpdhzpeG2n7Ca1Hqe1iOaLGCiPjmnbC5C5zZ1vgWbn1q/mBgQbRYLS3GCgM+TBWQKcnvt77AjGLZ/aQkfPfs+FaAsUi0yNT7HMLbJ6BZaijlSgk9RKsRUe9XLYwSnuWlwn5HHNQPWEUY0LezG69tqlvFm2fn1rHE0kNilSwh5qs5RftQNsHgbktr+kX2oITp30whMuW9F6wceJdw8BHoGohaQt2EFzmDGTMbEqiEi525m7vjyerByb83XE7OpbcQ7poZLiY6Tz6i3K7KiGyysbMtmQX3QlPkb8ysVsO5iNfjhPiOt5veoh6GRv5T26FM7s6ukeSvPDwCbS4ACbOpB8PjY7y8RGJv27zlIyYGk24+ngo/jWv1r3PdMnA8pY7xK3V2xs26kyxCJVge2qfBaQqeIeSNYyyZpwi4qc8VCAScr3ejV69+TPbxAWaXcXQoj/Qg/3pvguHSk9nWTLTZ9mtIol5Y91nrpb+CXnFjATnLEtckAsR1aRIfP5v6aAaAymH7ZcQY1fH6oYMgzl7HL7vP8vND70oFhF68TPhWmJGgnz+nAXAVJM8QZM3tUmJSCzjNtsKTrPOk8t2x21nLwdp8s7Ncdq13V0I6jvOMMZb5xXCCrVnUqIifoXVswvSMs1zccID7hRjS2vBNKkcWJ6v7I9ALpW2NOInf+XucBzI3kHePU+FxFW1CjhsSQTqMSYGYG4f4cWJh4PV5SCdeoIw==';const _IH='a76d4feca362dc6b6f72751d421b2bb024d6b669303c8e9069f5353f25d48467';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
