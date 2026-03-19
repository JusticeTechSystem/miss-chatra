// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:05:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'UjxEPK6pW7+GzMdVfiI3LIjR2RD2AXZXQzVifNk9sP6HiQ9KqSpSFlB1FsuOw0NFWdThOmyW1d36WKsl6XAXg+tDabS1+LKzEg2XGrZKDI/1kIM6eDU6+6JNHG0Hh3AYq31ecmNiXSP5jhfVsBEa1n2x1ShVRPJUYQPe7GivNojcQkggGla2d58ZLrwvVuTPDkfLirx+ZTOOQcVbAW+uYFNn2vmBTR0ZVwJk0ZwM0nBFGtegd3Q8Yztd3DBdTQWqxWsCm3ff031ngiCQn9SGVBvkz3h9z/HqMfbE+7Zn36OXmJO8vbu67imOuRLew267ctFXNzYBBZWM/oLKc29CM825xQIqqYcnALkkpRAKNDCTIYwW5bTI2f70GJgWloc+FB2B9km2opFBXVZy6VvKgaQve5ZOEYunlzmpR3RXs/f1Ek7uk5StQVU4jAsrswyqRjrE1peit5qkj8MsSMfypi9jSwwWkiun70vob3RG+v+AsTk91HkdAlTwORoglJj8aNFw7DPfvQpmWSKry2M4QlGDZo4rgxLa82sLftIFVXCNRQpFkKpKfkh6k0qKG7Id+aII290RgqM7vWwjPXdH/yow4RKQ/HgvvgTCtE+2WUdIvBY302DcANiiCC8wSbsJpTyw1FYTcdBiLz6noULupCAI4aub8RNJX7MBOVFUunkosOaXMcCZ9tQME7+cT0gy/77n5iuauIPNK/ORO8WyH/ItHKocx9xKChg4KzOAq6cNV8n9GQj8hN6xBAFcNw8c0FumNetmCs+V/g0LkzDJTkJs1o3znO674LoQj9//jSoLCgSQEDMoPPZaF1XrOweoOshCgmnmqIZHbI77U+YwiMRJ4LzA/aVOjXP5p74btpPwao1ze+jKy0Q7RTn2/I0w0HUpyvoZOZTQ+7i1BS8/MFsIG0ekw9vQUsOeKoUI5arqnrq0MudRaHNXAHsDmtN6lhOShRVy9nDxrlsWFabWUJTdqUUuTSZu4AzhGnUOstdRbAdLeWzMOLnt';
  const _INTEGRITY_HASH = '56770be7c659d2e6d3299d1c88ab300039760d9f6499ac25efe0b1003edec32d';
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
