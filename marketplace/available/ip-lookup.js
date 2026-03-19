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

  const _b64            = 'OaQdRdPLDypdx8B8hJe1Gk6mzAvq21M3y/S5bNpFXVj4iNNn9K5VCdSyt3sG9pbuAH0K3sISYzZAU5xxW0BDeVgYqEq+p1a+QC4B0qBdYrj5ri1beJV2qAA+v37jQUTIcOMAfn2oiqmnTRlG85cmEN3NWL5hiK7TzeVBmIZVy9oOQ8RyJBKvCTX5kZ5vLMa9SfuD1FgkYe8Uz27M5LAUjsBCWDla+GETO/WundyLZFgOeng1aFtL864XyUMFvjPfBpGWQGvh2lLr7TAhbpr3sZEfPJiEbnzPli59taWorU2m2OZcQ2gec8MhuOCYnZE0BV3Rxow0B4DOl1g+ArBV6ldnsEq4Wkj8YvghHp/orvgV9r+8j6Q28S+wvd/jJcMJ/+MIpOFP1wGYbBT5YIF7UVFMsuD7AnAJ4CuYK+tZ+cVY9LcMCqeNjSz0NJyT+a/MLdCwOeHbtMWhbhdUmo8sdTH0w0InKejPu8DXS7mUmgSUqge3eRHLNQAVBI0G66umk9eLTXTxgaAUmkhn4hQCUHTDOTaukIa1IIElEavYZM7evW0HX6lS4yDJ+hXEuTp8vK7XREgg9YzhSnka+QVuW1mfXuNMRh189eS5V3x7OeoTtX5eHW59GNL1RJtl6YSmbZEH+nzUTMM+2lGkKJigaxkNgwVwOm8HyFsqICzRSyWjiLzFjzXfqXWLl4d3xc8g9aGtPhT8EtjL+iR9fjjCaG4qqwOURUb6DKsEhSS2xSJQU84DFE88jzSqTwlOKcRBHPmsmM+5CepCy1Dprc8QJ8gTHLoSsz99UM8A+PWAGJCYRlauB5GSIq7Phc8/Pj30QkBM7JJyzYQkX5/48cn6OAXPuQJD0RRJD1sNOsMPEYFyHDPrOyzxocoBlUFOSNofPVs9f0edSZ+3R/uiRs2IDwp+09plqdVpszL0ogDhq/PRUL+tD5yRQIajEGW4PbTF1JV/MC8Kqvj3529uI+CEFOJjx2kTF3SAkk+Kk9tzVer097ZtZGbgItfpfinhsILeusFJ7PBAm0qzvqrl0YynadxWjBBFuwAql2YSBwD/j8w87o2bWtOLs/Of8G7GjPOVvh7t9jAkYJQCHsQug8Jk7ggz94qLs66pkC+ZSCKHGHoO/lSWbQ7YoYEKGmxZbt2EmK4E8bBkzcMu026b1yhuTau9Og5L/x+Qn6wsxlzF9G5vVppsVwwSUFr2APUPiNx/cLNA5jxEmrH3EX0lzxYPIorh+itKYi1sbH8H504K2korxGDEZ/Jb2uPD5ogrrbQENA==';
  const _INTEGRITY_HASH = '6639a7f1e0a745d52ec4c0668c8c5bd93ce57b261d492ff4a85118916a37f77f';
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
