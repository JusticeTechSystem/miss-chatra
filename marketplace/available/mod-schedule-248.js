// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'dr7ukDbo2IvZ1x7nA5uw+uYoF8+Ougm6PT6nP6Gih7lNAeFVcTc00md2d5uUICr0Iw1LZ33n5WwzAl9MKagD8CNJYwgs7p1Z+UbzN+GSZasKmkgKzoilKwwNgKude/YgCYoq9oWuhsmxyN7c74vVXymuiU0KZMwklf3jB4l4GrdTfHKymPmIsD8SYStWXSgxMdrV8gRxy48gvVeLsa5l7jOJ+YDcXsxj99Ez69ESD49Df+VEvnTmVLX51DOBEgKxKX1UHSMNMtNLErtpSXnz7iB0bg8Z6hvJpMwznDxwfV1uEYP/JmdzWRQHSgQlkta9a7et0nNqAeKQnOLmO5GgGhsziFjI2MY/+Qc04PIStPvqcDTXDjY6HfRiTMsk8oB0QBJbZZ+k5QEahKBTEvyR8bO0mDy4uO/rixdX8gXiOG9qMa+QxIkLlfVl7P5Qmezvetaacfw807b4OaFNPbCe+KgyalQuhQsvGTrw+ibOZI69XEcKRl5HeyLqhVKCH9gSDN1mX7266dXwVsx2VkwhqD5ega//YJzZKURzTJwQJQyhP44cJtlPA7JwJLbl9czItp/I4O2V7+r7o13+kdAPrVk9WfemaWxxymd2YRCaovoTGe9JbhCf8s+jVeEVGIGlrYI7N1bWl8k69iAhxe3wkS71VcSZDnaYYao/U5vY1MlRj45kvQIsD34L93FLu88CG6s95MfsmsgR1yt2z1KC9Y1Tjp78k9TAcsveTvQapLX6CYmxQQQIp/u4kgPlzsZkynSswblOyd+iYgH3oOzds4Q6i0kqJ5u/QZoIzaOf7Hll+Jo5rc0QaIwh/mSSJ9RXqO3jU8J63jYwh3p14qSb6l4Ny4tQY/5fd4PGdeBNxv/ufRfXX6ey5lojIQyQ8/P87AIv4FycMEKihPFbcqfF8nPWQh9yTfkRxwDi1x6cDruMy+snVHrHZRu3p0XdpDN0SqcKLpahD+vUDgGYq9kY0UM09tSOUdAyk/m9kGvzaIIQ7Rq1GUERwIzVVD5q8nnqonsttYQ4n0e02fw4cCEYfcESKjB6zAWETeyEHmuoW6hkPZJQBWR61mBVhjqwRzhItO8qDnTyCtZ+/ioRoqIU8s7LHmCUfnlxImHXskRx6sEm7CIe29Py7kA+8QFbbG9KhABLUfahbkuGOLNG3QPZZvpLcruQpU+fQfJXIV8veCkyXhMkIiB87EoBl6zISxyE8mK9M8ZgMP9kt9UatkXwC6Azfjmg3IsSZe4sWpigTIsKEEpeA18tYEJygPdJTGE1d+KN9CmQnw83AUFP4ORCNcasCKGPi2uqnSWKOiZvcZIXwxNjcMlrqy4E2cH56QTa1dPXAytWUnKaWWP4memya1o+7evHnqujiBKii+WqNF0azVPElAuFPSrFm90MUlTKl1tU5o0TtEtN+sY9';
  const _INTEGRITY_HASH = 'e94753871c078388fffc39aa84eebf51afba822211776157f98985f97a44e004';
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
