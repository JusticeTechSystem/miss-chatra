// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:07:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'gRaUI8AjlMKbg13roHIc6pF0GSSdoVwIuqaYdXu2xs5DbAxqrpYRHnJHY3BjJnUiMIJoiWF+v1C/yy7Im1Mu97z7xrjpCYH+qQfnUEmvVJL3EC6Olyh3//e7T8FGkslqYVCJqZDoCU7zkZM2IdYnfG9MB5XDvHdrunZnEnPYbQbrFzQoEDX0lLudnxh67Dir7hCts4WpsQp1mPxhuGtxYpkoRyt/S+5kSr9KNSjkWGzkk3a+uZcM3qS0CY5Q0CTkuitD3c/7B2+scMAkTgXCCynvyYTShUHNpkWqJGunHeOfkNZGMVmtz6MYR5yHzxC2r/+emo5xsGVm8/EFMidKsWmBDiQvqFG42f1tfB0UJP8MvNI4vDEAAarYBWI5PnhzJtc6OeyusRXRM3MX83zqDlLQoGKOWehqbwfV59deEiwd8HydV8a4tt4+r3h+zMdypdXEUOhQRYAYCVSukyXzgaUPD7/Z7g20Rc8Q7WLB95jAAWXsY72A/kxA1hx6xUahTaZ5lCXITQo+HYSGGCx4BQHNFq3wxAnjuZEx/AVvv0oG1+IgM94Mz1n+sulEbnO2QjV9Dyi+VC+1xegKpRr7Fud98zPf8va+nvizPPukHo9bWLW8WwOYQ1/rrGZwOS2uDhTw2RDJIqt+0thzEZteLx+m7S9NQumdsVzcAjcGxo0ax88sQ5/bQ1dYjijUDSBWhxXU86oQmpxeoQKkSu4Uwz7Z+QL4Y3I5auuQF3JILahQYyPw0b7FFLjpUBAibCrqzNE/gS9zQRtRmbNCqy1x+AP/uXAf66zrXw==';
  const _INTEGRITY_HASH = 'f91623ee60dbb3ec45d66fb22b4624474adeef4fa85c82c2e35f8c8a44d92aa6';
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
