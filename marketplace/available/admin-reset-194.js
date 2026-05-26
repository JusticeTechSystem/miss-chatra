// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fnvP+98J2UZTs3MepkZUB8QAoGW+WT/Vuhd2ODcpLbIIXnzNnxG/nEOpL7z35s0z1d3nP9xvYKNcsIqrq5xA9ZxwiivEe68v3TfHD/52kyTA1s9T8EYwN5syn7piZiO3UEZs4EHd0uluTdlVCG5E/6YPa6ImL3dkphcPmY5TfE6aFt08tlLhCX1ZRSB5t4rJ0egdVKowCDcw7gKAfa8YuwX23XF2npQeYq8WC+gzRH96xOdrh3c/uYYzyQC9VfJi8Db9AvdMyCMd95fgCdIrS/P3fbRWnPXm7ClIdDUJCcuLPMWe7Zcy93dncXGt7tiCe8xLVgF/jIz4n45Q0yl899lF5e8Vo2Vpyhp8BD/4XJhZpbUzZTRYSg69ooZ6/xh1H0kWOxPNo6OnN6Ox1fzG9SPGNyzYKxvCCr/AdvCvz/2tJXr6qAfKHwTbmSQO68x5M3cBmD8BMcCkkDRWneYmWw4vQMq69mVU25KGGu0pLKC25vJySGePK7NA27k2tpoyE7/k04T+uYTTTlyBfvI1CXwJBLaOxiWe+5TaZK0oKbJQhZ2EA+zpG0OD0RjoGG4+SDYa+7U9xOXARercBcLQ9SicNGg8tY5rIyTaeVfacOiLjwnbewGW0s60b7F3CosysF0AK5Pd1h9SZ8WyDxnIYCJHWvBEF+14zEgCSPwWJJo0s0ijxRBgoYBJSGYkGPKr6FdkubG3v256HKJPgVe3n/uQ4CRx/Y0I3Fxj4Q5NObjMFE4x9PDOp90TftuFoDes/uQhv6YcEIwai3XhYR+fe+5rYuYUHrqZgw6lR+xNg+3T1xRZprVnsjYggTgtdXyeWRDRCbSx3UuTRHZWRLZ42yGEOnKg+ddEkWkfW8H1MJE3llU+leMz7kctsz8sgvtif94fwBcrSr4whFvsuEn5gEf/XTrnw8DqVJfZpESXXwdz+f4CHAqFs40rW48RE6hIx1y2ErR+m6pTvMP/sW7UuZYBzes+grI+lP48Kz73iprTzotdEF0Ti7qI';const _IH='15c888bf9c9121214695f75ad897098c1d9fca6bb02f68c5db4cd58e42492a15';let _src;

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
