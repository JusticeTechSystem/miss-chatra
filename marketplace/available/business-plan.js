// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g/UJM6z3BBr/NkYuBogOa0OUzCEj4vIoTkmEm36Utv24HsKMLhcL1FLcVNUnplwscFkZC2YX+KtkGyzTKkav/mOz5L6ZwSv5OvpDrURUAgquqm9qKWKo85YKm9xjDcOTIpqeigCVELqBJOQA1X5H1Fh5tzsv5/Vp9eAQsH+sUhqoYV3U+JOEozevy8C/Om7/ggVD6Q7AASqYymeZ346tX2hSG6ur3goB0b9hwgLu/UKUegyFaMTAZxsGOEi2bcwHMI7SGxwLOuHBkX45TQOTI4TYZdNrT73ynclLareqSNcno+3N2hg5gCZ2OynxaNSitAwfO0d8Ov0jQmJB3SwtY5UHjpiwWu9RGNQxP6J+ubRMcUNe9Zq7aeysZohS6t6jOs+06xBlLv/rZhnmrqhpT5Pcy9p6gtPQZS+BQMORqyuwXD+b20DzhoivgquZDQgyMhx1H0MHXDP4Zzkqk9H/DXde7P5XOR6DPsg6uer3Y42H1gZyfiw4igHpPLxs5HuyCkyXxDk/SZe5qv0awBv795bun96FBkQ8GVM+9b3jnIJlXOjO90OQN7tP3VYOFoEhphYc46W6Sk0W608w0OD2lReZT5bhPhDHGRdnVFIyOPsltrLrQNXpbQVUJ2uJQUc0NRSa+CKIetqZ6sNCC0vT5wvMTyfrImQHNnPrYjtSyA88F9xb6YuATB/2eTxiPwEKSfcI9UaV/VXThXMIiJpiBHo6s7fLITgj2IQK0MpPjhEMevTe+FNRble0IfBSa81ZhEPaSnL9JzF4Iaw0wNVXb77E2dMJiPzfMPX6IYvuUU+OxQkd8SLtRF9SETjr6rR4LZ4Cahg+YZOXdbYuJ0wyaF0cC1q1hkEDRTPEYZvOhm2vKGQ7iRfwFIdkx1gHD8BzY33my1Am1Z5y3N6vhFIzbTOLKrvPwSqBG2HXkTrEmfOX1BJEME3Sx+u604rVqbzd70yBtzwOlpjuDvGrWbFgB/TYwIx4OBNtSO0mTLZhIHT7nZWr7JZEx5Ke+NUBiV/xRS0yI9+ps5fSQ+TNKOxn7SwAI9fGYgKr5dTyQz70HULfYMU0zK6YBliEWFapNVlDIutaHZRiciDxSpzU2H05n7a9FUckq2DivbrDvB2QnYr8+qbGH3dzgnLdvbFRRjcHrKLNfzOgA39r9di+OgDj5bXuHo7uBnUJdxIN0gTLVH4HtXmxh8vVlu+Ay7ElgwJJ8QN6LvSNTDQoUiYZku/Y/h7FxSylVda8WWYnF3pwd7+4EVe063lR8N3BhXRdfuOJzGpjx6yi8v/a5+NVXZWSletHfixwI29cGccFEsqQU6xoTJIvlkeMTRgETsXTjp20MYEcDZqFEgWR3ogDX1rMBC3tglUceE9ctjoPjZM2FLMkSnXSFte9n60DUGh8On7KPfgPyTR1pu7m2+k86uD11ZsStG9bJfcx79puPwrTKII5VukCDQPo9O/MobAHNZQAUDPYcy101/zQH5euiazpw9tnGrbfgYgvYLhbSCUFUs7biJ5tLgAyb7IhlgFYpcdUCXVmM9NREXq5HSqP/djtsWS9kDeMLmg2ci4Vesq3iVW1D6QTA1vPZ0VkJlYbq+TG55tmUF7IPvWS4M1zJ8RupKGQUhL5IIhBhcmFJ0DjTc7ulTdDCpVh+Rxd828UJSjidp7eNP72tbFRI4CfcU7/QCex3XLn4Riqlw8cbgZ8E5np8c9K5YTestgi9i1R/Kly4FHVJqqf1UV39MSpu4hLhTHpBoJ5SyW0elw0XXi3FeR5IzfHAtdy0rVwztVT0hk=';const _IH='66a0b8e4387e462a42e48695d8ccac038180b2e85e26c0ae1f0e5aefd84fcfcd';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
