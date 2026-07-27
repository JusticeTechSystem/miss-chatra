// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRxw52L9gRbNqFn1LBMlLOO5EdZUHWMCYDa3p6Cs3acohmyoPHEh0Tp2C3YvBO/Ii9w0qP9rwQM0gqP2EjqHlFWbMSfhXQvKWTOHTCOlgr8zoMG26yn9eE3gy7vLM/rprzBVhNbyhdJIw6A7OXkYwxaYB4X8xNcooMPghU1TgSkrDM9IuIbJF1teYuPpuIP2QaJ/6+PVnb4XbWB1HcCytDDdisHwIFR2Sd9Ae4Ax4earrwzINFYrP0eFlWQEHBYBKHItZwy4Er56o4mG6a9FZon3hLNXTu5HF/hCuvccaiOLUCaxLjCzR3rPlLLgY/BRHeraD0YfyTMNCyviEExIOn9I+a5J2UjIYqTLpG3ljbLuXJO9BtIoFaoD2tTmesX5oo3+k66rmQEuM4wE3l/64dTmURb/mgrwUKa8A9b78TvrJTVsIngPuoiZ8D1UrwlunnJuKrWEmQ4OjeB1a+6WgeAYww7hyuIZDOGquIZNl8pBgZTuZZVAUcidjdFGaotVljQI42KF9eLJIENYJ0gK1oqTTod/RXi7q8QyedQ6mapb+LzRa5fT2CV2MKiHCCczJn553KV6Nfw6HjSpGh6G0RRq41KjE/QosRVjkJbMRoa37Qq5vCYjLdi8I/9Q3oa7Ol5POKYvE8C+6xHdG+BTaa5E09y53bcdK1tfVH9Lma0IEMLExqRCINxEu0detzOKIWaC1x3sN+ZSYeXQG2xXoSfk4Qo6E1VO5h2pOsVhxFt+0ogGl4xD34yku/ufXZe7etsS5VK1hD9uBTsL2P92SG0hAW9JJ/uG3aBiXUWosCZQp84jefWSJkTluEffrbJB0smJLKrreKrX3epSXntdmZdvJ0nUmbtTUxteQe2ukUmMkFFBhnLHtdWfSNqZN0iLXRwhljk9KghVO9z76F1v4ha4oBspDu9jnrIF2O7xwTZHGnE/Y3XLj8Dc0UAqWqMvbA83Q1LTsux/N2kZkbhNwvJdLmNeN0soNn3dOzO7fhNkoPAFqljxTDc+wJwJcjWR0ZI4oVefEwzHiCGfgUNT9EbLSN+l0LQU9DK5kTwRYJcrUyRvgwe/9f5OABWP/5jgMT7p92J1r1H5ffe68nAPVyuHt60FsUo36wVCmEA6lXbrXZn6WryKuq+BMy4z2Wju9yua8+Xz82eQYl420xgvT8hsIL0TtWP+fAFh+hID96PH+MZr+Kely5bCmKWUtNwn1ZSwW5Tleo=';const _IH='1a4689c687b77f614b4cdfedb33d37eb55766d24f209dba48b5f7d21c41e7e4c';let _src;

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
