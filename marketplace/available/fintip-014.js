// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'G0KqiNWATYZL9IdOuFNSDLwP0GwwjZb1CJktHQD4xvSu0Twnz2AuOjTzy6CiGz2CAzOxDxZgtsCexD4mXtw6fhDtKhHiH/pbQDhQ1MD/vFDjD+zh5kxIUw+0rzQ5P1giAwYBDDpJC0/sCqJ2dO3/Ky+C17BMSd1iZtXdYQ2tOvqGFgp1fRbLEPU1lpGJuYTxn0rOL2r/AHacO1AePm0tQ5bs2KvSWe9giVNdWyCyH9w7IRIv1sXr34vyeX3khkSg7++E9CjT84HwJhT3aLpXNBJCTn3gziAo2V2l5jl+z4coyqa8AeJnl21nUFiQQrzBAJlQ0Pc0B01/2MAFLrrDRdBNcBi8PJA6j7ROMtxv4xXkDJtiz3WiWKo8Tvm85zYn4zQq67tICS0NABidBgLbJ5hEYqiKyNfiK8SR+23VPsXexlihs9yTvPeLhTS7PFYgnSlKk+I4O9oO+cODEG5rZVMu7q4b5lAKe2PwDoMuUfPQNz4AvBd/84P4nTXpHDCs551q+PoEeeOMBab0PdHkYuRlie9WTPAkOtwzLA2ZZPAbE47QwXv7vbOLiSl5kObsFyPxpwNULn1rMCORiZlH6SBJKmqHiYJcEKeSXBjpFtocyKPuwRGVK58ZZO13Z6VPcXu+p6eYA9RngdFJzjKzDa1uzyLkgQs8RmBYm64sl/cEWA3A+HoWwpCua4JlspVVkm8Oz8Ww5WWeUg/bwe1bbHa2qQe6+FiVuD6J9Q80rsTPG0jIE034jn/4bojzZVQ996dAVfbPAU7vcOWR4zdU24ZKH8/gmrACcaXB9h0HwiJTL9GQKpq8coon/JWpDyC8J5TOXm4ZMB5LQjF4YZ1ka2wB+0MKxPzWDX5+U1H9GPWLH55tJrDfGqYkHJ55LlAqUccVQVF/0cgoCRIM8Q/9BYaS2nISXICaU0BOLpv5qkPhFHEnQ4Ci8KzRQL2ANdH5rfAJ06E9YK6zejqnRT5S64/1fv9poXlQpyeYSiflaqlgl8aqJT24ardOxirxMtG3Y/OWNscniij8xbGrinnWjtMxe0NIoI8Ya+NXgGNQ8vLwYw==';
  const _INTEGRITY_HASH = 'e095e1b5dad016944c353e92027169266e5970e7086e6d3c64e2d94fc73b513b';
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
