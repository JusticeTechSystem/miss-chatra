// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a8smMvE3YXIKOVDdEzTBBn5aRWJLRINIqezKddrMyZ9GXXfbh7lJ0fBwVy73th7dewYlDaKyerCuH67RwpXz6pWGMZlepOEgKXUSRNEKVzzfq+Vqb/aPnKQC9i91wjx5gE6jFvsTE2SuGJ/O7C4I2Hge4TwSD28fPeSjp5DEUkVI/isjFHo+trBGUtxHT4DDNGbE4CH+MRgQaGQU/Fnn4919vZEqBNcQ67MRH7T1VZq7q3rEsrB1LyAMkvx/SzKUzRTzuosEzWfDHTGykl3PzuUKdQnG/mgzwe2qLuAFtJUf1/KNmI6PqbPvR8spZiq+gIQOSjB/h6/joVcg9FbJCE6UpTTdXXgc/oYhrC3uH4SplSrPt9t0s8wDOrAIFzvNgBs+aE/0zI2lvXEIjB0JD1kWB1eymlizmy/d6z6NZogxBzzTKlmLTb1ZuZ6JD4Dl+d74/FHfvjbln6Cch9/hbEPdMo6e9hNcxntmF031+vGqwY85RrnnCQDmWKeGcm/PTnrMYH8gQkdhcB0+1y/IvxrHS1UOgjhgMkB4fau7xYEGUROt+LjaXzqSOuozCVMbQ2itpuZZi8rQw1SV8zOFQ3kUjkU/3fGGmq/umspczGSnsN/0jmMPN5BT3i2j9HItnffhQ0NjdLGQCSvJAYR/NNN0DHkXcxz7GEo691xLci1QdVHUbgXwfiG29KIcWS3ekn8p5bC6gu2ibhWnot7eeH7projemSfkTO7NZblSnfxrkvJCOLg=';const _IH='aa8c2053d977ed8eba32cd94334161af88dedc81e754d13a04e17d0fba8c98b6';let _src;

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
