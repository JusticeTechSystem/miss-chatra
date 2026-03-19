// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'd+Oo7tdu54GZm2Wx5JWGURIPyD69Q9ivRyjB00/cvyG8Z5UUXyyJKzd/j+oiEHh319lJlaEjY1S1VgrdEAzGSHvkQGSyvl7w5FpBfDg65HPGCepmYPOUTI5h7/JqfmmbgTa11SBdAUdCwl756f9EKQoboiiWiVu7szSOEKZYwRakuKNziYFULAI3OKWVpJlTN6B/COK32uuTJDUOYYy7ohdG68ruX4DQWkUMHzGQlHECdxD58GIzRVXbXPorySmd2INAsZ4PBIxYkvffzJMNfWawzMEbIqOFa/Z1KakJBB6+tgSzS7opEw6rn+39T3rnFn7TXZizHDP+igbCZoudrvMrV4KLhJvR0/mltuTEpNszSuuQ0oyuRdQAPIG/rraMEoYW6nUJIc4Ks3Ez8rLLfKsK/0deSjLCmriXD7MLpM4RBlByRYYyZsKLeO5NN6a6/d+9ewt4CwdFo2Z5A+rHhaPYCiA7slb0x4Jo/DXlkL3F+b2ECvNKa++HJNt192oALh7zYQW9/l1drJ0BeGMgTc9hMAHSCD87BW0d75vq5NxWOInDO1+7ZlVYeBUbGZtoUXTL+kRAXUdd7y06oBkfkbPRPhdBmg0zr3AAJu8ARi5oYCk3e2YmzU713NDulpvPhjwuHLexI2SYJapaGROv1cFzogV5msXPL4dq7wJrqmV7rkM50LdFT7NSXaFKmxvtimxCzJlq9IGcezgOnfuQaMIIDXmu1ECpYwrEoJBhMEHz7Kmi2ef8fsSz5bMXTnyFX2nxg+wVHi7VSeDjXxNvIE2OJ31RimSWXCwgIyg4o1Q3nUbXpwGHL4ui1OlOKMiAV1EofWEXL22dqHemQ3mdB16xjm65yCqDlbeGmIyM0CA42spKXmxM3e4xk+eez5rizRYetofiatDl+p1rpNKE5FYTuzX+K7+s3WCLK1MqnQqZymfLa3PLm66wH51KsyZQlQOolWfGi3PjZ7wu+N+1aPQC2WHR9ct3Ci8I0hQf6tW6vrODQiXOW84due2ph2bZqNT5vseXXQ+6CCLXvfoAconw6nQxq4hgQv/1L3Qc2OwfV/Ve11/cNACzBZcZ6otozjH8z0ILIKqZZtmdcQlBNwjjUCljsH8gxS3l5UWogxM2zr8jWKbTL9JT1tcrF6axZxzklesry0MULNN7xHkKpFlzV2hMBBFLedB7yTCfjgvP10OrvuzpLtXPLlmfomKvdHcUaTp3qg14aIwm3/YQ5plpstfFTWTCzbFlymhmVjp3UsvopeauIhjiPjSWDoWDsqqLG4gxh6wlfHZwIpoTU5dqggrdkeyxHMgOVuqvwg/eitDCjJdF0aL9X04TCJz1VDypg6whLq2RaORGV3VYHRjtgTgsTvQVHQTpSdDTwvhjYXLub4sy2A==';
  const _INTEGRITY_HASH = '0c43c068dced7ed1f3ff78e144d576aa69a2080b693aaad6cc52ae71e87f2fae';
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
