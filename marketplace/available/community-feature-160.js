// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cc7hpagu+6Y/tYVK9lwo5bVacRhF3qSqHg0Pf5YgkUabz8zOJVLCZpqB1xthpYIQZwF4uxvynuiLOciByW18EstyftYtKgX+cFdnu7vfI+UUIJH2bK4mJD2vy/eJ6D2nN8YhfEby0zFdePZnarMre1hCUXNXGYJJRtIS3ztdTCnivB6dalWaJY6cOox0JiynEluLSIgou6snl9J8McfvORf5kZrryknPP+1Rna4IuNSHGh3PDkkb8UpF7NBcB5v1eNy6DBZQRg7XVBQcDM1xz6tsgIDqIdQDvt5XoUQ+isMjwrHzYQ97Q4MVU0xz2oLM6831d0rj7xpbnoCAeRe7y1ifs3oCUwDHlR0Wm0vhW/1uFCqZzKVVTa6dEkGwq7ltNL3TDran3dFuWu0fvy7YQPdmZmoh/Zlq6ts+y9tJ2dv6Ahs52gkxOqvYlzo3jbRroVroxDIXeoMOvSDhLIi4G/UdkM5mp9O3usaYYDpIEYFG8usImv0A6t4gcPeiwmk/18NgZzA/FnxI8OT+hzJkX1A3CTl08inv9tEzMhXsEXZvwgbA7dHZUE6ynvHBlJrNaqX+gIAKDai961dbQj85OEVvMQAtu3Eorr1TWUjQOLMwQmwQ5VU8qUDU4MHB+PQjzHR2VdQsWo9VnSCiGCLKlvMDKh9XcqMh7IZACW07NCK1A7YqiR8xrQaZuJKdNdLXkQ5VSj3ujS87ixZ2VzwaVPG/JGTONL2q99xG5hKmoEPNY6WVgDdNr06S';const _IH='77182a805735ef5c27a6158fa794f9c82bb02a1e0e44665eb143074a621d8703';let _src;

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
