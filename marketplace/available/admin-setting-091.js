// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'b8hOCqHEEApBASI6aJnAcz6nGRDmGYHX+LhQcRf8PyFL4U8bWKn0QAyVETo2+BlCXf3ALo3gajRzS8GfIh0L4ZPFy19D9qGn1WIm8/V1oukc/BCS00l+MwTqgdqAffhXVXITH50Dt3E8An5jN206odF+8h9G43cWuAhTxadHFoqTnKeObmk/1XO2yxHCit/0taL/dU4SGDntESbcU9XetPkwkqOyaEwaXA1IfZLRVIq51c2+cERiNRMosnP6iyK2AoBFC9YVvYe1aCJ2FgGm+qwKO5iyQphWCPj30410zCxjJ5j9GUkmFadArzyh9G233SDwNnCVwmxWj5TpfXIIvVuB/5JlAV+NBZVXcqLP8v2t8P0ToW75mMp1wQ1xj9bE+fTKS4xHjrLD3Zrhc5UVIC1cGExnB76x/IEJlQXg40dXvTk77Hciu5CdVVXejPGaHBlY9w+R7RIf38ylpe7tod6yKiORNqokE9/C02qQqYzeluLTJp/UjJJwWv9nJAUuwSxFKA4rntXMtpo1sliuYspu6AXBgxy2FqCk/s7NXYXNSEDIt7lsWATqFpmbBfiWaI8HiELkNkHlCWsOa86Q+3BENrAGlJyE7Op7+kF1Hb4xLmss+BDRVeWopbgyXEeqSeYbYXJEN3sVbni8zMOJ9YpaqN/axuaRpM2xY1s0pUzkemdr81Lpm6ApDU+om34SCeEfrgR8oyitWW9wYMTBLSq3cx5N4mrS/clEIR1z/CUknxTNJBt8EuiL0o09KywzI/O6dAlDUrKmMW7nugLrE2RQKxeR+oshyjd3GfwT+kpNrwIphh7sgGEF2k3I3fIfL/R0Y2ZNpZhj1e6++DyCoxoz2TD/5TPgaJQH2uLnU8LFKiX57aEAH/e5HqUNjzGvKvoueEEge4yHiJsw1dUpKEMOYKpO1deQ+afP9s6vCCa83CVyRpuELvYqWj3qUlwkd7QmR4/81h9OOWdLcS7AxtCAWAGdHW7vXSGGPF6S5WWqXMZ49UCwPzjCg5UX7bn/2+Xmfw==';
  const _INTEGRITY_HASH = '7f72341d706317c85f826398be851b76f651e74e3fb081c7491c0e134d6d1690';
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
