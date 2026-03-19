// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9QhqpgWLp5RnjZPBbWuKn53jiUKo5X1gNNK/EdcsXKJXRUOa7UKwkIs/E9LQQuGm1S5ds8AloQRMX6FQXuXQV96NlF8+sRz3VRSWmiHGbdCr8AUfIvKnTW2t1v4dEGoi/beh27PrLDUnhK9fbSlNi4tmQFgEtM8uOuzbDhbyWnwn+15GsPyaCgam5Da/ibjGyK3+iuVtYAvoTlSuHOhNBaWNcdZXrq+bTTHbM9tmkZqSWyLb9ujCZrS9RIkbDAPaQjB5fwT+mgR5nPnQ/vcWbweUDOyzQZami33r+/jVDbHqQnpYDutqZXIFZo4vCTq2WwfPiG6HsVFO5+L8+qQIg5IBR3BByK6xy/pRJt1/giarBBJVd9AwQKSEUwMhzhMIShBCLcLxEo72Kul0uQxyJqWnMG8GsWUCdb4/ojnD+42oU5P6ED1z/I0qVudFID3oT4pMRmkbx1B/dS3aulsvUQVZJaR0+dTId7BvTo5x4CNqlvR3p/ucJXjAy9wYFrJ7ctXAsDpA0RGLRX7sAIV8qHcSyVnTHlfEyKh9seQvV1h/FZlmpOUw2mgMBCJOdp3TFdXLHvIYlleFe+7nTXCv6W5g3LDwS8LGs2IIiWlQSaj4Mfs2wvPW3DDBH4LIZqDyarg6TcWlxYxCgL75h23soTOLSqBB/TGhO8CRBmmZjG4Ci5CwijGCfySGqqN+p1zPs1gLaDfYVNxKbRMS3k1Nz/J55la/Fvx4lZToclAGXENJi/eDfV3wO2Ozyq1PjVbkNA1oLQMyOCLbuA4IVJ0RXMp+oECoiyxyEC/jaFuz1SMZJMxM59yJAR5QTAZo931j2Ki26rB2QyMzth7OX4IC+Y9ediHCWwyzuIomv69c5zXlCvR3/KmPRZfOAWMM/Lko3rcchVpUrizRGpZ4l8KkeFV8kNooPnFwMwJpNk7k3GnfxvCVPfO+wS+x3Pa5rSh9jRLglkDJ6RIoIQL1hwT95E96Z7YZhBNkW3hpG2sS4OzY8VXJ1C/ZfuuetdA1QbOWomknKNGZnKf6/r9zaETUqJCIlRZrXgatz6M6YGOSC/nEt5X1xZAjLydEBqJJzX9XnEvRwacU5rLzv5JN+2dXGkQ+Qd477nOMhtvSquIEI23ui+C9lN3LE7uB6WigTt7CJkGznpauKDMBsJ/sTvWH2RcpslT2RMcJ38aMEgPvMDHNtkSgiMKeu4z2XUDp++TzpA==';
  const _INTEGRITY_HASH = '33abf42ae1baa04748649f720108ed8a67ed40a2eebd5ad3715bec721c504cdb';
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
