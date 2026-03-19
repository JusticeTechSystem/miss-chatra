// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'DaxXeKvLILGii1JfMInMPS07scSAXPxc1lJv+nZ8B1CCWWDKEMhFIaEc/LlsKQR7OIOU6AvxksHj0v79RuFeIwBP4gLvcgCGgnQj0Mr4qLYWa8b+1NInAuoIxgRjZgbZwty87KiRpDO3gUjJNUZq/WR54483l8EkNWsnsMT8TOKTV8gP1+m5h+q8+VAjnpaXLFn9XFrlCcvJNsFFF2Z2mKEkLlTf4vw23Lur5JM17R6bnePnloCN6nR+71T/ysp10u1d0rHqbDWgktxq0zDSvCc30FZJ2RCYjcqexaNeK+4l36zB4H8qfssokITCtu52GkhMcKErNT2skH7vU8TZbZRb9BkgnqfeWJLHKV5B7NlFchE8tc4QxI2GDfBC4l/vy7YmID7cxFU+O+UoH1OJppu/3PYF7MFjo8vyeCC329OFVrnVNF8+75laaGLeiRCYb9Mxp9AwtscbcXD0FU7E9u9enkKNDNanLY/aSX/HC3Xbrkn4u/Np/RUqB7qLdUZbAWZ0Fz023cxeNFIFIT0rxMxVK4sl0OvAbMd/jXqKnCu7kUQP/VHLKrVe/qCABaBj5G0tUHAbDTX9vGopV1Sj834IMaACFImb13azJ+dlhGViMgvAKdAPgD8eySTP0E1m/lSjdnmDstG4JkM5tcJbTf0tnFb6xOBz0zLyi2BS+SyZgjVH7qI8yn+Znx+J3ggVkQvDTiU8f0XYrV/joVlmeQTua26ZEo0+EnR/w9h3vogOLLC5M1Q=';
  const _INTEGRITY_HASH = 'cc8a2aae7cd34b6b60ab09e92ba6fdbbadb3cda445364c1bf8913925d0ed669b';
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
