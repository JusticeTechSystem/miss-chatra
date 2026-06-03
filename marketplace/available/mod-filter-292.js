// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ozZ3OMXxcvHimLd1jkodrJxnMC/fS+/xpnHJAHelNx/gv7NqEff03efBX5ejSZo0TpjO/L6aEfAinnXvK5/w5K6ngD/2njVxNq2O+Gd9LD3Kgdq1+p4XahmjaAWHWSjoJoYEPFHl4XpaBFBqTOyORylfke+7VVHo0JrxbARAH/NArX6gRbfyGm9NYhMwntknRZ3rXfCgZFwn7mmNvKRhjGZRNBfE1tnHLQjGtxCCNSd9piL5HOOp+CpFK6Qk/Jc5cflbiXgI/eHBsmUYe0V94AoPfpkccTH14AN9M+IhLrPECLzz+6i+nxMlcad+Yr2lLsSCEpc6p34ao0kQm34igIISrHicyKDT4t2jl7/0KQhOwZoEcdlxKh0hQCVeC8DHiEXdqwHZVR88Iv3zimSnvzUrte/0Vk/fXgLILwTqFqdYHuUwa1oTN+NTXTRpqRX1+mAjCqSQPkR2cKl8F2LHUm5BdbjyKLXgSvYJ1g6KcQXW+VK6MHBXupVdHLj7egzNgr2wNvCB7HQ9D5jbLX6TOHLYAlvmgyvRI16kG5oQalZq8JWbpl6EYSshc2/zgVnpokrxyctVKgiIyExs7R3DqOK+b3qzZ7uMhG9i85XkwEFeE3/xMViGojOwbkTg951S/6wqpGfgUdFC3loNS+8HX5Ys5MUwM5BKSEgdgI69Jkkuhg4kgfWvUeA2aW761Ft36oOL+QeZS/e6OjMu0z4B3ksYkTzRL8R3xvcDItRQJatRtM52MY03mfhxjf29guKQ245UQA3GtKXap4xNDvwV9Q+OpwmT0vNbo/lf4ji7mg3dHSNoFb/aKfmxVrktxCnLpKBq7Wvsfgce2K56KYoUw3CQuvvEp+jJlw0DFY8rXD2a6TRU0IP7bla6J2+gldm8fEXWGaW9ti+R8ihjxEHvvBj0RoEkExGITJlP/vgtckNoxZ4/rpFkD2UvCMMK1p1yC3kjZeLB1NLxa7Bvo6HY2UqSKueJRivmDH7fDEl1uEZ6OPT/b6r40Bki0QwHqDHIrgWx/mGBg0qrwPR54iLXk56aTvdlzBCma2np9raOq5uMdVhI1ajfqY5eOEVDx+n3d097/ecTJPtRBa0H6eaF6+OxOp/pDnQ8PAmHZ5oqyWVsiHFbKk2+Zu19YPDB79/YnDvHVeEAu9F8QGbcxhVZ8KmUlai7ZD9SwbBcVunT6SKntymczalnMDLVu4gCXMx3BpvHpEaigBcNjU/oMDFnPZEOtdlZF4IcRW3v89NO39bL130YdqOU680PBtRhtDUFAkVGqGjIRq0g29lzZ3ihP5BVqdXvFuw+bos9TKVCm7f59NB9LtnAdlgMZFhZPWOB0mi+qu4ZTcR9Gm9GDAocZApepHP359znSUT7peIXnNWQQhOVuciVog==';const _IH='ac4262993503ee981e44c928e9b80b8ec4d5d9e5d6846b29b7e61dab32639438';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
