// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'B9gwI4QVT1pkyxaqsUULXZOw/GNlMzLMklH2i19jB7PqInd6hp43kXe1aG/n1NsBsf8UD6VkYQ9peY+1B9niuI+9d0UNyE75ewVO83aBIhvmT85a/iNIgwhUUpgxM0IEJhJP3XAU+WT96e+G43DfyXtPvcOyqttd62v0fRWJFUQC8TPW29RKmJKr1GyxHepgg0/dNnSIG4BwQP6Ekhyn+wqQ9RVh2okaHiQ6Kffx9wl8iUyrj9eGlWFZlr5Ynn/59Qrg3FCiZW+wyQJa4LTmcX60kVJNrlBdWO70CeG0NlYE7gr8olx7UX2oOttl5dp9hiW4NpRIkgwciy6kLZpJCcaiewMcDSEmavk09OmFX1piFItPVw30wwV9+JZ6EfRgf3W6mRcIqjo+ZG7tZDVK+sWc5GCBmN2PxZkxw5KxwAo5ed7bqthtgVJ+aF6pXqB1NzkybULr/BqT1a4pVj35q/bRyHi41sZGnBDB/kBKf/OCHcCOoQEn2PqceHksHrjIwoxJ9FPEHqSPxo2xF/SEXib0ejq0QG0t0t8YCDzoy+XbKowBVYiUZqXKYJFsGAorB6zhmDAkuSSQw0eltzAvFlS5OlU0EavMRC6Zja1GnyE4JIWjCe6470txeLdYM+rGw3f66GUCXsZhyz5c/upL71QggvgY+yIZqGUmjqItdKQFwvW0Lc52LYZFYC9TSJh3XPddD9SmkwfvYttH7dP36Cwo7f0ezUoRru+VEtSLhwwfzUo=';
  const _INTEGRITY_HASH = '134f714bd8608d9862279f1bff30d311f553ef1d4cc9af5381cc6074ebbc4567';
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
