// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Y7vh5PMv7xzchzJd/6gAnyHZXlHhoKkR6kTRzNSz39UhkJuFuW45RiOiDe+1jkOJ8gBq331cKYbbG2ZVmHAZ5jNjxtPqMtxvrRPg4Qd43Wz2d5AypnyP1jyvdcxzdGYgx/wLMUUh65qjJgkxqdBu23zMQdIJBxh0dyrU7XoIVlcLCQU83YCEUifiWZbvhX5tkO5oWoK4aIAL6rat+svKWFCLGjTKCCKW75/qywjrpmFMSwqp0DjmvsTR6+6aMiQ+VONYm2HThHfqzRu4EDNqMvUUuOIKdSTQTw/UkzFLVBqd6CXhT97hLqrJNulaczYwK36X9SOMtuTKubxkOg+I16bQx7Y/Cyoi0CKAwmzBMen+aqHKGMNboUQsy4+k0YLyWBznQ3TPE/ZwfzzFgetWp+1SpUXl1MKtHSIQoSNiBp+YUPZFL7BZZvoGAOJB9CgoAIm27QG4QnJOgUvHllPQZsJGo6GsayK9cHMPiGKNz3vyxiOSDTF2dyuEW7CqIbX67etG7h0Vq2QNtROALSOBnc7HiqCLETCyAnN1oiRQBqtyY2uz5O6oniJ3Qt6LYYCkY+T9TPCemqyE8IVyq1ODQRc3GmewACoqIySmLca7p2QeA0FrbprKCvytvGWZMQllKHFDYCm1VpDXvlDruRDehutcdtyqVPXAF2r0CZ0sGo4JQqwU+wKIJiplW8LEY1HzZbWs+rcjG4+6/yHAQKbrxdgaAOo5Oj0E62H0vmXf/v0AY74rr8FzxAxmzvpr9j38Cjw5VFu0tSXaffR84XvLxKmNB6Xfs16JbaGthaGOitD8+dpZ2ztlGg5EL/XXSZOr/1uIlITyetMFtmDUNcsPhAz1uW7QKUZWRKzHWBcuCb41pC84MMmXaqWLWyUO9gJ34srEmzjWRtebYe77B9/2Vfo324VvGCGqNi4Ssd4EwCjc70JC1utGSnHWQaRCNwHbqB/Zw9Y1eer7wGY5JK/VHu4AbZ5tO8B3Dx+I8b34sQF1iuCiybjLXd+vVU8I6f7UE2rUCjFnjXn1njlvbdEbFFZ8OjorOqhc++fVZl4/NmSnk9rtSf1S8w/LSgWcIRwnPezdeT2dG6SNh92yC9NCc1B/nz3zHSH4RC+8UHvbG4g4Jjzc7FCSBsSJ7NHU4myxr6DJeNXVh70TiJ+O5DOWD81ePsgL6CUJd+YWJ2Fl1Gr4k3CFLhZtO4FnRvU59I12yHNQn/cL5zY=';
  const _INTEGRITY_HASH = 'ae38d117d0d8655f56341f1c5ebbfe5835da092bff5b66e3b6eb6a4559ed59b3';
  let   _src;

  const _PWDS  = ["change_me_to_a_strong_password"];
  const _ITERS = 600000;

  // Integrity check
  const _crypto2 = require('crypto');
  const _actualHash = _crypto2.createHash('sha256').update(_b64).digest('hex');
  if (_actualHash !== _INTEGRITY_HASH) {
    throw new Error('[Obfuscationary] Tamper detected! File integrity check failed.');
  }

  // Multi-layer decrypt (reverse order)
  let _data = Buffer.from(_b64, 'base64');
  for (let _i = _PWDS.length - 1; _i >= 0; _i--) {
    const _pw   = _PWDS[_i];
    const _salt = _data.slice(0, 16);
    const _iv2  = _data.slice(16, 28);
    const _ct2  = _data.slice(28);
    const _ctag2 = _ct2.slice(_ct2.length - 16);
    const _cdat2 = _ct2.slice(0, _ct2.length - 16);
    const _key2  = _crypto2.pbkdf2Sync(_pw, _salt, _ITERS, 32, 'sha256');
    const _dec2  = _crypto2.createDecipheriv('aes-256-gcm', _key2, _iv2);
    _dec2.setAuthTag(_ctag2);
    _data = Buffer.concat([_dec2.update(_cdat2), _dec2.final()]);
  }
  _src = _data.toString('utf8');

  const _Fn = Object.getPrototypeOf(async function(){}).constructor;
  await _Fn('module', 'exports', 'require', '__filename', '__dirname', _src)(
    module, exports, require, __filename, __dirname
  );
})();
