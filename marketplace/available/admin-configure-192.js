// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:26 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9stknL+0lndaYfKH0co/x9mVEoGVpfpiFr/MqsA4wrUqEdvwMwm4ntKQmOjsMfDwjDFsy+eVuWh7gTcLuaveYnyqtesrs66PfIZuzWYR4OOP61h/zIRYZVqYAV0sQaUASysDthseR/Tb2TmJELBw7gzrfBEsWhWdCTpy65w6ijL3PHcTUnApq06D3zKLnMA8Y2KIYGkC2E4J9cm44Xzgd3mOvK5e0b7xjvyg4RhIAUbYQDmqgo+fgVYtG23vazNCscaHWUVSfkMkx4y784YbPIiKEky1n/dL97kihE9hviPQnh95UqW/EC5EAOR025GUkAQJrD3zWjRuqyzUh5TFqI3np+nun08x4O2RI5p7xbU/7MGJeZAng8ybgdNvQhlK3dOlGVgakZ91R4lYS3m8fQrzfVNk2E++8WvPDCBnVrYfWsQyDCaqhy3L3NeK4+R3QemadzRjXHLUtkaVUw4LUuB9Aqu+RocjS03RH5JGuBL9XyzCSgwmU9TNqxWy2knjp0YgpxHeGbyoPEJ4O33vjWIbI3Kl09LNEgyJ2/0i9JKReVNzGWP2b1KymVxE7rt9B3rtkM6L6uJoIsDakNSzyaRi8fwccy356Zdj8ncYibK6wLen0107+S2bvt5xqYnxRAe9wmCTMd511hn35f+pHFJwskz/2EKKtsT1+GPn5z5/FbJSMME/LNpwi8ZlMs+AsnLe66/znDDbrzPvMBlQeQaKYq2kCUVbjFafCjHJTr31wbhmTzqWBmxbfUAcHdH0vfFCvRswv3wIWEVu3Rqha4DTNmjNqUC/+dfjJQv9LUjDb/4Ccgbj8QJGx9A4HVVlm4/Ywl9XoDpIM6eXypmai3Gqsjp+TJR7whYpgXhQ9iwLvczQ9TSpV08P3BCQlqy8qJ3pZjLZ7RJBhpVO9SiePikFV+cxRoL9ddkZWPgOCRw1HGmxXJWfGwCz2HdS/vUHXGSdIzlnWCnrbway1sOLTyEeUmehg9EsCX2T9Y5CmpaOxucB++MBmI0NLW7fb5zJOs49AukXs+gfn+0y6ay7aK0/04dDxY=';const _IH='3e5b2fbefc4bf049c0ee558fa574c45a2cc26e6c7a8514ee122b64dfab666285';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
