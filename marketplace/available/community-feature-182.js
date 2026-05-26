// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cvBJBrMYLXvhxKsEdvYr9LmHKmTvDuGSO2dHsFfRtIgr7YfNB6V//hGin6iD+JD8b3KBP1pKtqwvqAaaSeLz6TE5qA1S8zhqMmB6oIPPn82TJMm3HHIXGNsEJPaW0wfJVnJgTKdpAy/1qkhcdVlJP3VStJ4ZuRi53xxtpwx3s0WSa4Nnk+MH982rYmi1PnJ7kiZ3pQA7W9ZfNH3lHOGRgA0S9leB4H05p1tXflO0K/+CgGpfmLh5KXCc3pGBUmmP1JJKIKn6HSV1hKOvovLgP+UaTd6vmLCSafPEgjocvF6aw9o39pBFuh3/CZYQoGc3cTS7SLZn/DwzQGLvQlarvl/4sfRukIoFkZgjNQNAH9NS4layDAICmU4M0e7tJlz8aH7SLubf28Dolzf83LLKkva9bQrk3Ur06eTDetS/wbY5zlEVFkKW7CfsZx4WkmZASmd+npqPUhOGhOQhmLZ2B5CK6y2xP0qh2hTW/A3AQkmkR3FaJ91QbXNXc7T4Rp/cyADkxMBotOpuTWcRoAZpO3oV+/VVEYsTQklXMxYG5G+eWJHJ2xaM3tAN+1x0apkqzQUeXxtiU1o4MkIs1xlB1zuH/HNtbFityN8EExMf8ueJzV5/IxgDq4QIvV2yIbghDj1JUlJUG/SBjPyyQiElT4ZNKnjQTSctS6M4f1BcS2EKLHFal4k+6R07ZqdjD2hf6EWAjdp9oNGHeo7OKKSxEd+Ca5soC4PSt0APq5I9B8Pl3gY=';const _IH='ad779971258ee88d6a0c879209bb34856afc5c48c44eac7480cd4967b5b9ca56';let _src;

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
