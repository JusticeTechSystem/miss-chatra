// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT01YLPYSJdjThMILPYry1KpWX6aN9O0njPW3w1GWPJf+DK7A9CWxd/uUwCHZi1E7EEWbdkJT6QlY5UtDJvqLq1cnmj3+ZEztRgcmgx0ylHQciQw+4D8l8EGJ3Vru1vRpOPlb91fd4oYtfHsDxiPpSMz7RWTBziNc7Lmx65nwDyb5Id9MNL1H7nRSdLAcUHAhXeH+zXwtAnwuqe9ruojvz25rtP7jMP6pGPh0AVyXHTlnusL6RJfNbusLWxNOjbfaMUXwOX9dm7Va3DUQX66DKuKOLxzm0mqg2g49IjlBn21kro0tRbQWK7Ov9IfduI4N2u1IoCDXXKTtWkuHFzJR8qEkQf7smEOPYgcFSpda11snWAI3ZvDBn3FWBCMdQB3dRoh8tGTkvF+VKOmw6ZIhDceqs9GxLIQihhjOCnuL8Ndn6KnQjDdfS+apnzZuuuDt7MELIqGGqGixHPAeICXrcFJOPLVhN+kigLsbdfxjV+ilFpaAmU9Qvxi4mgiqTK/vq90qU7fgUt6KhwD0ze+Ro8NaAktOYk8aNUEJxxbPk1ZgXk95f9+RSfEOqNHyIWzYeEs+bWnbHmA2paxyxrcJnevl/qm0jGuLS1ZDe39Tj3xGrdXrGY+hkaaIQIvmpMiL+lLxBfv3B4fxGhboKiWzk5/o0t7HKiCtYBXXU/OKw79OFFCSneWkhO+HUuMSgTRbnnqQ+5RQ+eCEmI7+2ajrYVazPQuzJVUvfTqK149YegEi8IO9ECgOfYQE4VzaWYRaeiQ9u2qz1bcyhshbDQ23GhosFd4w6jJNxm3Oe9uXNHXivn2hpgYWnrpbRzOq3/J8oFvaBWKsxDZwkXOrux5Xb0tK2F8qHg8VYaMZxQzc/KRZaRrnLM1H4AxbGzRLKrWNE8GUxQC9MECC3BBGhd5GA3q+BJxntUWeefQu3lCqDvhPzriSVfan57QbdYisG3z8Xs7TQ5Q87fOnt0qU1vfo+4Q5CEg9UiO4e7hEBR2OWR04tuQQ+U5QDiXLhMvnwlorB5qCxWJv1H/g==';const _IH='fa1a116e4dd3a1792077b9c1c74b04ccb4580c4df778bdaea7b28e642b90067d';let _src;

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
