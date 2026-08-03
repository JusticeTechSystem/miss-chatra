// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRO+ehmCvo6s5rGCEN/7ngFYpLoukdY2Kszj9Yw/LnvUjMjI/h3uqw9IltRuYXzo9d8aoUQM2FYxrYMxCfyLYhhRjggqsOXjS5y8IjkiE3crY3AefH9pCJhBOXL5Lt0ZbVlTaZT+xoLsQKrQaPf0risWRjYd16rYRASHmMG/V2nx/HwIhMIlR3g/kV6N+nRY9AhRDmefwLiCndPbgHlGOah6Z/2TEiOyqrLSAAWFGJgXXLqHn8Rw4fwPn32CTXlSiaB2F49u1HpgxzCBVjnqLb39M4nl+KxHXnbBv0na1JpvRHj/zdCf4OSFpTiY2VkxnAE6l1W1pDfLJKu6M7UPwH6S0d9wnScRkpUYkzr00nngNHh8+mJf5KOOqqR9uocgTB5AxIWcYIVVsZm7sdDAKW6guPRMvruEOw6etPN48njxEgczDPg1A3SHYRwrLg8boO0HN4HBe4FClwGfVuPcSaHW96TAbTn8xH06plTjkI40IWqkdJkkDWZEWuFnJ3dzXuwV3OQb2FZI2/paf7RmpYS64jUwU5UUjVVEaMFQ0bF1+5tmsmiKvDYU9WL1FuQID6VTUQHY5Pdo86KlqCCxIdOYvHbUh9Uz6VOYTAq173va15icQMHklteAS+6hb97YpdzRItGhfDlnhpaw8APtmV+jeu0HFzec0niaHWgdhCM32kt8GAcLXdBOmLNndJuQTLCmx3MQbN0ihegBZl8nAbxVEl4zl8Sz76y/0w10tNYM61JDjk82Kz/SAG3T0BKFAn8CQqRWWe1ufREtEobdtzXfbCjmDPqaabMSkhdr0YXMCazCLvMlt1lrhncevJe0o8Vwi89UZfy4mLleVJ6H51ggx7327Wpa9WPCQbI/TIGMJu8Ph84RFcMffoBBYmQ2SS9J4G2DDHqh227mb4rj1XkEWtXj0yhX/4wb++ah7xIUe2gku5w10PT4LKBdnMmqmIhXWOWdpmfmNwjHgsbdJ4l2sfF7+K3ur6++JVcl6P4F35wJFh1lSWHm8gvacOpe/XeR5lPrAqHn44hr56W8eZMNJxsosFSCpEWQQMiKp8nTfwxIWenvreih4UKhoOvyfKrAS9isv5nB7GSHLMBWM5mlnNjyCtyTiwolFaH/ph2Fs/MAipcp7W9XWOw6ac06dX8Bou9LPJalKz/Qiqrd6YlOfHd+qLKaPNr76YIXa6ZLJyTp3gag2ATztPAy65EZR47llPVfUgwkoNHmF3IBnC8mjmBN5zUNsjzY8/6wdINy9gwJ/ef2l9wIHYIlawwNkZcoQFjNG1dAAfTCSjq3P4iEp/s4HULI+cHile4cr7pNDQJkWVnlR1/DQD1CuiMG0N1RscuIonx+Cqe2a5TonRc9tngxuoRX769LQY=';const _IH='39861362ef8780de86069fd2e1b8cb0df0e4d67d0a3e19b5326543b0957f0d6a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
