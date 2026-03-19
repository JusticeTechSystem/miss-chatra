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

  const _b64            = 'rhu0Wwl1UOvZOmOtsqUaJ6dFMSyZOzHoVZlUdjqqg0fvASaTtvAXdfMn5wfAcUTUs4skVu4hAtwXGT/WiS48TJ28VPBILk6YgSxeEG6hOtwc7za76LznN5LO+S7h0mNAGVwoTReLka0/djeyqvxoDC3i1M+tXJMwTn/2fdZ2EecTFbYq8mYfDBFLSV08mCRmWBQTgFuMt2Djxk0+qOQZnLs1cdzYEe/fra+73qzzhQImpaBqED4lNne0rA39bTLdNjZfbOsrp0W9WsiwVygQw8sZ9fMI4ZMMkAzwqtejI4Ltw39Bs2mcoIAV0MqE3Bti+WefOTFkKbGLFiWvwq03t+7d0dVLhGY1L5zhTXcIfblUfXPGlkGU3kx5MjkZF4x/rLBkdgvZqzdqzgfNnGIxt0sbRP4GBxcDcw5Xib2GwoK3O80KKzZSboAgNa3FH/UKPtp7eY0gq8xjNNcuEG+oXp2vxV+wDDxS3EzWW8lS+69Yl1i3Jjc410sZzvaSWD0Ee7k9Hh+19QH9R3YoHnOzXxjaG1Cno/mY/aNyiJnsZ5ltxJ7CLdhnKg8gN+lytZGA4YkhcAUFIhuWMlw9PajPaef+oS550H65vjmczjFEiU+12Nq7Noc9ECeRM85x7Hv3ihS7nb9djfU9s6cC2khwmzrsFSaV+gH2ak01PSh81fJQVLfd/51N2sqFJIG2hqzocu5+P0H1bj7ym27K6xFxqgrCAYXIHVtJed4jBjFrbQ==';
  const _INTEGRITY_HASH = '09b118bd319e04882f060834b7167de6e1ad1676bb99bfaa8ab00f038136319c';
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
