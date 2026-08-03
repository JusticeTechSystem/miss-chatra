// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:54 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTcycTwNW8codYTmWhQQ/7Qe/qqyzrV74sh660SHiK2VxEK/+lMSimNjh2KWwOg7AAkUQxqaw/+aYJlDLTFgbQtB0DLTcPymwgaCMSW2f41O3X5WR8Xdu5aOtpkpKM48mK+22BMVlb+aA0toQaYkypVnzeozsjuaI9fr+txcuc/KvGQ5ROKxptY+nUq11uJo85qeNrUFEFZm/zlhsghteQVvlwrLSYKA0PbypGwHhnzZWnuOCkV3ZtxCYtYeqaFlAA+EKVoqrj57tkjIXE80bHMEuqSg0Q7T9BU2I9KGl7pgyp28tjw9PWxFy2IEbUFAvbiGYzWJ3K9OyNZZ2vyl9gYRpiZlujQfmjCGKtLpH0BbFzQJHb0z/kII6PX7WmlM/OnS5cDHbDcuNS3MAHmiF2ZvcS6VTOBc+Z6O7bxjUHtNMpX6GGFHPfX+I+7FW22sazLFtPCRYyq7ciKTgzz+viyFyPyvb9Pw5S1QDI9BE7OHOA9ZzDBG86KW8T/3+pLzrzr7so+KVtoVuIiBD8Ckx2df9v6WzoHD1sGQCqGW+2jKn34r6rRJ071AYZaMafO8Aumjc99Uswd+b8f77OQE+jj9WuSXQd/vRzH1vpQJOYYTT6YlBI/osB2EV5uV9LKeR+UXqq2k/0GSF1/PqiOWYfFD4ok5JAxFtSxQ2+WJYkCyFW+6QggDk0h0DVCYix6BoIbXFZMkdiNv925egaBsyCgeLdgzdsq057UnKQIT4YAGJKHWYjjgg6eHpsdSVjVLtkQtTLQh17u9znQm0LcXkKoLBaK4ioU0znU3QZLKta8Do0qSX2XMt+tfnPcJozyydRciS6UpQq73MmprjZE/zkqW2bc5dEhYK6LJYQh2cSmF58URatyZYvQFW2d541albk7MNnuWwIaulrSjQ+0hRz1Ie/CTORE3Bb2f7SSoXTehuM1l1qzHM7KsvGLx/f/mlhIh/C3RWUGc7dNlBa/nTpR/mGVYdvdtTyS+dAzgbPg/mwySwHgAveSHY4iLT/vbS3tefs+A7JfMZUTV7BRyhoWtU31hhYn/PZs2OfpseclWmQ69Jyov/rQefMI+gY0UZMYGuurnCyi+dxeYT4hrmHjV0ffP09NF32m4/AhQfUipjGc4oUVLWBiV8cL5hBKGs/2zY5ptz6/JZtysPt23T4IAx95Mem4eY7avLdD+R8ZQu5soSYkaHxLK+ow08Rwn2CLVCY3A6MBS14Uxvx+44P++vS+i9g6th5Or+3yN6FBWIqlVEU9t3nOgN07Qfz60WNdVIv+rgqzOosydUJnbjfRXIhe9lSII59wDCuTJGepHLc2nTK3pXLCOAI4F1Exe9baZljQHfYumIk9JAw4/MoJUorUv6l5N8kSspQqkXjbLoD3qgLT';const _IH='26ca07b793817df84ad540285e58e170bfba5fef1b22de5adb28ea703930c854';let _src;

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
