// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 3.0.0                                     ║
// ║  Encrypted: 2026-03-19 13:04:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v3.0.0
(async () => {
  if (typeof require === 'undefined') {
    throw new Error('[Obfuscationary] Browser mode not supported for multi-layer. Use Node.js.');
  }

  const _b64            = 'NS3nwveC/8GVJ3BxtEJsTE7oIDXLmg0WaQab8LJNbaBUv2RlS+R8XYY2Evdr5IYMsR0j83TIr39ByB+9mBTiH72TznM46GPrlencSUBvbKrIHnLV0Xv+guLfpNRZX0X/HDMd/izZgoh2hG5MdQ6wbumY5ZpU9zuJld3up82/BZyX2yl32JDDAK6Rkutv23BKsNB7jXLvMySaz9JlMiZggiewh3QEEuTCFQXZfKMvD2p+EuF9HRhur1tzWHRVA3EZRsTNwCB/a7/NdgwzkPr5k29FQKApQx+42Z0nilbYUonOQQ1Yf/Jz04cQqU0IOFaCcY977ELrRRvoBGgblefVEjFGPsB/+xPIKdR3g/qNqmXvpPkXDjpm1BUZWxUbvI+VrXDCfSsRbvO/40TpBmeIIy1CrEh3WJ/IKP6Jf139dfGqfxUvO/Tr/5NEGSig5/RBhZ24QL+S2qz6JUs0zP2iJ1kND580VP2qzov97ODt1jR8jdIKcTTWrCtbcHas4brfHExL/EMkmF7LAeYoCNnfiRYITcpBIQDrTAVE1Miiuq/sLcJOzE47h34uJ8knKIrA2zg2pH/Ev2IMcupklepFG3i/fP1fNvOya4ILn9Dk4fCHMCri13EZjmh96I6F7cXiL3WtJKdi/OulcULiCFeYa2aebjeOVmlwnjWRO5cfCIWdwuGpcqyoZIzKAruV6slDUt6kYtpXrscI0sNMVR+3yJ+3cY8oWT8Z6Ub6Zh+31vOIMxPFvs1SsQpOQaLtud08/Rhh2aVrrr4KcevlBzQmYq7xuKSTRgqfFfQtS50G+eCNz5aNS4Is7pW8W62Dqv68JumWMeDCS9TxVX6aVq8JZB4JIfexKu8KSHwJBSu7wgJFym5E4JMf5Hww3q7yoGb0YqovEYaM43/SOVGeyU7WOCFFQZVVPRy8IDVXWMALx03be4ley+hJ0S9hWwIIGRQVfzDufPOqgJZKdnPIErcnAnAYaF8FRT6HA+/n+NLpRbH6jAy+6/tJNUMTldqWr0w8NRs+JMKWj/2Ljxlg600JKiK4IIbkz6129Xx5WF9B8hbEC2/uJhudRVwKHrp4kbJGffllYImKDiVxvTHskicNaO6LC5+TGXMWfvE+KVY7e21C//6isKe6Z1NfXJ7b0N9lSU4cNTMEu/eiUhd1TbF19q6DKDLGMomxztmLScrSGXYD1YhDASZopMbm2DxAe1mzN51qLA2CjVTgZGGudEpYDsWZ2arkY/MXqawQXIH5ucSE2aOySl96+h94FeUEgxzaYv5sdluHqCGhjSdcjimUnutNhpPG7hsfVu/1OquY+MI8IcU8+gjvmGm5of15m23Btdo7uTYQBq0beWjKTDiv2Chs0ZPMOu8EYwbG+ZlByDshq+T3IC4rkdjr2IqeUO4m2kmaRfLShzMXN4wsWp4JBQjja/aWGj8j/G8EDFNEectYvSRJCaYzsujYw36maB+2iNtCg/BlPy1Hl5c7aUMzJ5WP9QShCSts/PqzrdpUT/QfFlP+Q7JzuzZ3X7FOi31pC4B0fFwSKHuLYrG4AP9pBD4D+E/BXnFUudXZbz5iKqFOC5Ssx1PFxSp2zVUyhdjzFljsJlYtsWNdj436lo7/85qHhs+0ZIojVK9hwHk7rFsmLcRNHesq/uJs0FLeMftkvhzWpynzulXTHoyZMIEK2tA6bBxchkyRmrPXAu/EUto=';
  const _INTEGRITY_HASH = '701f495174d707214a6fc672bc9be52db8c2c668694c1eb7c0b5a09f1a3d3c2a';
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
