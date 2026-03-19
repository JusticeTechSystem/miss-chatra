// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'YBhbBYT9TNBzkp1//v3mC5BgGk04erwiWDMMiN91tpn7kj8eDYAnf8WHvmznoJqmdDZroRRywEU96562d1OHnZAa2D5H8fvJBzZ+PvFMam+Z504ScQneQyIq+RdZ/etlLfTFhJ5h6EWIww3Ty9jIAlDq8tqUCAw2p4QrwErm8Rvli8xrzohFdATjoFKixveeQkMug9iQDCVeHteggHQ3BeGRM4os3vn9drsrw1A58LTC2+578hBDGKQjz4azloYZj0L73XB0/H0eGp4lRvoACfo4ED6eQ/MY2ZJ1hZSDDKoQEoeB7kq5ypJKp+zekVDFHZwuukAyqVHwBVg2HdP3wv4Irj4gmJIXoAPOmt2D+b0thiTYGUMJ+7YQ1DQDPSrO+n52+UuSs6L3Xxt6DgYX4/auWoZDerTmyDehGLQvp+oIIba0ovwACsEFofRvqmOyM4MSenb9uw2P4bu4U/wR686INKSEhJZohTy3UeR69+rbbVB02bhTdDIusvoQCD/yQSqsl7u80uDE9guLuaQT5Eeef84GbcFDhiP1eyIAFWfWAZpHvJ/LxMdB3yJ616R4OudH4yUSvcYt5jMWWmUiHgZTxxOk0VBFwJ3iyXofskE1zDeNmEAPGBgYL79qHfFAr19k0WLITjvZbOm6k77rou65dWpfokm36uKlRXs+kmfoMWa+m2L//0RWVSJKT7NQNm8QH3vM77rt69qaP9ZGTkt9XO1O6TPq++SE4Pj3Cj57LSAYAJcVzD7Hu/EZC3G5UoLMNaJ/XC2JY0WVuf6JuNrLBXz8GuMZGPQE3MJVwWyZmudoHXiWozZXZlQuZ3B5FrVXwXrMlHaTD9VbSWZZUkT+msIjLLqVKAHa1cXa0cq7YZaQKBmKGFERZNMgqhncHRV6FIAtdh9fxYJDyMHiUashs+WqF+lGZRIdVJDGNhfxOwyOWvFjrXPT2RkgeH1EI85Cj/qZ2zgO9dAYpZwwLB8CuAE8thvYXrMES9Lq2IIWAzc6G8++xd9aDzHyjSkoP1Xi3VbL6/VJ63dbicsAoaL25PPPjqk2lbGStPkdXV/G0Rfsr386bhaI5wjV/kK5cR3EpaM/iB8rIIfXKnSXyQforYh7+7KM8EKsnzY8tzJLRLa9pVzw0nwmN7nqPAyXI3yVCLBpk93PoHT82cX/qlpr7kFzfTlrCPP1hMr1gu4j9xqvsTfHX1yxpBN3mEHmBW/Zi+BM7uw2Fpliz1rcy+SkGrKWRbe4G1HHPgc+hSbZIW1aU9lPjEQl/CcCPHtnTOSCHnAfPMuQu51U2fZQKDS7ijmJYiq0dysxTknDfD5XlnmtCNr1cIBexH9Q22f4Hj6FUx70MRYZ8A==';
  const _INTEGRITY_HASH = 'bf348138f9bc55cc7e404d98b2f89c61d8034bbcd2316051200b545186561204';
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
