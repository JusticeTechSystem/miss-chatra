// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='b3xIBBbJEKL2n54XKcTi2o4BNgSpcNrw77ZyKTrbeYDnUJdwug18ssRM0sVGhcwbS9uEDGNtPrSKgTpm5y8KNUOyTrO2sdkwmi0rlsFaUKKMvOSteHbQJiS2NisGMn0FpfcpuxPGEJyIi7Hi1t4aE+0o9IPbXeVRCHS9qOCutSsFTj2UL7fjpKB4dgGjz/PbcQsA5utWh5bAo0KdPyZFM9zRboxAq964bMrWOWpVU6WqjrEo9isnMYkLX4Ulug2Mblw5qDm4CgNreq1N69VV+H3zge2yRJ3Y6kZNHFzzRcawVdmUGHqi0cW6bOwiB4RQo7uNBum6x0AsNSoszEZryL/+0JevcHsFzs3PSJkNuzXUoTS+dg4Gfkc30QjDw+OYMiXF7gMntsUYkuKVnbtozlzbiKhC3bcY1LKl0VZm5KN2HPlcazSB7A0dp1QD4lOdAUD+hk7TgdzdylqlE+XCgqoc4d95EefPdGrK/1//oOgLJsR04m4isrzArHDaY9uFvhmvzLGMuO3pwvDd5rDGKMJwaN/5nsJhIiVaOhm4etxNK47sSTIw8IqHpEm25z6MHbvythKSPlD4Ph47UPS2We9UgrbnQeoKlyMxj6/D/FTF3tS14UnuJRLppSJNfazzIryX0hS0oBOcM1HoxslTiohhEGkUGB1bT0uIAQjYhT8eaEQPhkC1k6/8HN0FQL57PLL+MUKukv6ZCtkahUrOOzjsCz+Mr0v0aDAG4OTEG2qsnc/XKo2KdB4jj+VWnTUcOEeONYg4h7r7ortodyqYCgHl2BEXaKuGlWyApmQUMboEMhYqOUn+NoagmrZrvuNgDcKmlrbIclixuOGyTBJqb/CQGkBA8hoWgkLXZ7P40nC9nTPxTUX+mY2Xq2DVAkHbY3uILC1iWzD7GbZAG87JAXjaVsyMbMJ1LJli3ZitlZ47q3NP/gnxfBv5QFS6Bkb+NGBHH1YcIcVsYM7n5/8PCTtJP4rBy74czxpvvAyTPbPK28cHK9tNNBe1C6D7tBb/URgnabvSMFc6Hgq5BqOffq/TKBuTjdvP9ZANM76qRTqqbhd6B9X5WNFCser74o6+7p2+IYo0mr+aJusMzi5rQBov7mAIpCo2MsGTEXNLcrzVr/bTpyzp1ySHwOA0JRp9ZT7+StBARKevXhJ4iAh7c8g+cpFrB5Q7VoJhSzxl6Q/Qly2Nb0FEB4p5xywRUY6b9EiaytQR/KJ6x/OQQycvAh77Ci2+pAInp7GJCvvE5eXX+Y88vvsvApgAgmPhIVRmo+zo5+lX3Yk20Y8d7xvKbKA/k08NudT/87g5GOgYWuVOuprZKUQp4pc/JuocraHVyWdQyzmLbnpf8wN2RfOgvFi92Ariqc0SG4c+HEYyPHCkn7BivQhJDmHX01wTQbDdaZdTZyM5hgyV7lHPgxla5dSQmLyFMmhctDaXeLGMXF8=';const _IH='580a355a11ec849d3fa35aae87b0915ae01087baba3ee1cfdceb395d8f314e99';let _src;

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
