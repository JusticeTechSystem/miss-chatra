// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rEkLteQpgT+u/2wTwSJgXeQ28qBj3/9icAwY5A8bMIWVZPnjsN01apuiorakcP/yGTvljrzNwb8ORZkW5J+4eyZKXF/N+Yq8dI1KsTQA+/Hxr4uzBvotiXK2JWe/6BVxVHGPMr1C7w+Lm1WZ0p9tCbsqwEs9uLvcQGQYsr14M2VnyLxxp1+jdKIw0AiTxbR3LOvwE5xPd/mf9iVxL8P95XbvYppmr6fDukJi4hvRaZp9IdZ8WF+OzUbDzpRj/XBlhQ6unZHulRfz3B9hN6o2UxSWAZuE9WuQLllYhseDchCwYYtC9dn7lluO89vY1oGP0AQdDejiob3NPq7HutyTgg6lCe8YrrN6Iakl+3/zecYtuicqdtB5PlvIAPXcte7tqYBGo3owTOmNmXiiUXdXhrfjeF6fereI0tog22wHJWKjxOK53UZVnWyLvFDdZq/RnQFMFL0beIzwzG61X+xtZBOpLzY12Re1eX5kRZNemGrM30UHtPj/a8T9wNBbRNqsJz9K38Hmr3KuaAbMn5HtrJDpKmc49ohkq++MaptSI90bc6yXjxFK0JekbFUwGYY86ZrMXOIUSdrWKfy1e/2CADWu/u/YdZaYF0ipN5wumch22QLHhzODY4PEDvihLaMbZC4wUEoKIcEjNxWmh3/nMBbCSkQKApCw5uKdSrYFH/+MGtK7p7bz9WPiEBu7kkNVIvyZvJcUdIMLzgDpTOzlunFw/2LNHev6dT+FSJLnWzNWHpqMXEf1HWq8XZ+Lqr3b+pBs+Pjm0CyT46Ze2xlv96M+DLNAjhb6z6gvFc3zI0qeQre5laW26+NvfXNhXxEKgGj6LIYbm/ZXaz/imUTtQ4DyAGf1K95A/5+PvV78z239WKWXd+Aw2SHL8qto1X6J5Rn4RMYVRqh48SIJf0igoOMXhnz/BIDonLeHtM44BdF6cMZr6Y4RcdVLkwx/fT/k2ZE6UcYmNv/8CpGF/CEdQGaXO6kqe37Z';const _IH='3d4fda60b00e1147174c0287ec63fda50ce9eba8d42ebf08a582d40fd597072d';let _src;

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
