// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:10:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'Yi5J1jeJxntjZ087y/PJtmh28ClwmVundetheQb/SVxVTdUqd49A/ZzkBwpUA5v87Che7ZE415Fc0szaaGdU9k04gpmDyUOFeJ0pAqcKilETvt6dCvyvaudiloWuielX/6VmIbLGJRyiJzcWgEHzl7UhyNZP6ht/TrZXQdmEBYe4abpn2Uo8gTuU7BxvI7F2Q4E4uQox591EMlZmhbhoBNp7SmjaAglGR25fpNfczHZiVwzuVlN2Kp7cZB66OtzoofTeVp/UEGU0U3l1/K4Mfd3/vsy0gUjaf+lxoaOJbW3eUy/AAnGyjXSL+CGbdGV1c5E5cYWvT+gf5dnWhmL1uPC6aUnitk3nifaLK1ey2FA5WwLuYXB63aLVugqurH+k67RPt5EMnKboixxoTRQiAQ2qNOt122FoUNGDKQXM3nmc8IN/sBVZX0XK5Z0n0nzg5MxL4kXA4WEFNIJFbQ52gd2EBbUbMvpaPgKAD5X7V/Pj95uq9pU3MYQ13aD4l8a7nzmHFDZP1Ygzyl4nNb8QvtXS5dTGpKt9K5oZHHZrtSi/lW0lUGs11QVIWMo3GCYb5B4rB3UkFJ5rRu6785DZV6facvk5PAIK7SLGYsa9ggiSKk4c6XoOakL1LnpPNMrbwO7SAgvAdDXFBDgwHw5daf3Z3DgYzb2090sS/UkZ1W1Ty1EV3ao/hKMuUEcnzcKsLMU/Msrcb3UdK6rHjrFu20UBnCxc4hzGbY2U7fvcIN9BGdRdgO2tHB5ggEuFNZHOh5sEMEeiBqV+RUejeH10LImcndR2np1poqCVYF2gWiFyksFuNirkc47aAwXqCTYSlFTw3j79g+gB43FWl8ToBuFZsKiwlumd8PaILkqgfLi0zF3t9uXz0mD2iiiwDfwA/UTGUzvw0JpiFuSVXkda7kDuMkuC5lzhbr0ajQaykj7CFqp77PI+HCu7aIR22HOLvaVwrHclXqlLr8lKdlloTCkIy3aRgQg9TZJoRkASOmyBS2+s68TicUyDyUAOStkPBX15GT2lg6Y2/lpiwrC+sD+QvyIyIKM2frk67+urQXfQT1MfocKdI5Bw2Rs2jImdLWRE/Yr1q3XuPQKUjLNOkOSxYbOwAYP0kph5nPmU+TdVinaBT/K/FMJOriwVJ+qT1Hp5kbXiNyQNsmoZKkcOds66PZLS7aC81B84ikS1i5KcY/o5KY4CMW4dKQmBSblQ+PbvFpgccHxBSo1oFSl0pNVTdOocOOrEEK2khcbXYUMUAZjS/VeM6QsMmdGmLlkBnmZ0fipSDQaYhJs0bWF7E0GbUTGT7z+xRbV+7NFR+b5jU/zJ3qMRDp7jZxPQ+rArza1awiwkk6Gmhn2o/Tu9/h0+WpkHIQWOUiLhuuh0';
  const _INTEGRITY_HASH = 'f21150b361fdd3c5458bf4075c06362c21b7acb9dbb22bd481abecebbd94b2e7';
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
