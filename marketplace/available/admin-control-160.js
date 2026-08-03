// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTV1vUzGzwFzXzQ9qVUnUieu5+oOUbw1Ln01P9mZ8/7eE+V0+4GREufDUvZvRSnhnOgkOfPu7V/Q3spkyHOHJKqBGXBB+Y81R9PiHX7azdqAtOD3vTcqCrZ5QIo5Vj7icTFtTT+H0Ee5HfHUwsotIBufKwUKoAdMk9Q/Q5nTeBWm6BFGnDgz4p1Ilo4bPth/aG+rUn/fJyXUtsR2OxZvGQUk7adnAj7jsrEc200921GQ4dg5SKBkSrqh6xBX/w6UR+ZfkEs15Qgnk0ulBqLMFprEL6UO3jbwXMiS83mIcMObUyJxdo0RsWQ6bASqlhZot1hK1OkbrwHHjvL1wBIhiooSW5zLKa5eSBfi+IldP3/ucJlTADUWsJkU2r358Qwd1pgeG4E9iwUUgIWQsGIY2fv1LdGQ5VlXerNnTP4YrJVPf4IyK+hte5l+cmpoHSHlF5a+9kFd2LPiHjq7TYGs7OkdpfdHakFsmi9TJIu+xqKDPeH7UixsopNbwOeWxM5tAZ9kWgsWNIuAoNEivPz+E0zJZrTdFEhAGbsiuUF93i6IaKy+jh2+XPUWzHPlbnZEgeh7q4zHdcUqntcWGgCX3QG0btJpr+N0OoTNnBrNuAM/ZaQECIK4JrmnTmutF4V0opFj4kQiRYgz0208Y/k5U+zkAxU2vqdNddJ0PEp6KqnZg2gPq2ZD9u1Rt4zNc/owM9V2PZoR+nk4SnHaSP8ETz5Pa4lyMVTJnqLc7SMW8UmUyyHKXA3ZfegAlHlcTFJpssDPAX/3cMmTGpdslWWnQT5NdG2UwKpCscyi5Pm86VcgXrjz34otINUy+Ya2aOISQB3Dv4Qvozh6a4RQ0cPbHFaRlRomzwGa+qcb6uNaRCDHJefu5wlXqCHMVKn7DE1taHJILMrgs3yIE6nLjFdPNsFs9cPUxpJhg/6tuPBBh/LzrFVPqEdU7K6mH/C1k4YUt9xdNVl8ktfIxgWZ7XqEzHb4tR5iMtkHqNSn+XGyaleReBtW67Rbe8wBFo1RcpAFcGr1PYIFzE=';const _IH='2997c158238fc3837a7f139607f4f9eacfa462244badd69fef802f9f21d7abfb';let _src;

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
