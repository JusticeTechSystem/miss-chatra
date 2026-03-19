// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:11:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'H/8/7b5NjSgcgKg/bs+GpBQqB/tUGUdbRn9mc5+tF7tJvMQJOA+/vdAo71eFtFMsobreF1D9RPb/w9R+ZtgrWmCcDcTLUSOp6/NzLCreepSycUDKa4SGAEN/LobBYBeL0ULgeQ9IeRLMkJj7WI3puU7vJAjU04H+x19fgCpMaVW1SbaZSt91a3FeCgTpqCawmyIdhL51aPWS6MAUBkurgMwURMDVrEa94mPMR3ahZKiF3OpLZBACiEIqF7RsTqr2MpD10pXdrNYtiuUW67/ksHP+moG8+CaNcASfVsSKY9kSVnxoCq+eOee4woSOV0Mk/rp15Xict9Cxx283M6DuU6JwP4QsZ3BuaKEW59LhBidy5bNPodQt+/aYaKkE79pNjyxny1xi1NimYZL3X5FfiKwNO+PP6dOMpvaEtgLf7Y9lK2LqV1WbTG9FVNSahiYjygvC19TRDs41kuHo5tiR8OLKNVQSUsfsZ4oayx0Nz6TZVi412o0xSnjfEfbsLQ3H+wcXwOLrMrCpRyz7bE1naG9yf9hC42kzmOPrnzx48r+8N1wdb2k1aomNlsIxifCvQqLS75IfTPJFDLx6vv6m6T//7eg/eKXoEKdVUYRORN7NwdNBdmBdA0yxwv+3aJqPrJDmZZ+GFsU2XI0PV5mTPJX7YEltbbuO5X8EVaVCrEEGY7lT5eoW2gkJ2yGBrJOEf/FfuJgupf5/jY91PZSDGfzJkkW17tRCtabbAKBkWrYtd0fzFqeUwdkEMmWJRhbbSQiEfq1PwFQqqiEZs+/ScngiyScyRDO1NInHHoNQe5I0KnD5RX26Q1uMoBdvk+og+gjCfB1xgV7PWRfr7xn5KkrczJrgkWbxx8/89NBsJVzfpnxzY186UBrtLMWLI3M7+7w/0zyNqr2+x+s5qHyPnuhe7Ji1hiBt1TeUNnl7ESfdtlXR+NPJ0aTT9BoyLKYwws69/tcPCPiFu5GbQ4QlmINBCZKbWfhIPS8U0CEgxbVUzg5txEXZ/jsEj6ho6OZgkdkWjZQGzwLHI/+9nBhQpprNTaRJdg==';
  const _INTEGRITY_HASH = '6955391b6cbaa5cee172bc18c1df8af9d3b12c7c08be970a551f0d6533b4fec9';
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
