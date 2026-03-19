// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'PByL6UzEjH8FphFrJIvfMl5xhBVFiLA0JrEM+/qhltNAHRGj4R7k/XyB9VhQ9XHVDp7vJQaXQkq8o8PLWYiiT/x2yPK/zUPg0X1mFL/dtlY81W08OFM9OhH+mfQtR1AeuKCp4ZKOcnWy6a4ZXbtBQlv27i7QNC0agob/lKaR7x9XOJTdEzA4yDqVhEqFDjOp3aovrMjJupg75nlS3ZBeaFqR0EXcCXyx0beNzNM26vh3sTycGw8TJPSttzwHcL0JlXrq5KDTMjZ50mr3fNcTh5arW4eUCYzD7eRRehb+pQrSCTmsEZQ5HEqj16NBjstFM2Ouj7MaNP3RfRJuMzajq82Y16GG6iranfw1vf7ORqBW62cl3ozevEUgV8RmvqnKkFuHksvOkHJI5xUHCgTHt4shEpJBheNRgKRpuVgjaUZ06nfWjJOtXiS/ihjJr8NPmU39/MFTrnA8gM5YkQXps3xpbiGHStPyDbqFhr1AKLmabxi2PR02sJvpWJUABvSvYA2Y6SGMel929dnyrbL75OQFlLT1fMpQ95hAMWcDzYepyZ9cfULBJKWtnzPJKnUjvv+k70Wf8eSoOIFrIQxG5N3SNAhEVjayz7zRK7XO/wnl+6B6mgDrFjh3TkJTpLj5cOYGlqfRrc2BtVFt3jBE5FhDs7b0AqBFLE50ijvUCC7Ra6koFkq6J9Bp63MhIi8ax7JqZHIWhEdcmkkcimhEDkpGj2RrWQq9sGxRqU9T0aGlAKxTta/ITbo/Fl71NoGAuLDqjMf/p7DCHBqoZIFPoibAHHkb+uAfPO77MJhNUYumYBTgyYFDgPrILSexK9s+Z6WnkTYHgrCkohWQR2Sg/hAoRPN169+H5zNNDdzT76xPDlvBBoczdgdaR2Vx8ezs1ZIA45o2VTKGqUWtOtTcmidIdwMeHyM8upvlDPc/GRXjCmE+s/00sXmyR4zBBJthjfdeDwoXjkwZ/w9R+o5lUkHQHvD9CVE5DjegtYF/umB40E32CLVMPK6Oj2V+sydXDDlOKbPg5dBk8P6sPmZCBLYNL6Qa29QeOrm95neRihqsflCFfwN69myJZOiVExKWO1Ka6S3l7PVEzUk4aH8OyrV1OU7F+5r1W5dkpOLoMzhaWQJeyB14KO+8rXXTJwVJGL85969TySBrFVGHZeNMGOZ78PIbjmOmNwsNSeOB3a39CbpRcmSuZBVbheip+fsWOumIoR1XWEwMnvFFbg2zEwnGTFeIQvicaLE12x/cA7J0CvpgRXFTrIpOLFUKFatILBvn2D0UXLD6CR4Kqh5kWLANjdoFGByx+UgzYgx3ALBaLBDjVgpgcGmT1scyMHEpIqxgliW7r+104mtfsSSjp/TTPRsfVG/ge/D8IVToaqjGqQQ=';
  const _INTEGRITY_HASH = 'bf298648878dd9d3c61d840d8b71bb27fd5d3e846b7c9dc45230d027adf4ec88';
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
