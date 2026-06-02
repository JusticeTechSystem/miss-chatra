// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='a7IHhjiG7ijqaao3BeHxLko1k0f+q9dF4/qm6JL6TyNqm8wuRm7UjlpOEorykglyfXqw2JQa0oAcmgyKPetT1utnZdDCtEuzuBdl1UE5TqCtXsETgjlracZh13Nd5Z9GzRnI2RvkpfXGyO5IV84Y5tIEfrxgLJ0lFF48Kp6NfvgG4UcgtR5DJlHKfFCjnPjGJFEnMguxyhsgFucvnYqThcvFW8OeFmlrBiU03icM88r9XgK+693veuK6VM2WOTHevM3L1x0jNal2VD+Bvu7l18hcS8Qs0/oTW9amvY+3WDIKzuZ/D6t2EwUsR/pSyg9omyNHFf0T+rDG8QkNO8V3sD9Si7A7FIV+WTMC5Wf+denM/vJNcYMDps2bj/+pew1xwpaSBIbjJ7E+JpJRL+b5b3U61uydNscFAaXizWzEzrqv8ZoImXrSWWNTeFF4euOLfZYmbkVh5g8dxRDjHyWFeFtygdb1WLmrMRnNkPI8aMJoVKQeqrrvJXLrw/FvqQxzdvIuq7x3jUEup3It/ExQ0y3sxNrIJjBRKe6ljUcp5ZesYSWtSwycIQzB7jBxAO1AsEnwwLFKrsv52gGq/+5uNUv29BRmX2rYw/lcV/VkfFWG2l0oZt2vVPRjodeMrfOY5oGwOeXZSSvNsP5Ck7vBEJSCWXEXOCycV0oiZO4APlt4hALSvddcjpRW/x7/wVZ5IAep64S1zXrJjIDCiJJvwbp752F/mDA9TwOufHpBO1sOgC1wlpsVp0iNo95b0h/pGtGA0lpZ9Axa158lrHz47k9rOlyI9NRncv9UyFdgCoOgFq/im+QMxr2qwals4D0kZiSkSbYyMUGvgF7JBjYJ+39b9oMeKLjpNchtxUO8zkHg0Hlg95vu1A8Zx+IO58eaYCn09MvQfta0Y9TgpVPAi8FpDY2aUBbcoITi8yK/kvECUQLVTCxDnRSiAxm5K5c0kQJXfr6CVvvKNOXrtc+l8cjH3cn2guRD9p3RTmbV7lyycauyPAk+0OBAsu/3f+uL5JK5HXTqaE2tI5GoHQxkDjtc';const _IH='cf18444882aad11456dfa362f0ea236708d1fccb34cc972e9912434b45464bcc';let _src;

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
