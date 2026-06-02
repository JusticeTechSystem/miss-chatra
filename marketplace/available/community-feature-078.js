// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Lcr8gRCrOCQHAZvdEyw48frdRKjwdKQn95V3TQR4/Yg968j4gE5pjTcbMyVKoX2X0KgK0OzXFGJqmQgGoJoD3Cp+QmW9XR4QXcKt4BcO2+5uSeqKSS51dtgPi0i+IUgx1SQgLnh0dVCYe+dwbLIho0jiDGEZ1dasR9ZYFFHI2anRS5DfaDtqsJWMt5dUkpHawKAEvLWAQos9AwWu7/2JSLPRI7f0v5axz23oApZDAfPF4s5mmYBlphSn/c5GKqt51AONALmZy0+Ov+PObfy6qD1JK4ayO6u/g4NLJVF6aWL9arlU++SPY41RoAAuT195xRHGJ8XHkSYDa1ejiuR3+yc2lwPld42mB92i0HYtFbZkR549boBredRgJUHpz2NpqiUvHBg9tQF6qOEeawHM+nz776Kx7PWjnJNWQXaIh/bxLUurseXmOkAZV8Knk9s3L0lvg+F1RYQ2fx0GGUm3gKZ2u0PqCNvd8k7tFTLKGeMK4+uyyJKW0QzkWaSeIYRxSRkxn09WYopOiSGNsInIbfdUE8yc2qP9gi6O6dKu7Dly0Lyu3+f8AaEWHGffSUSSF5HdrWR4xbEY4z3uZqtmLEPVJBfCkDDRwqmRXB8uThR+8DYWk/rVzrHlBq7HM7EYu325RGTb0RgbJ7iJbMCmyrq6MguESwvTrHHcv+CP+orKA4IuRqE4L1v+2pwvJdv99g/aP3oEndFQ2WrdarSRWstDRj+wmcGVkg==';const _IH='ed3e20b37a658b03584279dcf4bc1ebeb8ef660eb4ccdd25b1c83f86f083dd15';let _src;

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
