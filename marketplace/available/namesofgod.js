// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:06:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'sR/WisTDN1GfJsJQgLLm63JIeqIzLPxCcVCGqUf5vNOtLij2WHFkveNHGz/kOheDjJYgpWTYJJwN3kU0IF104lovNTCK+qrDnFoG8aoqz/2+BNCBcAjpb+TraERnakI368yjqLcm9bQ7bfvYdjvSofzIi5ev3HaZllR7cbxJYB4DB6ftNJmQ5gdX1YzbDCraW3HRo32aHfoYku96jZOLXUKIHeMiDoGP5uKXJcIZ33SzqD0QTCzoHrk4pejuD9lPDN16YPtfRgV5Lb0iaZk3ImnZqnOPVq3IgJmy/VK1mSXRBKcLliaE6srKEsuR6Yt5W/TNhtxECzAWZWfhboXVPpIOzobfKvbBtwTdroeiaCod8oQAAwWRv/zNhb36ezxMYbUaUvs9nK2gttfuza+3FyC+9DOV98hpL6EFkznQCei8mS6BWGRljts7jqkqj1j9WEZOcLNaiArrBjGfpVCUQ2c+3HfS6RsQl3lhWoMXe22oHd9XkX8IzuhkfjHJ9X3q4N7fn8dLMWL/grQCzg+p7EkX3uEGYQZvGCTnGFtqyxPsWsN5D+2IIUE6STgrUTzamhy4K4UThL2CwcqbnLVw+CrXOgfCNHSUZborxY3WiMovWThzl72bEs94A9xMs2Lf4YNgx2oKEIguIRkLz+cMl2oBxdq6Pi0f7TAVqN1HAA2HUX+dFSgeElJuHwUycw1m4F5PaAc1VvXRohKvNLPVEtd7xbXPi5535zYUgnEeYAUv2xK+ZqA/fzrpw9GV5U3PrUyhkL2Aj2NT8e3XWgI22uPhNVOaSvjeMpPkaou85Zb9TI1LJn8nmVGxEJ5HpWFNbYh7zwZYzF5iEyaYMFHuuCfqEGQeS0t1Joo4akgRAx2xX2SCTUZ60dRTRiaf0Ym0Fwmk6ygOH2LqzthlsTYUYqJvtADggaNpdF+XPjzZDB+6irkAozEvqxR7CD6cq1cX19lAc9WRL7NUdT+PzQwH2gNd12530rCMuQtUMRMCo/aACzYUmR0Ir1vVq8spXprlmMIP7hGNrY4SFNWHkow962vvhqDLeJaD4NNu70rnV15HzIryrveNtKcpr3INSbv5Q3iNbtHw5X61/gjhstEa8CekFYkr6OUkHRkz29d+rStngvHyjl2jOrn7AOJspZ7rMCA/5mBHyjYpM85poeTzX2VeootTO5Uj8tx783Tv8vXJrap/AoAVMCqvB8mrqUOI80kp';
  const _INTEGRITY_HASH = '6cddbe296a7a2b7473ed8be50edbe91f4be68fae96b79320c5a411e2f1c405d8';
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
