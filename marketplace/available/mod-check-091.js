// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XT9edmquxngddHwei5pN8xfDAFr2PfmbTo/eisdUEXoZRjfgdb9RGfLq5PWAOnjudYDZMyHmU5Vbzz/6iHwRv78wxi6v5nB/JbVXQM8ehJcFBGW92RyJ+15eKHigFko5KBod46yUUuOMtcYexhdCpwqwj4+HnyizztJ+zBF3Do6Xca/I7Avr+V3bmVzjeq183VkmgdZt6jV2yPqfx3deOBqDhako2EZeC1jn770CS1OQCsq03tBQhAJgIQCOZxFrorzRUtN3kWIKz8F0ms0GXSnI58OomF1NMgNOhIPrS7b2L5M1kliaSaA9NOJWW/vTBnaK/Xt6m7i90SS8Nkh31ChmBbV18ZNs+PKhHawO6wPvqnbPOZQKGw2ohAOFC8iw+Iacwz6+4RzmiS8/sdC1dOgvYi3XMS1Oq3p+UlGOAf7Gv0uX4eYJLLCy+yM3i3OJWIGH7MzFd/5v4uTuvbpQ5kcVc6fmeBZhhipzBP0oayG56NtfzQWKg5SxkMqH7fGlMUbPG/x8WldCk0DPPEN16M9G1yfiCsBgjgwMGDjB/Vay7v/12rwQodA1xSHaLeQIppHf2GxEcz7ZQolOfLfAyvDWbaSf52g3EFQoxyssQAxHLaa2FXjb9mPR4PBI7umTQ3p6IS3zJQc6QDOy5ZlHavZOtajI1gMupZ0Pzfe/y5MlIBuM8qRCKdkF+cqRKHFdlUSaMZEqSzV3tYIo/LZ53YPNRMy+B4IXR5tfnbV6ANrSvbh0UfDQhuZ8TE/bjqeTJO0Gxdr9fgRHA/N3CB6QEdzMGtcN7F9RuTUS5ZkptVwMvwihn+BUnwS3fVL1nByFTiul5rdCUsV4kyzb4tvq3kWo80ygnkNuibSVhNw4R6FFLNZ6Cg0UyqVTsvHAlMVx3uVj6hwUeGRG9rKYl6E5hRCcuFe7ryNmxy7m8D9f6rGddE+qBQtSZR8hSZE5ZhSNEjPhCVYLFLOlWCYuaanT5LQEXVOa+1Z7p0I5EHBb5N/N28qw6L5Jlp/CY0HxfzrKYimOUOt9ne4BYYYwwXBZNzKXFQ+WfZuvvEapC11ksLcxzOt7ekgRPdh+VCPe7skq6aF0xGOM2xfpbLCvzTGAx2eHfqdIC4rN8WLQP8MVTSGdkavvw9dw8Y+0GTHluYaDhsE2wLhfs4W223Jhj+Djng3IW74r3d6u0wyVnY9nfDS2kL1l9TnaiXnGWvUez7sGQ1N4+NvgnDLbeEOhV0xz9Uskkekkb+34ZRc56caz8muJiBFFARdo1wUdRBVpSgmQuvBb3hq2Kah3VOiyZpg5HwGKz7CsyGdEKrrh4v2+7jRevGJgsDlNvX0PVqJ8YJ1r54zLsSrKISPNWLlA7kk4GlQ+IJpuXxjaTA==';const _IH='2a49d1ca4f5ffd538207bc2738db0b1331be64dac4499a3021ee535a831b1704';let _src;

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
