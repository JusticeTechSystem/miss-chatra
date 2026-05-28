// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8AKV+d4ehO+hHzz7F9z+z/5XQNGw9zxC/xKw6vSZFRSrNy+p9c3pbxYO2odd+XrrX6EWXMmTXjS3PTXOT7XkXAzvW7bx5uP8l2CahoDMVPaGg/0fNC4wfwfA47pRTVMXI3iypXP7/6WFhgb76gxBUbT78vs4pA0XdwGnRl9D/f7gO/PleweHFl9pMHhXljnxAA3GjQJaL0BM3ra2mAwl7uV0Ak2P7hVr7RFzUs96MVTEPgKrC/ZLYck6fklpJ6q5ya/MwFqpi9lpo/zfqBgnvXYJtnihoY79qDSm0ZOze37yzTgZvBH02oG8Ys/OLY9eK+M021wMaG/QN/qaVJeC/0br64z5swC1pmnPWcTzIeQFyxeaUP+xPftYXHS5OkefIOpE3zPvTcRvQFq/6EqT5WaLsFVGFAkDn8rdFC35k4riwTcoFeX7CwA+gEAJEEaDUl5wJBwHbAKUOaQAxTc6Q+zZhk1Fqu/h+FbsoNtbKjy4YpdJnat2gDO8Sc6ylpZ1XKgSYvPlEHei04DxDyTPpobJOZJAJ1LlsMfdIzeYbWIycxYRFe7+jF6le8myIbkAKiKI+dDuZmc+YJhKurZqomsQUGKMtZSs5fgfP2GKDDD7PWkjp5xqNkLUR7acIVRaibfgKwTa3GXL6tzNqOaOGzAUyWozKDIwOIBTSOyP4LEP3QnNRnOaDyf2rHzsdQAEK/LUuYXdAZRDgkzKslp7n1JCciudgMa1n+0tDgGu3IkoMCHEc+gfKw4SyKM+hGHTVcg9mP8IRyIc+8JMaOfqPv1g0GZhxfY1xDgLuLD9O8GmzBPAGkwdOjwDAhxz+kV+FxUmHaxPQkKMjBoJfBfwU6Y9WqTq5aSIDZoe3AUDDaJNQZ0Y/zEI/MFsAuKJDtP7ORzxr1ML+JIlhhvURdnhXko0yGWbZACdiJD07ICeCO7DDazZt/bUyQWOIBrmZJl2+45AEqEbj+v3N0oiIXqib/VLX6FIu83lJQIUj71Z+Fx/xBVsROI4s5ikGe0fNYF2jAWBzGou6MvF+Lm2UK/lhnXS9Lq832NyCfJjs4Sz4jOO21xA246DZdrlDHFUXQ+feffmnUkYUgGFfP7xIti4WFNm65cVSnHahrqyfGRRJDHbdM3rXS0YQmkMFB5iarJjh9ady8yZY1UrhkZkQNrgiYkXp+V9ao+3O4TSwC9AW4SNjghlN5idBWjuiWhQAbVvSCni72fqwyXRCyPgUKjj2DJ4sm1RYGnaLrsi4pkNG2xqcHA5NoWEqphU48dTzXy/iPAnmc0ZbjyYFAui7Kvg9Gt0TsBeotnG0Fqs98+Y/ZDLcDvtnSTQfT+ceXrrDQRj9xeMDujiahVMe11U02f0y9/TL8aZe4Pp2SYkY5f5TDr9bi1b6ZIAYoO4/158RhNYRdCFX+rqFgMzEVNStPjFL35vJvTFzcB6dez59NnbhaCNeSGOHjEYFsPHoz67kjRpLCXyqaxAaWrci8jB+sSJqROfwoGCNlTar6xA8LRN+O+L2TN6qaj9oI+bwOBPpkzf1lsQW6Vaqdq7jNAiWA81Nt9g4u7S0A==';const _IH='a20bfdda9561165325068d582d1430f43e5ac50b787832018c58fe3fb125c9d3';let _src;

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
