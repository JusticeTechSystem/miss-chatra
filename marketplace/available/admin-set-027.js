// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+VRfhagMKmY2BhiZ+ywvCRMvkz5gNsfABB3QfsF2HjVb8QojDvgzdgnqvvgif63ZuB4KCOKvxwSYxj0W/Slc8FANIfE0uzbJ93pnlozp8UbJrEkrZj62sxA59A2p0IHh68IsP91ch1ig2DfU0bSED3Y8BBvwcdqq9GOWp32u+YcVHcNQ1RL5ORBiGXZxHw00xPO68YDBlli//7aRJs4Zr7i8du746l5Eg6tguOUgwHg2NZN8cbRPTPWLaUFtCsjcy8S678UBtvg2de73Vuq1A5jDbLCACYNhOl4HnW7d3nDIttmHIt+7NJPr2Dpa1Sr6q637ldkn2mrv4KyMfOMLxg6oT8Pr1s12WMLztlfD5/qlX794eLYH3T2uH4cAtGuT+3+SPbU4Pc2Ek65q4143WdQsT3KpeJDllEUyXE9giy/YPZYO9e9yX2diMaLX1gO38Wcz8uQ2Nx2RdA598reG6udWRkUJpmr5GHuP8Sd+z4Z5SKCWNccgpNc7/vXWjVvIszkt26IPKaoEKx34P1fVk4ADaPZrswuL9SKnRGQHFK2gSb5trIzA4sJMsMml1CEuQTMb0miYE4O+Q6cOVihslUrp/ULf5+X5cqrdW5z14Amls2eQ+NaHwFET2Pw5zjU4etQgs78MXni5ib5mk65kVIf+7Kh8UAnKazP+L87KR2rzaLZq9qxHGU4IprY6Ay3e8lux8sm2aC1bG+oEFkAzzpqwszE9TNRp3JR3pEvwfoQdlzify/afnHLZEoEgbuKvrC1kb3xQa74U89E5AfBQ8+qUkiuASmBF01J6YnxUqLc114uTIT0Rm1ym9DD4TQF67kZtwcOaFsrrA135TG1ap0UDZsUaGLzg9jMUDYxzFhfn3Rvob8ulUstLZQVPEmwvhYdlksFtOrhj3L2iDcNgRoUvkb93uq2y5EpIClQvtWGp9HdqBLm8vyu/XM37q8BXTz4FDLwLXSgPcmLNW5G5DehdBG8GWxoJ';
  const _INTEGRITY_HASH = '03bf799caf21a13c60be95178a01dd5803cdfacbb3f5c2d0078c23dbcad791c8';
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
