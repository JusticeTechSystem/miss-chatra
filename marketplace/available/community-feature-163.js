// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:48 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1KJok3kPG7163eRGjeEhwyoPNsi/a83sA0B3wm0wZZNX56yR5w7YQeoFvemAPtyIBXyu0IvlCDH/5a0tRHf+OtXLUqG40IcRIyX5I0D6iet6Q1RXOAwqHNT02MiyC0ENE/vocREs/VyNHQX4Z0ra1zZtbUNIDCw/nuF1JNHa+peTjCu+y2Nn9xWG5uCtO16RD0p7zREdNA0QDA7JnY3fzzyHktVQHozJFWSWQ2/83nC7dsl9uEnZkwya/AmynMClJ9LNWNk/X7u4J5gpoRvXiqwna1PNg5R2nwyfelO49srTGrFCk6T3v3N2q+SpUOEl8l+lW5uTzPkuE8mm4ieqKhG5MYu5eSmoDAyCKL4+eo1FdPM8pam/lSl7gGA2syIMHfNvzAOu1GRHFzXzLc/z9fYgXeMMCdy3ACR1hATftrXBUaeGEZyjKIKtQiO03jivHT2ByVOrM84RDofmlg+LxSgwF5b1eq4YfmrZuKBc5el8pijAXnaE28lV6YPC3kk3u0uFCw9CoAB//4m4PZk2qbnNHUoX3DNgkrMyne13neRQZ/saSsAzUFBtmlC60xRZzgayNnNiJyKDCGndmvT8HWT5uFMo4NVjuVfkd7j1HeSw0FT/jhQPvRh9G/ZYOeQSVNggXAuZk8iahDmEYRyBPBVumsLV8xmHFHLhiIihsGDREuODDz+XRt8VzPImZAIWnthbmx+rR8DLJqP7BgJOxyNMqO/ZrSN4a6AMeLz';const _IH='a8213b4debca347bca4972c92edba78bcb3ee7743ac8588ec88e2ea145f4f055';let _src;

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
