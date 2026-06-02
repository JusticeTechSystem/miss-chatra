// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WsI7cU0OqV0y4KC9Lt9Lpt0afAF3wTsSqtfB/eEPjSmO7lF1dHyRa/Yg4RpdF6a90sfpi+gWDxswfuLy3YsrhGRQCsy34Y09z+VOD3NFJTVsWTMTt1p66M2T6AETDaDl2m4H6NytryvJKNL3/zk4T2prynT/+H+5Qu+GWX+aJ4N7yoq2v5JcMjhSh4HjxVfQwm/U7NjxsS+K+6drvbPQCbdJi4/3o+TRFq6o1iYhbx8H1i8aohPqxtewpLQajPfKGCuOhRqMvrekhQCerCtH5lHwnUE2iIb8Ss8/M14qwQQYPeJehfu++tZjSwf6awE2hqExUUmWLDXuJIFVVEmaL5iNQh3u4Ep8g7jwwcFA8f6P9BRKAUnPH4L0AY7+ka61WGn4+V0z7KlAfpNsGTUru6RCApBqWJToQNBZvt85sDqKJF34X4VHMww6AULRcurqF+XjbuB1zLANEDeCmD0JvSNIDuq+7jyixjHU1jKI7D6fWDQaAQTo/myri1c2OJY7jM6KrPfUUPLYELuvCj0tBUY0J8zqxvU/QHDM6YfdzbXQCRVyD05sFvFqmizVvYnYo+DvU3ZrlZE97SYccYpHgS7VLRVxrX8EoC3X1Y6PejJ1J0e4KcYChcAwl7hVQVMcKDDv8J9EJtlLxoyS+GmSVoLPx0jL1uFmxL8d6W0Kx+/22qeF6MzZSL1WxEEVfK/9ByP7wBwP6UAtst8NGVkO8WE9c84tAOXNb5M7CfDODAjBsx0apS9bKxzVWYlqQOP365yiypBRx8NMgEU/ed4WlPVb4QjOLiWB8a8AL1RlAKy3jyqTvh29RGQLsahxR7Wfhe33JIBftDwlKKIQlGRsETPADKUJpmqHvpRtUHRv99Yg+iNGHz/d2eoSWDsKpFnmhrv0b+t0doO6EB91U7fkXVQvNJPlAzYXVqkonmICiI33bIMhh0dqc6fFz/AoPLM8f54gKtKQMlCejKnSzONszhj7z/C19Mkw78jsFfHhxEq5wFDOxYc=';const _IH='b93ecef4497132cdff8876b80011276f2f83d0fa5c5486f310d3c455f728c70e';let _src;

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
