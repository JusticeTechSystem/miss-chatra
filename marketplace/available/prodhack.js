// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0oTbvVId5j/Oh2eQgDWFXCfWjP30hdRdo3qst+hf21ftBw+8j929qhXkjEFe0vEdbBWEBERqEfMhR1Z0+oJwQ/9upijgL7CwPg3OpjERLu2LptnOHYNK5mpGS7cQo26a3ixhB8iVK8WyHpBjyj24DPYFYnoeyAdXVyl7JgERGORqOCAwBhJZcPsBYR9Si+ZGXBTkDsOtn7gqRPbbeap055blBKtZSe4xUOScP5/eY4YDgg0kSB1qQDFWSyHXPV8S0Y0cAE9ZWRsarpt1q43WT9Yh0+HW0tXZ6yI5luJLhPXlt3h/5zJ/vpJIjbMctE82e3hWK8ClkXruE5PTPJGqbJk6RF61kFPaAGnefYcKDlPEoTzQi7b2KxE83BqwY7vrfPgPjkgcFY2Umz0pffuljduOBj/CvRx1khXM7hgm6lAkNDJYHTaY2x8fykgm6Lx6OVuA+9AqqnXq6OOXNDQeKPVcEfjqfwJ0f7y5JltHK9xLXQ8xscCwFD+z3dP5Dv8vxgbzhBryZmTB6du5uNgc/F/bGVeH/dStOjP84rQ+NZZsNhOGg5YBo2gav/KqpSZ2cTBRaiOGWJiILGxqCdWC0QraVQpPb3uAuKojz8xZeCjgy2XX5d/scZvg/B+XzjwVwUkQC43WtgQJFQHrQmIYYgr7z8tGycYHwKMkSYoI3+NhLwQTp/n+PUkMHmd/jbYyueGSxZNq+IVwFv4GeM8IYw8E2BoaysOiCN1buvYykdIKt2oAdhdEB1KUpIu38UGkddJI8oh7JMPYrZeuKvE4rpuvUCNqQihw8pHE5/hWKI6kPqZXUezd4S911D22WGOSjqvcVGE8fVhW5t7jw7XGzktLi08oJ+ogicp2BOKFc5sMXm8PUNIxI9F7VTp9bUf69TPTW8NWtkfhN0DQoRwcK05Q9qdXQeoC6ctl3cef6uNo2oUjdRHSHvqzytZ5/ON0VVvY38dbKcQ5OngvCHmjlc9pT/7sTuncEW0zU9cVXD480Oqtjim9a24ojMjYkvf0c3VwggErEmhGS88Zn/5H+mncCU5ICrZl3hDPHEGaegyjcj6vh5v7Zn5HQ8EuvQXdGDHQIchDhqDy35OZVFdu1660c0pR1Z57NcDGcPH5xDZR1R2Rp+ylcEEucgyIZcT0nztM2pFFelo7tCY+qWocI+sDtC2HJZoUlu4NlwYEcOcJUSaLksOhV+DauTehzqMtpqMHiSQ=';const _IH='cc86a1e74e655e1ffd44e7a3f50fa97aecabb4d695e938f62bfd94c64cdb85b6';let _src;

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
