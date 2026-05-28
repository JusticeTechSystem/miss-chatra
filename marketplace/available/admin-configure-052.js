// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Hi6bNydoFrVXWwlkKSQdgvHrLA7ZLT37IFHlXsu1KvkABwWkQXMjYOmh57n9UjQhqgQKp4UvjyoO2TBcOVO9sMvfmuB0Enpo6437hWK9Li5CtOLcTrfN8NWH/BCYXzNo+ry81S6yxUZZK3FAzZ8V2HxHa89vmKmwnl9yoylQmlutvA5Fdcto7fIikN72jIvTWHd6tNVxItZdyu/nb/Lu2KArPHK6I/6f93jZ9bspWnAc6obiEneCf9euI1iKc6llhBfrK3JcqLvO2pK/kLq3TgEhZF8q0GdewbFfjIB/WqdENd4j50VyCZSIgzLjSrmXhlNbaxTyjIKMwcT2f27AeHEr9BbB6byIpPuA2y3Y2Off+bGz52zuISUBd9svsljczV4rqL31uvXEWkg0DqR2QDBmBq1SgdTWbxzRq2m/ZoJuOpQNdn68xtQv+5CQbk6/s/iPjh1i5hCXR/HC/C/e/OHYZj2IOdffZu1pyFunYXFqD4almrU6TRboGTYfjJevansmmlebO4Gec3UT/PpB3m4HYLDrlHkNvwh8+oBCi76OYh7AYtvTbxDmOuFW6dGgU3apwXWBh98Hp2505y/CRAJdGE6N54o+CIJDIuAZa068p2wY4P6PEmWaihBbZNQIZJ26Xq9BRCxu1ZMTZs1uXOIG4PaooSeeGWxTXwqDTsWgkK2mTXYozHQORO4QAgZxmqWXxsqsVjMJ6wGxf+9KuQ/JIaW0mZuCybpuonqRkHCsDrqMQAwYFWJ9cGc6gZGwMRb5TZ2410/5wJFNk+FhHCtoHJMpOz3/TGOK7j+QA93JoAPb0ffpYJ/BF81tWP+kWVeaNX0oEoHWwm7vBmr6igTUiq3/R1Br+zQUsqwnks/ih2FvZLY9jePqebZ1XQuh3gFj9Neh115+zNWlALWZqj79m02yw2XUx/fzil5KYge3zycg7PvJ/WroraEVns2Nb//fckpd1eTTODdnoNCc8GmzEkJJzzPkPQNa5M0+q7auTaiXsZ55eXmZElntcWNF1bN+yZC42+yX/Jd8zyg7+0ry';const _IH='1dee0567ca0e187ee5bc2a40ccc457922463e96d99166921aa1345b57c7bbc28';let _src;

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
