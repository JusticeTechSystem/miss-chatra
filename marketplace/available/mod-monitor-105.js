// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ukxljclpcD783atwUSTkZ9r0ccGU8fxFclBPyo4wrdhczF6QoUis26SI1p1KPxGOtD1pL4wgcJ4u3gscSk1yChxGTxAGl0pCyUnhoy6nxyHJg97UP39uyxboqz2xGa2TlQhBzgwVBSq4nrj9IyrouF00dk3BE2gOAiyT6cU2WMTU4qnnDkycAqzdMmJqHkixXQXH8LmRISZ8Mnu7vIXNvcHclW/rIZi3bLdRDvWF/w7/2vD7NDO8bZMtsfQ5mQQnxWi+uxQYSjFDRikT259ze/xa3xIs/xNqXyBZEbrQn5uV/mBXx/nKn+3uetL+745He73XOriSN7qcZQVYhJnvB75sGWaeno77magR8CzLGseuxs5IvG8B8iRpZwrhGIepifIPTpLo/pgHEcMXYlNANAelqZfRwvbAi8uSFALjeESUesctbhulxp3194NdsLnKk2FZ6wTodxx9UwIsuuo2u6X0/WhNyOXh+wTfkad/OGFHjLRzNeoX63HurszoSvsdAV0OCxR8UL+cPzzUjaE7Fz4ee9iPtDlk54+WURijKTWX2Fw9jUoTxNNS79oWQiTcLqkw8aNeMiLel//MwoFrmY1ZRLo6Fs3FrCcsM2m//SjI7GNz9MQxlG1LIY2nunmdEJ1Ko3SboRZukrZxyrFHmRAMNIqinNhMdhkCivFDYSHuJiV7mt7+jtIGu++mNj0jx61lcVTuaxzRWP/ZoNTfAMGWgPf/OQ7Yqdta/8PXyvx7MEjMFhzuUFX6emW+I3w87PSmuG8Gn5GALuA17P0Y/1kRzg1f8vGcV+wZJi3NLYJQGDcy0RSfhGhAbfOWNMxgeVT0hr7WmJW6sr0ppr7Jqsa01A33DBt2RQZ0g1r+WPHj+VXiUilZaiaGGCWRRQhtk94mf2zU2cg4LwLq/S8gf1D9lW4abBub75gl3FGtCxrVz6ZXidZX8puzq+NMxSmJ89jgMqQV3BEq/LJKebWK0mhcHCEClZ/Gv80LIz9kG4J8hu9zfKkwG8kS/QMo00BqO9MS37I/6uuqkk+IBPiefADM4nKAMKDguCYE42NJLbQFVjjQAWYCLTYcXpLVBAzWhbcSD+kFlK8/jhtAK8aFbWZ7VFaTSpK4IxehBLn9TRgRJIvdWRHTaPxBFMhjIc3IgoJwDsAapoG6Twc4M+Zu+55F/fbeC7V12leYJhodO28dJfqv6NwWB1trQ8iQ3ZOrEmeTv5WSl64oZFVq+MN0gz5UKxtsRUyxpXzTAaaUH+AWVI8ZRshnEaCati066fBuVNnJhdYDAxpThKV9+pF9tlxoUqcrvFn0VPvlHbbTLsI5Ive8VxawtED+Ud2VWew/iYrpWP9974RWJlD7IRc8fCju0hrVm8dKQ+J/qZIWUr6BrHV0Fgnt7iBXhhV1K0UpUp0=';const _IH='3fd71949f21e02aa226f74bd9e99494fe0a979a0e9d208d79539a1b4ddcd79fe';let _src;

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
