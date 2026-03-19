// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'JLUIDhOJl2phLUpz0YFOZ5rhXz3tter65LPw46sNbR9vKB+DClDEnfnD7YYa00QnmAwP2oxXauSn+kKp/EksqE9qHFomX4Z/3daBHWQbkSvVmEdCCRANptdQm6GMzjyxm/csnBkloB4PCBHwWiSzmez9rqNQL+Gt5gkUdKHZywkB6hYTpw7e336exIVWn/rGJsxBkjbHpAexYKOJwN534YQfAx3yWwbwfqmR6sPvpWRfEkalthjOZge5VwfyYUOvx+abNOrJaK6+M1rU4oG2ugHW5Ses6M/HYoYQZjc1C6xD980vbO3WYa1WsveqrlQtZj0/HdOuB+KdBWNa17duMm3D7lNqw8YOkbioF54Z+zEWSmfiNgi1UW7iy1D/0YO7mqLW3mqH4bQWXkrkeJEkDMnRdQps9mwyODwuIaqnMiZcUgBWG8t68lIUNdswwWkvPchSDBdyvRd+DsdG2f3jpeUtdUq7t0c6wG/b/hY6k+X5m4LtcPTZ6+u3/b47GABr+7Nxt8OQXuyrfcL7WbHpbu1jg2uuP6vNPioH1Ymq5krlvXn5Bj8432xy+lSkixmNOeXTkDsmfpsrdvXXeIEq2P0NAMImx8gD2jbeeb2A1vMhecnc/QCL';
  const _INTEGRITY_HASH = '1dcdb794f1ba60e1894f53236ac5ac360d42ce689f3f890ecf4bd791696c3c41';
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
