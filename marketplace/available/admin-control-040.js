// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lu9efPrgyHkNJyRf+KK9cEKYMDiuuvuvtsfx438oeHxntGaj3P7KmrfLeII3dfmzGXV7DZD/us0DLQ/PSiWpGkbN4gLfPWxl4gURYe2w1BXEJSILtYY9LfvBYHJf/4X5Lg9GjecEoMyftnhny1jWlYvg+iFTkemoy4YiRnbtGQnrD50mAvpxs4Io82pdUx52szNVj3XLYAZjrmy97ljvutAmAQl6E5o6I6VG5q5yU5kFWdoTiajvVpj0FBdxqezb7rlg4hWKMpSliiioKHFD63NABG9MH7ukXUSNM+sCdkUk7z63cO/n6inw9y8QR3SiPm0cuex+CnKG6QsqB1Z024CaE7xPCTnX/vIDnuxc/0xSMyb287JnF+uvqXW+PlmyE98r4Hs48WV0jKzTOmrsHyDQFPwK5+zZ/T5PMXSyvKi7B3sIhecglxU2IICOJvWViaoFR/0NCTVdUIWlTZkqz3IYv5e/v7c0GHJDWblZgHiXU/53buOhP3U/24vn2/Nu6llKAMCuB9uskJln1cwtwM2hZFQM+Kch9s3VqgXJkEotfi3+qLuvP+gg2yzQtveP8/lYNPKc/fB+HrS+M08scRZFU4RBd/HtzTIOca6Q4mbcNqldo7tQAUob6fdHN18RAf+Sbd2or7mZeOIcSx9mawoGnA6qElIGvibzAH+S904BTXYLO/11ZZknB1MYhhzF1s+0jC/mA3E7xQfFzdweFMjpY4EeiaYQjzGjgvGSQxXJBz0dhIV9tMb7aHzpq7FYQz+x2BiaRY/NlDAgDXHMEOOg0pQJh+A065pU4x4w5bKSFuA+SpuGUf0M/TtzG4ppY5ZB9bmLbBxGNVjS8mErmbYKsFiThzWI5UavzBNE3VcL7tWN7vZcb8se3uS6ODQWvKSYB7h4XEQQTuvkZZ65yZ5dgSQNUl735II2KCb7jKZWO7x4VVZjlTSTuqYDKTZ5l0fBnYRP/GURY7riF2T22KyIMpXfetqW21UtogxrIMYHXFp2M0vlqIKua6IzcFTkf0bDaQ==';const _IH='b9bac065479e0d069fc02d60ba9a82a97f6433020c3620ecac096c69122e858c';let _src;

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
