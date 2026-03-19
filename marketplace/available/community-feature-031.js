// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'qKwzgYGrKHeU6mlMu0PYUvnhIPCyn38gFmGfME5ZJg1qaQAHmfsuE54AXXZIf5nsg9+21WUr8KA63uaP4SGG2aBsH26n9o8iiEQIO8OtQqN1zlo4dPtWy5XxiMzaU6DKgQtG6oUVr3/0fnMDqBJcygEXaQf1SCZBSYBiXkMdVIpE/SZUWRXgmwb615cvXDYi3xqK0866i/HD59OAZs6e2eCZpf/bMLLt/3tIPNtY3Y3dM38tnVHMiCbsKpwiqLeEkqdI/Fz+U0zl5k0wkLapHlFVS6XpYPVgB3/EThl2DzYko5IpU8ALjDffaiaNnUHnNTfx6g3Fmv8N4ZIfAiyfJzOqiO6EtQdU+dUZdeabGKxzY7Mcs8WvOZXf9xGygg+uEsWW5256TX2LvFIikWBy4J73Rey/8NaVKHffzBUSfCA9foAWZoEKWB1u8wxq6k4BXXcygEN8j1Hr67pJsydrGoi0Xhps7nOj7DUNEkK/gpbnM1W6AtbUgPXobGW7xbrfKY3wsqbbPSAJ+GYuWdR4zz06Ihbw8hV7kqDEwRqmEMAQLarXP7g/YkiGrDSdzFJgdAmoe73EtWC2Zv7IweeMM7CpAaLcv0+TtPhQ1MAlwnovw7o5yKkgw6PsiIwzWssG6KYPZ/SPW8vU0hm1fqr21pCKKvOoXnAomPDf0JzhFDsREAHR9QnoBlJsXLZyR33fjXFgy3p7nnhfH69/mUKUodusnCs=';
  const _INTEGRITY_HASH = '6269c2f18ac4cea975b8b9b4137ac6bb1498460a24b218670e002de13b4d00fd';
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
