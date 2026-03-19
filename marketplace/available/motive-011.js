// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:26:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7xp7WxeBC9tamRgZW5+5bDZot6z1APIuJJSAq6l2PFo9Qd+onVPXYmC2mlEvmPtv8JTal57vcMS3IgiadbvifkIU2PJ98mGpAYfMM18iiUyCPEgAemwA4XhoyhUL2ZBfVWCbGo/J0PfCNGEp6f8zF6VS3JAzP6+LoYIVaai2y3C+0AsDChQFqz0M6hBDJNLir8/tXvxYtU4abmD6OUWlAF0fNhRSmqEL4IVrfvIG7MFF8XH3bJxktgLDWve9lm5WaRtF3mbxZd0MV2E/tt9TPgOuj/gQ6PWMFuKCBuHGh0V9c4390ob/Ykg8sm6ANXgZZBFQVf9vNMV8/avelBAIuomk9ubhj7rlHmWcmNwYw8EBFnbzMeg6CPOfCXLAGtxmloQU9MVXTlIiA386K2RckqOn7hSCEwUdrSBBHzMahJUn/6VUiFLssxczjDZc44xRtr54YP2idIOVIVRMGBETOYGrOU/s4QZ8XcrIIEKwcm+ezmeCcwklEM+JFUTmof6jbDNRIOFOi6Fez6Fq1riA8zqLaTVXhodPskrnC077t8km35BZB++Ltpf4SEWrtNOyeUCMFZzy8LMZ0PP+S9toHJu/M4RifvAjasIViYW5PTOL2eateOyHa3qBSIZhGbDsJ1hXrkKpZx1G4lBe00HZtFz84kyCwfnTqVlYlSWQfNxAl1yHhOpAQhmE1DBZWyfVNPf1+YUr4Y8Ch1esen4YFQgJNRM13FO1SCla7H9PfPgtXQuTpDAXObzuLQo2BCkl6Nz5ZH+l4sZ9jw9zgwIsfvoX4+ZjxhweLYXH4e3XYTZMZL/KVCTHYghqNiJ1XTQOvROVuvrA9rTPnRZeMXjuNgt/5tJ1v/C+bGGc69AxeU2BTPMDWUfKaDwslHw0kOsZ0hIVf98WCbjnNOQLYwrq+Ey2FGHof5rg6dkZP6BLTzy5jvlF8wBad3t/s6Fe5ohw3VFcDPEB6RuAc0nf1StSEWHI7m99a+2sXMpdNCJNjgZR/R8w2xuWRlRgqbG/17hP2C55MgPLq9BwgQ7B1rOek3Wb';
  const _INTEGRITY_HASH = '8836a6f281e32516180003ada963923f0e420ba4e8f601612e56c71250fb4b2b';
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
