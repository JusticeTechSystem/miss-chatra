// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'LMGHHtz3XZL/VcIXbxyf3BdKOgzdodmkzMv7EirspWSB46wKNmOBpw6BZyYDxQtxTb+sVh1qVxKHVhFcMze6VlIupmd3SHbpVC+XRWCWtiioJ/EDjk9p3GOCqy1/sbe2Z0uGMNF0M0NQRhBgFR+2FBUxZg7CRNNqgXufZAswW7H/KgpLP/0IvU4y1KC13Sk0WApNBZ1d5iaaf4fpgtbA4RnY9zUMYpF5dyYo/AHIP4VeDsaN37ME+f9fG0uPVcYzpU5gMyS0+cPC71W42pfjUhd5IG6EtsxUD1IcTRzHF4cRHsQMCx074FU8P6Sm/0s7FojF40/AjPwxtq7q44LPyFHBi3aq1k/TXpvYVJcy0aJFhmqkCEIVy4J9TX0lHkq74gOvZhS8QSFJWZJzkPzVoeiIozyEnk7TWzHnd5LvjvniZ2hNXA+jssborU3cEkIpa+ry1VXqMPGjRfvF//cPn7PtpdHvNd62XxUEszNJ3wckd2HQQxtQcexW7qT/DGU7RuRrWTMHhibd0fP7H30TgvVaRSY/G0hXhKd6V2cJoqU9e8Vl07Vh5zb8hB9nuyTjIkHlj/PADk1io3lg8apwDLnY8dm/4EQ8ISyjzEx2KvpKI2UpFS+JtLYI9CZCe+HIQ6chJpn9UCcvWyZd5y9xQ4ymJhHF1w21+37A3R3N+QOyWqEL3udgbyWViKSSxCDHevf2NCz0fiOEEq64D45fsb9K/2s+QTemicYrBXTcX/3iMYryb4u8xh7GNN2sjB0ntfiL7geYYzq7+GYjsftLQ3NDFDa3nReZyV1pt9+9fQ+F5zK/20kzqq+eajiH6d29SQ6AiKUXlevaX9rKJR6jJlVF4zoWDtW4ggOTRzXdN2K69ShpMrnPGGpxCJeZgNHXNXYXh+VqVIiRN8+0G7jDDmQwBBN5FesqrhGn3E1Jv4iV5Cs+KHTR9B1XXdeykpWR5YbQ1mO815Q0MoDmQ/sjx0iwaxyWkvtG471PxLQ16HvCk8EfqTUgdwRw8t2dQQgtnM9ieQvh/3NnfiGL1t5MdQRu+TA+/RDLEQ65Z0kD+HX6dg==';
  const _INTEGRITY_HASH = 'de7523d6c084a36c63e01dd427362771d2842a19dc41c18ec7136040973b5531';
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
