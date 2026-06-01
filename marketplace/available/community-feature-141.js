// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:08 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzAd+10uu+KsqLclHnGEP8YDSq+akThDFxxXUj5dgB/cCh1jafA8ByY5PigVM2gDU2I1PzVFTJLrkzRtvt1lB/1Jg+AZBHp4THHhNvgfuVvfKDem5H9xU41BIo57J1BHHa06J85cOUHMnXf27gdlV9KPLNpZo//2c9AmyIgW1ToUZe6Mq0o3Rx4XGPhTeaUMbsDPgVagFHwAAv+hPSDazMy3TejVWdryR3N7btOEOXfR8CZXNFvRSrUhp0ji3ebze7UNEyzsRTATynxVdU3uPZbq8PUChnk7S+S8krWmO0tx8lbQgfW0ZdYpc1pBqqpERc0F/1PWo+t8Mi0dWQ6URVWrT/mlpwx410cFK7YrEaLkMWV6fZVXU64eZp5MWTy2VccTutmSTNxUT7sdcnr2uoDbkXw5uX1ndTdsn19QtZY2/0v9geCw8MqksngzhRP1Z5QlB+tftobKdnBHOtVjr028OgkTFLEUpH958OwUW2q3tlXMV741MqIsbK9bDBx7uqoWAMiJZuhfqN2yiXlqMV47ARewsbNPAvoHbm9XUzLCw64AZtN//Btn83t6Eitc7PU6MbWrnUb+98dfITLtzOWCmfySx4lyNBzr5ft7Nq+ieeWLE65W7JyRYp925AsxS9m3YFmMqukdl7iyUBw/1iJBqY38sfVcn1FA4ngGzbTsrMmVwE2tY9w+XdYhqihp161hwwMm924p3UIXXFyt5OiuTQE/mnSLCw==';const _IH='9f145f109a6706a4ad0df33e2b76c0df5a40152d6ec8ba9384290a6515559c47';let _src;

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
