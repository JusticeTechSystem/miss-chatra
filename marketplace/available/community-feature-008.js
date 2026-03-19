// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'yQYlI7Wd/kSwdDDZGevmPCDDCaqKNAJEXRj5tHL39JbL03wkhXmNzcxEmoJcqhgD//OvNmjM37RsY91bbQN0e2jwVo9K0FDPnN38BJtPbFxHbQ7PIFO3HiZ7I0lMreJtiU7ipW74Go/IeWUPBXM15h+P1avxzTyv1gLC0RoKFKxnznc1KuGcv/+CG2x2Nu0FD0uqBE1VU2nwsJQ/uJA0SqqFLuOpOlWrwi+rjXVPQZOou9FzogfavlXpmX8zuMHPaX2uHFm2a7JBlEwxhC0D2NVvk3ByWb5fo3LruvwFvQxXlyFPwqcj6a2RjVyCxe5IWer6p8kv4hl9goPEyyV+yQHB7D9Ld7vbQj0vhR1EUDAyx6h+FPWE25sYcUUHrWLbWgKAXsO+KqQ/dZyOUNP9coadMYIOQx0P+xRKV525lj4fqZ6FfB4vo5Q0b0NYJrQkwBzxP/0fAsjWrxpzaa798yi2HOunTOSAXwPwNpFH9mi21b5tlLGNR44VK7PpFj56szojGoMwtkS1zW9bR3OKLXSkh9R6RVktdslijpzcA3fey0lKOL2tU73rgsfI6B2KTgFxnj6/Nx5xgTKvD5rbiXuvTcN3FXEexcCHj/JhSV1tM8xpPzlPJyvKJXLJKrHombmRDbJ05n1gxiOVqukSvUxYUlSvSbdGDUhxqwNmHTAWNUPT3CJ/9618nOrKRPBYmi5njs/cOzO7byKWKGZFrX1jeWg4';
  const _INTEGRITY_HASH = 'b0827dc241b4beb5ecab0dcc8432ceaf722a75c8d4da54f072c81896bd0212e0';
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
