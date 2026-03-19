// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'ZS1USd28HCtTi4q8H/G/AKqY+RrOT9m5pZ38jaId+/sAnmjguP4+Xz0/W7QY0zbuUsVxO1tZmgdfnmzQw/IbCJWGlnYm/w9RkxJen/t7qpnzb0VrVinnTCZPGAhMPAuc4p+t7J5En3bQtakSPX1IK0x2VYKtICscnlIePqs+S6x2rXMDuuxY8hIWCgAVMBWBpbBFvmYbF8Wzs5F1mR/AIgjohEnIMTxt9QgcqvzR90+9fV8k2db3QgNSIkhwcwficgB0cOLMIAQ+ZOX+nI4nPJHaB8KhpwIFgiWVfxezWD4TJH5BOrMrk0kK+3UHzJ9s0RAiHGyxUsUaT2ZzcySR6A9vO2bsUiX1U3nkmcgPFCxYxsicAtNSLXKVtCpD2Qwq44R2i1Vs/+B3YrwEOkJLXploPKeRBrkd5g1481MhU2s0XCsMkzw8tsmps5hmaa3o2YrDccTAu3bh6XvYCw/PwC0RJNTJzZcSca9a4QZEnbmsOQsRbDDCmLONpvFWI9yx6KKSujtT3uqEI2ElmE9oq17QHDm3TXgkDONd/uUCdKxl9hthwq1iKa2WnoJ4As2ZXrpVY1gJqxZN3wMOfyf/8agt6fOAU3q+4PYxCWJggLtyW0KVyYcfT77Bw/+tMKrQfYzsFpA=';
  const _INTEGRITY_HASH = '60fbe79605313a8638e539d740517ab380a099446f92c0a31a5ef6a8e6aaf50d';
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
