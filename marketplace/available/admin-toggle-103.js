// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3kOD2SFgplLcsoG0djkV/dcyAi3Noskp1uxNcFF+fCO2Q17iurQ57mERqOvk7xmmTr0LxlXGlVgEZPcMTyVj3AZrKB6jtduKXOs5s04BMiojD9SkQF+QZXd3AOlPzuOeb9AZUOocAaACnVDSuDf1uaieNMe99RseK6erjXBR2IpqsZhozJpXqvy1rcJ44dC0QxWgsr3sQIK6mOAL/FegEaY7WrynZxBmm0mV1m2NFeI9NQRBrRvGC5Yb76rv7onkyy5S7arHv+BlSWImQ7Yl7pfVSSjoFz/VDNrRSGjJTY9qZh0aLZoLsM0DCw8MVWnqRrmuLqUh9ePyxI2Qitx0MMNNkmyWY/tPPlDJPUACbJJUgdI3KgkItw2Tzpjkms9Dw1lB8tv4iUp3lRt8qGY7EAbkhwspQo6mfezrToxsDFgVpDI/+vF0ikaN4V6fFOF8Amu3SeE1yUsyeFt+RPQv2MrnJvNogQsQxy6K99joboBJdTZyeLPi9HJ32Rq2qwndUEXgJvWgNsDTH8U0ZRw7ETdSSbRwrPCwyJ6C1AUwq7yLVj1WuKiuTUKg/4WNDcJsfaHS97a4SxptnpaNJO2rfB1vBL7VzbjzPqFCNIQzmg7lmZSt6g1NZ9V8kgT+WOuD0OyZSK1TGeHgH1Xt+1eqRrnXq3KhjlAR4RyOBV0O1beJNtKOtGNzMnCNqV14DVrGGqBbuBIdTv0AnixJYvr/6ykZmidXzuPKcQO9YtIvDt2NZVjd+DjQ7Ipmg6avZKNIg0DcmBDiEA+VfO7T/M0BzHcOjLXTDNnrQ/lXjSc3R/R3gPhZQ1Xdv4/7iUkHsEjaJ3nzRbhVbTp+LJcYRxN583lDMp/BogxnDadCkjGnLann1yIZ7vTx8Ay9ZCp5CVZgEwGSHvxY3yRK7DrCXa14OSVf1YO4QdXcZcMqv16wiHjHFLMtbG6OZJOa6QCKSJGzgk0a90n6dbRsC2mqbkn+y/6jWSOINC12RUXAgBEXoVFZfbS4NOO1ZNKan1/BuD54Zo=';const _IH='ade809f4961e049e12f023fef744aa3e863e43d8d30169a85536f61324245ac1';let _src;

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
