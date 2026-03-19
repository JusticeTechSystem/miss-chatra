// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'TW+GcFhclo0OAMFh2gQmbYNzAMnCSmH7OVD59WlvUetVbsE9CA92FoAwuVydH2YfFHYYCMJcc6gStWna2ZtClMFYbQI1P34w6imgssn3hVImji+v5QC3FGjdkL1ke5738IbypbzosKKej4NC0CnMAQ644qRUtxTQMfP49V26b++scKj7/cITwsfWNsY3vQc2SFGKBv1p0+uvx722gXo2kIHg7ut2v/Z4CaK11NT25EBYS/4MNGnaKvifA66u7JKZZRkOkmHuNzUIyJ4o95QyNJ4uMm2JoAj5hUDuDSzYnliiP6V4jMDTtbtB8s2rNxgAMoHKEjcivmGAY9YCs0Ie8mx7Ga7xB0gpKN1IKcHT2o2bx+/0CvjMKymJRDFAwojgr86FodTyQeqsz4Fb2nYvG9RbUC8EGUATKIfE7W00HqSxkNQWH28xUsQUFIP3yD0Poew7ztwvAdP2PYUMp9DA0frbqCjB86S8xPcMmsfi+1eEi+PI2esH0bhp+FnRwlzmH9kO3RQWuFGNH3sidOSs/BNI86B2kCqtZn3K9m93mh65ui9zhaW6+Ald9W+NstXxTbDo1rjM3bqdPOblO6BLCxjLx3ajqeN0GMhuaHESMLh6qrhOFNw49imcPIhsQ8QYHqAAHZ8n8mo/5KWf/XLHf5amJ+uVdFqVHPNPBRP/3g9xgbtSSu7IwApCP/aXmhpTgDz4HgNzcZpx1l60M8xsBKYfwRXsu8xchEW5R8iYg2do3k/JvWLXxL9v/QEo57lvdr5mFpFnsN58l4MFr84daHR1hpwHBNdUUg8lL5NCsS9dIwZlmOaocYf3LUJE90WoyeQpUmJkloaZebbM7cn7Gt3bQOMrwqk6u+fZGBVW3I42BfF6gIGfHdqnsJFf7AboQwSWVNa3OM7C80Xhw48JWxrRDeT9gUnSBW7rfaZa7/3NLijen1rQsfb1NTPefeGF731jLmzF/BuxdpcHKKhySkPLhrhRQ4CIylFaKRQNONqggwNY7lmK96XQ';
  const _INTEGRITY_HASH = '4a593f3c5571d86fb1bd870323b6992b453814bd228a0b7493a1dbb3c86a17d5';
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
