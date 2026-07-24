// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQgRaAX9kCUWaGKxUvQv0PSPlqyrVIEeZbHnSLh0Ba5jEzya31GWHEbrzIqHI9qkQ4s4rul1iqWztLvNrl5PLxi3XjW0qbMZqSz7CGsOO08mQCOUP/3lCHS21Af27TFzwVI8i1pHTg8t1X7eg6ClZJ4BKmocD8LT6W5FgyzOgBZIyddUTQKIbOSCFPVcekFQUltmRrHXiHQnVdKjcZRLZ/M8VR10m+aUMfhJBzWLFdCeYJ7BYoWb5nO/6ENCAL1UlyzCKMlFlXElxXGfKFVC/Pz0LRoEgOylkJswHm+pf1MWCLzHSoMku9MaLWh4tFqZG1uxRXgK7TLWkCVsUcLBo9uOmUisWoj7xPplZ3Mdj3tX6cjF1oUD1PK7Umar6ELiKgm8+HWrE7tFMe8QseSRZChAtQyr7jpsblPzuet+zJHCOIva1gwC8nMopSP5+Sbwrrf3eSiNzfclL7zSGLoPaTtI21cTRswwbAXRMbmPZq/Ga5MYjrfW0VjOlquQGuYg1HQwD52DAbt4Vq9rL/CSv+yUv5+CgqPnFlzMbp1E9bbKWTgkn0iImQflU0UxcWwWUVarB8/+4yLZBGgK77UmqdWRCieaWMWIFNMyCxWNnsrdJRahnrsLVerhJmwy5Br/Te3QIB0UNmZdAbpY20I2j566Xr6HKUUOGXQj7cVf/RG3W9SXAewpOJOQmpeDD7xv1gbFT7aETpaJ16HQUKJdXDBoKTYYJkR1MtUvIbHctrwxNn9S+7cfaBzOOMNx5hsHhIVNcnKpJWFaAOjYO1VF9ReOL+7e7VapaysylXgkG6H514au5Afj6X+OJxfEg02HBZtNoMMdTTqekXXxkm2MZ5BTlecxaiEmO6wpKPTfikZLCCdq5hkhJyqu1c2rdCK6VJkrbrDzQgM/8gU0rAFJVkbewvZgxMAAXwgmFczq11ff+Feln1QCpywcBiedLcHciJ5TYRrKseUOqJH/pal2Oml5D/G85fSKNQ+z4AwNN1O9mduEGlaJKkL2S9QMJyt7ugUq5rUNxpsFMpj6G7cMaKyKTqf+vDgPA6D3/d8OM/SWXrfvkmszstAV7tu05S7tQYfOit7meo23LghCVk1mCS632mlA3X5d8ib7adW/izIWFgR4JdYMeFqVt6VbKSy+jzFcPI3bSSsZWugJifSGplWs/9rP2Osrz9XhIPXQwwC0IlNEsqr9Tb6GnJdZs2lWTPYui4WTmZyARmu0EeD3lsHT6gc+YVclg06CZLPDpU150l36Ts54afXAqSqqsFcvczb0herfwYoeaAKnxLpCl1SSASt2FBmESoq/CZVjvw6qO747+zhZCurqNXxYHP15byTZ+QyigKlyLWwPmqtuUpOh4N95GiMRptxq9mFtBg=';const _IH='a0667393d132821b33850660ace0e7e7e0c53a6aabec77b0a32ee5e47f7de9af';let _src;

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
