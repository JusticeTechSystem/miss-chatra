// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XkudJ/R45x9p1m6zzmAWi6HSAXojFGVaNJ3b2bCbV0xCpEtpdNmIFetRL4dlwbB/uIkAmqQeH+3ar1rCI4CfKRNHIGaMcDJ8KLrs1wS1nXhzZFqQWg1SsIDmPovTDH0KPXxpNYP0IROW+BzpJMBkp1hDmPYJqxqutqqivJxHJq6xIm/gpFN3lgEEHFeJcUeGi+eE4aQUnXR7LLLla5D0WCY7PnnfidpF6iGfPvBMcdQf270bOqRp5VaSQN5UgG86z/28FA0LTg7aMxhRidSAcVcvslOQowdtYkcp46xwWwbPHBsT5z9ghnJ/RN6FMHf/0xEyZDtLWzW00sFGZ6Pa7r2qYEoPiFGlXbCI91/FGXNBSV/nfkkry44rIbQ+llR/LjJA3XuPY20w8njrP9vSOGgB4oBsyUFzu0f0AX7JjcoX1HBlMKaslPHPfozeuKdRkcZB3QsyiamLhbPpYS0CjsezNyz4O8Jd8LKuxbo6BCS13yKKc4Sb3g7I6eEuMNFX6NFTZu+/L9w5FhTqfhlgskLQjkVfQ3MGrIe58oS4pru57m60pT09P3EAY7CcQASP7YH8usIgge8Pe8/4avE0JI70TgYqevK/mcRiBBUo+kuSJLtRTgr7gW+4kA1oT7I5T6ArX5tJES7WkywDAMLt8mUKJV8p1hCvnB8oXveCToi3GlpZ/IGEmAQowFbuZNVmPkrDJeKqgoRX8qh+dyNFZtywObc7bdfk88CwneTUkqMQVBq/8rTY+/tOky/ZUyDTK9NTqgKLvxze7Og4xRGaOn/ibjkhLy6qhSjSAu7DvntWu7FZydL8kf/9FmuJXMRgP2KFeLLGBt50F43+xuqH1hptqu/c4UEyp8a4qNb+BJZNS+2RdP49jGiwRO/0NxddsQSn5UyN4gwWLgS8HaDL9mnAmdy9UU9WlFbbJ9gB5+XXdk5VmRkH4zEx2fOETXaBNn6xNZFacXAMCnPeCEf+xaBrPkshWUAA7EJ7pSkrkdpcw0lWcQ0=';const _IH='87017d069ae548de2b993de6902160b81c8f5c5a29f3f759566d973c1bf68856';let _src;

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
