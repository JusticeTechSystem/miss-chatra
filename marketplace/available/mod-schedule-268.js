// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'eNrYOPMzjSFgMdGXvC5xVo7IEaHHzziwH9X9FqQmWGH8xqRObGsIK4bj4OCE6cY8BeGdCeteAK+Im556Bic/hgVXMO90Z69nr140w28FktX278tLmBuNwXPpJqaVJ0YK0ODGV8gAs7Jj1M9a01RD+GYx7LDK+3uaDNGWzuL5m0bDj6m4+qVohbuvIn6SJRw9h/BvhVSjKk0MzqT4a2ljHFqh2nnDHLjgpwUI9YYnsvoyNE9DVKDe49bpK5pBNK+dAnv6Cbt18B1O0ezf5WAd4OkVXM9MDzwomeoc2lZbtZziw/e6n8B2I//ihgHDSZ3+Z6KmQN/DEf93riEPpuA/MTO0//Dy5H/Jy5UkbZCMKFgYVZ43uZzWPY+HRMaU4qFH05AypzHFKE8sPuBwM+Qbj1n3L+g38mToWwtkt/soOzJ0kN2XpK6Uv6tvZAOmoOIAvHP136kLVeSBofEBfsrmiisbnzZcD+g88/iYRiwE16LXmS8TTlDi5sZdb2KVjnaRLM0tpZe03Mcg9rMCMWCAi+r/aJGGf92T1qBjE3Pdrewe4pd9ijLasVP0L/OasZGw87NxDiZhHFI54YHFPOeo+YBlBySPeKtcoXybQMa1p1rFIbxyqBn82NKwXRmQtjVvMDygw+Ui6/eSmFwjFHyYtaoyqIAgxIfDd/pK7AAwq0/igJpckEFJYZsI+XpXP24Wr2QL/o9403djaQR/pd/eH0+4V95ZbF+7U+lQ8qRKo/sHctxm4tthc+JO/Wb/ICM45l7DbZsdKBguTgcIb63MbJ8jWAcuBLEOeOia8X504Ge3VKPZoaDJ07gD/ooaDtDNbZ4FPET5qMCRVTENDs4sn702vcO4RZ0vBrTwJWX2de84dXIWy/9CsVa2B5RmuKS/NJAs1GovGg6HDMC8NR6fGzYMjZOKjMehzAkIadHYD5uJUlpb0GqrMVB5UjqLJln6uaJ8yxWwDkWSSNRJ5inJTHoJLolY37wAMjEqwbdWwKnazUZe9oFJbrB9aqNJ7YSZR9VmCWbAi67Z+fb+Uc46RSKo1ieUElkNZ+OmBK4yoGnE2RUg30mQWXqjehV4OnNXQFEz9dH4fy1nZvRyZFy1/P2sXixxpLRtrOe4LczUpcYXv4c1Ph2EvtNkxqISKH3AbQN9hXjQnw2fOgmWWypxOh42wARZjuF/8eolsQ9Te6I9PsAheK4hz+N+C8P+sww0FLWmpy+rc/+QXfmn38icApT4hSI0Lii7UB+9rCG1m0idNpkYX99pUEqqthJMb5htCyOTZF/Qcp846gqJgvwTKDaXPLQwsy4pyiGOnO935elK+cSgFQLYZ+P1x71aMqDWBFuQqAHGipoWt3pev6+SoPpR+nSqKVJS3A+jE/Fy+JdZtJT+m+FyhKtUcZIogGKKfNnBSZ4+47jw1daV';
  const _INTEGRITY_HASH = '94991d0314363dcae389e397b41e62b2df8ba7a515b9fd4e3511e315a15fd06e';
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
