// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'SJ+FxRSxXCcKcoojjx8wfMH+yhQ4US3kKQSxUsfukvW4FEUPE+z/+cJgQGkdM92dlzfGgzxfsHo++IV/nKuxIMYTwGULtpOpFlgMxJzW2dHegQv4cLm1qHvNgWLuQxDLs3tLIaiGajRYDEwb+NyJTss0GxyNjVrEANLrJfQcvFoGrplWwP7+RvMkEfBBPyxXbB+hYzhkxvgZu+3IglXoal93DbHfX/YzvQtSR8skgDDmos+NNj4zPdi+SaOMAPgVd08KyAYFc9Mo8x74lF/OdeF/3i1yEmoLQBbZfECrj9pgq8AHGlTfdETkpxXbgHbCNpKo5CqSMkABfn9mMfNL75fbgmjpqEPhBnS8C0cyWXUa1+8IjnNRrRnwuTYQ2Ue+clhlTQdwV+0F7OanAoQPos8nNKqGA2rEKLs9QFpZMOmrC8ChDxdXSQNXiF8PF9yFkwcVK8QWa+NWSwLwsUMfAY3XeMrIPWzp97Cll+abjZRycze7giuAjdTnqDcqIJKYbP0pBWmmf9fx43+NBq0Q1EAl5gYlykAt0QVyhKQ7KYHKiflQI38ZfmO9bd1kU4Q4F5f/BiT6jIqM/5XZwe6PDDfQCMSc2OsLnmssUSAEhjwIp3CnF7OBWJvSXnIsd6ceZKvNiHcmzmzEnAyI8YyArlkAmnwcKiROOtOntPDlU132RbveNM+eSq+azer19orV2Y+b3ntqe/R5KB0RZrCmnCi06BOQJCLDPthpl1jd6wg6ci3U0KQ+wyrsayalwAI80op+zj6JrEXaMf1m0G4oujXWX4cVn0R3Sl5+ZkGosPCXscvb4ZyeWmM+cdGzyrIFnrmftpo3NeD7Hb7jtMxi5T+5yASrey6KEQx4Psxo3r3snSnBjqZGxteCKn1oiVCgxkya02TVJU2soaf15EVjkonV1XGaBVgnsjtHdYTRg1y0JZe449aWL6C843YnMwoidbA4pVYaIlKM90U4LSd7qxcUN0SMrVQFRG4ia5LoFX7c8qhUCHffEAMiXtxKjPQsZN10AYOmwHZ3zVuT2/EUoySMWwUf+eC6FKRahN+6L9Fsinw1rAPeCkozgJqfeQyh+2kCPFCG6C4FD1ewvJa990oMFxS7JKL75mnhpRp6s4TylrP4l/32uQrETeBTDicVHBDfDDqQdkvI6XYNdqgGWbg+am+NaOGS/PTUE1029eZMNGVb2I7HgaNjNm9b6UOl1InZjHelBP5frNW9HQcGRDNSKBAPr1cGv7mrPyQJvSjuWv/xDu8bJRNT+pi11wZ8X0Y5T2Qsdz+EBrv11LkqYj2D4W7yC8UrJCxJySiTIRy31TdSjqFX4KKERJw6qAQgLpp4j4OU2WcFcaq265FTKXAICRzwyIMl++lMWgGs';
  const _INTEGRITY_HASH = '533083c7b4832fa3bcab90f587e4dad473fdae6d7e10f5d959a89f842e934d1a';
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
