// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3rj67U8go+7Rl8HUySSsaQ+EidNOYXDM2HbP1JdS8uIvaYNZpyDMyYTMryRs+rHnU5dYiv3PdvEquCSIdXAqsKjN1tXfG1asXE687C/XS7cDEWf6dy+qPfE0Stnd3lr+YuI1PX9Mg87LAnh73mgDtRr5vasquqeXmCt0SSu9aYSEAw5jsDVTeDdM0YbREsWMkPyosCOJhMa2MhckZxpDnyRjhcPeI7DWCQwRSbVINOtPgQiSYmm2GFR+qlpMC2yyJlLdJMw7jsE6AalC5sVc8yflzSU5MryWwkW0/Z4B0t3CsdlHnEcY4AwAoTeheB70kFOe2g+fiRgxL9quutxmS3qWf2Jo6ZslfKQknukccTn7hE7MMtjFcUR/lMOL+RuYZIhX11zxTrtf+UZaYXQrUq/l5CKQCJ0jEPIu4hfNI9XDdq/QhgM4f6u6AErfzXpDhEiyA2iMw6QMbzISq7DI8sfzbaEFLn5sLMCd8k3nG3yh2FAUda8VGuk7PrFKS1eSUazfd/iZjLmtojg5Fvb+XKwkKmGzJX79ywgZzpCW89AyDtdDZwSOxTHgrLxNT12WiFSz5LVi3bj9mhKB6f7bQIThQSsIqk0bqDt5yBrcR8oqPm3VRRPtRhaT5TkWDLFA2chbcv63zYbz3koe7EO8nD192mNSW9D/Dr7BdJJGnaLv3c9JAfA+5arzTlp47+zVD/ZNKke5hBASK6TFWtaNw3Zl38Er8lr2JEJPq1clNpL4WC7AAs5rDtOmKB8BbNsQbqT47Y/qE3QitfU9EHRb2QL4y6LrK+BVVurzj/rD/8bgBAZinwbeIWGX+HNw1gEz+5wCfx0tilnGGjP6kdEf9tcLrMWI8gQ2t+ihK+1j93Mq4jWBx5wOCxCnKXoclwulXfBL4V7FRJo5HaMPTPxtNV3mLFRwLATrx3ilLN/ZdIaH1mvaMmbnH9wzYe5/ghJHpSgs4mn0mnvGNGdYU+KsjdTRMZv2dRMViFanGhZ1X5tddJrlbYaAAUONs2NorsqH6E/ShdQWX0k/y6uK/vg=';const _IH='d162233830a26160406dbe4b09ff5a68013ad88ee230283e1ffb94a00f1eb3f3';let _src;

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
