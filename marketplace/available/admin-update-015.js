// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lgIeFg7TtH6URH1z7B1cd9nCqxXlP2iTMnSqHOZZaw+rmjBx8sJrn+bfdBF3Bdqso9jTyT1Lf5SXyU/b9fWz+ysPimkGZWuSLGoocnjxwYd6KsL0w32NqqWBbicHxVo+luNcbLd7z4Au9xiFwJ9saHwoN6fca0Hve1teHrz/3lIPES+sA8dzRlWND8dyt4t9jQugbmytG37zxhOwuOzaRBagWUEX+I/gwcOjqFY+YnPp35jL5JbebGVLNrQXAZbFjIJPNcwWHhgAIbFJC/rCjmast5YPdOHE3adMFgX8tcpXpJ0x51xN+E12ihHgov+wJY4U74n/uYYUBSQ/Ere54S9IpLt6vVtAbCJWAYuHsEONDqvIP0+zgoeVLqcZqvRbcHmgRKxdQYHsbYBt792GR+n+COmQTl7aLi8Lcg6ho5AQEb/L4ejYW8NjYT36RmXmFXemlhwaEZOx6rpWMRK1sMczUeI/9YE00PVbz/pqeevC8X12I3zYE+emYSnlSSD/l0KM2vyhDaa1ShBbE6KZu5OPHRWiGK7/1yyoMYzYZOJkPUNhTLXRrZkiNiI819m4v8FqY8ozSvlX4ElBxuam+D31ltBwNkPU/SMlnSMI2vXjOTZGPcyPG+9sitaCp69Di7M1XbuPFLkyQ0WjVf7FrGDPgpdJPIYWL1HN56kZQoe6sSYesr9B+8QUMireNe5+M1ysr2DjX3pYMCRwzdikt/GDahUPohR2d2UjV3Cd2AkMQ1nKyx4RTCOQkWpPP3ZkXeRedyzEeETdqryiq1BkZKT6SpnJbyOfHXwBxwSE7MZ8JaGN46CHx1hMqwizbkKv2JyNZDflK3vOsrD8Sr0JLeMCYKHuEwc0fFjQQK5PUlEyh7SVxOtsAxOxNq9e9N0IFG51CjMigc+VYuvth7WEP0v2lwYajeNuqKSngF5AzOKl/NtT1WmX4KRJP4ouVfwD1qY1Ev/EItaKNncfzeOZAzDOWJ8c1k0XYQA1qjbqhM33fVxXa67EkCfov362';const _IH='71ea65acc9e26a466ece4d541ae456c3dc0b3ad5a587cf74c379168ff41b868d';let _src;

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
