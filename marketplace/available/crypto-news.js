// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9Jevb5rKCXgdqooqg88IP+qCeFlNUu5Euyny3fLbNSkMb51Ag22QH3KpRfYxJCJshTiQ0vQzyRp/JE23TKxfmVv3IRXUXxAz5eqp83y0rHkL10u4fTUGPpV2bHN/fcivFUeyfY1OabpXDX1/vdWXNTma8NJHsJqprNg2rDbV7XQ7Sf6HhfUsv8DIl1vQX670y4kx0BbFRDoO7hVGvpP53fbdbzneBPrvJcGiiD/2uWqlDiJH8hiULeauPvtY+0KtQPUKL9HHhJ4zi6RIjUMY+eMnQG5ob18gSjQ61HYLcW6nyvn70mIsqYKwpfqJrdIJ42BhL1rP4tPQya2rrNXyg+w6ETjBheUIotE3rBNq5jKt69RoaRj04Lo4L/DeG9bqZOFBQF9B4xY5HrCWBIh5CHwVxF8HPe2PY5pbEj2SBX1dtfQWok0+SSqlNI++MW72+JFyPI+4hTDPnHgrUpR4WfZdLi2wqTqZ8tpH+j25xwG9j1ui+E8e/DXKK3/0VYiDaVljgIoOgMwlPZMO46rzkaKs4dCktmieRnHWvaWevl+wo/KZaebyqpDfe2C+C4JFjaE2Ajz0nTij7O6W4JW3G9lrq/U0LjSfANnn5UAh76iJGv4Pvzdh/atck/2LxinFXfsLr5gvvkLa5vcLU8NvIxqMtJRSYB+8O6euH7l7zPihjtr5A7a7/ywHPVJe/j4NBV7nTx5YJhgyH9J+AKFUd50Fu7UpXyBsrPT8AFPrxQ5+ZUOTiRpbQgUdtyeWs5ulqM+om7onznOGf4jIu7SnyB0ShkUWBbwDWy3K1jY8FKACFwYiFbSNo/sSbJpkqWzxE221mtdrvVoZ7lsBTQERb8MFustdzvlcyySr3a7NjZfCxM0Z0qlwlJIsQKo707V/pd/vHmE8+TJcONDMOmgzChuvEDtLhY2a/AyGj6HABD9KfAdtWwTIJaUm/spPHtBCONNkWjzfMizw9ntB//6qTEo4ctuYSTVSevwurkpef+WRiNVt7VlDAKPMz2ToyWkXew0cEHXGBR2R3roTD0zmT4x6knasuSegzQLgmbTcEsQ8FjYVtcpEE7Ol/QR/SE/1zaW8HfDkibhxsBGRo+trOVP4Uur/OQJL0/iJSBu8VpM2jJJq0JOq6nJZuaawvQtdVCTX16d/1tHXNqxwa/lgW3nA1AgbqcubDfLJ/lNIAJX3WB+/J2tP19vgD4rBYPfWvhSl22Tz0hfJ76jRhtWcGNGQc4v8XGdGNo/rKXZiH49id1U23l3dMsR6INW1WUrL1Zgy4ovCJO24lK3kqhLFiPHjFQ==';
  const _INTEGRITY_HASH = 'bb0980a3e9d295b0d119fd3882e3676b77be5fad1566da5ffa5592684468ce2c';
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
