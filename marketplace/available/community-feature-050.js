// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:22:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'lepcl2JAG1RjDzwKpiI/wHm2mEflBORxDf36M5JbF+SZWDBKw70NxHW2zsojcW1DBKAMcx5HdzucQ5NejINWXt3yEFOCV1TvRs1SEUvGsz7Oe0jXZJQjCMZcyrj3Eeq5qBQB8FkIDHqnXoeINEVBr8xlakgbpVxQAmlXY/kdZ1PzgkMU0YI7cY88RSY4WJrx+uaBo19HZil5qQ5opnMsh5OiEdv1SRTfKGRqzTu1l1iISsZ1glC9aY9aJIjwiZQ58ZQPrP/ZY2YXGZwkk27AttJI6mz0vvLTs3MuUa4Qwjxuf8/7dgNdDlh5Fsa7Y47Hw/eCy/WnFEwDafp/4oaTB1aLYSxObcQdloWC+bd+fGEohZ5mkSmBhuzN6U+BTWakJa7+944Fw33umF4foJPJY0G6h2GVJbg+f3FA7pCzF5yTfdq7YJsSoJorJdSPgVzSmpjJEkVARJ//a08i5i6y1085gKc12GMtSIO7CtXlEP5Sx5WZjNvNLEIyZfXo2nMD1TFKHa4ybgEcdOi6/RHE6f/Jl5LQ+Hdiak9VJfG2Cc0Mu1qHzkoTJgsimEo1eaOw/8nCpm/6c+AoxsJpLVQBlT01EMGmN73t93ANaIKbPLHhaB4ixguHTvjwxLYjz9ka8eDubDmHFtM0tjzya5kMrz4EaFdkAEUrLy4/sRmXbFz4vY26GCmnfMQk+5vhjcQ8H1QYXnOwfXN5iOwWv+fCDOdO1kVCnmfhFhFC5ATvJzh3Mw7is+4=';
  const _INTEGRITY_HASH = '4246959c186d5d8fa08da7b5c6e3ec2cc6d82d90e47a0b567e131b273426ceeb';
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
