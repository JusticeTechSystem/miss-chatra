// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'w8JLboC+jCZyNLrWhD8sRLgyAeqHT5R8OJSNaptDGeS5Atm+Jzv4yWj9p+2m8K0MEGcPAG++PZQsj4XhR4E7OqeuHXA83D2YAqN3HM1Ni6Hdl4dcU9MpM4ANhJgbalRFya4+PLshBxzjS1deh6pf5AzD2w2lkU6P4JuD0+XboWt9K/JBBRDWU7HK+LyhT3+lJtZkanulaiDlJoczO4dHNW9FoD+xfIGp3VXM8fD5XVu4nYZ2oEUWLu+cNTpuPyGL+vRC0WX1zh/3XHF51zIOHFJU/UElENcCVPx27qhwVT+rRNM3TTIJ1XTALEvXAjDByiO1HvrgmN2Ax8v5RA7yVhvmXbDXfHoTDufYw2wJxOYucJr5kps4cHBjBB6uc4B/JoDUW9VRdFiT9lqQrSpkOq3/7KXiV12VQsXBmO+luGxSPPOo9CpWr4jczbbVMtdd3+irLJ24nrF+eSfVNb/Br324l+VDr1IjhciALbR3ihuPKzLjpugZAVj3JLH6SOGRdmejSm0z3329C6AOzArkUrENHQ1dofNgSNxZgAbkQXGnrTa/6VnLMywrpsC7IvxIA3+cjIqgbPeYRny2dL++H3r5J+sPXhbDfExb3+fq+S3ZVS7bqAi0UP+fPtCIjSHL+9znZa5BeazijEsrnZNW7wtyM147cb3ExUYQ8jXkyEnfDVZXMy1DjDJ2iOlljsYphDA/cWf/raK9fzX32lw/OVU07W1xnrfU9fP+8ErVhrhXlLu7AlGL73jYg+L/irlRcpmFFMfRI4+yXTRHkk+B2M9qDvTRCdeitEZHpbfPUEqgFZGniy605WaH0/nLQ60Fz4s2s09dto6CaD3ROHmurcdBlZiE86RkCLAzPJqZPgUZ1SxZhgxBVhVwoNzYsQ84MGl+XKn6JhCioakhttHdEdUcoKy1JIePkOedf5lcz6KVGc2h/2Ey+ASIj+WdNDaxHLMX920yL7li0vQ/n8/LDbUovSVw7R9iL1nByZHU4cXZqK8vB8JW1FSZ7RqBYCyLUJ5ywGk+EeonFUDG5f4jal4YC/puKCC9J5RA07axJabSgCgZ3AyJfVj6XCJgG6SUXzNC07apHpPk7zc6w/O6HVHXPrL941sAVTP5V/QIQFtXh6wHU+e+pmPjQOHBVH/Opkbd3Pf845nOueCqmaOsxHStYfFmv1+WzOIJQ27o3OKt/FGVEic6ebk9Fgm40eBrfCTIYnZKY4P2kE/9JocSywmVYZJDFkN22tvOBrfaka/6Hfu9DtpxhZbCV5CdeoTdvEgCj9SXC6AZel3mByoveJxqZWz9hJhyh10VB+uc1V8VOBPGXWwtm22R9fX0Spr5sNGl1v+TcIBwzZtDELD/VyL9vI24Dkr/OA==';
  const _INTEGRITY_HASH = '9d97f8879f14b6c8e864010c9095a4bd9545c5ead8d65bc70befe386d4e15a06';
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
