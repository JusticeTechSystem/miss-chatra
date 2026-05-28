// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NvfHPkB/GymHfuH0fXWN2R+6dHnEe12nuV2nRHj0/xevg8zpIo0HpCr5bIQ/KvzoyUX0MFWy77huoWstdWOkw510U4O0G035UM87IEY41ItLIMjwx3Bg3z0dd+1ZKdjbDPQfQ3l4hSbHIvEiDnRMFiZMvwxZ0X9gnPIyo9VWG1HhZGXPv42m5WlGGaKKsXurFvAY/pt0U32sk9jMl95AyJS2L7HXYhvij7kB9Q5lZoN1qvDZXZFh1TYafXqGmz7igXQc0CXo72MybUbZx0bpEmu0zXt9wRzZUpCUp2PHDxwgExFgFfG6J9kw0Mw3DO7rp232eTbqgiv2jebaDhMFyhv45vKV9TTVyJas/d9dFLarssNqrzeYcyluzlNccrPR9P4q5G10U5cbNTGz4Iwyatyc7L1Kwn+LTbAS7g69SkC/n25mQiU7whO+2ZWLielXhTSuE+eJ5t4249lvxHAk3Wv0Ik3ViGFUgI4hVg5ksCgM8eX1OSZ9UM73SJqTwcvVMQosvH4/nzT8N0gi5ctYKGrNlzhPn5B+b22eN/dThF2rk2LWpH4n9U/gOY/GUKS22NauJ+9e7AXZB6T6csuCHLl+jPlE6zTk3XdhppUEmHr5cXRkuRibE/5jBrDJWvT6wDRv9n8cAn+9EoAApAZJ6feAZ9FvmSYNkn3hzWWC/fWbOFzeoiWOkYgIH0+S5dZYr4OEwfa9Ob5eUxWFhNFAshALvfKortw9ilevNO6b5GojjYNcY0fuPiQJn3IOMadsF1A6lUtsjxu/2FWNcjvyZUFGbj3mW8pKZ7KysXugXZhEDevIS4VNhyIROZbG8BrXV2B3cjLeo3cNq1WMseGylYlvSDWJZH82payufR3WotGMbCI2QaFsq0X/bp1YFxooFGDJc3+tdXMAnyOSpYxCjBGIg/XOXNQSvlCNoJzSrHt0+itiaVsIUpRQ20lHZ7Li4xkcLWgRj+bnkVQus5V1vzUkRGo9xSTmQ8EkoF4UkSMwwyqi5CcsUCpq';const _IH='c7eb63dd427759c5f3e3a9c4d986d6d6bd5bda5df92ff14b0189c5c39049c6c0';let _src;

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
