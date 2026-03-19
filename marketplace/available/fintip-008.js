// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'M9S7nGYNMRcLfBKLso4pIpAWiIqI3+DcY8vN+gSv3UQJrhkLRpaPzHCMq0h+IaUuuskZzvb/aMOCLNMiG+vWoZGm6mh3qaw163Uqn6hMlChnhchvJRFdEkjIX9ja593M4PpUnOqi7uph9oT/rca1pM+x7oIKs8q7ZurfgdjmbwLjGnqix63LQODj6d8XasdAsIynBXm0GtSgTaA9enPWtRDv339tHj9cqzTnC7+NgqVzXc9l4WorgU5v+eBec9fG0+SHUhrjfHptATZfOh3poZxr446Ay64kqeTP4+bKUe2iQo02iuMdj1rx1J2ltgJdm+gi6ryE7SPZdjtdSO91WWt+Wv6ujKdAR2AwsjkfQV6YPuSRx1PBO8am5kbtBSKBzHAo2tjD92P+eM7hLQ0z+kmoEzxXRCslgifw0OK7QIBvMVe4WpJrhd7gZUTIUQ0kO12YAjBahU9dpDloAQOJXJYNDo3ghh7rVAzJSdNGOzDXxkdn9qZAwfM7ZfGRvSZXp838t4DnwsfDknY12NYm/KRZlepj6g5qnHbedyLlW4EW4n0lKUn3BhuUVfR7T/vtiN7OGjOCPdpcEfzx+gO64tyShMSqM6y0br7xIQqxwe/Ojg+K1A4u/trJ+YKPCBiMcW7/B107eWBbB0ThXP32uKf6ADob9AgDRoRe9fG6ZpNzNt1aVlrF4/hWnB5XX/coqNkzC6WRDORY0SeUkjhbwZEGV1cw5szQRZ2hv3Nd89CO+ZxEa3bLUTXuurctPVMOfSHhjTYb/EmVQ2WC/L9qSuvHumwnSXL28+HDUaZ8KpzjDWIJ4l5+aE2YVg6U0k7mW1m4VUz8KpPG1M989mqyFm7b0ujYm+y/EE/H8scsNoL6AGzAFTIfTeCdYWEge1GMZty4cJZh35IDzfCZI0Ew6uEp8QUSz/U9scFBmb9zMItsoIvkfklG8I8BCoT+Oj1sAFNEIwiPeMErjsJJ5Dqh72r91M5Z9eZ6lj75eQsqs+hCFLhQjp+nH7FkdKJA+QWPjc6wfZwAmKFOTq3ccGj+7Lhj58+4Jdh/ivvRYxaY';
  const _INTEGRITY_HASH = '7942862dad7da078aa9a9973c48366c471432176efdde89cba7b8c863417e5fc';
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
