// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjScpEWe2HIXKU/x0rn/jG5zOgFVAcXfdYpntGAbtMUCruX7YjO8xTIKP+T54YRFTWDTU0hNT70Jkt5D4p3lBj7iiT8UxNFudv6mhu6cIQTcFbo52kYWLRvJC0FmjDFo+thjAnxFHyBj5ZnNXrZdWrLqOezyBGf+rBlciqYpM8fRbJjf7xVahBHyN4zmiFF5zBxIwFaNG8aKg3QVL+5500nTLh8zsvE5Cv9wBf/c38GUKO1ywfmIJ2SiPzKZVQxqOVPGt3rPmmHy6ArZ0COV03LvRM5MRTyyMey0fisM5Pu+fMQztk+hN8ffu+uPg7jMlmYiB44XOHn4o1a9RuZu4DgohHW9JbqsXVlCOUKMRqGR3cbO/gCqcbgor1JPILLZ+dCyTEzM2yDRtX6v5uJF5z12WbK84cE9SfL8ceYQMj8kLPsWZJfgzT8luKmklgmzr76PDpU6uAcuWQyfuh7TtWWj4sZNLciO3oTRppKwNeC8X7qS/+945372HUZgN7/CkKUFEkq/Quz7t3GEwO9jf/+EolhD0qO8kyVgkbXtec6t4oUgWW+DgqvzRPODDZ+TFiYN1/j0o/rrZI/CxHBDtvJOYPBD9Sohwg7lfQFTIfHhE1L72O9ZJyEBwr5iibF86TbHe5roHM091IlNlzOdzrJmbOVdfZ4/+ImoFvw5J48SsrSE0Au6kCcqMFjMMkaEcX6hM5vuRwYQGHJdfSEJmCxcZj8acIKluWzVGtoLmHeeVB1RGs6CwiceNWHR5eH+53Yhl9HT2lU1WfXp4K4AawF96tVA5A8lkSYnlNU2uUVwUPU7/Ip9+2UGUX1ho19I2M5FE3dtwrpzzLfTpq17N4v5eTwtcWq1F6BIsz0ueKcnUXCLvluhOcL/+sPJpnggFmtFxJW7ShbSpjp/kvybSKu+FQQ0to+GkPWiApd1tpUxvkd5Ttk6EKNL61SOaPWyuhYEY9DKuzkdOLPSAccFebhvGjMbai/2qkU=';const _IH='ece7b21495b23ebde3f525d6b322372181196c7a02c5aea95ebccba759ebe2bf';let _src;

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
