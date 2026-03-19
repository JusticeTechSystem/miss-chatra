// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '9ji5yzMgO0J1yR+lrOUq8P5ONSAX5/CJmnCAMlzDVhJrsmCgpun43PiPp/vS9ChjY0fHoljvGdXMd3yaUzkdynXl8U7SHEvERVhWo2NA4BB+0PUMNHzIAw+Zqvga6KiMIUr30dyMuviTxjtAHncN6Rt4sEdNovQ/Rai9TYKFq3pTQFCtCxjtNuNly+TkhOVwhrDw9w02TFr4ZpSlkKo0g2TNkobP9Z6hPqKjPcZhmkL8LGgvKKk3cSKi813d8eS/4SUbDwOT8c6hs0ixwgyISEwSxjzmuaNx9QSpFJR39yPM0uXIb3fZFR+eWkLLSniMzqyvft6D5wbJOJnkUKoeRQD49waGpi9ZT9AEZR8fJx0Zannlu/8VPqImoDLY00N/s+J++JuHm3+YWzvSLHX8QLjAXPHjgyaBK+36fZMG+0buCoZgq1xXNxAmJMouVNM814dcohLlpQ8A8BCJdTY0NGiHVD4g72r2PXiLAML3OqE8nTKe7eWqlUku2EZthGM2E4qRhXMUsc3RhcEmre1oXbnGU2BXhL0Oef8jHbUD71VhAK4ImGPVCkxVus9WhUAk4aBSra59t/GkGATN0zHsZv7nnCpd/3GGt7/ERUIXlbT4sUolNurYIgE0Hamh0pBR1piH+rUPZVJbrLOweWEpb5R/60jTs2P0IR4lsH8sn1/09aY5ac45uUctKKbcwAVXaDtORUQZteSMF3GSuIFq+6bfndBqXIdMHIbc7QufFvfNhwFIi/WixqrqzPXewiLEF0ifmwRWtaJ7XlU8Kjg4uYEr97wI5CRpIfbyymHPC4E3gk6i+djTov7fBWEc9qVOZrHGmt4vcGKvQ9wuKHtKceHmdivCvI4LkSoCShCyXrprdBgDxv0qzE9wLO3V+w/n2OXh+8SFWcicatcA7FoO8FymfZ8iFTBYqEamnW6oMmAO0CV+dY6Trb6/bDHeuIT/zByBN4Dmk3vXT51yr3r2RnwGhGIMQFO5kQaipHrXE5cY6csgjFYPfnH7QWP7m6ylXL1+jgUl9TjHVRAxA09YfTUsDrqdqeOxC7koBrieg8ds5+TwuahUjF/X6hrtz1t+YpozcmeUUClqWGfxiw8tII2FAzG2wzjbWxb9zYkbKfV1P8Dii4aMjOeAvXt3fo80ZxKqqyy3om6w8s+hCw8oHQ9/tKCfavmKAgVMJ8j4wTkOera+38BsWtaPWlyxRZBTZBwyVNL9XhRpv2jF2UlO1/2iPFr3OkvuUQxZEg540xNFck0642JESi2OPwJWdRvzHxP2bYVusBgAoD7n9LuNwQ01SyNH0OSz0jFZ6KzWTfO0nViLT7ChHIkPY8DaPIHmuvfO4htvQ6rhGiY1ZJz+c2abOvgQArLZsJXQTbsBcJcDE0p5IaMMdVIyqBwuPGDQf3s=';
  const _INTEGRITY_HASH = '5674881aede337eb377d1c9a42ee74d73cdc07ad9acd9a9dd4233626e8fde572';
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
