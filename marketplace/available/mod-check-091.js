// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CzHFvS/6fjpIu3FfoZGROmO7llxIZPn8E2+MvDuAUWmTIJk7WYw3fmr+y/eu98OMDZPoMCwu1JS/wOrcQOISjf9LQr8Gghr5s4dfLuAyHSEd+QMmTFvia7mKOCbfkhk0E87ok93xHlfnuk9NcHRKM+/d/LbU8Wi+raEow2Luv1npxd2MEUAtZr3KVb8ajo6ljvWEUgXasKZZyLlnUcJgz3gpJ75XmisdD6dpDBUVRW0ZWwbF55dUJgjcmKqTJE/H2PHajCNk2XbNWQyW+jbJHAEWTw9CAx0U5s61ZRq9+tXNbBIUL+sCtziIm2s95or6hO33irxwStnjwF94OS8E6N0z/7lGYOeFIIqMaHdZoQOTlVtKQS8e5lpmAI022WdN0rFzX3dhSnJW9/PlF3fAd0M8s0eYebnDKDFyfnQcwmtxZEyh6Na/ds27v7Y3QyB1IEn2LsfSxDS2dyA6gipSg/SnG8e9eps0uqwmO0/sDvVK5+YI8KY8wXaQKwBIjPWiFU2xYBve57qdeJUjB3Az+V4M5IHSHXB3/LBrHI+zeSAHt6ZD1QPCczA2f+kJAqLdOP7PHxz55ziCX+rXPhiyy2kkdRBg447au346NyxEK3fTAZdVAIrOtKj2ExWMZy19i+4Qymm2hRjMIITzPTrRAyEBtC7ZmqNkgeBb6JVLgwJOqdbu59sjInROqrWkS/JMaYHrux132lLRzXItY76elhaboVUIFv2H5hP9oric6o6nP3n/n0zD0IAxW1T58yMz1BJU6DYSCy2Bo66sElLcrWW/rlzxy2VxBVvJEFx7giG5Naf9M9BpUPsth3+I2Ymvxsxcs9YQjnm1GL1E336BBIdt2V8VK2qzAg5OTlE6k8eYwYxLQksEhQcD9jLvpijZBQ31N6gCJX6IROj9JiVtNPppK7vrjmtURBpMjiQr7YkLEOclh0kQa0fdRKv7GUPrdEf+XPn38AneL/LrW5HXKCpl3N25r4pcRiT/jQ3KG07cmz2VK72ldBcWaRTEDGjwVkkF5IpfJPYXWBHv0tEqnddyy/1fvWZTAaglz43JQYU4Y3URr+tv6x3ST5eOONoEN2hnKBnUfMfNuy9Sy80z6pb0pDp+cu+36bt5Xl0T4O4LOhc6nD66fIgqbacKiVWtegbXM9gv4g0L0skU4rgTnBlvguIpTR61nMlIApYrtOfX9dIv/uhOzwHTYs8HGeIpMQVBQaqSwz5kL7xGtxzBRnKCHbgUnXBe63nMyULJgDInk+sIDJF75DDdr0LGEtY0fS2v8CU62Cos+MyfrENWtv6XrZyg0CzmoUpGQAGnKEFcMz2/gbO7dGE0D6SEcd4ome/YRab1ynTzgCijG1VMQxZCdo5Pv4vVgA==';const _IH='99caaa8957c9db77dfc47ce29cbe4ae99ff726cb5be2ec6cde506c57f74f0efc';let _src;

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
