// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vNcAfvVlYJjme5Mk82HolTnhn5d9gKPzjTvb077N36IHyVNCQs2RoS/9lbZ/s43u47xnq1eW8qxxK01DiIRasq52+KXhz3OyW3hKuIzjLKI1Yw46QzA7XBy1yd/7W38S/g75+oloKNeIjXgd9d+4cxxcf2pvJu8qZl8Hy+TFK8vnnR5y2E53GzVmXVE1XcL77fDIgNA3OQ6X4pELAT9Kbtw3qiPi95k3ABgvrNfWhoJqrFwvsIvTTOldTM58yYZs1YGzSfwmkQXGFUOoQbnCnzgIHlYfjiEP6JlJDlOvDqsfqxX3lRnvf5a/q2XImV5sKrS4gzMFJqPuZm4sI6uiwrqyWS3FZ/bc0r2P+6adaBAaTY/PpfQ4r7pg4kWpw5Jt2SyR4DhrvhYRXlrmTe+iKsvHp0lukK7OlUxPwQDcZEUPnM5ahWIeE2v5X0tu+nx+4MbWWNkEcwGhePefz2yN3cMVDE0moXcternj4kOmPJaoXUR2na9qsIM3oyQbItxCJ71yDdSpWxhdMFeBAiub9UMDZMT21ZaVbYbAuzU7lHOosNWDnv982gVYHV385YJusqvL+4ogGdwqlwzUM+zSj1xuJ2ebMzi1vmOn+N5ekReqdNJtOoQgYTBvp7KRN4Usq8YfuBv5vmkTcew2udJ63AQx3u4yaE9dyZsogUwGcdhCGbFSr0HiZwxn3gYwKdedVDZYrUF3P/ZtMzlckBSd+K77RJk6Tr1m1w2Epb4=';const _IH='cd432b884a7922d946c036272fecd26db5af389c8568ca5f1afcb772cd8ae721';let _src;

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
