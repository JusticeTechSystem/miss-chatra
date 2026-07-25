// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:51 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQHQuuriyTahRRwtUX1Tnc3cL0hN8/qhieU2dC4qj3PRjfCNLqS74EewC17eEkUMl6JDBxfwYUENVTFQMetCl0o47hRRjZT/2NuPMBaNIp57ZgVF/tcmgdB9MV0DFZS2OXa0yGuD0AtylPWcz4WPX0KOv+lahGDXp18tDWASLIDpGoVYmrii1611Uv+j6UJ3kFhX1i9C2EuvApW115SENW45UOJhj8JmkgeE3dD329RNChmsEE1oGqESv9zFCvL3qiIsoiulwddwmyD6qv64sN4ZVaalLP+edGVVNTnZw7ZdhEQSaqXRZXeS+7chC0O2dPTEAvOAsoVn6McmDW0Ut/LgNcYOM7K6HSYFmRz0xx1YilTMvcYbzL5Zt4j/yCJZ9WX7THHbeeJqt0euqssbocUVhNtVq7nGLkUgcAofY7WASn5jkOcMxt18FAMGa6Uaw5ZTrbheAfi4C+eP8ctvOePLgFC9qKTgL4hw9ZLqX4E1Z5HgEgkcMt5f4xufc27aC635GWyvTBQiVJ1ZW19qF7jh6X8XQu12o9Z9AqDIGa7XLZqfUNwf9HF9uJou2NGXcNz3xArymekIMhbbRyyhK3NGBcr//xuzPSCagBwfMfb4VvP6/8K/AVd0BNQaL4DICj1Z0hM6k+rmcN5mjU7232D9azEVYd43c8uH++PzIhXWDphDflPaB3OWTbmB3TB/WKsVqnDU8s80SRp6PcHuzOR2I6XFI7tt/nW9Ff+l9RJ710G5K4E2/1DpbqL1iNr6DgKtXY1m8LR0VlmvHzfnkXUOCytJDXks/Q+FlH0HpCoNywiwZg0zMy7YgpJmOs+sMioXEDMGpFzUE8DQym415m9KpYGu7reADGCCdOVBW6v6YUrLg0IGRaByJwYdaTmv3h3xNDBjLFS40/LmCzgQSpEVOSN5y74QP6EuBQapEg7yGCME3iDi33H266A0OJlyxV1Gh2UP7Xm/feYEnJhyEoZDqYk9SKfJ4ZkVNzlE5qW3+N9NE+7h0wF892BYSoAF31Kx4yLZ5C7neiX4QLuklJQghIsutYDvnCMIvZ3TsenRFx7oooDmij9yM+Faei6wabOKguIZNsKagAZ00W5vhKOYzZ69KrTF+chlmCzQ8QtD6F5v3vU5wVuSNjQK4hYhXvSpNA1WHDT7kAcMP1oDLX9XfZZ1+/hmSies/jOBXjdD+c+KhL+U9TZ/ZUr/faRUciJrYXroYeLHLwNqQtsx6Qf25x1AQ7Tcww79RYlXfVjWgYzrmWSA7eghlCmfAIt1cFkCBlMfVy6XaskMMo6CoQCoh+P06OGO1rqfliYW2wZafoSa9r7n7CWgX21L2gUfNeXcXv92re7BUveqlLPKHSoAHRgapG4MN5oto7XROGyfgI86tambYx2vAvahwJQ7IJvoailSlQzFOadXx+yOpvcUiymQaN+EIsutFx9corEXQ==';const _IH='fc8eac02daaafdd63114b5a6b37f87469a4f208b06efb6388770287ac2245dcb';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
