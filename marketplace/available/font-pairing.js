// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:24:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'AcOb6Urw04NEtS0miA2cEK5rTFtLqOl2DqcaTyJTiZrG2UAKiId1Y0DAJHa+uDwfEAE/hOtAOZ/jXB7rqyL7pZkQ2dszuZr72+mdbg03odvs24/AeU844rJkJK9Zb57mt9LcHMGA6ebTWXVcilf4Q24gEdwkieBYkd5nw9K0jYb3BWIbo95Z9XPcXD2C6hqOGflhdQFkY/vXXcL9EQKHR8MZ59l0IG+RqImAVx+mqDnxF9iukY2BjggU/eZK5HACKdz/ky4f9VZwKJDGCihBvl1nOpuQoSjIjqx0yKJnI/Ke30YLB7br8TUN00fSzxTAo2+lvoMHgKbD5/UEEK7GrnpPljYQ/o6yl6xGN1NHUFZXnv0Ji7+1HJSKBQHF36A4lAMCuGwSvBSasbSlRte8vlLtA+GNJ+OEii+pidqN6Drlj1J8ZBYkn9B74LC4iIyliF7b8PrYoYCLjV6jfIPde9tFgxKGBzHxXOhNmnWPGUNXURoQnTI7HVdVrhnxOZZljwtV707c4+YqNzbGKSro/ZUwfi2h9yG1AtJJKeASs2wY5NMTR/ashOCFjE7YdUz6JEIBvBQ0NJ5G3zeotUKYHSxGHYj7DQmiT5TG4Brn1jeTI0+Uvx9Qg2SJ3SghgsfZGo7dsrWayhL+sTVNvQWGScf/8kWRg4PGJB2ShBvrRu0MoBbssZoqNPhtnn0DNC0brtY37ZEt/QvOmzw3/pV/GU+d9pYAidfwy6ID9pgIPf5orV9T1MXklD11eZIv3J2dVPDwsGVgGAqDL7qQ3iC3joir3etpKWl2YUIOAHc7YL36d2jhj3K8CVByhiWzhQ1MdKcLzYm3C6/gIYEtXrkEowBh2z/RdM7Cgoc9gHGy7oGWGI7Bslm3c5N0NjFHwpz9rfDZb+K7pzn6TzYyTg9XCye8P3MWakpg+g7K6PXEY9Uck4XJHx49ewUbUNZkE8eBhjd2cUCQp6ZCXQ6x7ysMVLPaqvKxeI1piERsd0rflvjMTpA9/MpFxD29XJ2QIetX7pt7zrq9kgraNs21TtQpTz2KWM93cl0xU3gZkF+uzVRRl/AdUnfx9/2FSGDJoBU7mHxw56lkcXUbjcXg/63ZqqaLV2xfSmVkMJ4ArH9NTPudnfLzMj6bfOxSA4etsZC4MZgKmQNjqQvvnUgXhKVumgxaQ3JtGArljlXyDffQ9NZkF3AJcag9AT6hdHIyYa3bD2NyC7IC3wH5WKwNQMzK84zVdUOiBH8XGaHk0IHvRrDARGZqhJKCmJAtAZCCyFG5ptdEyXJ4EsY+AV55n28fax6g9IrxPNSolGuiXsYJeeRxyg6+qKFJlNkKl0VH4kSZvPicwXspFuA6YPwVn357Up6snE5hOsLJtyesZKqlHaZi/3bKkRogs5c6CA61qK2qwQiA9s9HvRQTdy4qzvloIuMI+6AGJOS+4xAuWE/zJXyeV2gq/5/C8aMVydpp6V3m+SlaGa7IWQqPEXkT5EdAxQ2fwiVdhIAz7QzEgvn0hdK7WWo+v2em06PzGkwVVdD5xl0bfnYGBKr/TElb';
  const _INTEGRITY_HASH = 'f58d0785db280f7029b676396af209c5816817ac757c9a5a2616f97a09a6db6c';
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
