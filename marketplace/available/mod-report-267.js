// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'DbE3xqpXQ0A1bdBd3laWEPKt1c9YweTh5CbormDIlzmc2AD6cobhdEH7yKsuzlHIRShMVb3hzdwxTeiILKqA28fTCgLslg2UZkK9qH/d8VmQ/1+aneJ59Q0nl9Ras2n9sptHXLBtjhVCOYdZBkg49QlcWfqVFodFX2WBVtxE5eyWOaVj454O/b4iFEtLxA5LsdHg/rDleJZUy+JV3zFUb5BGf5A5CrUvxTfSwMbCgDCqJ3k6mkOBo2WEFO8uladvTJ39K7cE6AwH1fHs5+uLjLQHXf10EkqZh9eFl0V4t8+uhOTOvbeSgA2KSVVOZvgpwgx/2WEibtJCVUGTGGls8LBFzqoWMZr/JZ1ntfVu9u75alKUn0/ULnWB8mlvGOzw8cVo8w6kG2AGe3AjeK+kSflW+Vwu7nZJ243bdopsa2nre/2cggnZrsNEyNHL0QO/eqqw+LubPjykEDn5y5HPbqT6nadDWXFHYOhqgzRcB2zHPGFEtt6NUNu83EOx+nMYkEVuK8NUIhDSOkm5pPC+TaP/dUo+OM8+BtsbPd2OzTeKLqJ/Jve0osXG89PmBmXLXumd6hWrCDahBYX9kB2gFnW6G23vuSw/LUZYmTIripEiVdwW7XXGoO1VBRRzXaVCjbZuaoShUrIWQBhwKoWyD0/ibF9tGKICzwjP1ZBNsW3WDJ7QdytG+OBg4iHwDvlXVP5U1qgF4ccAyK96Cw/DMBpJo5JIzzVIOb91K9fyHlcYKJpYQ2YmnJSxDJ8vj50qkHKbvaRQaBbU01lh3vFslDwkPWJH+qfwEPwmLARIc7Vx1V+sbk+D9qqHHW2oyuxiVdKxl8zxqaBDN2ixbsTjPXmD+GHX4jSzyhswNk7IWloTwPh3olP2+rgBLDxCFa8T808dtC+KnfG1Vu6pusE2rjndyAL9eFLI56O/26yV0WVej3CfRU0KOkXLVpZNDrffQ4yrLCzmwcNfPcZuH9+chzR1hnLwJN/jV9Setn3sShw8cVtGpli0DzdO3xbyMgA2ZFuNA7ZtF0uU1vyTrWe+gLxqAFQ4hbsfmNZeRfjO3XNS+nKwnGxmSa5pM0gi+2sKFnrle68tR2Ps3i5QYiKPiQN11BZxXXCAurr8cDEVsHElpYsAAZwrCJw0EiKBGNSYlDC6iXGEoly6gUjXOmLL8GyBjQKsCgOxNSMC6t5UKSGOsd5zZJ8v1r6qr7+jO36BvYBtrr/Czn/iPr4SPBO+UEEVkpFCva+ZHvapqXiUSSWgdnp1Q1tD+7NOB2kFyYN4y9q3D8dxS1Ah09obhMAIQEZ6p6GsZMwghcjV+noznGoRy4zSsA6QbXGfddtDwtmI5fq7483Ga/yB3/2TOAkazx8JDxqP9INjvdEIwp9lO8HFWpGAEfHEjg==';
  const _INTEGRITY_HASH = 'e8fb050b4da410d7b5d34a53f342a47be91acad00a2e327e84f5351ef04cb0f4';
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
