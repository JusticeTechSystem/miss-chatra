// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'M/tVWnXYy1f7JNehPxsUeSA9mqzS/TfCZsNoC1iW3ADC91m9imNhCX5Tf43XHQ/VAheRn1ugoBbIPsYmb6s0IBQyR2/cpZZpaybFJd9f06wESO5msujNgP+zBLuHZQg46woi0Q0OgdkN8XHzSLzQbgPGrTrif7cPM2hmDvEKeYLBhGO154C6eWZxS6x2h7sC0fMvQ4SFgyx54LezQ7yuCcP9GX1iiPA2vvRNl+7PVLWcK9ge/KOd0w8sh5yPIj/q+kLuNVjjbzL0wwGXULKzxrFOMBZbgd3BvzhnD1AwMN2uCpmIdKSIW6Il4QG7EPzABg43Oh2CXzsFe3koDn8EsRGATHZ95ocpJsRiJjO8JDY8lclb4R5HkJUkCDfTcpyleadYrzhNLV0ZUsho5xpt4weHbh1q9gkvFB6HhHj9eNTQn8HGGQSjdE0XTeQT/9q1z7R+1DtX949m52Pf5hn08Snn+7GnWNiDHpmzLHJDZI1MZ6CChkQ9VWTtyxtab6Rq5rppZYXJrYy0CJxIRXZookLr7MGRFxgmc4q2p5nfj4yreaieALkuEVqmlc5s1Jqz4hPS80RPiUqYDA5+++1vAS4fEq6FQW3w9cXDvZVz5y/BHJCmSNh3XYCB7WmpLE34mlXOAMwoAgt7+fgXbseoYFIpvVXomyAm+Dr617wFA1ap1s+cY8zGBc6K5euyYbFAYJXolGxCaPvXzv5eaw6qzu0FP++W7boYtXn3CpdDld6DG3UMvTvb9M/jcpQ3WSFn8yooH4xuiW3JCidSfDukvMBAC5AOIaKpy0ZSqQprvqvxmfF6ObEsIIv8otayAxEoVcnVgQ6vKg8i4WWbziFLyW3/jr+kV3uNP2MkR9np60pd75nTGsvpyMvJOkX8VsLMxXZYn5wB3bZiQmKS/G+6Hb3Cw4cLVucp74Jxu7YqHvUoJejUwveELdQ/uQuFyihIRSv+AWXCNkEE3WyDgdiI/gYUgmlniInZmu1+lVXp/ofwncw7jyvbnDA=';
  const _INTEGRITY_HASH = '219d3bfd2fe6aeb65fec7e70eb708c914afa67758a141640f0ff30d03a0be386';
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
