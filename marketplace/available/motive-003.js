// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P7XltGTlJEqJjdPT7qLfXptgOzvORqI0/XVCmQBcFwzY7gxKqnXH+vydkLcjOgCAAKMYm0OGO5ZSzpwJIudJ96iEBvjvZw6aVZq3OT4Jl1XmHlxBUJ5gBBScoNnHygvjTQQ/5DbxuTjKSJMMPuD7syXsWka2+mr86N1MG84yZxbhwYjL+LW8E1z8wQsUGxqQxhh/cf5w8dyL1Vy2pgvamCp+UG6N9Y0Xl5l7GEeLTqGBUX2hDxoS9prw4gw0LHU+d/5pUwKH1/QavZGA49XJB+nPFKYs8Jq6cS3zkgajen7axIWoxIh1le3psl0Bmi7h+dppQOXjtS29rZGo2XcWvCneEjEEczJFz3XVVt1MGd4izBvVJlAkVG7aBNwRXBEfSZ7BYIR/KOw1GpM39Unjg+m4AsBlsxfCeTzZXrYcc4DVZsLBf6wQc2YChZqgrHIijgbYwDQogEsZjAS3F6S2KM6xcy7GoTyPvw+EI8tt7zNKJy8s7WOvBt1anlYF7CvB+AaupmdwCyoXS9SKHbghTeLj8iREn4zD6lZ2dkHTE9o1Ht2bEm4kw/ymYd/Z3cIPYKLILjUxx1iLvm3ZTOVsdywL0G180CF62yGQvIKsvo7eU2pPiOGeCLuuV8q6fK4vs1D8ix/nMJN3Cj4g3TLnQwGC6lpyN/xMLUaAwFLlPjX2B1x0c1Zibok5wYU+JCv4dB2dagaM6GX+NLLMzQQ6Qf2JxPtZiKWuwb3U6zNoqGAKGMqprL6EKyt/QSGMkckTy42LbZtqobv2s7PbrWcLJ6+2QnO+O0jRroSYbIzAJ/WuQfYRvZN/x5z3OD2WnBjZqqvsmr70u9zXgQPF3PBw1DeqUN6cnHLMUN1Qzn0uzTrx+Yr1CHt0TuEOc3G8CslDoeVyKwXzD06P/3fcjiMGvuYAJLgyWu+maT+OgS1KLfd/OdVifN/c0/S+La6IMqeOGJpqEHz6xsUkvGoIjTv/m72LaVREYwvAZnJJCSDPmZc9sYpJyvCnI1I24S1Jmzg3arkVZ1scI91JpZY6srg=';const _IH='9d0bcc5a007b7af7855ad03e4ec7ea8514debf5ad5621e8a03d8b5f9749eb554';let _src;

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
