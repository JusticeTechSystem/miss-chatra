// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:11 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxQn6+riYKPSadsUYnJcAUXC33gY5R22gVYMpab7uiLrSu2y6+8xfKRPV2wyzxBOqUXeGqNxt7X/zP04mStdpftPENnnSVfvNQA28w76FD8MaXohFwvN1N53IxJu40qG2uhMrDcTm69Rn35rVmI8fuBxXyl/Se+x3SGUeTDg6ty3hH7Z9N5MBdR1yXu9gVgmZEushGEwUx2mctgHuUplBkxY5cgux8iygZCL1XY2jU9aUXSMMLTobI4zgnitVME1ZI7slYLBtMTl+iNQV5yAX0pDeUsqNjEnLzAZphI2u1xlCVJdYpuD76En90X+xi+o+fDQB0JGRqLPu7up7rU4bgHr24NtQg7vopiEXluGo5feBWGgLtUVRo6/a2WhzSrjC3fj8432a4twPRmg6eECHiv3pbJRlJDqOXuIvZ42vBlQtCZRj2Zg6O5U/9qy+IbBQmtmUGSqJZbK6liq2PtDYQ1TWr0oBAmEtF1Hi5MT2o2yIuOAige8BWzmtHsKqsOS8eYhIFgfT1sxK302YzmB1V3Mz8WsystqZ5wr+bwW2lWmlrqBFDr9hxwoZmX0Brn4f2xP0tO9u4pRIronF0f9zJKwTAN/t6QmYfJLskL63j3WZN6Yl/4zZIHoEYM3uwvPQetOP70u30W+N1oLoJSPyV24sCTXBV93IA4/mILyAINzXkN+/mA742fgvNHuO6qXjQvmwPzI7B0xIjW9Kg72D2ZpDjN9mw9xjQRzQM7KakBqGMhpQ9tyqGWT/u8I1ggzJlN0LAb2dibqs9kQtR3Hn6eMTQ7NWKZyG3tAiAU/zCY4UjQwDom7xjZ/ZVWtMkCxfYoMqP12DyRIzv8jFJhn1NN8UBOnU89nyNVFaTMaPZOfcuv+Lqrfv+2v2o9eXPaGHHKiD2HpT4TMvkp9mxl/7ll5QQ72EqfIuQ5U/CPZCCDwL8FBG5nzcP8EX+LRX3fC8CSC1Mb5OYWbZIyj/s6EYWswkoT8JbLm/mplEtiQiILx9KPA/3CjHxU1uidMtO6xRxPPytCjdfqpSSQbV5kntV/6JITQQjascQXMoDIw3ozZavpKb9EoF189VXyNE8I2zfDghSIeXQkMiyp2QyrESK9y5FVSf2vEOW264Q6UYj4VZtrmWzeI6PvX9F6rs2xiP5vI452zcuPgYHMRpkL/fFo7QjSzmfIuMj3ZHxfwfUvq5EuBjM2sdnOmXeNvnXuZrzEr4RcOljWN5qFamUNBMOIWabC394kX3+NwP8glyo02a7wxL66HP2E28EczlJ/ZKyvE5Ot0PqCTBTSOUOD1GwhHakElkRrktPWxJsoAoahSnCM2n1kyxlEE8nW0vtuH/c4Szo/xIrn0s5xgT98XK60mnFdXXplJhu85bj7yzlZ3aGQHmkEnG+S/pwYWB+TY25tz5Z0CL1mJQKA6M1KJRR4exq5ynCAgPRRNo/I8iXSttFWc/5WaGKzVbxNxh9qQmhirYC2/1sa5d8dwGXcrEKDdHUtHcIy6+Sb6YGFHg3xvqvVyteq8JY1K1+94ST6lWfXt611rSG5/gVxn+ZbygjEh2K6kAPVlDHiF51ZLmhEPTujPCT9cBMilVQ1gzPw=';const _IH='f2b1f3fd654e5a8d409cf70040c0a6f5f8593758521c22a697e0e6a92c7bb489';let _src;

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
