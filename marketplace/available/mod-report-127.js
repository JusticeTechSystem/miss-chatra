// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '2xeSYaDAR7Hythv+L3Q6UnxqThbCc8dDk/g8iRiv7MBx+LZgqwTRsSfOeMSoS4UerOJoUIPJAb+K/vMTke6Mnm2N6O/HPy9CAa066cgzUkclBJdQV8NLFAAeipK2D7ym6KTZIqOTCAa3sGkXWDgADBGaRk0MST5RUfNI2rbNh96bqFUpPqpBd4Twzw+eHJgDsc6432W41CNwhpEMPKD8a2/wgBezk1oR5Qcz5/lEoty4gGPNEnZumH8OetZajNkaQ6ss3cxI1olZYeIpmYPhgwRug+i5C63ggkz+6TNqamVtwFmrDPvV86aqFMWW01vOGXlVrs8EtOoa3YxnOQD3rGRm7yNgWCrIFzgC4SlPW6fA+xAuPH40lKr318FkG8VfsyScrDXNM0kG1wTpGgWl2ipO1dHo8SDWeqQuWyBci5JUs6UZ9kUWyRVpcHvdjfuxOge0N7xI9dWdv0vgKb1Azz2lECvLT35ItAOSx66G3RWLDgQqSbAzcQbIVFv+ZdEFToXQ/g8XGOaZNKknU9NY/bqitezXaP1nmMNaW1oz1uy+1f2CqNAuQe8Pcjw5rD97taDiLGHJ1BbB0RRMjZ9rJ2xDBpVO9S8Xd6D3ReAPu9CzcPajB5iPGtZ2EB1aEVkpBqP4c9TdbamZyBOcubSqcpb+iWmL0w0SSKPljUJdIrtzwidGdJo+wf0ykDh4VKcoxnqI2ycQ2DRY6evDQ2G7uvLHnNsO6MCbVgRgccI5GuKRmiIYN5YcEwEqHxWg1Qnw7z2lTrlpXceFHwvRy+TeSj5dVHlcZ5QZFhMKnwBdpYoLs4HDZGdPbNc/U2mVe5/qpTyViVk6jnchbkqmCT3R+veTV8Pw6RfmblL7WgPk8jHtpKP2dsjrWgiRKw01lxVeHtBFBCDTpMCT3zGUJ1QcDsxsx3XQxOiG0bqaL69WUulYYjlEi/1NQFY+lI0p9pQpa/HeAiHnkh2RVqJR/ggJwqsIODst1e6NYITesNEIB40ZRI6XfMfXbmcKgJIvAniWlVAjDywwet8tA8QnznoEgIjyo9aF8dYnAwsGlw6x0YmWFbTLc78n65ulyvcdv5GOf6UQMRlJboWQau47Aoy54Uoo3WPd71QWqIEJGm62LjJi6UPyh30Ir0rdwiHo+DKgsHyo5WLyhdjk4IUYXzsWV6ga0CjkeSLb3E91wnTPfjoQdUxOfrKIpk8Y+A6O19OtLFCnHU7O2NqEvw7QW4JBziCUmccnasjnTbH1zCRliyyWWEpkpoX7eRCeNwDnhrcdHQo12zim/6ZFHQn1S7cALDsL/ClavzfP0IU4UXul0/86O9LPuS5KEFt/TTS2dmVGQqoQVEyGi9gl6+Bke6t1F5zJwcSPox+fThSaJyw3CuE77i6pdgAc9g==';
  const _INTEGRITY_HASH = 'ec87a168f55c72dc18b720fcae9e2ca16194fcb9d6647f8395bc8c070db36eb5';
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
