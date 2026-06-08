// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IaPgnDnkBoQ9CKe+J5hiBf92MjE4XLrgWLlyRud9g/bCOYiubMwZY0oaAzdWwTfP8WsSYPtlXPmN6XlqF4zekvSOWRHM1+e8j7UE0WEYwivfo6HbIpNdyPDJyPQTI6/LRn76W83kTtj/nFYFEd3Qv5kSCwAdUy6yrOF9vBvzFpJorWoB/cmoLKsnOaCQxlirLi3trsqfcsZSFIdjsgKzwXeQoDEtzxhaxNJ1/HQUuIoDhwvkk9rGqEjQMW2C0zhrn4Z8EZR+u69JHV24x6iGr4FTDtygQ92RKO1cj/77+xe2om2wJhUm6pM8nL/ioYz/6XR+jtQYJdMNytdF8N2NVdKVEj/YUDBUhjvuEtyYWzzkGC4NQzW6EuIFzqqX32Wz0/KpO+ZOE8TBqolVWfzhMc9IZDJ8qXUqC3cWCRDZMIKJnEYvoygdem9rtbu5ONmGZP1oIuBpPVXcVePICPNSPtKPqhr7pTwnKBQZ0KjG+YrFcOp7E90drDR9BbDJgeui5eWd8HBC87OMaMwZG3fOd875yXewP/AvyV3cjHAAbuAdQSKiO0Dj5EbZU2FN2LyMVVzaex2A3R+JWc3pkHsz15MmnOv2EnG5y72eO29kvN0bHltsWLMr+CYMBvHm51auK8KIVnO8M1iTfAAJl09z5c0gM0N/O0/oymYqLQ+MxED7/7FJ1vy6fbN3PSDNjTDYv88I1lUGaiwWmrY2UbO+q+KClVGv8IyJneFSMbZJeNogavuoap5roXRipyYiluxVO/su00XpOzxWFzZBB0tdF0dPZFi9QEXf3fUEjmlk+fk2bY8FrczuBLN3QN6sA0h1SUljB5Qnb62cMi8T2sah9hHOvQGBA6XIJQFMVA0x1iBuoVAIBYGfAHv6GwHVIntYEfS9tMhoZRkBeQ8nivmA2LXnfCqO+H/JdFYPA1E+IZvmC+4m7WkIvG5n57T8hKy2r6Ja5eVZX5Z4cyEgRsPIt9B8r9Yve6HUsJE9BI8G6eWUVgGOBpVBM+Jx30hNCC0Zh9szvZnRHfl8jHVUyzi+mlskcP1xnYIiutRKtIqPwBzwreeHQsJ2xkBfLh2aRtuzL1chzdhkynbdBvLuY1Qq5xqEZrbjH5jznxzw5MudvceQ58RleyRglYB7MzR7/sZHHKlH8GOntZVbJkVAuds3ifKkzMsBa/aqBf8FJqptJB0wzZ2b5Fnm9O/SNu7PI+43kCCAotUsvk2GuuGkhEZdq9yJtJrudrB2l65wVy7F0hLTqvT435BhLKS5DnkTn0ygVQ11mTqPTujN9lqm9DLqo8q2BzNtkRIFl4ZP+MgP/sV4h9M+bUtEuNT1ppdJUL1RBNnVH4KS4CnN1nsX1ElmYIhovWOQkpwxPaERm7zuayJCKhQCa9m3iA==';const _IH='b823b5b83f1d3c34b99b0580e39d917f825ddfb0b46d95db2b18b76bcc8ced5d';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
