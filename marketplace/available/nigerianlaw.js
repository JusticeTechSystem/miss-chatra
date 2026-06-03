// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XeCmBPe8Pd3G4GPzb2e9ejybfQO3WkjNIQS5KH/BxQxPheKEDcyLXJHzz4+u0ZdPwj+jjKevKfDWK0assF9oEoso2+irNxJ13uTJGmOCk4odCDXpV2Y+zj9Hcwh5h41To1CMT4ymO+hR5gY3ZLeYx8WKKi+RbmscfQwH9sDcgZTt7SSQmIHyl/ZROpYDWoGh/JK2zTgjY6C2V7ud9uMVJFWh+zFuGkpnaAiEXrpRu7pczNL5N4mQ3nfTjc+ZFk/gIfknF81Ih4E72fmH3e0LVk2sRbjmub79qMpVA99rxTEPP6dd72ktD4w3Uqzw2vy07jAFdRjzcKO82mGIgg8FV3Udu/gXq/0JabC/fo7pEJeRo0atIxxQno3GrkV68lh6lEM8rsWue8KXYKJ4uLNf3CYUpI8PlZeYvFQ00TEHYtrqigTTgj7LwGd8s+LxEbRIfvKWrBYzgdAoHVhZcr5hGGvQMsIBOdu5ByorGHddHPktbRzQ0Kp98nZb4cAXbYcEe5u14pjRaUdYtbzo4VOqLgb2+09g2RVA8nvdAVhFSWharCgN4lbm9C/9tQA1pfYd1yGNUuxRhU8sPta5S6f3yZLpvdNWDb+YbDm/TExLIAEw5HhDajE8g6VG/+LeqvDJETNxHU+V7+/3j3le5eO0plqguvcsSSRt34rJtlER87rZHIOwQGjU6JMIl57FaQeDygGtFUgOdIZViJLM51iLVb9C1ZnjnpMzj9pwjUvKR7SWCcKBFK9GRVpZtKCVssvXZRQ1D1JiEv9IUmyPzqjxaBA3A/BwRO+Btc31zpWTdJJXpB613vLhIWXrZwnNaRJ1apCdprd564yjqOivn7h99qr2TgAB7bAfuje+ggUmGMxAeXs+3E5gL5YyzwdFEOR95DkRmzpY+0p1gDsB2WRcPVmgc+i/VQpGk756qyLOfHkRn3R/z6/sOY7A3mfB+7927RKsD3w0ZGLYe3l4O7G7PBRJ59ODFqI4FA62AHReZ+6F7FAV3Qgzb6JySiAqeHp+qK9feXNcIK9szY68dCi+JlOpxAvBmIanOwn4O0Mkmb6AUx7nKWJ98QrVxysPqacdgb4QsjkPaSBbWOtAeB4jvEn8OyE1wHY56fr1bobA7wq/I/UjhBhUVylbNG5WZNccVT7yrzt51ahWIS+PMj8/T+Rj3OFN4/wB+A5zxvOp14ZqdvExDTgar8gzu62Mw8/CZ85r1LkA8YN0CA==';const _IH='63ba1dfd7cfb9abfbb73948eebe86178b42dc4fd4f3b6458e165d837d4d3f6d7';let _src;

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
