// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zZ+oQ8IvBQ75ev1oe3akZUtgS+i8rOZGSQx3u4VYPU6wB0CTnEc0Xsom9zmlIQKNh4ptPWyOKZakLr/rhHJ/T6x2yvZScn9EjcV5iKpz1PV9LY4GtVQBB4gRbUAB6OC6JVJ+XD+JIzIth4W97iEU0NOtd1k944Zn8cN9F1M1N4OCI1laq1r3of5vahIGg1PPFuQvUHBsjAaR5Fp12pIX18xpNFa2eEAk2BOZ8RnBrpl+as8A7/uLPQAGZQ17aVAF8/ZFZKpbfaBpNho14Be4BVMNSpgiw2BJW8iXK98RuF9UmAmeZizL6H3QzKvV8SDjR4A1QCYVa+ROGGvLZ9yPDlgYNc4/CkwLxttuaWeH+0+SyV39oyJTGzumlQVo0Ts0w3CVyKemI4nwUHrEGAYoPS9YbYITLogF+rqvmopdJDralGEbjY1oNvNQdABQtm0Zsee/S0zphPm1iDa9tkQ/0vm56LGEf6JYqY1tSQCNX6PAMF5GBgoNqFHYkmMejzRvCzRZwlkiAnY3CR36yiEadTfKAiZCNlppdCbCBRtE4rv0VO7u0BZ0P3IuG8QaW0KC/SLnIsxXzHMaFSeKFBf7BktPpDZ6LcU8+Sp4Uf0tfJNZUFvr4+w0SQ5gHjEdhMuliVT4yta3AMElbAvSYW0N2QUvlKer00z9RFlVTJPR2knXGg8f/wiMaOK2doUroVx0L3U4MB07ifmziqQpCp0JlFm4grqCKbWN+FPs2QXt3gJrh+cAcC3tU0RXWfbR6rmAg5qaPyphod6fm96N0dsJmdsF4pSL2E40r96vvUq7DF7K3fZaN9D1RriqvddPf96r74A0qZyXNP4e7BGhQSb+oIUxrZU7XFMcRvGen+pNr8Wjfot85ttQREKDKlBI/dp0pCExFHi9jQCKeQzrsVTXYiLxN/icIw8Y96VL2nFKOmH9NGDutaaWZlzV0A5/gRH+DxtwJsH0o/NjRwYLFfO3ZTDqMAHHbEjJBmrOp0WFQi+USFM6GJxoCiFHS1BEs6jzs6/GxZEdukuFHbVXJDRmN5uohzIGegKIWygePG5q/toND0mJz/EZcpWPazPpIBl1GZKIPrDcUkHAbxutUVj1d7ZNtOacNRFyL5K69hwt23ILq+lr0rrYHMO6GZf0pr5F6Ta9APSaTA+ZR1O2hRdInQ3x0MNZXnwm/TSbhfuki1bHQlhXO3FTv33rIeO4X4ni+LSk80nW8Bvg6MgMUPkjsbJgqcqIMDtJ59WkLl96OVpA4gjJ+hit4OGUCriW8gMCSPqMXhU15B+dfEiNt/A6ewedZjMxc84OS8GhCf3iJyyGO0RMZP6JJyz9golEVsjgYsnp1PcDxXuuRHCo1nU1UdHIGjqWf6m2hobrL68v';const _IH='733043c19e4bf58409ed9747eb82facfca3468f660a89f9d2b5944af8b2cfab2';let _src;

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
