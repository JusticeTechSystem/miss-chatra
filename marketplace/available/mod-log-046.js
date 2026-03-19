// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '1Y7dXIUNTeyUeJ0EEIrw8tttQ1xhY+TG3rWJ+F0CnNF4FjZuliG9OGxzi4uikWzmCYlgEkOBw831OSxc69n26Sd7RF8E0/jig4yaytr2WMCU/RRSb08DeR8sZ25gtrfMiceZoCDCCDsViLbqvL28Ny7N/+8zvjIxwAO6ySd6atjtkU/rsxakyJrzGQgoPlRcE6XSA1xPVBhcDZ3NWW/Hsld1a3sQtyarNZsMIC4NAevxYe4onqTCob+Dom1thfaXueRV/siTCW35QA2XvBpfJcqkstA2Voi44NE16Co8RHFRh/TQRRphIJ9fTkFqQ879Z5wf7JFk83rrdpvw2K+IgYvUjug54mPOvsw/yDe+qJIJkVHFN+lTgSzlcySg52Jrpwla6tBxOJ2x4xzofJ8NWu6PFuz2c0hh02XuKd09Qz+3TJqyXJmH6N7Eb1DKthQVUMdiC0kdaW7reU4U5epc5r356pKURfxp2qrsTa6aMNDqEsni6/rCcWz16stivvJFSlU+SWg3dLGBauDiexQoIGCAOBpZJsKgeP9d+DmSqiCcY88KR3AfnpeohBfQDn2mSJmPzZ+tKW4tp3XZgERt+ASyvjgF3dEKICAS9VTaCsSGXl3BPVajhZzj4vc5Bb9GrF64vlmIhLlZhYSV7gjsj6Y6Nbj9wR8iWXtMY/vNy1J8X3X72qjZ3tTFvcpMiOqYzETRr1k4BYFkA/msU5VlFkFAUzhxBRJxNgFnA6EkFekl1UiY4WUzs00MxqMSM87nd9a0s/ifB2q0UwiNG/rQx8CqX5arE3N/ghWYjmXIloiRrocwy3MijFaK2EOqjCUFf8kwRe1ednlugpMG5OggEjiPunEhAzMY9h91W+XU3SuU84qXu5y/eRIfdlGUU/i/lHpZszJcDuPYuthc1yCcJq5vPcfHMzdvZ7ycNGFnYJwxS9ZQvaGV2A1CDI5y6Oxp6R9gH3CLXy7uOKER06eC6MBApb/KAYAXA0oP7z+TywM12FPBpkHsJ5Y3xduUit85RLwLo+QQhPpSF9VSgz18GzbSH6lY4dIcyROjKS1/FPQJ/0WgXCvJ4XreHQ8P8uL4U5RnlvgvnWhSK/GjH7FJeb1B7xPKop8ZyEoK9OqUtMSP6c6BNjP/kFWEOxjgGgHih6BrD6S60IkI09kusn9rpkumwMcxk3I+IxqIX0LhZgLapN8AzXjb3ZV84MSY1eaied2g9uD+cGsT+bXkP1T4a2E//icXEQjEQrgKlso1Nh7SNUhoT/1m5yfvFuYYpy/T+2XD295+5lw1BjL4veehP18LyZjGF8l6BjX/iWbq+WL763uwxpeTwqZ50EN5eLnC2JNDd1g=';
  const _INTEGRITY_HASH = 'ba9042635104a97ef3ee042af20ce718301979813a316a36ccbf03f605f339e5';
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
