// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jxCZTAb8AaxX26BXkTzL9CVio1ye1L2M1nmwaRlbAlCzGmghOhu4CwMl/c0t6W4o+QpIy52ayRrQJRxytaSXfbv2qFsrMjnBJzDLc9nSrfOjv7ZFzKFdVjkuWTdoGznxIT6XZiBmJtX68u0/APmRkbI5I5GuNBZlgO0vk0Ik7sgkdX2IOCF+CBgVOTfB3/o9IUwfHZVYUf1inilf2sLyCkfZZTRodKbrExAjFZyUxN8jwfR4h5eT5EejE0HefmyPL5qoECFnrv0HmmZw5LhmU2FZVHtqxbq7IjwIrXHSEB9jb92Lb8oArcsuea252vjTf/o4R8zAxXtA4R5yHdm1nxvAL78CShVoBPgoH69HATIDGZ9cZIGFZKoC9rYmldJQtTfGlUTXytKHK0Eiw/MtvipdjFqCRe3A/zdvsKS5IxjHLDgEgOEm8QMwJ8WYjV1sn9s7h6kniExfiexJF+n1grjXAWChchObzs8RHnHC2ZaBRv0V+OzcBO/h7iZ/glXZkgFRN/+d3fAYtvWVcmzMeDXzDSmWdewczJudd8gk/RWEBzXau8kks3OhLhTxyZux7iZqOMDFD8q5V/MPGcqB2f3kB3uljEYbAD4iFyzxtGqUA0otxO76hPxDqrSaXTor3gY=';const _IH='51f8a6a4125b7c841df5d647da9af4b53d742ff1e4f0f79fe68459b8cd42eedc';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
