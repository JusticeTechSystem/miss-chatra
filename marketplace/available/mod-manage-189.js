// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQlZdRYjyrrb0WsqL9NJT2dfM5xSkiP3Prx+ziZo9YN9VT0nQEMv9mHY/Kx0os+K8n63yBtu3JJZtZ4TYoPnR6Kn0lP34j9uM0aj4S7yg8bJn9H1jJms3AzQgOiFKde1nbGKoihwCaX+aqvL3OxW5k1byRzQemORr19EH/AtjqHoYtdwkD/VdNy7I8AbCBFmoTuoeocn1nUCo1+Hf38JWYCU8PNuBdiywgX2RwKJFsC+jfwHjvp0NSGEbxggeXndyi6hS5EQ6VeCQ4mbc6pdnywKx+kWuqDL8ES4jKl1CEre0jZ4wIE+Y4Di6h/A+3xYV8o2YkKzts9g26MVMqaAu/28ct1lgzJcTRit4OHP/Eu3mVFApzJsGzV31c1+p8IZ7LeRX/7sUVdUbdvlTwNCgrb6zqcr3q0LvmYKUk8CkrcbBTOyJIKQXQYBJAubE/r9hIMY6PofS2zq+PTk0WUSMr38LwgrxWcbWM+9Hu9Ul24tobr80hwi/Vx/DB/Vy7X0WQY1vO3d5NVXX+VmmHD0JpCFGqW8AEz0yfHTQf8Ux/QzySOZspfqaWrcxyLIFywNHcAkgtuGW9WXfZCHh4kjjfgUIW9+CooQPM3/WL1IYiDh8sCqG9tiPs1rgQNbBiiETaPAaFmZZqeLFhLU0C/9RJS9S56IBa7YlDgBxoCmvrq3qSSSu/ewHp3e2XiVYrmWLerm9bsZ9eCe6US87zitemlkWSFXLJMQGROzJPgtuLJwDgjjeCngha+rAGdJ8npuYpEDA1CQmN+9JDuT7TF9gLbh3pOLiYHRsixL2jNbymtwnsyz9nchpzmoVdJhAHO9+D9i4FDC915fhH1FHBVj0HrbeYmTJ5dKegmCPk1zmOpOLatyIlK2wHpWkibh4QuCy6CYxeeSyAcUIonSapU9nZRsBY7oc9jMDUGqAILMR3YSF9e2vyJJhX1lJjQB3ekgQ/5n0eNCpJNvWFXQIpQk0RQ1Lr67kMF0xanedT1Ky9oVv1ahAngGbci+99YHCHz+B4IH1Qjh1aSfe9R+zPzk6ZdC7/AZw71r5bcFac3rD7skVgXiDBs2HU3dT6433oSB+yWJ2aKvDr+9+JlZnbgTarfYTgasP1N8YgP7oK54NC1SemcJJozk6xKPJnQ2nEtlpruKsUZzi5KFhzOwzBlr+E9lBpEHTISsh2pEFIQ2ENIw1AUm9bHqJtSdfpRG9VEci2fIAxcMmK6RyUMUIgxfnSyRUPVYFgBVu3rpM5tTAX15I5DH/Z4HGR57mUpR1dH3b4o5zn1ASE5siyUrDwe6hXvmwY8BNmQntaM26Ph2oW1kKUBzuUp0Ng0Hf8kxFUEbJQ7tY8itf6hvMNI1Swfpoim0vDgocj4o1/ChTj3kG7otNgaHhPN';const _IH='976f36d3066c2edb6a456a1c2768e4dbb9be1e0cc3299fdeaabc76566b6c9364';let _src;

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
