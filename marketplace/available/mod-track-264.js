// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8ty9jRf6dG7/DlQ8E1JqON7PR28hfHhWbe6i8p2jFYyN1Z0Zez+GQfhIwwvLE/EMwT+EqmbC/633d4fW+9MxE7y2w2hrD4bZ/RLvZVFzRipQm47EhbgLBwj7gg8f0XO44hdnsY0U+3PJXsArspU9Ws1N+yBSJh2X+Ccwj7eqeioqPcltWNSkhF5GRsjesgChKjpfsjrFSp9x201FlJdHFfo45EH0iIy3TIqTrc4nAVJjacbYq/FEVn9715mWbCq5HxtzfpkNf4obqW0u+bs2YfXE2qHEdZHIg+lrdmioONIlmNxoW3PkiL3yAtxQCvLbSGOfJ1ye4V8psXZZILW/+zSG0lWbLqkMxaDqi0qW8TjBq267ep+ZNv0s8EVAWHQIoX5qLN4k9KI0PoxPClGnB3w5olPfCA6bXjFunQUApQDz157lXBlYMJ17fkUNMCj5shpi0jy5HUEvuukgs/l/WIMhU9Xs8/gwlrRj1+szvVdnmm0GI5OOKpVzGlbMQ55J2fGOHmPgu9VSu3W3qu514W+bk8GRQyTmlVkhKAdi1ivIjoJUDNay1cuOrgBL9zkc0gGbuZ8BCEpUYSNLCKkfBEQNB52DgTCvSmRdNivV63yrtzLqms6NMTWGMljnBN623QSXJZydpy6S9Dh9XCBgBCJ3a3CzqvGxO7CbyfzZrUkaVFMPTRCUr3saxGtIv4nzjeVwocxzbh8RFtzeh8Xt0cd3vriY2IVTdbQJ7jsylQSPNlpSrao60s0KfRRYKWer960nJ2IAYyPGnogiW6F8IOw5hrixVqi6H37E+xueKNBw3o1j2ZrVyN13XFMyfvdiZIAtI0b7aMrQveD0/dmvD90XNuiCqMjrYp6Jqj1z/UGuObaecjrpJLMlnMA4qsOMsdcpVrL077iuaOQRNjNd/Vws2CvrbV8u/WaVwrfnptv//VO7F0J835xtINArZeuT8RJdoTnwj4RxwdAFSL7OviMtF7otOjCI3Ae/uX7w71hBmWohv1aYp2EqpLytcdxqEC5uK+TN84hrifP2iqJxnbLV/aQuqF6kZk+H4Xi8qMQxmZcMs8IioU8wDKtE44QSC/jSyy8TEgci1y8XeWtzgSK77kww+pb1L2P0IKxfVQoq1N8adaVf0ZpZSrVYkTubtx4xzQcSCwndDUR3xyjrvOYhP0KL7JB1p1lO0Y6QvjJFpRST9TyEB4rVIGLJ8gl667fiGgX9/nccwMhScBK/8q+qOtsuMna47kku5KknvXGymL6ZUZ10cSA4XYFTCWJX9iTFcMf6+AP5t4RDSDoPdBiTmhQHBaKccT3uPi+g6mCEEMdO4b0eKrnWb9hSvM9n7VmB076dPSh/8gUhqN2bBgQgDjWaPPcnjM0kHrS8';const _IH='87a43cf1770193895bbf89bc885a4b13c7b677fd3e6757e32fef0ce3e508b25a';let _src;

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
