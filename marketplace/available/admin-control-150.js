// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='AXWQHSJbpJt23g6gMnhGAnx4/6EZ3WuRctrsK59iY+VZZkG7r9rD2PWqeB2bp1TePupA2V8m6ZV5wqzIRnbVa3Q1REPS7J/GXIgVW8TxvvQoU7T4ETwUs/vW3FmUJhtdIZhhBbqAFQ8J/V7adnqJRYpFnKX94Ycgu/CCy3bv+zDEEnmIfZsV2mKpp0FuoO/qZcS7Jwm1YfSgRcFkk/XLJi/XqpivDOjTnBRQYRzfVr7LILhgQuaZAaUN4wjws6fPdGx3qFkOIRyYzGdDnYmj4XjNSb12E8Hv2PMbPP5KVNUkRu8BGRNTvz13/oPwMjvQ3WdSijznl/nQOJpTsoPY5x1174L2p0J4Zf0GLewBURaqe0BTJIBtuiCw+I5ICBdjX3ps5661zvpeKPPZi2A91DTwOGwiUmdIDaRCi9yOb74rRMxA2FTHH7Vxn+fah36RIdzDYl+LdaJwvaPxHsDJ+KoIL+hHvrHCw5SzvbHZ9kLcZ5vkWOWAL66lEssqQrc3SLloHcZb3MxoksRzl627k3N206gkOatrlEMY0gP3vxkpYsSomeHdubLpHmZenAYKscFjQL5UFZ0WK2QGrx9UZshbGWzkvMpvpvlmYRPEBBzceG1H5htx9Oxl8z/+dX8reHdVyYawEeEJK2GX+104NwnuviTi/9OPhPHLMdMHmdFYroknBwCCIPNgqNePm8VaH+KdR3j55flaQDVvtMXYYbqmYX4UxhVVm6ID6xQkyxqakGi1X2BJ3s3/knza/KZVZjck5jQ/0NPHBz4O928lMHQ9NbILOfoYGym5ylGUNaF0wSrXevGYLuKawFOFtDD5SPgtw+sU7s7qOxa/BXl4YxURPzkmMQlho51OOOVR1RFdCppJbd12vWoGlMSq6u83PaA7IwisbVVIIM/Zui83XT0KBaRb221Vd8mKCff5EeXwLpde9GpOkFz6tpupHqMOM6e2kawSe/ln8BQ5q2Glz3pPJkgBhG5tMDcyrzuWnvkKrX5Gdu65UlgyoMQ9FZpNXfVbtwerp5E=';const _IH='6ed16186d43183e14d337d536434bd165306e641405e60b199b07b918e7dae83';let _src;

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
