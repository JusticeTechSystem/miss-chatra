// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LaYXOBxej8olMu3yTDqfEvbR/QK+DgxIrNUehEyPvnzSjTlxEVaNib8+ZdD7ngbqe0NN3W6ZwWna17SJNGAR4r+9OIXUtiBxQ9JXMgDHKI4IV6o+YGF0JargWz4p2AqPc4Vsg8gCk3Gnq7yxAd5gGWMhpErinuHcWb13LlwW2/fASrj66M+SLcb9Elp4lqNiVvIhdpSQwzQTFzBEaAdjSrRAo44cJqLiiqYo4alp8D46aZfhYyQp+sUyZEIQCKlc+yv903a11xEZnko472irzQgUyAyypnC869ws6IavfUaOtUeoQnYBX3tV1gMVHEEID6HWx6S9Pa9dKQLmqW+UkdVyw8MRN3n11otI4nOOAI2QUJmAvGdqukIr9LgunXJOgV8V4GcMPpxnMmNvRwGLpStNEX78BEKNyxIgaU7leqv0UUF8qhyfqh0t3KTjwaqSKYfam/xKgmEZ/2qqPGFD1kVsBOv+sFyXKYDu0+pa1IDAghjnSLjW0ptl9vzPQx3jlY+nVGLONXPLEe72QYi2MmtbQ+O9d99Q0kzETYUxrZQZY5CyHo1RBhhkC0TelyC+LbGw1pmDdbuQRc6+UOA9jTe2Wm/0+ttmbRYIxR93wXYsHSTgkrKf77tF2gieIFXGrCrHNHYhxN7aJgPORJY1qjBsQofqdP1w4bRWdOYIFd9r4ltHIWd7/StgNpbaA5+R9s8clY/cjT+gxImBug3sy3URB8bt01L0yHk1hwmP9+55QRSC88LxCDUwvMo79wYnKkUsM2bjJlkPxkd7D3ddpNP5Jw0hH00/uAh3rczqCEDW1xj5HU8raPb4g6uGm8j1lPcsucNy/MDn8sg6C1VRwkex6GToylXKHeOTXkY3h1traXqTshscZNlChiYWX42bJyuAu6rCufh+21T0trSGpbMLhTk11then0iPkS/4DsFZ+JKN8TLm7AHcS5w=';const _IH='6368efc1f2ee838e29fa2ec709a8792e5806eb1453cb8677e78b348f0ebbf863';let _src;

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
