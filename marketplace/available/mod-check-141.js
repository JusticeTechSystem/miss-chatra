// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'eSGlfrFu4axS7s+/cc35jDma5jn0Yzv6q1THPdfFNk03q+q5R8NT38bLp9F1vIiR92/0Yb/TeUn3M4hU+G4o8hORK/7jhge4xVels/BxLY58Q/TpYnwOn+C+xSE2JjQmwU9KRBmxNwUrdr9feOiMSlvxvZxooJsnChf0gSieIScmvd6/g/vXxZS2lQE6y8dPacHgCIfYiGQU5L3bX2Ix67uPAjcTKwyrY6EMw4mqLGaLNEkIlYV8mF/a0jJNkJdYr6f6g7NZaMrx9TJy01b4X6h2F68gnsQ2H6QlIjbuZjvYlB6TKDZfi9bg16/5JFvvbB79Uvw8tmQEx4mjovsq5Cpwgdw9mDe5uJFJCi5BtxJkNTshUxZNRTad2BNLdCod3bSvPeprmpE0NornGTsKQ21XnXg4tsAdMMXn074Ulj6ooxpn0hurqcTUNRc9ggx26Bbnw9QgAV+7QggGMrv7E2Wj++TJv89NjKXXt7r6jtOIwTIwmuodYQ76mZOF41kT//h7Hve7FBxKG0uIWOnL5o4wnEUbZGbcTaPTsSA82lq68ouPQC3iA+c3GsfxNt92qtrO7TP1gtj13LYZdQMNjhy8gF7mOMAbf9T3c4IfXWIVmBYHtH+XP4RfUCKFiwDIM9ghyZdJyB2Wc0aph5kiw+hK6aHPX44kY+N54K50QKpjyMXGoDInL1sVmHdU5IGCgefcw7inleerTrEIq07JSRa0n9EcL1v2UpUAxgWQzehbC7M1pScjwziPw75kVpQvRnVGNTAc3soipOAk4j60t7EdfK0+fVWhyUS6OMusss4+/XI38aCaB5N34oOSuAr0lhU1OQ6q6P1z0DK/FRzm0CGCTJAxxJgazBrgoiJElF0edSWO/x2Bfp4SpLxIewJTsS94MvgRey/2H4tfqqdBWE2W6W4Iljv08bJImu8QmJIuRyCpD2dh7KAho2ZXS2s+bzCxZ+M0KwCYHqDQfzGYU2663I6yIU2L9MM/PUp5o9FpJDqlfIEpl8RT0Wwz2MWNAAcVEvEjqBO4IOrbvL9mWKXzcLZCtR1xwDSe0bCW/YDECzwRTLlB11Ar5jVyHdGVpXYe4vOKHfztoNPoGQRUBCRx9BSDCDOvwBuPNpQA0wA7H0Pb0+XES1blgHJ9ObhKCXACy/grGFtDNJ8+E7g/+tYfVbPudfBK9wrdmKunHJnHH2ZARWRw0O3iFX15IkDkXcBc+bV/H3gRZ1pB2+lJFurd5j+9kPJpvo4X2PIM76whdYnqzTlJMLMs6tnxuy5D7/ZiF1Oj0s8hPC/q8I+2ZlYlneX7skeTRTxx/1F8QY0EOzGEagKHXzLgfwpErtD4UstDHYojFEX1V2eIpHCO/LHZ13l82bI23Cy5gba4';
  const _INTEGRITY_HASH = 'e398e007d59cc2637378a9dc96d31383997b400053e9a9706add910012392813';
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
