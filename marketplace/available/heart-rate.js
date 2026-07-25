// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTswuFydROORHORwN3kDi7vA0qoHwSj9kr0sX5RYHwhUjZoY0Locmd7KaC1bRQz1tP2t0bb8LUMPSHVxP0/6hodrrGhxh59gVVIH79fCEt3u92XLIYgRWrZfmYVsNCWlzBqR3fLEX04rHYhcOhWe3V9kxjMtcXVGDPdLr5tgVZ57RAzM6LPURpTsAnKclL+Mk66kXr+dENTxi70ZH3crK0jkvODwGYtu4w4inOGs1uVYdXzTRhaPKzNn8JaC1SyTCEhVUCOJMHhIVJM+mmME2pQZANFj2ET6iyL71orE0oYMFL0QIUIl7A7qZ65LctRN+NsTOcmDpzzEnasdrTMmWK96wOA/VXD99sypaTXqFv2/ZMUa+RZjix8FYU04KKwLIgzKTxie9V8TYlAGiWI/6zY5XaeJQmz7UjVFoL5MeExB2NKDDcaG4hToaviwgnv0869fDPTCfysY3PQJ3QaZuR5RZMQeZa+NpVODIEaOZGuIwdVd/+ic92DRySFWyAyDHE7dHsJfzuwXkLAk6CZvso+3KIeX4cUmrlhlQk6KoG/eAaxDfmkIiJFvzypmhE5/3kqqnXW4UZcRV/fUNUrIXAnxhGjbaaE0NlCA1+P1NQbxo/MctumquiolCzdB+EzP4DBUSsERPM16kgM4y6twM0nIJ0N/T87ANRm17xkCiSqzEEd+aMihO9tgcU5er/Ek7xogmU7HBKjBakVe7y5rmFuPGHPC5PLkvkVZ5HKFJXTk5afr3lidANOVrwYBJgOUYVeGxY9Kc7P5LZCxBVOvNTfhvZ5iVSrTkQ5T8SBL6geBwWZTXJNtmoAk0vGW593OXZuEDVfbZBYRhV6WWtAxHBpri5aVq7tMRbUuTh5oC+CBMui6mgiZgW1ZgSRubHrRpvZkI3SJNGbHdOJjMH7V8Hho1OCpFTtZqkr7raFqo05nNlHJfKeEqkKCOg3YCSCUltwSQj4D2EXaIKn66LKEya8Ku7AyKK5m82rQXYDLYHf3tG3Z9IIXzFNa6g/KYUZfnC2Wf8F5N9lzOpNYLkhX+xEClMFzoUaGUIFbILo5affKHdbU+1c7s2UxxGeEwJCw0cZEA63p8+KzhkIgilb8QIEniUwlph4pDe1xFOdn/XPpXIjOiYRa3FuhO4tjQSTwztrEiITnsMBVgAkGg0aguRTdgqlGRW2POyV1vS0dGNC4zvpl/zOSTjOnE/aZ5dTlY8XkVc78p5ZmViQkzntPJ5Swc4faHWop2KGrPgagHqdp4dlWSSCLkujZ6pNZuzSVlYmHRYARMNHo57RyEc+uGXTIHaTsTI7To2IBN54NpjIHF2v7IHKkJFJf/Y9LphHEWJMJd50RKrh+wltQJudUsh7';const _IH='0abd72a1f263787390a2dd46be293431be4a4a902c8ed75c497d529aa062f557';let _src;

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
