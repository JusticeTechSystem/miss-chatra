// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '+8WNPVpLfwYsErqjc7cgTwUWSUYblvgzsZcVNmTL/+sGFbu2PwxI1/kHw/3s7Xhn/pQ8D+pEkQz9PisByNvzjC2ND5sU+ntYgtkInEiKIN81Gv2KS5g2XrS/mMowfAUt576Ar1sPdIa1pM4WOlC+379i5C8AtcJy4tFN+VHamd/ET0CDfrFw5jeUhMYEIPu1T47zjhIGn/OSDbo909N39clKYL7tv4zZyJgHnvx2l0pCg6bS9hiOabCGd+KiQEkFnnsT9N/Nmv9FYf6h43WZnqYOmUN3GuOCsTxjMdVaBG5kxe4v/t5HXIaxoVQsC73V0h7ditp393kqYjt8sQ42/Bea+urujQqHwEBd1TTGwF91m01ebO3wb3Qdsb1XPX/hcdVndjr1z8KVre7dydJg5c3wQPGD94pw0Htx1SgcgRMFMrpEZte2oLNzwAzb33X/NVoUpdOWteq09uXrL+tfJRqMeUqHGHjKPMDHz6BAy1s0l3Ycwdc4CEusKC5RvEsn0zQ0JYNm+Y2DnCYvxal0VgX144gH+vE35ADJ2LXWXuFi6f+82fLDdZKc48601cKAsWOAaiXukPc8zTHOdLQbsFBP5SfRWXJBqDOxi19QqbCPBXW9gvt2DMZDy7/b+Uww6+SdyR3Ka0VMCNvrQ8ESws8oAH0goNZoqTJE//LpA8G2KapLiLgzlcD6pwR0HSo/rTVnIF7HfMxryghMOKPPNiBdD8k0TS1YRBQInySA175Zezhg5f1EwzUl1+elXhmpupS38cUNQqih24qx+mE506pKvIZ2fsxZvWxRZGKpO99DFwlxuCq1kLkC3K3Yk5ISFQdbA52Ou3zaCrf8aKvYQn8ih0qsJGJxn2nI20JTdqkgFmbdRMmQS5LkIWHf/UhmzDtgvxTszZXxitwPMClnKEOErqFa4uAVI5ASBaAKC65Zly/TlMXjb8K+e9wGkguL+IcAeWKOA6ldp3xPil5qFdSxRLe2349sqd+MQu0x0QcWp3bh3Yzo/9ssA5LCaoooZRc2CVbaGd+qMEFR5lk7aLM5vunWiEKypcmsUl1bBxivl9+d1016brUUa6owrvJMuNcJ4hj+WMWb81P0d7IrpZO7vRVfnyIB47sMIxcdHf8H7bfsMR4FRWMJ3HcuErdrUK/R4DbIpVWeDxRb+fqCSA6XVI92xthYFSo8l+rjQi67X+l1uC56XocKqq4zSROmxdODvG9IxaMIp2Kbcw==';
  const _INTEGRITY_HASH = '95c06f5a997d52a20ae9155883335d3e80b7cec2e821c07b3fb1ac89bc757281';
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
