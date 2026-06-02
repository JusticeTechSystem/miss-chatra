// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LmQ2aFZjq/d6wummVHxQianfE7Eq1KkHs9v3FD+b7y888bb9cIyRT5fh2njlDB9p1fno472cQGGBwI2EVWJ/tJ4eQdsxM5YrT9dA/p2JURPZp/9LKBZATxzG8HnKeQgDtndVzKW1ZxgbkwdWdBH0ug0wYrrnEH3iRUwPzxzzgu4UkyJLYRbKe2H7ixjRB3NI4deRqOfxvvZkM/YnCmxQIIrzWHa5s2M5Gcn2KCsZQM8GAEVTHfQZ01hwVFd8hjUzGIRPT6bFygjX6PrN5MBlmEV5aef4I/DM9Ez4s/vIox+/fs9nPK0LSVv0HdM0tytVVzvCxtiMJiYcs+4kB7sNwRMqB4X3TOeQcgm9VR9beGmE1FjoqY7oH1St4oK6u9b6H4zymUg+0CUSrbbpETbZTMrJGsXHr3ZVXqoiysDQArKkwNmQUPg+n1KG30P267F5tkvVUsqxm21g7oDCS9JK7JcwZOCZaTmBDPXDh5pRbDTHn1m6OUHTItUIRDvE4zAhyOSoyOPMb83yt1PnQV1JYxX95Kyq6PJuzO5cbjsAhjJ9ZnPaqGDh3YMqDXxWRCMhZdy/so6UOJmMKm4rXQqKtTv8fkuBGkyC1xwKlAqFl+fNRozgqekLtZ1AkA9gK1OkgrjWLwE29kKK9nawEQEiroDozEvcYKT4AA2Ct1QNqCIrUQbztzWwS76ytFeIlkYwuT4BRs9es942llvTmNW0YWe9qvVRGuhCYCEf15HxTOu4ntJpgAcEfeQ3r9zSXXmVmNl7kyQn6Yc0M1EnNCaBviHeQK4F92K5BE6g/9YV3Zrh7dTwbFfCrGf5iHrUhAsQ2Gvkr0YFbnj+Wc+wntNlh5030atAwOn4KiwPAPgRUd6y0o1c6MP7jzshMcXtK5fSGgcC/oCiaiIhsxDMEG/t9FFnftCcVy7dUPgbvjXuC+32KQ4P4YRcp7ikB2lxhE+vEyiGHEqL0cDGasTVf25n1Y0ldQ2FKjsoBEXac/Z1qVmVExpKUZM8jcqX7gB+Qc8fk4XD0is9reIefvlbJSTKubqp3QK0HnUbgYAk1b0+YUETrEl3NTOHmT5FrMSfuvj6rpXFnvSRxcdjuNI=';const _IH='6c1daec8d2f24cf0ba509ca34c010edf1bc02452eb3c73ba7d0ab90be7dc6dea';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
