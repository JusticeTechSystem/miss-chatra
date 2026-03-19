// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:08:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'PuUEvt6qaRL38Pnf+ltduXh37L1HzohdTGdm5AuDW6Ifdcj4AXMnO43oyIrl0t0b4EyT6uT/xejExUNW2HykOnGq5yKgT1IFAp/KQz5U8L8MuVSPV/P8Sk8d9EVKof/GbgLQ68Kx+wdpdDEu00qKTlwiKkkXzGkGAYOwHbjaVmsG2OAEJiVzy2K55fzCzQ2q9hrxdfI4KLRwFKc0ktg7VRWZVx2YqLzBpsSseuDRAaI4fcJr4MPiRi58YpH4BG9aaOf9L4prakz3zc1isjuJDHN3uPGfg53ZaunkOQ5lN/HhGtpmn//lyNPkkQWi0NR3pGk1gLCYFixy8f9MjQVXCk1oJ3y2WRLkdogYA47p/D8CylNMfS7FjQ7GPfc3Xb+GwKMi5A6Rv5GC8LP0XVZcoeNBe/8nLms1Rbti2egvnBFJoZTyRSWll32Qj7rLUfIVBcngLYsPfO+KMucOxVOX8pHZDLs8T78xmLU7t/biSdNOhEWVmKMBnRus8WvhPAi4aK2I9/IKVuDDYlAdoIzbjuHtXEPBdUElLS8FM3dyuBkFelgekUtLdj2LraegsYJ1pcX0TsCAZe0vKG1pyiVmitv5nNRmP0PmjhcV4PxmmSvdYkZKp2clCQD9JIvFWMjufzRcAB4AoKLtAiAYbKh2vys3ZesAFbThUreMnmzHVEGaJXqnmqShNJwSVUSMPOscnGflXSssjVuVVjDMvpTjNAQki0o3Boa6JHttu6bMgLxN644UeDHYQoDrY1AxClTZV8SXGMvCeBKyQZ5T17pOPpnS2cGJt3kAfS3m2g51xN89OCC10wyUtSP9xdTFBA7zJs1xQVsCDuxweEqwSNRjF5dOi4Rj7IRqBCkTJ/tsvMG9TSaFg3HxtXSXyV69B3Gx8/kzLzWAH7eJKS9pUK4L8AB9nDICTgsp8M0uFC//wlraLPdsSRCFCeMHQvUsZBtXL5gDmWQrFGsUZ8vCnc57N0ke0mUTeol0dXTE7AtTwhSgSoFl6eKG4ET2Gb8ilDMBMjDX2A4kvEcHDk7BeOStPz+JjFUWU8ACXImOSL9u2h7BGslF9wqphrSHc8Yyw2XAYP8SOPHOz9ja4elXGh0wVGZeRrrD3Co5NjAU3WGabKZSkuwVPsEaZF6rVEX0PyzwVVILi889/hKtM15M/DlGC/sc4zG+LzitEQTyomGE8GIG5pWdUYLtYalFPk4tnp6ltM8En5mLdy5/VTJZZ/vm1y2njwPjt/CBY/wcsoGcqQFN/tFkC1Ikbo5DlExJt+YOGSNiYvnJuD+h+PbiwoaUI7hJCgFQJ+hkcBM3U8kxiP66zA5BsvaqefQJwZ2oj5baW3UjWKuJayF8/PYjsJcfKtU9hwSK0ya5+oiHqvQjjtcBJ2OUsUyWJfvzpGEv';
  const _INTEGRITY_HASH = '62368814ec6be5bac41747a772ed46fc12e106d9e9aa7c9eff9d30ee28deae53';
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
