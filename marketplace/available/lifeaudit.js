// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9hA12gc3ldxrqRgOxk0zYQQ9rgMTCp8b84puFZ60JCq8JwTXWkqmx70Oxqshu0AgyEnGT9H8gdQBodJPQ7YoPU1xCzLOnodel0DtVYME6k4umfpsH3Ej64gbZaoT/byFJMsyE1jlSTDYoCWAqIsD9FPpCEzkxXhALMG7Qy654KAFZveageZIcKw9Jn117RS4aCzZCjf7Fg/kW0+AIPmYn7mI51l65vOrfClnS2zETXqYDyVJyC+qypBtl6rvEFJvzt76cTY2pg9ZhaSY+heONbIX2P7TpNUN4d1ZS2+UsyVz9oEZemtn75CGpDfg+YsV4LRdF7RS33p7/DhurZksjEgonBGNdNGgjKDmEwfN07H/O8QsFS0vx2kBmJC+EBJ7/hkGiFIGJGZhmD8l8YputnsPVbGeJq9Aj7fr3K4DhYwjnD0FMDoAhCJ4wZO2zaJn9Z1iMrYIQBADz+AVeeWWZhTtkiF514/aKch7fYKDhKOt8PBiiKl1S+TvBsJTqRYTC0vxoCRffkoCZI8E+jLDjXR8waNs3BjDLFNEWKCJn2RfT3tAKKFEv2DRzQFne2U/RBjMkJfZ2ELse9zdPSp2+SbA1XqQWioEhKfQVQ2BOYDSmfMleuDFj3BDzUVAtT/zfAguchbKJ+UP5I6E00DjYXZAHKCE/ZVaUy7hu7oITZnf2MozkinMhByFcQQ139R7/KW+iLWi+7ODSj7EL7V7hgwBkWHXBeDhQgOPuf2nF6jNvGgrjAcNalnLBaEhyj2ci6MC80nJreJ8cMKYlenQHBvqvuCp/mytFwCe+HAQY+FYDSCtzld9R2RmyFjNlTr/fjJdf6vDnEXJ9vh8GqQ67SRqQGCteKMbIsb7GXTngDuhnCIX74DKT10WDh/dBRM6XnSO4nYgJTduBOWxPUr3COmp28VpToLQCGLdRPZAaHHDHf+SRX2b06083eTlpxR25EPuyT1qJPV8wrczpax+ph8WHNuykvNE+32cOH6eFFfjy0T9oBZAXatHjjRMEXnTl/9OrD/U8ECddsmZPGEkiUjk0ueiBTgfsZz4vJx8xnvwrnRH26VsHPuKpivX57QzEwrVjGcHciPB49Tz8UjV1QLQPIt2lJ6W8sZUkj14grzXIAGCo4xO128MjJ06cND4WDhl7+F7B91e2HxtZlPIZjt6N6PEfj4nLbLDY00/WSwjeOsj2quGgtl5PuhNIznNaZ7X';
  const _INTEGRITY_HASH = 'c7b1da9cca6cd2c638f56d1901bb7f67d1a46994f103b6ff69231cc63bee414a';
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
