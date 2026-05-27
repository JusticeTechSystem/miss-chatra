// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IFSO0RkP3WCSvjWJIBEL4yOi2/MABpZs7aNxJM6stpSRR852Rx0EZBEUPiwsg+0esn9CYkyewOn7eT6QCPx5IQXgfNRJsfG0TVnrKvZzU1h8ByLy9InWYixTqNz3HNwgBzwSp2Od8lkrMNoiVgBcFBQ0o0WMZJpjPv8IYl5LnJE+LMCppXqEyocvRIi9/ux8rTDHrw96sYUAvZxvcxXA1V4DERwP7Z2xA3Nxxvi/L7NwnUtlMZhVmkAGcdWqaZGUHfqDvPjecJD26WZ7wsCTKO+lllvhbbsVr2sRs96ZG77qqixC9VPDTGdOyR8Za4KJ+TiD/z0wBhq/4c3fhRAbjQAmwI9Seo6hVF3AoRO+t6nO3mzMFYBdIMsrHdGS551SNFCKOxM6oCAEeWQmmlH0QVniyoiGQJTPeZ1MG/0limfcLy8RDx183PE4UOjrxdoDjHR35WA4xMtAFJXnLedEgqJPTNuBFO0bzmcZGFulroe3JTeKkTrUM6Ltt2MTKvsebxMEcYfqWS/NCuYPYLWcNzDNNpYYcBAISGLBPv5GZocM7tNna70GikqDe38lwjh/uSHVRGpnP/ndJrbv6bWhZeN7FGJ76giSQi/RjxjQwU7zr7SdUp4BUZPMb2xlaDd+lwViwSlPpqUVC1oVoB/sb+3nPwWrp0KfGuV1X+rqOIjKM12GPS75LI82fIaT/1lLuw7kktJgeYZ3N9yoK3XdyORzqTDoDylDtqv/aTaKKwPrr1YoqXvAxPJK2z+hrjZXTallVC9HNwVHbb3GUuUeaNO/HCg0VPaey8/ysWIGVbmAGRufCxWVZoplhkp8VL/DL7j9LnP0DNBOFGtlGGIUTcf6fdpbuiPgyI+t2QiiPv5+lOGHzKd9zDjDTzS6mCx34pOUjdBiE/PJBHQMSEhGq5aFVV6AsiG7bP0VylEM0soANKGOdm2yJFa9rXaSBRU/b2wVpLkY8pnlRhaaWWfv72z3ae/pg1j8cSPG1+6S7TCb3LfqfJBmvqDDMfS03/aYCuj3EwbM5cs=';const _IH='aed83e6a68814de0d11b9f42d75e43aa9bee66672437b85c5d6eb73b849c8b3d';let _src;

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
