// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '1+qJ1vPLyCHCEOrKFv07b9mRI+HD3uKbdmHpIyyddCoNBFA3xjXVcaLxwCfG7GOPtAaLwcJjWQbU4B96MIEifEFn7Ro831QIUJ/FJpF+1W3G6CJKO3AKwtGK0NNUPu5E239QQBO++HeDsqGlM3xmBX4ljHJg/wLkkLqF6voilEu3Aq6y6udY5mSQHsxpmEV/AhCZ3cbxYJpxgiEqk69LaTfHV6uWc2Jvf8zjtjWfEb8W++nXvG+gJqoNw7KpBNC3wyI3HndBlsFPwnnjsR19T3rqv5terQktnlW+8iEznR6y5rhica7y6xgvrA7atr8mNPBiOPi7O8JeH2SvHtwQ6ySyTN4+8E6nSBBGtzu0U2xVePnmzMtMAp0fJ6y9jaygU1lZ0odRu0kU2RVkToJ/DVW1tHvEbGWqZyT4jWczaYn+PMCQHIs373DdV500vPwk7OC4R09vUtyM+zuZmURzt5T5bpMJoKEwHPKyw7C1ZWDA8o3sLjpbaRHpbqOeKN2yNtH3lGdDZBT0Q8QRkiYTsuF+pftiTN0z4MdR8/MtfwG6GipPinMCuZEPFygTwf9bipNmViDVxZeV+DiNo7+E4hYcLEht87kou82QczoXhwTwabB6oP7s2Sm/TQ1I1RIfc8hKhIkSqO+zNdDZWsdK/315PE9KOBo9kCN+DnZ2yEsiUMsUJaJPzLzP/WE10Z2kMrmgD6eQeZDhDF51QE0SU9HIkK25PaWUPZcwHzsBkkkm0O0g1tbY6CR5dAHfkGq4rDPqf0vsUE+6oocfYS2BX+maCw78vBO2Ofu6ioCZvYSHeD/olc4CBirTlHaF9AEpB4LiAFc/ledRLqYXLaOXUK7+Ir2JinSRSfUlEi6w5TCR/gm8Ysg2iG3C3j2cETWGuY9E1HY0IkmT86cixoMeKh1691m8LQhQRJ+Tt1ehrg6a8lGq1NUFwGDBZOu3L6k+fS8BF63waFfDivfp/E8T62FOsgmv07L94LSz9UFaemqKFGYXyBKLiy9Bo5NUkpNOK50H3T5QGVVE8AVOz+G0uqKe49PtP5JaM92qElKN';
  const _INTEGRITY_HASH = '0145664d2736274c2fc3d0a4e74c9e7e2b176dd4851ae932ec3eb9261b701fef';
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
