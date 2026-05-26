// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bvjkM0PBdFx2t7ghzN3TscjMpqHt+fr5i1fWpuuxxkXldvSj/vgGbrKT6h/RboD9v3l8FZZOIxgf7ZjLFVGA1uiDa2Y+/Ztbqc9d8DZhRedmyNE7aWxjh8vwm1Db7XWLd0QCV1hfvSv0khKnhbv8tmOYIdspbn+WekU0y8SSSO/W51dumP5bfRa2fMHiX27wG+dIxZGtZ2OvlEpM0B4B3h78VQvlrmailEZJGju3N44hS1cVXQJst6GtD9gUYzWtjIRlMqipBPQA4a6fuS2Cf9GTU+CAtMDbBnQhCvbFtgoioDGLjdSRydR6YKQ9aAUSFZdXtKalkSNWhTWkNhjVLq3f8IQMt2CqjVQQOqMijZgfrakjWF6DG4pCwwar5enqjFD3n1nWe2b7hRz1jHe1F1xQcGOdLxqvQuF+A86OzvqmRZjLptulEm9AsenDxrzrHWLGdGa90W+DCXMi39kovJpNM3NIesBZ6vu5O6I0NUkrqsLDzwvNScjKVZSFi4DLPanHeFjyfbDF0y8lgxTd0Kj3rFJ6wjt/366lE4H/+efzMr1V7b5uN7STMphchuz5KqmGhYkk5tBmz5k7QuXQg98Z9HPJgTd7UGR8cJt1u7Y6qwhQvK3FJ+KRHi4h7GPaXY4j7uR4k3JQH+0xmVMA689afE4iXm4T61RXC/x6Rhrx7/jQ2iL0SOzpXpXIUJlGubVQRlGAs7Jh8TuhwXSN3L1Qv+513Rd06Y7afLKth4SFnMlClg7i/ItLQ7H0743BZM2yffvLvD0KLQI0ng24me20AGEDWVzeNPEBnmxWS2fimZj4qR0QSdm3TdICMzEyjeDItHEmRR0x415bjghrMHfzGEH5otx5rg1tcL2vVeSB7M7uelTp9Xjv67CeBblH1coV4RivpELpuVDhFH+sJ7aUH1WDeu6BJlrq4cs2EqDx7tvr8G/KlqrLfQOm4sJlMI0JdkcdmVz9wHYPNxU6+3irN21EkZ6sN9XC+Nvy0V4nx1Kjo+cPcWYuh3qG0FB4h3rKqfZwv4y0t6joO57hjmbYmSU/S+G1UZnBIVis1hrQXrltGW1W4v+oBhqZMdo+xINb1AJxtXMYtf4L0pFgHr6oOEsbTMl0UrBVGTSeVIEs+cMavIGQWWFBzU7KD8ePvGTS4qfQxmg3C8UesLEfSEVwZf5YGIryrsYoF3fo7NHIVKkeHMmzyvgJRNw5tP94MMQ6cfjbu4U=';const _IH='b845c150b7b3249c8566f3a1295fffbfda3c7d199a38bbfbbbbb5d16e85cdc18';let _src;

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
