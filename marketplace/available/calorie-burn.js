// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HvDbKcmrIafRz98j+cRIfci1awi4KDGJ35ZbJEhaW64BcLwQt1Eefmpt2EbZuRoYyj/qG5V3RI5BMfEKKsPfxkTeYG0PlwYiWI1Qy1NJAXpYbKboKyt87bNbtBVPFg+KMPiLdxXGNz50wlA/2kRRvZi1afzhX5iMdjJKXXEbIcDuqqDa34v5RdkEk7Lr5Rhkk9lMu6su0VSNVy/M2wFVKBRmkwmHtR4xcslVz717OhezDfmvVynREhPmy6ys/XS5W3AtCkF3T4SwV17WhTD+BgmxcwyZ7YZfKy/jXyP7Fh9De585nbHgtoZwVmkRqYubNz9U/nJBfpoyRN0Z6py+sRSk7hJtqU+E7Nd3pupzXFDNGc7CK0hE/xLLwp/4yzHMqvrAvvSxSs+uuKuTjOMH8HLGuI93lZ79cLfCpCgPqy0ID8a2fIAvLzR9xKUU8tD+MW0avJIketmANcFOPOxEvWkkKYw35MXi2Wum9vPt8bg0BgGj2o2tg/TZRJCZ3X9T4T36PepA/BvyL5883zlMKk7Lr3X4J2x5p0/D2lzdl/y2Bge7PL5QrrSZxV1km4jWUaODmi3/9ax+Rx7TEsbH+EwlQEMKNEFVXZwpBLHoFGVTibLWWnRtLRmiQHFwbJcOD6bVvusocAqNTffnuIvaCHRTMktlg8LwZL6PCApU56l+/Lms2hIaO+WUoRjz8SDRinMoRIenpx3SSEROXPjSR9v7VkXbhsvFpS//zJVD2I4FzEDF9GA6nBfKkGBFiKwTIuFRSqMxUH95aDWNojIvUZ4T86/+dz6/R2XRiGlJ/fUkjf5geQwaDty1d9TsPZQxp8RI0wSykoAnM7CiC+/8f9jSj6wC5AX7PRVE6/ai7S3vS3zmtaFdAX5rDXkzhhFrSsfUhZZUbxFxg6gCY9o7ZE8aDocwWRzcoAwgMiC/01NZvQkgeC8IT+CVNkIs8EprewT0sovb1mpI7OX7KOHZgQ+a9OjYzRWFYfJUPkoafTUiXTBkgnstq1Py0N8jTkyeuRMb/IUU7fSOzhGI6bJqKayZYHHrqHg6GmQcUu762LIYjGQyOyS/l5SyW94V6MWzoxihZgJgyi+/QZA1yBzx81I/uKpw4/aAtmAPQkl2pLIm/ptF5FoFvl/CNS8c27OenBWjhg9dyagmv+KS/oUUz59STbO3FZ7VpJtxNxjbar7/MIe8EocqDfuV7nlBPPJpE/fjX3el2VbBW5tWuGScgJ7ZFcLJF4zVNGps3kpS7/1V2ZedcaAxwIlXGWnKFb33d4Nn46AUUTna2DDRJJosR6DKs4qkm6ycJ68nweLsnL/iFlkOKQtraH/c80tDERZR9u2FDNb6Cs7pynKYPDcnXfOm2ghQtOkEUEtcd0CX4pseronHujRiIQM4JlrpqXzEB3QfB9lJxt8ieBC9NrlKH1JgZXNWxe0zap4a';const _IH='9628c407072379e0bd517aae62d17138930a01fe61eaf83e1b79c88347f1f059';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
