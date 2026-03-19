// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '49QbtDHyxyi0DUHsfKTntwyiZnjiMjywzgQ4DQ776aTmWdXjntHKIgY1J6Xq+8sD9SNFYOHfVWqS6WJNvd7j5tTZPjbhFvK8ze00VCt2nSJM7dxWkKZsx78+Mg4GR7JilvMm35ZkrPdiOFsWOaIOB4uoMEybX0HSIe6IPGoSPezZ5PTUOoW9jpsqiVjW/0BQMBLL/oOrm9EsIJcNOVw3qRiDilhCO73R8GzdwwT/08uD8queTAjOAN7qPcYETlvPCppvTZl751VzVYFkuE8552RXjVIkhGXl4ZBzs3/TBSqxHDLzEB9EWmUVKJfy+W5oHJamcrVwkILMGk6wWENnFTm7vQfadquDmLd1fj3ciy3Ew6Vd50Jl5xs0vaBr90ukJ7q/wu1BT+LojjXBlrM62gZmQKu3BxvWsV9puucxo8SWRPj3Z4eJ61zJRDM9G+4R3F+iDXOopMwmrXdel4D/15Zq6zSr4sXJZzz/CGgT0gCVcPW7F5jPBEel2US5GLv1bHcUtCmjvQuZVBOz16VDb3xBru9vC/OqhO5qCBR2jdn0LxbSD07PfFmpbEn/78qZJCLdqPLPzTku+1AXTqFZmEnoGlrzNJX3+atTr3FxewD6IVxJbtIe5v60u19GLwv1Z1tPhuqufN8zPhS95sznd0ucSsnNtNtYZUlI9UJK++NWevzooyePGmnhqbtMgz0CiGcYbUEA+NhVxFNpNaMq7rkQKHB0z3pxyWJffVoBGCienBSGDv8PPAN+tpRQD2yMwP7CAHlOSSodpSGKt4FTcNNG5M1/a084L0WlZA3hYJUDf+ciJH0WHfgxLVj+UF8W8g+/m6mw23CSQt1WVAWFftgky8CP9Gadw/wi5QQ4wzYq8Ro5r/yszskcigk66VAgoKJMKw2qAfldUuQLBsqpsFeXYvTsuSxpDP6j5zB+G8MRez0xnzBOkEFaakAP6wK0wRaBjf7XRB0lgo0Q0c890AgwmsuswCk0UYUc+CPizX/pnksXe8zXYjwqt6+/uSk11A==';
  const _INTEGRITY_HASH = '433a4de534abb5a83276403d21c34493cfe554f32e06fbbbe27c51c2e651e825';
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
