// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:27:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Cna4UE8Gr9AvTvVhccQw4PIy23sBbq/N2YG0G3fYpmgIXwrrIf+N2UOdaF88wEFufwirOrRr7hyRu8HEOXKD4IPi8jtaPU2D4ukCixisqI58e3qZ66EMD0jFCZHhmCJPaK4+V79X5ioA242pskicmSheBmByT44hknOQZVFsKw0MOurECXooqR9x2pO9rRmjh9zEA5MkO5yhYRygC4It+squGhlfEVAWPl2qOqudx8qTkPcyeRTJcZGJNeslY5/aTnrsZCVZhXQ2Ax/4dwynkixjZrpQtyVGpLFKih79J4Y6gNwPceo/ckFVJj8byWoLOHzipm7jkW4D1+dmM0Y5w7BArml1RS2MHOnim8ZnWXBppcO8RN1riyuIgDiIgrFPFvF/6nuCeyL1FssPn5+iOgus2tOm3JJKR5hP1q6wsXuVuFo/w2FVFC3Y1jm0/fUQPjOSLGV+qrQo8A5Poe0JMkudRgB2Mw89e9mJu40b4z1Ftm0sEshEHET7VWttkNwiRTTiQlmriVF/f2v3xK9J21T96fkRb8/ie8bnNB2jmfTXrfdxID5qNzdNTyqSxybVL/yfIn3ngu2gxBV0HH7cM7Q7s4SlV+vwWqXGtZqp/l0sqYVGUVNNlYPH3vWvzOHRuQHBBG70tehUMtvautfbcWWKLJDqC+2wiKNXz4iajd/eYcv+epKdwNQLZxdHBw8fwvoMKKfSymCIezaAwe1YlI8D5QV0huqvLlEGVDy4rpcYU4X1b/pz8SxbCqy5t4XDJK38QcbVav/68JDNviK0e70+g3q1f1noltfrZzsIFt0i0QMfyk910mn+/xr0PlEuW8SHZRmh2mTk7Wwo8yGpKj0wB1bDVMh+A6kEZB4hXfzFgp2aK3o2AwmMuQBT2NDDhdeVMo5zwsLYTm3DIuqC2I90+HAk0zQcnOvXiMTEu3m4VNjSlZ85prgl7FZHYEbc0wQv+1jW6MorUeS/YrkC2wwVeHM7okQkliwxOEc/UmgZ9sUudW9rqsgyTrI9Rvb+6rH+X6ZzgEN30811g7TuV4jImZ515573MJdkkQKE7lMsCKCxUKWgQ+aG0DqhdhxkP0W6BK7o+DY1fJw3TEdxig7po/ASvBintLYwJsNmsr2G4Iv+HsmD3zuxF7BpjAIEpJUcSsuKHuNlGOTvJ1GvS0q2jshPOb4sZejCr5995celZYukyllvQP+MiWvB1TDZ';
  const _INTEGRITY_HASH = '93ff56b6ed4441dc764bd3b66320a457db4331c7472208336c0b1ce0b1912036';
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
