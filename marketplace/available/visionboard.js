// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TZxIRui6Zl9uGuKhHBz9HdLsz4mfum22azJDPtNvZdOijrEXYVNVU5pkHdM9gNTphEVHdmKcv7B+gW6Qn8C2AgbeJ8/Q/gooXj7OhvrzPK4c+PGZcG4UMEeG4hZ2i/JHXeGNq0VRcerQXvC5oU2dUVyGVQn/dTtrnP/kzmk0O8cdfGMhaMB1SDE5wd9L0ZX4aFjlomHQhUA2HQ4zrYHSpAS+y6hryP8hzYtDQC+lJZAq7YwuvDj02UqKJInqkxYllaN2lOzp+3y7CBgQgW8mPhRqMjrOYV89xYBga/d0+B1HboxuunHtEoht5KYB0jexRSM+3IcShFSclU+39sin1PM/biW8+ZkzdtIvzKQBP+ucvyulxcFfpl5ckkU0dPrcu7ktXjxqVjbd7HOPbAPEzTDuH6pdoMij00uv0RDsVIDG+6ei5rtlpJKeR1xiCT1GdU0Yb+Uj+uTWm4/a41P4+4WwnVj6k4PSaBGaW1baeIeWS4pO/wJ3u0XZrxxZ9KH2AyGZgk8Wbhz2ogjbV0yZb8C86Be77xQDPxs+ZbjbjeRoxuOCArD/MsNwccp0W9MBZT0HfemUXIoa5uKwg3MinynnhB+T2f+pSK6XG6vS8ZBOOVLOjVWJ3LnDP6MAK9PBpbM9uoFqTcOsFKTUfRkxoq1oT2xlofLpMYVKXIHW44WEHCEpAs12v6mq3ORi6m2DWb3Lpe1V0fb0sgR2M0FCk4t4dryKtIdRJ36sBs1dIOL53He4Cg3maa4DKl8MTHL2EpsRDM4jyV/UiIInAwht/R5oMHT/zGIk7ow8EFNHEEHZ4JkosJ3ioXclg6zRcob7FT1cvymkNx3EebnIORHg9dqyymWyIypLvCUvmkP0qTqJ+HpJ08FjZOsOhK8XVkMhjuJU+xI9xzGsYC/MucwaoJHy6zuxJoTCtDhFSTZMdjETpNFm4u7jqMfp2SgBVG0iU2GrCXWS8behRhtFo+pUnmghClHnz/vwJLt4zh7YzxQqavpIRsFqlNxD63jACxdGI8A7mnlGEVTypWfMG31JE/LZj/RRlTBhzlLKRm8Pay4Ct3oL7fgMnkZeToaR7TMams8ZY7JYUgv1Z7DGafQvomoc7Rs9cxnlyj4kapvTELmjS5EvU+0cLfRZsg2HWpJqS+25OllyIb/UeNHmsKXq+AC7IChSsZP6lm9fOE75G7frXxbtlUKe0o5yMEMw9hnck5rC';
  const _INTEGRITY_HASH = '3b2ff2b6073676595d6fe9159174703395e8bf5ecf4b3ff4fb0a81c9213220ee';
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
