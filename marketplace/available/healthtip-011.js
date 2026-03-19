// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'MtHhWfC6EohlrkSPbO1/uqPDNR5dqgj5G/5FUr8Z2z91tqKEC2kwET7RyfAmCXgN1OTl89q9/gA/Qi9FPkbqFefVeREj+ocL5qxzVOxH1Pt5LYAHectqvvXmavmqPVUNIjDys0Jj9h2i9Mxn9DKP9JBaMHfvRJWYyIAIx/yRd78Wfr3eWAdrR6vfJxnstAUZsMogHhsAldMD64ByTrELqxjeYR203qavQFMVJOFyb/MogiUNtObE6kUNB+3+FIcCMi3pwTIdgKlHweAZMTw6swcBvbMxjkImZgwWGRmhqAwqgTHB56EfKI0W1a50j2/2HfOG4cRJg6v6I5hkuZK7II2D9/ru+XDO3GEoji3d7WsByOKcQqh9EPw2TMn5JAgF3KN8IUeJa1PKHE28nFicILNf86JEtVoBO0k6H4cYpRb6/h13uVUS9LqYhL0gSBGuAaSvkq4h4DRaq1Xzz69Fqv2ctCYuedK3GilljAYtqEka9lKHsgU7WAN7/yFmn0HQgDN5wRF9R2PcSL7QDoXcYihCwjFrkKyvzCA9OD/g9R4efJUo0CuMtuGVNJs6yt5PUqQQNmOjSwr+kxoS+MD/NZar9yhiUu7Vg+I8iPpLRyAsiJSdaXY0Sw2YEynjgvHetyeetU792Fahos8MwZjODnbMIN2u/axqUS5SgcY/2oBaryZpY3FjwuS+gHbpx+Be6v9UWdpzbvN+LA052a9G3GNwHjoqGKjzYRyjjQvQDYClyxwcpqivgjJpvSUw+GXUn57DHg0fJgOfs7/VqrZ/Mfk4ePKol6u2vekvTjU8iPetuuQoCR+RJO3zZWc3BvRrkkI6LCKnUpSi52sBgb3RKbrvEre7uAyuS9OXO5Xq6BJseK4gzert8GdoRdU7PtX1s/rqmNsT0njmfMLB4CV/jiVv8erINHqKKWKrTqMMWA4pqcam1Yeab879lt0=';
  const _INTEGRITY_HASH = '0de47c48fa8e8747cc08615af4bdb408cdd93f2dbd8f8d4de7a96801b3640ec4';
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
