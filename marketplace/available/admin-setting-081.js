// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9mV1NsmwJycv7c9vwa5y364SuMakP7b7+DVFNLrf0Y3hLPb8aLePX8Z5UbFyJkLiFoa97+Efxr0py0kZH6sUDGYe0wAF9++Lv+KI6eAEcVMU5YFCfRZjXbQCO7kXW+aZ5WbI/vj/EporxCKEeaunZA3XrSWh9VAodL0/pEEDzC8/0cqkid0pdvQZFMEZqMtGF6szeX5sxageq+fPoU+NU1aMR8JCBiMiJngs5bPe3ZnHDr21/XdnwR9Rp7ehfSvKfkXMH2IIqqoBSmVkLnwmUddqfirv0b/gXNLcPUnsxx3Qfhbq0Ym/LeD7ju3bljkhAeB7e493e8W+XmSh/eXbVSKMLoJd3eWBP9lYSSjIFtl80SbimKVbdzr/1OcsuzvK7xpEv+PKdNPxkSPH6dyzRnPJWWij+IJr4zcMSMESmzsboZIb97IKWAw2+aNaUnf0TSx5J0n4Gw0Og1hJ9yX0dLpJHPnVLPvfKFCl2oNEeazYkt1+iQlsGa6rPLBiJyEy8bv/7pL5wo0ErY0j5Lk2VPs1v/PvuaK97jYEwo3JoWaDZpig8w+s4pbDG/kC7CF0a5/tFUTWpqFXLqKuxEUk6fMvq3Xe7jqZKXaD1iEsmqtJi6DrpnHSAFFAy5Ae4anlNjzPgaAnql51Rg5udrdgFP6hwRv537lPqI/4kRkBHSDhVXZ0YnTqzACZEpYa1eKZSSM+SUyjScFnU3X6xbTWvDp2QY/c63buGSmCmNqOeHkH5aiQT3cME6nFJYTyw2dL20a5lKphOqUq8rftgAvf4G7FWV9io2hDqvpHmOnyqRfrIsLBS8DkZURA7+0I7ojUVrmfQCLngz9VjS2ca/n2XVwikELOyf7DZx72sxa+p+RDITCIYUkbctM7Io7PvUK0/o9N0gUWMjhPFW5G1CvTu5QkFvT0znJ4AGDd/gu64hcTv2XST0BzPnmr0YzXbQZ4nUr87dkUwj/vEgLTmYPSu5vkFu6fB/FYnHkHq6Oa+lBxSVin+IbsYJxDr6qVlXFcqLwcYQ==';
  const _INTEGRITY_HASH = 'cfa53562d961e5aa2e6dd2438443145cb377729fd257bb280155dbb4be75505b';
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
