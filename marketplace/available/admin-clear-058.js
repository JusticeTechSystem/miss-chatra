// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:20:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'zQdmALJ7mqd92ilR/4gNyvBTIO+N67Zu+slSHNLglAfCCCHcGxR6DVFsKrMwldPU0xy0wJDyVGE450Y7JRngNCd2IcbeSbMSR4cNCIDD73rZE7aSUVmiLRj/aFrhk7JkK2Hme05vATYZ6JynOsof5IR4FhZ7sfx+lQgIP2uh2J1l7dhVyU174r2PzMiHKcsDQ9YFgCyznnotawbYQZvaZAjn1A+YLwyTF1aKY6zJS3N39KuJKteXfOe1oaHj4wHi/0bhoJ4eEtmru6vE0Th+r7E+kU+gQFv2xlryeAQvZIqRt8ZaM4OmWnmVDVLgBdYbVyfhbTeP/lulGAFVb13rmKfO1aw8sPlZcVQjDlBiCELSWquost9kXUIC+wY0qt+lRg/MYVlzqZHHk6ekRekKiJqFJNr1G+ryXtDikEebfHYqUwTuKGn2R0sS11vnhm3uXoH0qXaqlgPis4pIZNPoRxSGYvKCN1gILTzgB0e5s0VMNlv3KOittMrHUGhxmqNc28NCyKb41gKB280Jg7gDm4cI1aVV8pddUVvPWwKI61J9Rm6IKcxU12tsMZ3RyM7M9hL4CBgoVw+cfkVRo7BVGWpjNR2DcdEEu5CjGm3GCkw2UP6qQ9efgl+ycTQPA50XnLD5ay2nXQJdoh7AgG6Kz3bJNQ9PAHcjn/+HmyiQLjmpy6i8rc6So+xp11o0AX51YCaRy+xGe+t0tDXeuO9UWtyT8InzlEycfDNYEsH8A32RCTvKOqvpwad9Hp+l18N7Vk/V4r4U692ReZhcDmCB7u9qa9e8F5X3Y51TysMxGIif/2B/Of4SX215GutXr+eelJriQ2IN19HP1+5BUfGh2Cjlf/ksFag1rDdUe8iUSg7YeCgB4xTFrj4kkdtRzqgRtotq3lHaFxiBoalA0UxsPVihhrRpUMAxCZHhKkqE6y0lAOCEpZax1w5zMhlRWPYPq373xDIDe/2XzOoUYIn1FyvYy9p7CEB4VCNCd9jbFG6DY2blJTk=';
  const _INTEGRITY_HASH = '266a45176e64538b314e8de123113d9313cd9726fc596cd3ce2ecc8432b96af3';
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
