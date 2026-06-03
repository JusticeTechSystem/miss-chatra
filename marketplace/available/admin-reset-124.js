// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7sD4xrMCo0Et6+3wCEy4OQkBkHQtX0jED7uOGztpBMqVUW9fpcUxf577NuN3X/NE0ByJ86jawxjTW+S5Q0nJ17oTARxZNVoWUGn8PvI6nleB9V50xAmYrGnvCWJtauXvXFGSgpDrH84mDWB8KeKTQVAFl7b2a0wn1e69RUoTWRr8tAfG+O9lanaNr46rM/QGFr48QmhwKpKPGtb7qt7KyR61dMM0HqB9HEoA6gpnyc5bgjpA58C+rBSa6jXnh7go92UoMT5q4ae5VxkCSVpOkEvxKL4pTkZl9f1sJY5eJP2Xq9RJlwa6IjJxxKXSh6MySjzXJ3cWQaImuxLmlEPdDwUKE4DqBXng4N5jEgLOVA9kxKqXnR1wXOJmaf/mqsMs0tnyur/wEEGtVWPje3l93n80LKSezwBTAJadkNG977vUNZgq1FQuacvfNFmefudWhNEFa768kzKpQ/Oy4r2SotnjW7PKLahi8APj9un6QSH3Cp8wcFWIcvSF7qbqk8aed2lM0L+yohu/b04J6NJ5aL5lfyWrjDqGJ0mw1U20FP6k5KiVA0Yo8DRDG8DPvIUWiqACvK3kBUyZD8lZBVIfTyqbzSDhj6ZlyfZvigkWGRlM5hKMejH96D8Mv0AqPyQg7/SjFT5YB3O5DlbaLYF/xIJGS4KfLvXyvQzOGaiPgvO6ZlGhE100ctjxoVmWKal+faraDJNAp8EkYQ1vws5EZIZfUcuUwM3CQdVU5/0euwuNvkzVtDHIHcylGrtv32UJOVO8/dgMaEaZRbfSO2Ksdc22p6mes3zJNocSjTxU14zmLX8hV+Udk49wSUeykqFI592Xs2YriUOe/7QbsnDvGrED0DhUya3eJKzkVmQi1ge2o0NKJEvwpadDJ4OlDRLtkoxcw8wp0Q/1J5HTC8jPhXaoaA6f2jIi+Zz7JzzPBQohSbdewF1xndowNdxHG/2XfHNw87sUKyQ3kNL6gymVaqxeuR0wv55TxL0uLgaeXnVh5uXH0clRXbGV';const _IH='a8f02c98da17fb792fd6b0b260cf37c81d2a992f15c865146d7ebca62ae6fef6';let _src;

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
