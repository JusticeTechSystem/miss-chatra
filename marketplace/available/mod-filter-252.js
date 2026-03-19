// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7BiEtARtnZYyKmPgJwFnGhDhl97g06toBiZ4W9N4ZO6X3tFIjnO67q648kFxZMNZyIKF+DrVyz/D4+f+xJ3/ubXYellr0EGc5bXTR/meQ531EDaMoANVMZvteYKgJehGv0N7qBstZKVnCMY+na9VDNk2+/VCwW/Exba1h2JSTeZMO72uFOFqcfPkzoB8g65TYaVDsQHj03xLUB94whwnog70EpyQaodkeTbERjYvGO/rkrg82WmJQ41WLdy/CqWvHeT+GJsi5ln8HTi8eFmrRg9GLQ149r9Iui+egN43nYWXT3j5cTn0j/gHM4P95KtANNykOxemg5wPXeDXMkgYKNYNoBxLct8SqDPlTzXPSScY3mT6C6NE9sjHOO4W6bipeNDXkW5hbfbvgfsPq3D2AqRwgnlWDNjeQ0zMmGCqFtLpKLo8gKtPE4ufYUEDg+1eV4wm1dvWTSrdboM2Ynv7R2L0W3q1BafaXEJPf1uw7ElmrW64ZdISAu7Hm9sJnrh1lpZi8DqICasXVBfXbyDRPGF5LLZ58rcrRyCVcg1KwONrIi1Gy8lnelTWjZqk2DnqTxyxY1ALYZtX/mGfkbV4K7l+fpdh9zlFHnTo1I8d9TIVu60eSJEMOE6t9SPrsQ2BMTI781nN6/zSbOlUmoTDhEW/9BFf+XKGUs137vUv42EnGs5OC+cD1CmSl4ljF6d3+m3xkSpZdi1W9mDCa8mA97YDq/5FqZOSod7Cz0GojgKfUlQ6PMdQsFoIToaljG2jXyG+KCnlg6msgtLJ0Gj/BJp4ki1fzJtJkUQiCKeljNYH9LxmU9Sb/a529oJdkHL2egPpAX8448DznVXqwW7y8j6BMLJaG3Wp+nwx7MUjB2Lgq9ptMv8cv3FHH63+O5pkC+kHMTYp0in9eudfDJ6mA9FHdD+dyJkjIVz0vBbqx6xD/3q0geeWtN9kEyY35l8MR2sbQN4vdCde4bhyRblNVZ3Ak6goKqpjATQ5cGcShPBhoxxY7K/7eehQ8Mqo7zEar72Z2RNyz0+FgFU7ZiZ0tiec6vR7OIChVKcN0c+THfqa5lxkWGXBHsuf5KMAfRRVPWrxqJwvX1awiKo4H6XPBjjttfNKKk0s89tsQ/G5vFnOnKOLrU2veR1q9G55Gi/z31B80pBsfqsf2uPx6b1uMvee6hXIQeJV1LPNt4s3XSQCGtZkUbzoVwHYCP+btxFipTrb3DYKIUC/E1YElyYnKxS0dc7YbjTdP/f3ebq6QSpCStOUynb02SHw4sLr710kUB5SqoqaKae9Ozhl0Py/CYQvT4j5BDl5p4P7+BZA3oZzsQoLUMSohdo2cwXPkmrOHIGb2MN6npiqCPDx0TF9vNOnL7JXlwAVWwPHQd+2nXubpSwgqt1KbA==';
  const _INTEGRITY_HASH = '0a939f2e9defe31cbf9ad5f3d0f609bc5146a19f1aaf08e2bb1ca8c1d39855ad';
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
