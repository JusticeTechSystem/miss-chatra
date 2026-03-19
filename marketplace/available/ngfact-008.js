// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'hvBNC+n+sULT6Qlv3G3BI2cr4dLU6YdLWU6sx3ccRmmz/gDTc5izNHRGLglLU+L+sqLGmqwn8Blb86KEHkrRuXfGowIrcGZWE1IIPMJxe0oGN3y9+JCOip/rNS7tDXrcLe3qdlBqqIVy0bPqOv7HTCYrAw9On5HiRGzlK0hEECimRa8U3ndUTR5w5b63k79lFYO9stW7rCmGIBbWYZAqe1j6Efu/0tmZcbRf4e5WH2yphqF5tR7ouyxhjEDfzs2GhXcH3fXhw62X7Sj/Zc6+B7qppClpp48f9M/iTqbEm41wxe3g2FJDybHpX3AxXVeQ9pyxwiidQBvLRls+3zXVcduprn0doiVM3+yzGGR6Uu+PzLxL0GyMAW7YPnsRMB4bHf/wFv0d8ykqnm7ChWnCBz6XqQMdvPqC6qTVJ1/lGI9v7w3xiI8V1vv1rkunf2J6UEbliskJSYAqQk58AhicddZTdItnc47zug20J/yZ8cydjNZFJOVRQzlhr8HQM+dNKj7yGzAV/XMKsJilZuJth6s3gF7CZkfNJUSo+3RPxJekx3NpPyVDrxfNYswISnDD02f+1caRq5dCuI5TbbUkRFFC6r8IbAIUXC5hbPfGA50pWGl+SSBICpJAPGHnbGGCrDs1TprEboAHBFPtwTuFGKNWBhFIuuXpiXZH6yWgoXCNRkWLBdN9UdnWilYsUniMeRbpwpZ9/HuobQU=';
  const _INTEGRITY_HASH = 'a3ab75660844dbd9e9d5d403b1e71c7eece6d400aa74dffe8446016382b1953a';
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
