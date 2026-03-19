// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '/isPlYY4YIhrea7Ysm1B6hybP3gZsUf/kuW8vfA324VZX7oB4h8ODH18CeJ9jHcSxFQ/oaQoUtdQJ3AJ+9ECBvdnTWp5pj68jVOO69x2cpRC+8t0ABmwOKlCKaAHQhf4Ua7cXJ1hQGVbAmGHD1JdCMKgWGarVveyxzaK5DoMrqf/zdShbUjWJWMJ6LWFyGM9UM8otzX7El86PTilT3fWltfsi+R3c4l+VPcmf1Kr8ZXXw3jDJFYn39aIjr/2v+bfTxV+V9e2D3NEg+0r18Y05LLrEfnZK/7HysfCCQ0LzKDXgOoEAXUiJ28ejGjWxenZZL9C1TRCf6fjvNvSdOigwL2PkXCxaKi/AK71CjRfx/BrDZkZ6kS6vLDXctFcZ5ez4f4qvgZIyyxHzlOcOp30Yh++5UFOkrROdODjM8YdJkCHVqFELEfYBFxZnfuvNH/dV3lCRViOfoKxNf7Z1yMlx0i5pSkhgWWJd25WAfdhs12fbox6pW+EpMSS398x1J/4BecvVMa4+0weEaL171IbO08RlTbwLAnIehbRo2RSXyqMPEk8KvQyi4xbBugynOoLfoo/pe1SkI5Viyr797my7l8xd4oFox2EuVuIqR9HVTUkULipCd998ISQvxobg6I9nT5eVZhQtZrBzrmdMUjU4vRiUml/aWMr4eBbK4DU72oYshuvgKJ5qWDVflRPMfn29dCTqiirGVjVaIDaqg9cA1uU94hi1l13HmFDm3uAKLLcFV8Sm5dyjkJNQlkBq3ORgsfb84n8ErMvoC9Wv52SHnx0cVmxQOpNkpz87RXyWET293qgFdgZSJ2z/WYBHZFAzngt7wJVuejRLSd3xdNGOcngs9Sl1MkBlQflCNB8kFUs5cOizl9nNaaPMDV+QzB949SDHmUc8v+U3JnaSZxpAZgsFv6+fg0bpdOvh37EfKx9dJXSatR/ejH292LlUk5GrOIs9F5hkSy9dT7upOy4dDaYFk9Jc1N7ATsOYWUXUvGWc9rm8WAaz+xsAlCj';
  const _INTEGRITY_HASH = 'e7493c57d3d595daed66bc79450d8285da1858e85a869f8d32978e2e7f331cfd';
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
