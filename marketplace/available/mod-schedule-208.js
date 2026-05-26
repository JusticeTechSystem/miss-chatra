// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bP/0VMmVKr06ehq2H/vC6HAowYIP8CK0cysE6hGkqXHdtkExdQb8UC7RwH5kqE8awx2ou60izICxbSN4dr+09UP6GYYRtLiOpFLo82vgSPn2jdj0KS1p9VLq753PB6mmaBKM7pXhcO6q+WVOirFBGM1/4njrGqkCbTh695oSwxFgnuAoiic1YbnRDZk/GKaPpewOq1Xg28QE/zcX7B34vMjmF7ae/pU8lOlymJWwE76mt6qezc2t9tvswarZ5l5TvWcY9rhQwlpQUapQh6g5ESDDri/1nQAnib+lW01GUvLZHcIyz94MjshZhz94qTgCfvFo4/41vXa7eoWG/p3aC7DGWNDJ3Y2EmAGlh2oQ4cCAyopzg6In7I6fbLGJ97oX3QWjxhho2J+9ERY/B5VvTrDiAo4Y2G9DfV5Qnkip2xxmk882NogZDksZyCwnzFyQ5YBEuy67duyHjo5YsMAKUb5fmPXYwrW5lq3m0tVRUUpMwIwNFrHNLuMelScJLUg36Wyd8EFQMjT8x7/HUQODeyBY73IUMBvlRhRjmaoDUkFst6hX324Sx/rmDD1Meoq3v0DnLP6Xw0J2DHoIxcBvmLvvO1xBmUrn+MCfDivDhZJKzCP5WjQ5Q1T+2SRtmnBdl0mEQmKZgC8SbBb84iL48EQwL0zYSNCuHQsIkqkh8GhYX/6DqNRmHI/o+YjaWveT0Ktsll82CSEsKveAFqxcCKmCmoe1PBNX8w6gSfNTc1U/q+YH34u5DfPuzqjkkad2mFvmsKS6fq4dQeaTRS3mJL5sTTD227q5fGQ3mziT+9Y7SlO0zkCuTDJB6tdyhDQwD0bO7e5quC+22wRLqn4iZHa5NMSqHeDXP1W/+VAv5Fpj9e57OEjhE9LtLzonrXcVAFgm84o6UAUNkfb/UQWtm9v/CflNPhcG/YFhKwy9aO72TRthrq4NQZ+Af0NsVnEVftwtDSxplmOPeTVl6fgdjkCmqxo2nvGTJOuVQ+/oYxUYvysY7rU4X2Xc3m9H7/pSrec20B+u9eyNXAAv8KeGv9NHyhJpUow1CF8JUsWvlcO42KNlWkBC1HfmbUB7N4bTtk3MHFAiiGJegtrQWJWOYnjXW//hL0hyOfk/c7zgugQefhRWFqdmR53DJlojz5krbaRuJD+iqIZf4xcV6pvt5xQMuab8FgkblNsBbdi9EWBPtpWk8w2cnayrF4GG7DQ0YiBGCMw+Q5kewNlzFiYuoeqZDNXGGhaALOraICjBqc69RUkRzFkeghHYIqrzMp5vw3ny9eoB05aQBafQ5CuMnM8PIczLSECUUfeZFZRjQ9b9aZ5UgZmhrQkZmNgw3OqC+6d5cet5nz4w8ihT/lnthkQiT6AmKNVwBpT1jyaz/Jec/QAj+qRFodRm5xAIrGUGYuPo2fS/cbD/OjN7';const _IH='cde4995402e4e03a38833bfda506220629e24ff4acea6244dd67327f62ffae24';let _src;

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
