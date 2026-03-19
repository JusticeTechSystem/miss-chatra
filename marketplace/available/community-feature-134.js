// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'MqVpHvnFfCUTQsOSAE/5FuhUHJ4Fj3SIMygbrjUzOydgiJBmbJQadpUTOaZK2k3AWCko5t5lk9m8fEb2S6uQFkzIAx7U0tYxQa6TH32SkDIRqmGTc6qv/C+VD6uqHdp/PAXTyr0P01cYuipdocw+sXQr6cig2isZx1QDrthb4Cfc1sMK2eh+SSnsO6yaziFB7Agoeou6U9SND5Co2GZoXjIqdIfxXwQNmTO8zQnV1EXF+tKA7zkQyy+M6O5yTdwcgKSTJhv2fmH0JftuZg+YYMidVQ+NXP/rgooKajvhNAQK1EX2L7M/U645TW1YEUReXCzk7iaYWQYGbNGdxVVemmYhzTnC/c+4U1dUw4LQFx2WwCFVf7DrN0tdIP60nm93eLos8U4V6uVNyyERjlJf7NVkwaDbdNQLYaM+CBbpssufN5KbAj+bf1Val0BblfvgOA7gy6gd1hbVR12ipcNwE7qZV6Qwd+xEgHHseUHYkHqxcdmb9OcTAr/ho4DtCpwrtIdFAqAZdLVvRjUoA+Tdyuxengr3CUsr7bT22RDGeSqA2Z9s2gO8qoNPwvacgydo5PKhPm74Yo/icxwiGUreqH8CHR73bV7JkrKNL9VJjZpMPObz6PSGBelAmmI98xeUYb9q5NbXxxk8/y36bt2JY/kvdLAzUv+4BPqSwi03xenPGw5aejxWWTOp1HCRcofbSYjCBlVDNmQUthe75BFA20CjXEp6fzMBAw/I4G9GIX68vx6mfGY=';
  const _INTEGRITY_HASH = 'f200f81e4ebbfd0d7e4131e1f606f1e77bc5e9847caa6f37e86d4d41f208cd8e';
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
