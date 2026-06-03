// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hvqKhqtLGex2jq4Lopp4rm7icUeSWe1X/3bCuLNlfTgh3sre3hubkY6o16jv6yjUy2+UMRFnr8bCJz8zShu6Uu4WSYo2vgVl3H50GoFtmowq5tAcllErlRLeP12EYKa/fS4GsDwFQO7zw7Sf6+RksrYC/oJKhjKW+s6/By1hM9IpN3ctAwS4XX8ufCVHW0jzGHl1iMpvIwhfH2MCVVe8sgnrHswE/Kyq7w/zGY0gtBx5epP0Y6bZ7xgVSHdtRUzf5IVj20DAKTTe2Zm0j0+M7/3NUVrDdDhVxHelNXZ7jx7of8EGVxgzj6jwVx3CxEFeJ0h/hjXjbdj1JzeSbEa4zB4S8ZDWPi/2MrdJOHDOZkuFcl6E4JTmUA8uhLAp5K/YlV9bkWjIYkccewW+K81n5nBOA4mmBLeQrEbLjsH90bU24h+61dvmZtP0nU4o0Vpfb0REc88HLUFlWzpurCRyJDEB0IqyiI2WADi5B2+5SXGtS/zssvos4AExfkuzUlfmf5Wz8Hmyf4DyeiCRjsDLSIE0KMJ3G1P1j6FffQtmC21VMnE5BDZxuurssVcf0kkExw75UE/Ebr+9UNeGU13YEY5GRZvPeZPyHTYFYGOHSXBhxWKpFWAqGddV5tDQKqOIauwgqfyPHFvjTM78LCI9j/MnHARk9J0zkh2S2YXrXH09AEKrpQ5AVZTKecJS6JCrD/RBYQlcfdBaKOgeyGmRt4/iEBaQhrJmJmdTHTk9siirwaWBxCqdBRAITEaGpskYU1uWXkqT7DBiFfipfzEAzUvSCjF0VICLpe0h0CdSKRScoTBmedFe0IVgkbk+NDGlSLmkCOH1YxmfinBQAYwBJFBpN+X2mJ7jn3vEf3BxswcZy+F5d7DGoVeYNiXVNFF7QUJW6CybK0lS9rLuGg4dUEShOTkB8316I0taWYKqYPtF/xmvyDv+pooiAWVC6ZAs+8+5JpP8hKKCDCELMLdaKkxtHS1UL35rccjCg6DW0FC+JGr+aLohEn9lnZxXVMqRQEzE3xRLPxbTs4Zj7cRPVar898/niiMjzCIB0IXb6pBXXHjvQobignnoRyReE/xyi3vCBXrVM69hAnPuuQPRr381yfkLpWAGfOeU232b+P4VJYjCFYsxMtLjI1y2491xA3H/kgg3JSwkAxE+G3h26XFAtaYRFn/WwriggrswcYkoazlpNiZ0SRTvY8BnWb4QA7LSz7jel7y4G03X8n+ySDuVzp0xO3G77wHW5X2vkdFsBjs35oLcdY+HcLHxdnL5aEAiXaZFsT7wz3kjL5bK20LVvRIuDhcCk4dp6wD+4A+gxGclwXQocIWr9wW6rVh976RYWwt/2k0Tr3qVCD85YqYf5qCRmIBTqtR3woPV';const _IH='8878ff3988c638319326b4a61f30b8cc01eed3ab8c5dd0a8a4e4db115b1e4dd8';let _src;

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
