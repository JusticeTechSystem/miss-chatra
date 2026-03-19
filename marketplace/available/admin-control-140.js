// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:21:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9/agVPA9KDUZnlAY2TxnXeFj0oKxVPKKQN0yn2ZYtUe7Mm6HVhPzNA+9DfWHPfvni6u7Q+59Mgn6QC7T1mm9USt5/8A10G+hG+Q6EV+2kgvPGpK4pETx0ZoRYerTRZCTJH1PjfChWJgogbnwkx+NGZmslu2QmsTUVfaSLO0R3o4bznlHNIYqgNQXsi1rjDMpmDiUeLSxjxvpSbq0Pq4UwRzpghhgyB1y9FPx2/73NGhzvDTjF5hUHJstgZTojmxWKcLEn7GGkx+IvkesmxgVT/sVOq+XSVOeDpdKyTYf3cEz6YuDuUlaE05fLm1pQTKyTMPsLlOx+FoW0JCW1gqeGv6axGePKhruGjr04CSnSlD2iSLv3meuaM/N3rQK4U5NC6eDc9ZiicJ5O+VDjMkMP8gIIowf57+iPirs4z8zm/d6JAqpCAsdQ4BoDCzATyvOPL/ks/j9DfLnM3RjR56/DxRgsDfF4ZurStTJm19cTZ/2mwgrxnjup7MN9U7IF4xg1ZrOv3wvrO3R2D6U7B0uVwcKUj6pKCc8bLb2Xb4bMM5rRb7tQ34cRrZF0lfOGfFOYtfheIVBou0yvugcHdTQA837IHdSDxAOxOZXzEq35NBTXznk3v0FGNmcJKH54qB9ieWgwj0Iw5SMBtxMRwQH/8VjJX6EIdc0zUO3cvONDtJsONbw2LgsuGNmqrePtalpfFv0v4l7A2spvV3S3sUYbdUB2TaYZ1pa/ZGmKtNoQe/vuyVNDGiWmgtKki1ghh/DV6dWnTaFK5WNz3M3y2PG5VT5ZsBQtTtcnPaJLHLUXFUGLNJPpEgED1GnfNIVOAh84JT0uGXBJ5gbE+F8vb7t8jygeyijMx2SNZvmeX0w2amBomn2FuSenwIz8ZKcOejaLGYRg6rSyvUGWlIqEjsTEugEFGp+NsuzkNXI2ztem6YFB6EgbJILvzp1OGBSrhmVKwTboyDCDEjOo1bMQHpE8bSzntzghqd32f5viZOIlQ5l6mllHsaOIA+csS1J3FTQ1yfl8E8NPwM=';
  const _INTEGRITY_HASH = 'a3daa565de28a0225e88aaf0add45fcebb45229bb4f1805c2388315a5ecd7a42';
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
