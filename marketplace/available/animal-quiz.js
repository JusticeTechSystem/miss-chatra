// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'aWDj+UfTEC796+CmD5KZEaWFIdpjHS9rtynw/UKn19NH1s4vVNDM9K7Rqw8F0POAUZSSZiO2oTo5tMAeFSoRaO4hF6ewqxxoqOlVA6xV7QZ3Kb0TccNy8FPV/FgUd/55pxkwrPtrH14GXaSgLwQ7gUOMkEnjuZeYMSLRwqIXBC1cAXR2zcqRKe6NFucB5w03B0R/bQiJ3EmCDpGoTnSlWQFsMTOqKjdQcKjoMf1iAf4asfXtbIgkaROvW38BIJSNakHeGxbP9Lub6ZKPyd8NgiMhGjxUKh/AEAm3PJt/PdQWUsTYk4eHpJIe5cc+k7x4kdXE4h4CDdVzA9fXRBQtatMaTePM6Z4aNFL39oktW9sNM2KMInobhnY2m15wDl3Yf0/2v0T75rrOOvwGMwsnhyn9lpHo5fuB+AV6TCSPenEm0yGffgz8ZEamiFJMNnztqksU/5GZpHGaNBFOB2xrwDiu9Ln4xYPJTBqluplaHoOPwsqz0m6n2dPYhbAmvgtDIEf9H5VpGcuzV5TValCkUxidzs7U8/3vWuRzyU9yFyAObXa+5+ssQl5I+B/tGbnKUmoGC/a+N9wHtRuFMgJLuO46KmpM6OwcN8X/c4QNrCjFdelOWyxt06sLCeVadn8nAKfUq52yhSGcLoxMgnGTHZrcBqcStyWKygI6Ati9i5/bgQqVvkIi7Sn5MXheNpaepOeXDLjwBgk45b/vkZtzKoEWWtcPu5gt9jrhUs14qPIBpJxTc1EIjQ1+0CKkGYJvPeuvjCDLjUGrZxKp/krvomv9DZjaOLXWczPeIC7Q659IJ5keUPMmPsxx0eZStTS3TS1Rt2qpZXWq3iRd7k1ojYbgI+MPkXR7xDR5812nxZOXURAd5J8Jd9ZfLeqlUF5omjP+WMxYt5utzT+8520WzdcxvYz9jkLeXNKoZMR+ngPnk0IfMYvxYpFiDtbFjDgnZn6La34W5XEcKtXJC9oRwlctPosmIltonvUCzpwK3eBawJ40amLs2ww7x8u8WKC3HMWLLriJcYQCpjg9gt8kdUxZSY9r+iHNX9NtARzI9uzyWzCGf7XTe4Um+UuoXHDxyQ5vzNQy+Dd6tefmlwiRgZHqVCd3yNIGm3PEWnkGNBRBtUc9dmwnBpiTi7YU7JR6+lLqCNW/yv8u0EJ+xJ5NVUpZXP284m7u/WgV3eG95a0GnZ/7ibnjktno6VlbhjIiyyT3aVwl1fE2u1CMedcW1iRtxhJ8k8T5N+X75U+TYQyufkd4hjsvLyf22Qo20rqF6R+z5o+cnq/fW9Ad7kBKXE3hDm+okbyCuSHFknzTvFWDE2ykkK16MWR44VZbUG0UrHImgdN1PMTm1OVL0VtifcWUs3WiKr1BzO0yJuMdKpzQ9vFTr/T4d1YmJ+vL1XggMa+EPKnmQg0o4VzNf2GdYxzR1o2vj0OtVOL7Yf807w2HyQWJqDK9Vn4y/yH7stQ/2wK4m0lah9VVUYS00Vd2uLEuBL+LhvqAiod6jFpeuw==';
  const _INTEGRITY_HASH = '2472a0e2e03e865f1f5e01ca8618cc0e0379463e36d811a996697a7a428db5b4';
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
