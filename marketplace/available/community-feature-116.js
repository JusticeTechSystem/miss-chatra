// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4NVw9udr+GdXpuOFt5CEO2ETzmVFvSwc1phbEhtYsAKHsOinhCrDGrDHSTVUKqgpKdF4GkRtIxwNbRcU2qOPwQ9bGo/i6+B4INDOzMPnYZKxfdFp5fZJIWV76cXY8OopNjw0EYfPHZ8xNOxaD9bC4CoP/ctVrvDBTQhA/3OT4NyxPdctTyPMVXt6tTGN9pCpBmzDwN0mHsZNK+AezHTXcuD7fYik29LFvBxUWzGgkhleGhdeqSbXrLNRN1SANaKgfmbgx1/tPsH5J1tEzUhov19IS/Y4XCRU+LF7jIv1B7AFm5fIhIp3SDcoy5xPWuwk7ABRSPWU5qxCACv8FO9HBqs/OiU3FRwJnlKTLaoO3yw0bGuFJiiczSwxNSeQDytJKBxOj99pug1gmT1wKeTGjbADdlX1WXyRQp7NJJ1wvoiBll6NLi7X1XpyWh26ZvXoFSBAZd1dKu6yHLo3+4Y2ZQp81p0xLriOwd0HgbBW9gPnoEB0tckgR/B7yqmgDuWLivKfv+khj6z/6cT4/tSBi+fgUcDIjG+5d1Ws9bW0ftiMM6n7Vtyf70XX4ssUq8liSn1W4+5hvNDTj82ehwKdqA5iNzQFgqRqGAlsR9N0sVAKzS/6KANDSO3Kov1b18t0ADLXmZL1b1+SkaG0rOmnYd/+dJzSJkQo2A8ltztryJOBi1HYdPjMonRdNm0CvtkIWOnKhj+kITil9F2jNPvDhDaRJgWVw4Ae';const _IH='80917669feda2658df4a5497018da6b24fcd5ae4d26d41366b4bc33a127434f9';let _src;

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
