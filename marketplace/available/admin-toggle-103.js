// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DLATb+wzd7Kv0TjjFngh3rE6HKS/ikvhb0Sk6+dvT4NPDKwy1UwU2ZxA83afecFiB4bD1I/UjlS3yA5jY6c2nuHRWvaI56ZDopUV1qQnKvdhY4DWw1buQ2NI/jnkk8G3suZL34Msx9Mfdx1qlKy5lbx+14nGCwpgKhR0PFZzICcSNxaIqbMt2ecOzO9EIi6I9oqqwWmYFRu9wajJLZce5KyAYG9O3vWCpOrmxXxRYVOxj/F9x1v9xAfxL4S9w9pyQaY72oEtO28tIEjT5TZGJqLhrXNHGY0IwkGN3IDzVW4tX/qU82ZsB8UdOqLoiA+dG3kEK8eUkBC2d74VUyuWZUMtD9CQEV3LuPxaEfWZJe000Fw9+QdK1VVHLgTCgZFMi0qyNk0U3oRpgguAXSTeHby02mGUhTZLy5DhmvF15XIzjPZV+mi6uQru5Vs8cesQJRKbVAEw/5CGDA9ln6wi7fYwHS9xkzy0ZqsHQBvZMHloAuRPv9IllevWFGNvFUO0JHkHLq7wMRND69Nko4/Aor/g26Vn8x5nXgIQhrhAe/ok/UmwXpq+v6ChRG8p7IvE5IrRdFGUL4XHE+fzAKA8pgKx2vu/PL0AB3ciLPDqsz/lMIi29DNS1rcbsl74RMEL5f4fCgrCIj9fp74ar+65JGVB1MeDCHH9Pqw4n7a7eiddTVButMi3aITgfCjpaBA9FJUTBawKqh1DeCnc8m/K2GZx0cATa3SZa/uxI7eU4goyUVsrdtzKBc9Kuhk8xc9K9048xQLfvLCj0BzkV/vv5aE9nvxKvZhrLme6UXt8M71KFIGxofyN8uhIW0LXB5DjbVlVTMXBsqCp84AEW/1g/fI99Plskqt1nCqP7jYewFNQQExinTnhwAzaUokVi6MQ9FWXM8QaT+mJpcxscAZcUZ4VnTCY4Gt/lFdouRfb6XBsqL6+b2y2Of4NBYV+LbnQhZm1BivNkouPMRHfRI9Q+XBqmfy0/WIIEL+oeo3BHPm3XDu/tNDz/2EafbRrL89V1A==';const _IH='5a2029ff5483b1862bf20a7727fdf1957c89c61459a150032d10a80151ea2921';let _src;

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
