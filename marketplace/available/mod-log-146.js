// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:09:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = '7LZAHMlN61082QYhrNuUyNKhHQqCN1uYz2UCrjgguYGnwEX/JsaRAaLqPIVDvkLgh4nywjsl+ZvSzDoW5IZwvluWKiIeJGjYfBqBqi4agmRh00OlNw1gzxIqhYCkUQWuHstcSSF0UlC1fEy+NWhxaqV6YEWYOEzbSx9QuPLf6drkHZMvlIeePCma3YOrTxV/iO9JTy4Sk3Shm8Wz97rDJrZE32miKj7vRxyrKSFL+ELmm00EfP1YSSYIk+CXjfpdJAV0l763laUWpWHOtFaa4xmuUlt8mv8NcAzsV7eCVCzQl2Gq9A6cVUisjYyo/7JVPhW8yKm5lCMkkypURH8MVM4oNjEPj2sp+Kc2Sf+yHWM4OqwLv54bRd340QHOXNWHYwJGs92nJbZUAtAIOaf7QXDD5Pe7lJezcJluNPxO2G3RsRP9b5RCDwo9czBPbB/Ddw4MttmaNkVCygoqVpOBqnHzNLaTTbvWzxtLWJVO8DxjSx0ZdWog2S1v+ch8Xgky5qIKVQ4R+wCwSzHGwG7uR3l8Ae4s/4+chE5YnbuxP0O53/Aye/R9+S4Oes7zbwIE74Leq2YhZ4vk7IGfhjsgLGyfI8JJ5lCCvSfDl/1lQ9wNcQA5bGTYb82zCPfD4cBT6p9Njom6nUyriz3UGxgFPi7q9Tn6Fnsx5dz4nNyKndhS3btWo/HzsNFM+lkHraWWV54fzUSQY5Y4T7DsLEMRgVs0Ujoj9qhnES0Exk1hT5z5sa7pmUEe/wbZ/xjSuVvE9foXsqtKbdv3xzCW70+nsW/+nwS2rCIv6mzHI7PrI/PxKy033AXt7thY4W7zNwhmsR1yJEAp2vTNVL45XEGOYGw04hZoKBZaIb+fZ8cuovmzKzobkFmPdFOl1mhexVE/lS1TDq7Es23mbiK8q/Qwjl0AoiTwrHNtgtCNaW7itM/pqqc8ij2w7ziN4l1DkpEQLg2BSfFiXApoDcEOOqXtGXo7aNQ06OeWYaHfOrpOYsT/6YQ9BeCK9zVsAVZBADy4wRVlH9fw7yFHVvTP/IjCp4hIQvkmGeaP679PA6aMSFq1qL7v7jYe42tkSBaEqPFAKvOmmgAC26TNe98Y+OrVsbfcwwO/xgx10R/nMcwiy6zcBP6k6TJhgnKaH0ofsliJ9bCIDKHMMyV7SYjlYT+tAEvqjdtZq2siWB90rKD2iTKT247Zn1ZU8fep9Ws35jxoFNvNXH5/N7N4XwNvPwXoiYe7JMwmOUA/zley/k8n7Q0IGk6MbOBLu5dBPAUlYrwwL3Etw33QOoLntRZvcAFjfV9CB0HyusA2rFOTKHfPJf563xGODG32Tszq5GX0R9QZufopzPTZqVTEHg==';
  const _INTEGRITY_HASH = 'c0a8b84af1d73fb60bb70b705c20f1dead62a9d92a0bcac1431d850acdac77b2';
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
