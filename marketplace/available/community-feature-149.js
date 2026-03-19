// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'lu1NF6+mSVnPsYZXYNKTH+V+Ws0v1kLqqFMvkBma3JZqqvGWjLOxzGxB7ZYrFvep1IA7ResV6B3YFyv37gny5k0pnrMgm1X91qCxjKDTDRVfCnDHWtxSwTUxABg0nqoN8YEW46T+hnuD+0TLtyRLi/M4Qw7wcgW6ICe5f2taQmqnznZTRD5cyDR/+G92MexyYhhNbDIqzN2Wu9xU7fJqKAQlg6pQNXFu97SbcNS126L7BLFpgWYfDLy0KvQFGkvqV37vDTS8z1eB5xH7ZmMWQi+vKt0DIqY5XPFRSiORKcaf9JoiEDLDNUktIeTviqmyMDSQt1Z+IjhH4GN42oIlyIgUw03JEyn/J89YDi/28IUgR8JxjZSe2sZjuWEzGLx1UnvyDnOrEe6hcx3fjQayqpnND1mpvsBny39tCUdouQG9gpMll0H6ZaJB+5ERKP0QfOsnoLG2UqdWT3Y7jiGq2UGHYjllMe/+mY0o53piEO8A2xwG/GFKHEp7c0AkpD8CI1EfA0d+ETzAVroQYAQp6dhIlMPQClI9EAWTHpAB9oBeQUwOgi/IqzxEM/KwP6npt8Tj9upFRXCprN1sZ8gnqKvyCo2A3nGintN3yGjvRLXkk1QIozspBk8o6U9cEe7/xXAxbPPytnk4AYT+OSkbRyy31UJvMQCuSy2kzU91dt0T9X/ODgpvFGtSYGULhj0dRFLKZTVmX1RchCMU+vFY7aAQnRJ2047atoErIKmM0IrNYgUfT6M=';
  const _INTEGRITY_HASH = '32775fe02ddc3eabba788044de858ea23fc5b277c04ffe2be5686f36eecd6b80';
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
