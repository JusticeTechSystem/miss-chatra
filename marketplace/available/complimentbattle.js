// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '1MtpJZTExBSMbFc5rKFu/f7OEPMo/4BM3Sk2C3bKiz/0PYJ5AKHDlleZlVQIoWWd4sC+2X9pbrnjpuPNo1d182ARAeGJGbtY30PuQYPJjHBEa53bhpS6Os8ianZ3fMTrLAIkLfhdUXrt6YMdADEcOG+ob76CFERzwef+GL/63pp1eJFbJgDB4HRT4ZS8fkKuf9xOp74vaG8y3nWzMOCXrDnA7PiBUYBG1XEz8wZ9/m3HQ/lSGwNElvVkU5dhHKk5rKriVwD4VRRPRHenUCIOscMuqHoejpWGrgPn1w02j4LusfikeLk4Rsk+Iw4PzN7xPGHFlZuLGffcsoWQxDIk9svrjyg6Y0vdw5a2QdVuJMWnb7rxsgeLbXzYb/SjNoXi3lAHB/TlXMUj9X2Fg8zO7p//dLVb+hYrTGIRLsrVzD32ks7XagvD0vWR4Y1rHq+DdeML3gYFS9h70dTYsNvOoIUDzN8D7F3OazrKqhgExGKlyJOixUeRZzpQqHvct5uXruAQzKC+n+2D2ODk3k3WsayqpbtC0Zr2fjqKUz8PAQ0JcQHIy4wAGbkSk6HwO7wfKboGdvcWz3FubV+BSI9QYJ8T8QzuxDAg1ZF6tc98hGdWMhvbPRb0v7f/tvxRIvU7uIARvMY8Rbe5HJ/A2fpSaUXHDJRpu1DBNcGTJxgZMLmSh2JPlnDflXr5GlzJk233VIrepeugj6jw8sj3/mA/cnAurqaPoek0nQNWsbPEpHrbj1Ywl1cIMVbjCSdjgQcvzezfHpSJXmynpuIxvIsS/6zi0R5dOsmmLGxoglLmhFwwPIdAwKtfWy1hmkF73v7RHU8RyB3Ucr1LovH/v5SYfCWvnrcrpvkUtKPE75qElQ9ZWnS6XmbcCuNy8f4zisLRWM8QssXfMGAhKdLkfnxXJR3DCLJAm/rAPu/3KyILsmtxc+/+H5tXwY5rDTXlo7iEXf3oSqKAP787jXdtvp6yNX5ZEUeku5a7Pt0gfCxEgbuDhyurWwNgKbAdXWAlteFh5Yofs8V4182SAWHlM+Dh24Y1zTV/CLVVFIQyTkSEr+gq/sweY3Qko0uIWy/AIwJigOhke5csvNhFEHQeIuk52usL8Chqu5mN8SYBAaYQLZA/UMO+CiVnhcDLH2eiMrVMqjGHMmdSmZDKxSO8eUuWjFXG8Y9KQZ6zfzfaGC/2SdY1NkBIKifRAZAmQlG6vmZtfawW6ifTXyqtQkeR2pQDb+9iJWRDMNg=';
  const _INTEGRITY_HASH = '73af9e75310daa98d5ed6f32f35b8fbea261a87a9ea27597c5ebc105a5ee4e0f';
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
