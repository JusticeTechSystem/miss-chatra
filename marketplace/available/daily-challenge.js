// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:23:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7tOn07v/l5EEhbpq4fCsAG0LQj8wLzU9G42iMxi7AxI7a+5M8j1nLX9Y/FAmVMefReSt+73EThuxixdFob4+zvs47Xs4sRa+vXOuySRzKOoUPYLOaSIZ0RpldiPDjraKV2oZcZUg6UDuuRl2Ru8yDXaslGss/MHxddL7ArLQAjrbQ8F8JuWcOILoHC6cKemR93wf71RS+Q8A+CbBgcKoxUoTRn8Y08ZFO6lng+coRNitknAtU/JOVMkz3RWkpFbQGXgCiVQtaSePuyuoNOe9bG1v8o5YhYsFTJd8O2pa/+yGc//+D0zHxMlT8TDM9/Y42yQYNK27l4bQB0nhqN6JPsEc+dDE/dX405Gjz8ZGWd0lT6d4uZrzKkmnOvjeOUok4qMneMTg2br3sQHsdkGREZVQ8OcYAYQLkYUjIBzQWmlLER/d2OufU/nVjwxCBdE03Q4QHjssTWL3zBAKvT5NXFlMqp+EikPsJAETMNqSiOGHG/x/b9I+2WTRyEdWNZRWbOz7ohRNqulTBsrtsj19VYbMy/em+F/MuEV7dP1T1mjEN05pusQ+9xYe0lujxGpOGdRWRnjknR639Isxcp7tk+AmYS70i3cDkDXo6wShoSI2dQ==';
  const _INTEGRITY_HASH = '6aa4316640118cda843d84160057ec91d16e7805076c3e75922f23906cec1961';
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
