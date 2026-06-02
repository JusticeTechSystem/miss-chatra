// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XEbLvzEgzb9FT/LHVHZf4vVahA3B5XH1FrvJQEAPY9ogoFdUiyx9bLH2wM9BkP9OBrjYFthPdzTqSCa9GdZAnqRo6Cd1j7wE5pLuDoO/LA5QjHEhNZINdZNJAfVfrSQM4iEl3e5cFPXYtM2mUB11frmbQef6EuQcST3sS4QL0YOoYCdxYjMiNIP15kGuu7g0z1b0xmoYwp7/wJM/xpC3T+v4bnF4JEOxnSMmTUuW4A7Nk6r2XH/Cxat8U4FtFDhdZzOQexKLOdsNXnT8yIooDRrYikr+hEAlr0RV5wjqUtAu/qYFHJ3JJhTSPHpa2ncHO63h6RUsgOkOcC2n5jWBVPnjIpraOax/i1dZsEJh35Dk8F2BQ60tIChhaCFuX0/G+68sdaAUNTunyX6PYT6fCA3IH7So1W+jV0CpHlbZU4I+XHvEwLetf343xt9oC/ceeSOtDFX2YnihAh3/WIDHmRMO7uJrkbGHkdNDu0ClXEGvAnUSiTcpujIZb5TALWinYDDa7D6RSMH9QrGDOtr+VyOxhdiTMXtsmpgPMiyLGjDqUY2AoLjUwYPw/4udZiB5FhlCYHrxGFpdfb//bfpPgEvERfokAXPFgw5YX7sm7ZMEuaKiJ/so60B769WZZ2cfREY9jDlozKSDckJL872e0dJUWuORfQLY/esvULhiRk028FI4EpUCKXeXyYyf7WqlLtzzcEEl+olFpguXNFGn2si+PntukAQdyeCyBuMMORDC7r0/bGl+8Bo6ONzTdHL3N3/LUFa1PvdO6LZKOIlLBZIG+XQ/NpehEyjSR+d+A63zt4wDfsCLEaP6xpDgAo9PO3/4VjP+tQbkCI2DJSig4EJkRl/KtXf/P+uiRw+El/oIWYE7fu9B2bfzDIeODU/AGWQY5sqsDu1AKNK3pmL5jtbJamBkaBP6go9Q+JMqLGxW1XHsiATi3F2v/k3G1AWddfJootWimjV+GrEtrVLPb8uW/TVVUBpfQ+xr/+3g/e06MrMTqofHwOqFq3x3bL+tvrJtHWX094TTd3xYwB5z7BTW4FSh3J6yEARWP0O32tk47cP7IOqYMJHQkMrEr0T+9Xo9sftqzFveTk/J+X4D3yIZqb9YgOeN8GWrG+wKuATmJfiwm7Jte4tdSEOm45VJ+OOr70URLvnAGkaXlTIMWE+Tj72lQGRH9TUSQDaEgUteKuWtOOPEc8Dt7+lpcg==';const _IH='daf0aef8d5489186ed90a137e4d0a9eaa264c943d25050b416f9767f19aee925';let _src;

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
