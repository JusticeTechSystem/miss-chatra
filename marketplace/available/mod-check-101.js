// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'LqjZ9+GCMxNnP2ocM/17dE6owWEIR8RDYyGxQx5rMnZWTZKOouX8uiLS0j3do4eb5ygHeZbf1ZlcSieZrk8qqqS1310oAM4FO0cQaKd99JkChthM5iJH0+s7VWs5EDBbKz2/tKVuFXKn0DZ7YQKKFfGHwE4pIGcXVCce7ecvMWyGCoWiViYM3eMvFHujt0wyc2F4QVxl6fpzZjgBA94oaCmj7sGHYZGVVqTBReOJVcr5AYK+EKu9YHHtn427N75RPQoCthpnz+t7gvG51uC2Z19cqFuVl9pheDJkWEzLjgmFxKc3Dob+hXlHnYFII5LrRhC65i4JT1/154uaKc+m2xeb1XMKTYSmMOHXyGP0tzs38NqSN87oSnEdLzVZToa2cIFh+BvnLL1VgTY7dGvDPqoA8BcBoktgWWE9+kxWDJzzXNrMai55tp+b1bIGawVFF5UbRTJoRNHoDiGxHYFFwEFYmJssRrv5POCJVCNflWOLIF5e+tiBdj1TsuamChRx98kylST47CvaflZ7tqqO+aS7YwRbJ8J0bdbIsDMLwpN5OQUgJdOCAnSfyYNl5kYboRr/R1xWkyQRyHljLG6CyOiPiDAeitnYQlNRo28i4ytUXQabV7tCvOxIi7mN3FBxwQvwdUU7ZXk9opDRkuWLPJHopEdsDuOsmI2mHRENfuS+P0BdBxLLSvyLVmAj6SJb8jMQFiHxxGMWOZ0cKbO92/VUk9oiq8TAP48GydhfO0TQdwvwZx+XANhLualQbcSETNgrHVdl5k6Wh2CyCnGYolH5HiAoImyk9bkNPb5x8TQbzSZSGD2I9LGqWJEZ5eoynm+zTsPy+Lo2Tq6g1kwhRmA0+fX8Mxw2JbG1tYfD+otJMYLrKSQprnmAd+V6j1D4BgY5g/yCp0+NpBKM6qodXIL6OySeDbVkSUVsSVfbVRyUiyOWjEgoDtZ2z4oNtJSF/z3J+em4jq6X9ojHE8wtUjrZ+BcjVTg8iIQT4PNz1nB1P24eBEfTix18TkhcwWpd7JfSH/ThK4FO3Ir+CWfh9d6YoRbJRt5b+7TvLwQsxrF7jmDa1gWG6zBZ2k7BYYDpc7DTJQrr2/kOeeeoZUVZAjWqWOCe5wGg+dHCJ6D22RJ4gkaT9+Q5qc2qshHObrL0DLMuCtbsQNNl/yF+ieR0GxFowlGU2Au6+oogfPAVhfi+WnaCPjU4wjT+N5ngJG59OyqRgEjURHD87oBobAZmq9HYXlcDokJyM4NP+V5IMxIq+cHv2CmxQnXf7WIDEXrXDHNEQyJJ9QbBnpGIWWWe2DY/e9aNhkb90GnTs1r/T+DTc11vYZoB8F/cB7GnN/lFppbq0pAh3hOxrk3k/2iKjUUyhxUFIO78/LJ60G4g';
  const _INTEGRITY_HASH = '28ac9cb8aaa1ce622991279ad89db3397aee89825653b19229721e03eda9b536';
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
