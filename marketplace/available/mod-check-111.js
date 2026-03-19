// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Rh6lWD8yR50IX+r92FJ8qFjVrGyN5tCCi96WuKZPIkMgJCXQDi+mZv8qCEkDDQbJ9yp1KSEF4QX4Ewtu1QIhpgRn0BQz5uzGRsgI2t3XPTfYWmgXn39yIBb/Qw5JZna9ksZck1ciya+lBtZSYl74JD/MwwkDRVmmlzMo4Q+0l5rUBD1PvP+5um7e5tyIqeuYEK3S3KK0cDb8IxJMzy0lOQY0GNDcxCKyXJlYrl112l2HeWjaoXD5509b12SKUZPqqCGSERkw/J6yddd3Ybr1XyJqH1F19wX65ebgqXYvfQ5pirogpQP1DsCl/TJY9Bd7WfNaF9+xLUjK/0Mb8zzOFcDjMRgTHtO4Hoeg4hQK3TMP8cNbz7W4TfXUtvE6SLR6B4iX1yLztqrABmdJ3xeC4xOVl8XVSSPYn2cqA1iewsYHgU+nGM6pMVT+rr5MAB+nl6M1j1zukis/Awto2RcVxCf4qU/WYH0x4c8g5sntydzLKPZ+RyxZtvPMZewbTORI5yXDZIkuzUyBLMiAIjtwuCpulggnAARygfCAi5ZFv+zuItLUMpUBlYOxbjLsMV24Iw+wbexdn4SgypyAM6j0K/eou7SHs7gqVsxRRgCIHukDR+oeE2v3tEoVmwWIp1qf85pwfY31leDpCe3AgzUN6YJWU2i4QUUsyWGvOPLPFIy2CsY0Cp3qLC2NiW9aqKMVuVzQmX5PqgQx2EuglyfHDvpVLgEkTH4mOJd/OP+SLCQw2YsMxvF36x6VW2UHAwIlyj0fUPtSnXE4LlA3zmdJ7SYBQq6r8jbvOoxky5TbrEyGdaRiXvbxedPQJ3AHTdAQzOmSiLyewcExkr8KOIBDqgHkEEmpMh/yy3lHWjec5TjnzKU648olCV72NR6FVbcJJr9H7I33P0vRlV+JMwXGobWHD+HVNd2Q4vWkLzWiB+vqhJqk5WGi9+qjM9L81PElMM7GLL+sVgM0tIqHPPzE45vmcuWS2Hjdp2emOOpzr8hjPoSUvIOKns4J7vv6t3UpMYBDVMGWpI80t4/ygNxBaoREXFVmaCSUqAWxYgou5DTYcXNc4ygtU0TRED2pjwuquoawx9GCDKudPuBR64opcZs62rne9smO9gX6FYcV4pkya+Ae4kb34Yp5yxZFesTuEMHTy8YMmFhAlFxU2pylKD5+T2fGJ5bFYQaTFyLrMy8iNV0/vjpufQInNtKVcLl7NRkwmHHf/w3CRp/Q4Rm9RshM0d4FZLPcemkUNzqDmCytQgEY3MHp8pO7XQcrB7LiqBQFByIjV2DY155Vlu3DjRYMYc4ClLC3Y9Tgd1yRxZknJaTRv7F3sjyYVBcf5/V9+Nzc5BfNj+9V0ArdQos1ls2218omv6c8AZEodRY6';
  const _INTEGRITY_HASH = '2e20c3fc06899a83b8c8e44eacb26ef4e5a47ce541cc6f19414a1a346338f348';
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
