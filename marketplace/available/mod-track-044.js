// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '0nGRE98lnlUNiWJAdBhaWXYJC3sSrh/rR1r1Q16KksupK8dgPnY/6H8z8PBgopJJfqI92OOtOWeM8u3Si40xzW6Rf6GJOomKcaMBbeKdUG6pr6xEHJyi8DVdEUrXhEOaQf62UzT0vy6LsskUOExJgJk3nb9A+/8HDCAs/wYg81GgFPP068hMMxZckwGGj5yoKdkzL0KNDh9RC/g6XpyjMQWcbvUxsop+BoNePgtjWjgj+rEoNrIP2usE7vXpjXg1X09LUMuy3lxoE2Vj97I57fSr26rQs/Brm7Jtvlz7qXBvjxr4bw7j8qMwFP2zF21BhYMjgetUwOaMpe1mKlWSOnGTUU+u/9BpM31MPQawIGMU6s0mwz0iU8r4bfGCwbXCPEQ1+sKFkMZ5rEIKl1HAzw1/4ls2Hx551CNyVKbcav0OF1su3MC1aa+/ZS1gVH/wD08SDo1WbLi47eAyBU1mv53EP/zb42EELYu6S7S9aN0dpYX3kY5Y120ojspsHDLM7rugqH3akV44ksf0Ns2gH1Ix5vkUrAYuI6cV3ZALho3wccKNf4S4xPJ3jog2s4TMB3TtjAsukmYaawrn3B74xZ0WWQvF5XQPTEq+f94J9yNM0Ks2WiV3lYkr1ne+aEGcYpsFChpwwhfylE9moKgHSygwsun+UPrQ+IvN7WxMlKshlt+edBbw8LtrVwQzs2CwQcEJEuvevI8VzmozU3qJzKECdFqRYXPoVlUXFcU1h/Z3eagXnS5Mq4x/H7RdrRpO/wpPFB05RIIqz40tEo8ID3THAFonUQr7ysJ6EEpExM6vAJif9gxMDPXgjRYZyQ316htG6EfxLo8sZ+RGCneMF27vb2PXVanBXoH0e+Gxcev78VMCMlv49uirmC8S0x1Mj1v0ZoAduEkIUUoM2MXf67IJZa14jBjsB2/xf+8KNU37ocj1TOIApGgcwhZYTf5VEhNxmDo8RHykyNj9CIxFoeZxpUF3vphLXMXq1LUYjiWfwwgVNdTjwIGhDgg5hJ/sjyMKvs6qcMvclkaN53q3kg/javlcv577dMmYfKY4c0YihBj1EajRshuU0Bez9/j5uGRcu/LREd5C/v2WOXxM7btbQScTD9x9r9AruvmcEnNgxqecP7tKPyUCNh0LSYxv4inTGJDmiY2y576tQvBP9olVfNC2lmVfrTCDuLehz1g3Hecm3CrM/t0fV5vIxZnsEPLgzNEQ62POO+ipQz7j/GcNhjo0DyOx7I6tfVvkuxjII5gF/rnHRF0Rhq44wdX+uQm9xKVuOTxICmW7ec6xP+fzH9I+VrsSeM82VnLo0D3eGWoc4d7c9uwFX4KRupnvsnLu1KzsRxX5j4A0gT1IzevtzjLAWoRvzw==';
  const _INTEGRITY_HASH = '21d635c786ed11ff1a7eba60c83885d4e7bc651c5e51bc5416fbf6674301defa';
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
