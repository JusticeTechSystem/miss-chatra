// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '8ksl2UKHzJjFbOnyLFaD5khf9Poj5tnIOOZfeeYeDcnajsirj7QcpIbfh4A/hB4c87dt6f2WS/PxP1tsfHX75HKaTInyrP9Ya69UGuuSzYg7TSM7CttiNAhFXZjxvBvD0OBdh/qatBLQikS+IEQ1aRIGMAgWoEKuWEBIOzlcxwETfkViGxGvSWTLkMiiDHyfxT7rIdl+QzmPtHCRZZoCOUO1g1TUApL/v3xfkYrOyD1UrhUVsG6r57yAiCx2fnNrZ7NlRLwy2SHaGEE9oXsKn0zP2coZbTdYjhU+58ToTQje3LaKVkT49A0fam8o+mws0KEel5A92xclQVFzCTebEKd25Ajr5RBR60rEvHoZj9YstD2bZwFSzH4A8NcBJC3vmRKTy3lfvCUwvbxl4FFF9jfkygQkslDPSJSJlXPS3ZOugWNylEuKRJBVRaMZ4OkL3qvosRZoJsO+Q+GYAEJikOxNQssE9iPLG7PVUtDF54z0fZlhW4i5vK/A9+Fvs5P+5SEuJ9K8an7P0w3Lr7FSMtTwAcXWjIPgx1+UeuyXlxQkCWd/9RVADbk6zpyCqBAlY1PWJdlDZgbVFf+RE7go8NS85lAnx/c9VQPRXaxHZxNBlTfch490OvSxD9ACPNfZGppZFjBje+h7m5jdDBIm6RZemXwAmrWqHB4uCZq6J/1BVEdZ4sM485HVESIepKa188e5qWDxcLCICxZmiYjVNLNGFi8qQdvoLWXdIJDMQrubXmsYBz1v+fu4RVT3qha7QTQHGmGCFJusNUY+8D//QUGFPhvpuTaK/utKR4iMui/z0ocUvyfZ3SRkWbxSw6TAKylKQdWg92K5gyQJFS03QZSWX8J5QxQn0NNBrBRji5gPPBDzhORbM7AW0S74uKD/Ai3Bn8OW00rXOGz/dTPgMi0m5wJGjwnLsW35fuEB9fWjjtlpWfoj4k6us/krqAU1ChbogTTBiaRTsgM47LMmHywQqFE8LSBmfqxrJH3FvFpXIeNRdnf11dY7VJHD/LhUR32hSr3tSNzWyTedaYPAaP8VMYUXaau57UVjvExbTkWn6JWZnPGgrNMpcXyFb2/J969dbfF5BFuydjohl6UQWqLKN5doJHPxIe/vidKnBr7gp4wzq3i2of/SnH5nF/0nFHmswyj2hqyPQR+sWs9B0MqqJvG6yBrEk3FW7gjjBthA2Jn6xeCwKlEMemg4SbiDJSPynO/OvsE4ufwhQsZnkp8oVwRgtRubU0YZ1BItjz6KrNzZWvSlABb0CLVYyHvVd0nIEw7ShxES9wHcDW8fMEq0GP5quIVLwkJXZEcjlQ1UQcKeMbdBKWW2hQ5/Zv7b5D9lFUU=';
  const _INTEGRITY_HASH = 'cf39a71ef61247462051f01769d85be7b06793f39d97997de6203adc3980330c';
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
