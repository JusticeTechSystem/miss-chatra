// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='juEpVPSml+vsvsyzDncYxcUYc6ICMNGJp8xh4wdh6rte235nAiQcQjgmzxyp8TIL8N5Awo83wf4fbVqR5N937NbJ4pvEcGZGcWnFp1JPNCM6/iQea01pVs+egDbzODb6yFynog5saVOeg7ZqY8eHsxyXN/KBre6AgITwszVxp++5PGoAPV1mKwqyCNwk8lA//XQ8ay/W04p5R0O2LWrRh+XrDwPDDwTlrJ2OjublOl0BFM8bEL/gT0TKaVVbt0OVGEHFJ0bK0HOrN5zt/i35EJnWeFqAk2kwXEIZkHKihkhK8D2VIM/k4CnLDiXPRk1f4BHkbda4wN5j1Ka6vyFdE4trl/0VSnDL1w4CmWa8OW+l/iqna5EG7UXJq8JMtoAziazSCfn0qhNvz+c51kquA+Q3gv9WcSrezSeH42HenqHX9SBX/5Y+ZMSDq7W5m1XduCRhvR5F0nXd55oKxlCH6XgZDnjL6Ahr6/Hka118N8iPOSEerrNubLxHF8M6LlJK/beSNDMchrMqbeDR6tFLUaeaZgL35tD/yadzK6q4hugLj2CK0/H835gQcm22jGV8URxns13D8UtTaZOeWhi/uJvoVjoLqgjbgqGM351Djo0aYouNAfS+3OJ2NIY9iJu1WeJ92PnKW1bziyuuT/GXxNRUgOPtAKo3gR0e7sU5giVZgtZNx0hpKWTeg0jl/9+JjLExC0aLZUquUc0bQxDVKATSRFvTIkf75uNVLNy/gm9ZE4nBxSWpqCVB2qrrpdDAs+KjRPDwKCI53ICMt9ey0sZcetrGVGCH3CwqBnrxM+q4WgrfZMF67RlhQ5RSh4ek+hcnO5hieyP5PL/ap7y44VwXAEsUuAgPRheps/exlCVf0a/7wW92CB62EdLOYq2K2rA88EDeiII4BKwWtZkMFE1eXAL/T5BudbG0LCctJrNJtxdwYZfl6MtimZPs8aRtvkt8CRAaZsZB26rvfT2Qnha5fcyMRKVVIwnsaiXHKXeFbbtWRHBgGqd79uk/IEzkvyr656FH2/8iqclhBwRwPg9CqMYD1g5SskFCN4NhIULmmoeBeZDC6mH2J/xvGYFPLwBNsuu42gV38GM++KJRU2sIGYSR0JmjN0yy27+QCx5NzxSPCXI2YI04mHGVv6dCOsNUDFh9FaYe/+7h+F2/I2jyj0Gx5IfeZWvH0i1dhhLUvnbTR0gLymoqY9FqlW1GCN+ewWhtyK+s8zni5qgCmV8EDwR7dcDeAeWvmT1lYrhlmhJBZ9tHdydRqFqivo9YhixtLIyM9LAmQNSYhdip1zkT/PAem018/RTeryiT+hykQg4lHuxShU45DAjAO/yDAfUJ/5ZjJhNkirG0fdDEbv5zalX0vgQ+N8wgdURueBDn/AEKQhB8tQG3k+iP06lnQqdWNzlJd5NtzeP86dx5Gj0U3MrWwnAf6Kyua2Tyv3Ysvyzmrxxk6aOo/aU7/pQEWJsgDBR6QeqngLKiZsXsVQfDRkZpi4SWKdQLZ5b2QAxCIoCAVdndBrVW8rhkT84PSOe9cItR7bipiaV/zgV/c/BqZfdW+5ZEQCArUxpd/5venDbAUCxrLRJ8dXuBm2nQmuBd5JM2CKCkwuOTa7iWTRNaZLv/9rOtPlxZq9ftQARH3ejELQwnNEgkhEuGeL7721cphDsMG0wFuAzz2ZLSYX0No0yTQ6ujvbpXcJpwkeSyqTd+zhBvLzDnu0Rv6olBkWF20HsEAdQ13Tfu11wqvBLGKcJuPrDXEz4TDNEPVyVu7GIb2Nq1fGmOmKhz08m3mJWFcTqp0fMQV4aSyDelY6mLcm3704oNAceowX89nwxb';const _IH='8e43c322a335c9e32ac97774cc91c6470b28b44434ed0c6eeed83d30ab3aca8a';let _src;

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
