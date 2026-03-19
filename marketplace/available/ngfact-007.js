// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gNrhZmsi4Y9KK2E7bnpR8DEDKNhRyiwEaLlXAk0Rc8MIMcCGdkrVWdqNgETqJAipIOyTzFrA3KIrY7K2N76zfebXlpaFyAf+tLgZWLEwK+oaA1vDIy9ilt6xcfQ/PbkrE00AX0Fz/609hyfZbvPRzT/gjCVndNI5rpCnnUECDg4u9MotYu1fNOuUtRQmxDNp9eYSgM/jjDE7B6typN8YKEBLD8yXIPSAEy6CUnKUEtThzGH5hvtU7wxH0Xsb+MbEHc9FIhaAXd3uWLdWsIUezi/LO2LTp8r3aq060hx9ja00QMTS+f/ry8pY+iKOLc6WUXiliQ3ASilcSAga4+HcaGtdAVWKUkIO820M7t4MjscPHz7+Do6DVGhUuh9nRyjiIy9142n0TGrpXF44kdVIDnxIj1PafBmeanJA04JEXLTDmrtu1wpL6Nwov4N6Ee5vZYGJj9mEo5NaYmPHu/hbZy8PzGpOhhnPHVAXUIBMfvBhJsk0iGS56PR5DVgb/GeD6Tt3gp0tIDulA8DJRxZqf33AfeR1AnMCU/sR/F+yFoRSIaGaZ2ia1jd/1Vyoa8PoKBlvO20nfLNtrnnOJNQJL4vJzUdhkJvEPwhgM6O+3oerorHCAX2jZwsmKgUzuxGS7/DX+QkVPqxVRbPo/XgliyxNwmAAvzSeec7P9EQ8WUkFNIiQejHUwbUkNL+4DSPbF6IBCgBWY9gplWOXHtsQsLY=';
  const _INTEGRITY_HASH = '73a9381621382c9d3807521e71a1e0eb8b7578205ab4b89a4d9e02126cd94de6';
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
