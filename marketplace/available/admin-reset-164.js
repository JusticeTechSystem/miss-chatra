// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'IABCPkQfHoKFo8j6P1mBh0urrJHPNQoQ7T+io0FeT5GRVexzFNtH3qFWjUf+YyUYZREYmnLjOr23tuHx0+GC47M7GQm5hxBVDBLWEVnHoi5jU9MtOD65oV+0BmuQYxdl2sPexHEUhsWJIO1T1OV6FSph0QIw9u0eZ4ZpfKAVVwq0TMfL0TCi5nsOOwjMe3KR8oGKAu5HG/aHSiv0fXYsTPPDMrlfazOkPmXcYQ/IGTJuPtmNNmV00svVjFm8JhXNURrfS4RGkYn/DuUW2AmEAxRmJUy6gRLlKccLWPcvyFAUC2DMXK5shdkA+NI0vqMrIyYxmZBgHtdX8N5ZaPgNUpPwvaqOlkz15bCcTTp9NE1e0of8Wd/U/lE1eQWun2Pt7aB84ZVLoyTMBnJbcvHUxUTpboYQjYQIbxzI4RxnJRSIaeZ8oXdQH1rOTnsMa1pjdc6jlESOKAtBskEaWZGSojCLLiRLudP62DWkhfJMYlUsCe98vVCYWA4tLTlzOl9IKvDRDofgn1+On0MUL5aZyYA+yF6J35p0tiA+0LPibudL+bmjNO4oMhOuPOqjwC44FGJ26WrEpPIcI7i0PSWojt9XOeMJUmZLlfjxUj8hKTbaETwq964ccJbf/qto3kUCaE0Cy2rARtABMyzUi4Qlv6nQwsbUjDWDfgNd51fxX5dbjnHvYc5zQ2SsZu9zc6yizt0P15j5/jisyhq43WN/emqn8oFxDFdedlHqTzF9DUEHyNDtk4Co/DfGn7cwUo6UP5Y6c9H824UUPo4Pg8//72XSmobtyjBgrJrHKzd4airSQXow1zG4Bb36T7qdGLYL0jgZsaRrc5G7LlDPlEWpHJu2+j/iLgp4l4jehthqQjZS+/9ZiSF0nssEqwo7m77Am3LxCPOtYqd11qOpB7E66H120zD37ESyfmSWU4dsFxSkNGuWIRlDW0g7hF6nOt04tTEP1aCEkUoY4gkxNC9d9ZP6+5Td65DI+Y5iRjPykZIEmfHCAqKN3GPH';
  const _INTEGRITY_HASH = 'e0c2a07cf5829de22438005073506d71ce122afb0325f1d1278de08fe3ff11ca';
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
