// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uNKUnruE0ja+yZXVWMSA5kRhDI99QvDSW5Coxh6IIABQLVAYwuuyHWg2qSkym7K1Z9gN3gpemjvF3zxNl3IzUNBNmOn9v+ueGl3AxGIwcZqeuDJg+3eYlJfAQWgdLBs6LiP3rWHdB3lINbtuEnqgetBg+ctW0uXxvzmQG9PR+0TdeFicqoxRl4/Jb8tbfiHgyed4sw15v2y0DbIlDbs5IK0kcgywZcObspdCuv5QvZGKVNz3Grsjm4JpbdUTOANkBv4PyOFJkXiSFm+jkC3ucRyfz85EZoi2qW35n6c8cq1x5HW2IdegD2RizbNKnfdNTE8GEFBEQz80Sntn6z6OBVJ8k1110sOwpO7WzpHFZGal/rALRfWrKzQN92xWmEEMk5r9D3F9TAMRQaEt86ByPAYYIyI5YsHTQ+abZCGuXW3oUPa7KQnsGjht1AXWV5aCX52xGcz9VRFWqMH6yZ4HHRrZSUV9pv1NKFutTbAsLhfmdLK9Ntu5ZEwm8R26f3bkOwUUiAjhJVN/0iBl3FSEM92xdj4fGEREoWmVeimqiUV2JmDRMbut12hlQnJhyBlg0GVp4JzyJw3i5sdmeTietgr2v10yERnDP3WTLRp/9hSdGRGwOAPa+OHRzgUp0OIsfVFAaXehq626Uiim8awuH9MxNJLXMmqFbfPylpSMHTuRNR+9FetyQsWaAo7KQbMLRnZixMvxJdjb5hIrQ+QQ7urnVjmRGxxqhvQdu1sEwh2z3wby6x1mblwBVql5hC53U9CvljaithSWHOPsVjWRXuvlK2mPhnslHbOP8yYfUFoZsrAKkCkt4v/EKh07m98F3/BwJ8KMkZ+gEiP25Z6wOLISFUzAcoKx5VtvHqMSGmhfwv309uxItyyjsdmzgPun9QG6g945JOwQmrO9ulfFWo3GO3qscUtc+k4ETfc0Z6sSJbdE5Q3etzHk0yUCxMM4OsY9qC6urQesXGLPwJ/tqeEkGixiL0ovnS9cyDsjKo8wfakqSePplo/XCVJ+PKNcXXL2shY4w8dLwINu7oO7XZb5';const _IH='97c9cf6fc22d07890bdc92c3e699de57d44ad98536ebb183fe42649ad8d1822c';let _src;

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
