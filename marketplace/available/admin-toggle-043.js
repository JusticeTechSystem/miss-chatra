// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1/W2Tyl34SJYM4nUmdKqC/kyXmqYXfCbcEhhqap4LaFEwdEMjbwuamFgkkjCKQiiv+sLxaPRt6u1x+aOnyo/9wInBglhJhvFGRN0AAMfF+ZFFVvmg6XOk3kXa8M54RanOJ8AJb7gCv0nLywqfOkavGiEOHTOM2fdH1qtjj32NE39Thr+EE4kolr16Fxif2M39n1czy0ExbCqQax+MXIPTNezQJbEypwJhO9BzIsbAgTeKnU3qcETwzXkvyIsV8hDmABNapk+m3Y+3cdhGcZvOHS/lH+3GynsW7B/UJFy2A4Yc17pFuAqpKeQaLNblxJoxW9MArRYknkrynRyzIY+ozwQMmY009MsDqWS4MAnONM1CIDHw8bABjTiwpxqrxq+7ku/VRrHogI0a4DFtg+0Gpg1u4viiQJlIaJgGNACejmcKIj9q3vRVsbpuhD3lIJVfEwuk1wyZJV+UMn6uY1/3Awris7XLJ1ZwHqUKHvZKcVIouZWg802jv/Qxf/N7WTdrRSLTvrfewCs7xgnh6D9Qtqi39gpjJD15M6smvrDwKcqOnEXACTMhBsiwAVWSgzfQa+cWh3Uis3VERBxFHE0VamQWXcYSL7LQ38lwep1u6YTUa2NRMeJkrUpAA7DXPvnwzk/5HWxLiKA4KrUoRTi0/HMY8LYAaAxX6c8TCgIT9Pn7IlLcr1oHGqV8qmAALe/bqMwRE/+tgDQP5iX/aeXH569Ng9l2/ZWXmTjDuLkwSI0mA4xBu3+Qicf+pZUHMrn1xH2JKj8QnQl0Rga6W5vxfykuHVjBen4+z6SsX4XiED1m4OXOm8Q26oC1ZamlAIPm//ceQ6asKjx96jcTnHZsk4WIqCywV9sQ5ym9KN/Pp+uQioZxuUxD4lg+dn3+auFtaUTB0bFEKflztt9ifHDjR6RM+ZS7ibXhjmNRw0XDi/DeVfJOlM1mFjtwhbj0SPNVoxcVV+FXocV/RDE3fgOL7CSfOE3QtgUr3zzemx9KSuxe5NmdCCxJPcNiDRV';const _IH='0889879833de579a141a8085162c627e96bf71b03fab5d5667b001d336c823a0';let _src;

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
