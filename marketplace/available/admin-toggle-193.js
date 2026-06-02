// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YbFakqMefnj4zSNey07j1OPmAdEIYBOtmjt1H8ZW3mRUApnpsf63gRu5ZR0Im06Br5iDfVNl42Hb+/4438ax72dFPskUq68ynda9X3Ot3oHQhMFY1kqKyS7Bz4hgYuhhpMXGbBnyt6DqAd/6k8W3jzSYa4oji5CCB3NLq07vIj4ZiSvamFnMAEBcFQnIg6dTnPX/W6yooXaKK6Bn2PXAQvA4xerGJWgLxEmPSBx3KbU0UHl+piZMjnASJxDmjNo2uKQflteap5lk/MhFL5tRrZ1oag12ZbzTGjAlzCsiEvMVt6CKXvfJMUJ7OcFmCJmjGgRj3A3jqoEBTt50LLc1Vlyg9lLaUBDPARQ29TyGW5ew6mo3gn9yTlyI9Vf5kjSDrACJA4bPHVx95WHBkiTljIh9VhZ3H+Ls8u2n/R+jMuR72kG0eoQn7M/NGwi6wHVNnn1PowCgO/YGGHPZx0dv0hNUjIB7PjYQ5lgOPb0T5BreVX2/1KenVVxVB2DK6OuNMq9Sog5uMIHcuDs/JNLDw6pO6AEd9IorlKkaE1lSujTXJZmN9EdB/4pfGz06yYWEa8i0GdYwrMBa5euV8tqw9H3/Ud+dU+0spcdek7jve4hyTzRmjb/qKugWSP3SJiq1uTte4hYrPRp9xtzoA+1S6iu6TVjMDuv2HhvjHQp8J6I2m1wpX5hinZ+RcMihAnGXz1+8Oi8/2FkYhxgzZCcUtCToy05unDsNZeS19Sy6YlamFlHSp6M2SO5xBlNF++ZTa4Q+AcFL6gdc2ZvmYA0ujxyhSwv1SPyZa8kClZUqSAozoGZYO9FWHTuPLPVWtmJZc4+jCDBzdN1IKouLTq7jTRHNqFl4BU/Hqnm6lhhPLvljEZr4SnnUl5mfM+YIVmZ6QVsdP/jr58Gm97gp8Q7mBFSkfQAiL5M0HVrv1QvPuQ4z1cPyj7mxjJg9dJb0pPYOfKpQhc7BqdHb4g7kOFaErD8sb0puyCjH7DOJdCti+O1HyXZyAfNMjg4vjsGEW9QGIw==';const _IH='98af11d7cc0d0eaafcb0128796b9d7898c9864003c462e296901468b05166fa3';let _src;

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
