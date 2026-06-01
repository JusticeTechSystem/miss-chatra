// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:15 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0ADJ3xE0wRfWqRxND404WEN0FMJYGQnKb071h5ip6m84OUpwqqQhLD6GPnY8ZeSioyYiDdjHLn+dhXQXceJ/1kOE/2f2p4btxhbGT62SN9l9IVg81vXHBDl18r3cmuJzExgrB53gP3/h5mZf/WbUu2AjuwDKYEGP5a0Vn21tcX7YfqvB60YegPYxZG4fdu12BVov+xVq8Xhg9mymK9V7faamtDN5ITAfhczdaM6a/tHeiW1d+30G+yeYfaeMp74ngyNzEYU8MfGYcewazQpMgPdTwsB1gymFfBJQcKDY5py4wiHBqyOHmx9aNAlC5La3Xj7BM1+Jbgv//5WosxQRaNlxKMpHrVgWtuu2rcy0DX4ss6s9O9EG1Va4t4XkN8XD2TO7khqgb7HGaCBR3UBA3O9XAon6Ne+I07taKhAvcGPO/cj+qERVGNrL3TGSJK+sCe2vjnX5+T10x20UEGPEEveEIJV1Ghk1fuXQqon3zxODuHZBg+ihcbckTxw5trTOlxRnIIKtDfnsvzCjAeajt8WWqcP1B74JhMcWidp4I+1eM8o0X1QfOD+Z76BeIBdnVYH/Q7dRhNXa1QaZonpIjfzAqYerRoz+a1boEIt10TIjpBtuXqup67YMlFnX1u6wekr2iJ/MftOL+bWzLP0PpuYaK6uAHL0LcUgqoqWrazP9iKiloL06GUWps6cJmivOJ9S26gqvSVazLwM4PHk/CZLPKC/KQYUDx7c3G/p7/aunMu7VJS9MJnCq0NCsbw0sG0Iw2j7MQlf8I78HGaCHA/cJq/1Sb8iQ3qr3MxskMKR2t2m8qNCrPJH9XDuB06OGjUzq/JSLal0mL64LCFSZFV2ftCzBepWbCDgQ5l9DEY90jy2Ql3U3weo3XLIEcMmOrRM4YndAEEZlMsNKztnChwt7ACTigyBPCcSZA7ke6BkS71BIkNk22FkZ+vxXwK2/zYndTdxnwla/watKLqcD/H8zS3eY1vcGrrd5tdfUUgblZRu2xYXj3pprCiOKxohxiGM0Ax6fabudnPqDAsKuOrjUBIL0StOu+qOogTLZubqUMGin2cGPpHa/Kw3NN6bDGwFiw8rjyPOxMoI1ikFgx0D5BCZ3+0L0LBJnDelbmpZlvWG/7T9eqmcWbzWNp4SKUjJ0cdwQm2/sKGmD1BLHG8Lpltk4c+AC5Ly9sXuPDet7LBzlbMsF8TN30bWcxnfxEOYtWCm7O4hmD5X5jpgMOgQJxwQt8vALs8i5dgiISPscXNBOwo/WUCOeN63NDmfimPYENBrnklNGLh25m74sQo62uNHwzi30J+BeYPNKOnGNjJGHkbaaGUYvu90jGL3iRz4d40zsbUyXDA6z0B7kCPgzAFNeEJoNEyTtGrrzA==';const _IH='1722ab1f56cf4ada39147d5f00f664d9f724edd43979be3d986d2702a1e4a57f';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
