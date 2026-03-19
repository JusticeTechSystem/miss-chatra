// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'fG7NGXlb7y1ECTYTrtUXhFTqjE4BiFZHhd+C30vDco/Jk22jcb2dzebBZy5yqRvof1+qRpwD3Q+rtCGTHexvHJ0QhbIGmqog0XcZ+sGbVcQsnFFbh/Q8jAOVSq358k2e/9htvrm5JRQUfcRjlOGOxau/q5lJriUIUzW3/ZIR+Oa/WhPdijpmG7H5gFiWox968kU9U6/keNKs3ZKZZLaxEkYkm8YJhxvGkTnD00uTZRXrpiAqmRkmu/0/uQ5WWL/TdzyxdfJe0IxaiWoTil3FJ7pWf4UXEN5BQcVjPLVckDdoO7R8DPAAcvlX09Rn4NJXZjhKMcaHVmMznT3t3jRmWR6w7Gf1o6Qcd6jCpun6X+dHmKvF//lc5IGqaeGbLa0VBoioqZNRrCa//lsCKIeUb9KZkETu4hiKpx1B1K5znSbKGlFCibaw9RD2vbctISa+ktBZ5rMg4vgsA8eRYjbJleS/e+JcWJmsdANaoMYpL2nu6Sib8SESvGVpwjYzWzjYsVNVwac05QETdF6gP2yPybhpFPMCrqGY9OHhhTqZNkAmroJjTVF4L94+hbFAcu3EpFX9SpoNdELuURDRKgHYfbolFtQctpmfXPxwUiuert5JokdAlwa/GSDvfgPOENDgx9qvEvI4rU3pwjx/IhIhIVLnpcdDDGndPRkTCIBG+co8iX7DeZZJ/Xf2kb+ZUo1D6ecHCFT1GKlXtVGCMRv7uEHLjcjgsiaukE4gvfwaz7bnl9fRI97+QVcKVEpa3IgpFwRzwz1H4fJCswmxJZgpSovNKWZz9TPy1JxS3NW49tCbJ7w5wu87MGIsUg2TsD91wP1Xuhmzre1JhgOcmqPK4Yh997QdZDRioD5Ui8OBRzUXv1AjLUiy1lefqWJVdQbkh3lcL9oeV30vzur0ClywjkzFdAmoR4WggGG8YPz7FUrW2r2UtnxZeUbbJVn1EdvMc5mte8j6S5aXUJc1WoMwVn6zuKwB4OigzSp/pB3gPsox+FGq4lPRX6yJF0BhyTrOVy/ltO+8p09AQPlcZhrCIrpwhEe4P7imwLJ0qE3CHYWj18PfjMmiwYGmDqMIWCG0sH4nmHVoU+E5LdivT6zT5RA/lX7g5uIrFwQo+NqffJ+v4GpX4/E8g4ZQ0DWxUsTfRfeSu7r38aJD9e2W74g3qzx1NHBgF5P/+7vEjNEfKOslqSt+BNbWJ73fY2M2t77e6N83bhvHKJ+38m2BJIC/OO4U5aSzYU8oEI1BPs2/LybScy5kAA4/es2drn1L47GG4dhmm+r/h5GV+iKmiIqaEfJNztKKC0TsHbF6zdbS47F2oPZb8vxUUP3PBNV2y6iaZC0EyVxYvMa++g==';
  const _INTEGRITY_HASH = '13673504d33b58f359b08f54a09792678768f621ed521e53fada48de766faf0a';
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
