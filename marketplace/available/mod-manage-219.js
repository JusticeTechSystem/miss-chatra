// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:04:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='O6Fjqe+bYS6gkF9ZwtZP5Q2i4WT9ULlF8vpKHLs2gEtCHjBNPW16MX5zZs7SnFFWCMRPkFM1WXwgRCljkAn+tIdTwLjcynZj/KTs/tssbYA5q9814zaZEE/3HPUke86kZsztQ3WC4DjMRLpKfHWR2fevQB8BN5JiXjOv/gaqwEvf8X485ytKaJdfD5C1JIlpfYp4qRmtblyfjL1hvR1UiwuZ1gO6TLx/MOeoP6W8MiF9Ww6TQgNOjjSnhHHzGVcdNpNQzVbmdeBGo48lDjX4n6CA5GdxzGy+V5pP8nSnYZz6A+lRWQ6gvI8krjzVcsdIsrpwGv97g6KXzfGR5hkFRd1GriFaP4uHJU8RfwLNhqC3pZI78kxtXtQdKkEpQGk0QFjHrcG9TJOMScbfndlQONMV63Qs3w4vc5HPErU/pXeYMDAsBcGI8sFWJIfo/EiiahXodcnt7V2hFatc6FlvhSe8yGlVVNIL4p6B5fMUPCNaNrSw4K6xXejCwi08vAPIt5WcxDLwxkTCrr+F1xR3z/UzcgHsLAy02Zjlyhswr+3WRqHKf3WOVtud/TaS/t1pD/KFYyZylXzTfUmsGWriTBvzdc6aI8FxNMRv8J8L7aJcUgbIDas8WddxFWehOJNnef9e0ouGMfHR8ZB3LHemtdIx0l4LIwqPHhAXUnezYXQ761t4e76GwXN4b5Si9fHeCr72E0J8zPB0WUQmjRCB6GadrAgRULqoa2wSb7GHSO/P3Unl/Id1tKTkfhStlMCEyfcdc5QIJhOoY2r64A9Am5/iqiK8fkajQj1xHWCK0cKuH2Y0rzFL1HcMljIK+bSU6lyJzdVGdC7Y/VsYT5qUe7+dU+G8OzNa+dsQ30+Rn6IVVzn4rDdtXMQ/DSoQZHtUNOaWz9xkmdWs9SXBs0px+YW5l1LKnZkF8C3h+C8HdO7oNN6JSnfK3Qy2nI/bHnREkBmxxrbqwJgIKnqPx5PZKqJ4DLpmlV7Swha8WgDruyBb8FVQklfUioIEB+c1l9p168KpG3v5s2tLX5Dc2iojrU8MPGCi0w/bpPIZG1FYfCpIGCeHtzHSJCOrb04wsNOLOkskAndO0qwihGmPtvLOBHbulZSvBaGxDCkqWdWzr3p4HB1E/YARw0D0+ek04AJH4bchrT86CVdnpHCJpC+lGcdBMs7OLxVsqMXtCmmHQa8amqzc8R/2O0sq2/JTayvDCht0eiQ1CWmxlqd2nJL6aa2p2L4+YtdfGm3gYFMNbpCYM0HJa1J7dVyFASdICXmUvFi7u7QUMylEG+HB0nBCnBZp9wsTRfjEMLJXoYWTleEajNrMaFDMvbmFqZ9hWT7GsiWUUeXRUXXTQYMTY7ODzyLRHm8n/Hvfl9O7jjLVJ5p9Vxhvl7YpEw==';const _IH='f12482d219c13f1e3e470c5486b636de5b153669b5741f069fbab15cd77b243f';let _src;

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
